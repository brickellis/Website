package main

// A small, dependency-free Markdown converter with a few extra blocks:
//
//	::: scripture John 3:16 ... :::     scripture verses
//	::: canvas ... :::                  a <canvas> tied to a script
//	::: toc [open] ... :::              a collapsible, hand-written contents list
//	```terminal ... ```                 terminal output
//
// Everything else is ordinary Markdown: headings, paragraphs, quotes, lists,
// fenced code, images, links, **bold**, *italic*, `code`, ^superscript^ and
// [^footnotes].

import (
	"fmt"
	"html"
	"regexp"
	"strconv"
	"strings"
	"unicode"
)

// Doc is the result of converting one Markdown file.
type Doc struct {
	Meta map[string]string // front matter (title, subtitle, date, ...)
	Body string            // HTML for the page body
}

type parser struct {
	lines      []string
	pos        int
	newTab     bool // open external links in a new tab by default
	slugs      map[string]int
	fnDefs     map[string]string
	fnOrder    []string
	fnNum      map[string]int
	fnRefCount map[string]int
}

var (
	headingRe       = regexp.MustCompile(`^(#{1,6})\s+(.+?)\s*$`)
	hrRe            = regexp.MustCompile(`^(-{3,}|\*{3,})$`)
	listRe          = regexp.MustCompile(`^(\s*)([-*+]|\d+[.)])\s+(.*)$`)
	fenceRe         = regexp.MustCompile("^(`{3,})\\s*([^`\\s]*)\\s*$")
	fnDefRe         = regexp.MustCompile(`^\[\^([^\]\s]+)\]:\s*(.*)$`)
	argRe           = regexp.MustCompile(`(\w+)=("[^"]*"|\S+)`)
	standaloneImgRe = regexp.MustCompile(`^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$`)
	idRe            = regexp.MustCompile(`^[A-Za-z][\w-]*$`)
	numRe           = regexp.MustCompile(`^\d{1,5}$`)

	codeSpanRe    = regexp.MustCompile("`([^`\n]+)`")
	imageRe       = regexp.MustCompile(`!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)`)
	fnRefRe       = regexp.MustCompile(`\[\^([^\]\s]+)\]`)
	linkRe        = regexp.MustCompile(`\[([^\]]+)\]\(([^)\s]+)\)(?:\{(new|same)\})?`)
	boldRe        = regexp.MustCompile(`\*\*(.+?)\*\*`)
	italicRe      = regexp.MustCompile(`\*([^*\s](?:[^*]*[^*\s])?)\*`)
	supRe         = regexp.MustCompile(`\^([^^\s]+)\^`)
	placeholderRe = regexp.MustCompile(`\x00(\d+)\x00`)
)

// Convert turns Markdown source into a Doc.
func Convert(src string, newTabDefault bool) (*Doc, error) {
	lines := strings.Split(strings.ReplaceAll(src, "\r\n", "\n"), "\n")
	meta := map[string]string{}
	lines = frontMatter(lines, meta)

	p := &parser{
		newTab:     newTabDefault,
		slugs:      map[string]int{},
		fnDefs:     map[string]string{},
		fnNum:      map[string]int{},
		fnRefCount: map[string]int{},
	}
	if v, ok := meta["newtab"]; ok {
		p.newTab = v == "true" || v == "yes" || v == "on"
	}
	lines = p.extractFootnotes(lines)

	body, err := p.parseInner(lines)
	if err != nil {
		return nil, err
	}
	body += p.footnotesHTML()
	return &Doc{Meta: meta, Body: body}, nil
}

// frontMatter reads a leading "---" block of "key: value" lines. The lines are
// blanked rather than removed so error messages keep their line numbers.
func frontMatter(lines []string, meta map[string]string) []string {
	if len(lines) == 0 || strings.TrimSpace(lines[0]) != "---" {
		return lines
	}
	for i := 1; i < len(lines); i++ {
		if strings.TrimSpace(lines[i]) != "---" {
			continue
		}
		for j := 1; j < i; j++ {
			if k, v, ok := strings.Cut(lines[j], ":"); ok {
				meta[strings.ToLower(strings.TrimSpace(k))] = strings.Trim(strings.TrimSpace(v), `"`)
			}
		}
		for j := 0; j <= i; j++ {
			lines[j] = ""
		}
		return lines
	}
	return lines
}

// ---------------------------------------------------------------- fences

// fenceOpen reports the backtick count and info string if line opens a fence.
func fenceOpen(line string) (int, string, bool) {
	m := fenceRe.FindStringSubmatch(strings.TrimSpace(line))
	if m == nil {
		return 0, "", false
	}
	return len(m[1]), m[2], true
}

func isFenceOpen(line string) bool {
	_, _, ok := fenceOpen(line)
	return ok
}

// fenceClose reports whether line closes a fence opened with n backticks.
func fenceClose(line string, n int) bool {
	t := strings.TrimSpace(line)
	return len(t) >= n && strings.Trim(t, "`") == ""
}

// extractFootnotes pulls "[^id]: text" definitions out of the document,
// skipping anything inside a fenced code block.
func (p *parser) extractFootnotes(lines []string) []string {
	fence := 0
	for i, line := range lines {
		if fence > 0 {
			if fenceClose(line, fence) {
				fence = 0
			}
			continue
		}
		if n, _, ok := fenceOpen(line); ok {
			fence = n
			continue
		}
		if m := fnDefRe.FindStringSubmatch(line); m != nil {
			p.fnDefs[m[1]] = m[2]
			lines[i] = ""
		}
	}
	return lines
}

// ---------------------------------------------------------------- blocks

// parseInner parses a set of lines as blocks, then restores the parser state.
func (p *parser) parseInner(lines []string) (string, error) {
	saveLines, savePos := p.lines, p.pos
	p.lines, p.pos = lines, 0
	s, err := p.blocks()
	p.lines, p.pos = saveLines, savePos
	return s, err
}

func isBlockStart(line string) bool {
	t := strings.TrimSpace(line)
	return t == "" ||
		isFenceOpen(line) ||
		strings.HasPrefix(t, ":::") ||
		headingRe.MatchString(t) ||
		hrRe.MatchString(t) ||
		strings.HasPrefix(t, ">") ||
		listRe.MatchString(line)
}

func (p *parser) blocks() (string, error) {
	var out strings.Builder
	for p.pos < len(p.lines) {
		line := p.lines[p.pos]
		trim := strings.TrimSpace(line)

		var s string
		var err error
		switch {
		case trim == "":
			p.pos++
			continue
		case isFenceOpen(line):
			s, err = p.fence()
		case strings.HasPrefix(trim, ":::"):
			s, err = p.directive()
		case headingRe.MatchString(trim):
			s = p.heading()
		case hrRe.MatchString(trim):
			p.pos++
			s = "<hr>\n"
		case strings.HasPrefix(trim, ">"):
			s, err = p.quote()
		case listRe.MatchString(line):
			s = p.list()
		default:
			s = p.paragraph()
		}
		if err != nil {
			return "", err
		}
		out.WriteString(s)
	}
	return out.String(), nil
}

func (p *parser) paragraph() string {
	var parts []string
	for p.pos < len(p.lines) && (len(parts) == 0 || !isBlockStart(p.lines[p.pos])) {
		parts = append(parts, strings.TrimSpace(p.lines[p.pos]))
		p.pos++
	}
	text := strings.Join(parts, " ")
	if m := standaloneImgRe.FindStringSubmatch(text); m != nil {
		return p.figure(m[1], m[2], m[3])
	}
	return "<p>" + p.inline(text) + "</p>\n"
}

func (p *parser) figure(alt, src, caption string) string {
	var b strings.Builder
	b.WriteString("<figure>\n")
	fmt.Fprintf(&b, "<img src=\"%s\" alt=\"%s\" loading=\"lazy\">\n", html.EscapeString(src), html.EscapeString(alt))
	if caption != "" {
		b.WriteString("<figcaption>" + p.inline(caption) + "</figcaption>\n")
	}
	b.WriteString("</figure>\n")
	return b.String()
}

func (p *parser) heading() string {
	m := headingRe.FindStringSubmatch(strings.TrimSpace(p.lines[p.pos]))
	p.pos++
	level := len(m[1])
	return fmt.Sprintf("<h%d id=\"%s\">%s</h%d>\n", level, p.slug(m[2]), p.inline(m[2]), level)
}

// slug makes a GitHub-style anchor id: lowercase, letters and digits, hyphens
// between words. Repeated headings get -2, -3, ...
func (p *parser) slug(text string) string {
	var b strings.Builder
	prevDash := false
	for _, r := range strings.ToLower(text) {
		switch {
		case unicode.IsLetter(r) || unicode.IsDigit(r):
			b.WriteRune(r)
			prevDash = false
		case unicode.IsSpace(r) || r == '-':
			if !prevDash && b.Len() > 0 {
				b.WriteByte('-')
				prevDash = true
			}
		}
	}
	s := strings.TrimRight(b.String(), "-")
	if s == "" {
		s = "section"
	}
	p.slugs[s]++
	if n := p.slugs[s]; n > 1 {
		s += "-" + strconv.Itoa(n)
	}
	return s
}

func (p *parser) quote() (string, error) {
	var inner []string
	for p.pos < len(p.lines) && strings.HasPrefix(strings.TrimSpace(p.lines[p.pos]), ">") {
		t := strings.TrimPrefix(strings.TrimSpace(p.lines[p.pos]), ">")
		inner = append(inner, strings.TrimPrefix(t, " "))
		p.pos++
	}
	for len(inner) > 0 && strings.TrimSpace(inner[len(inner)-1]) == "" {
		inner = inner[:len(inner)-1]
	}

	// A final line starting with "— " or "-- " is the attribution.
	attrib := ""
	if len(inner) > 0 {
		last := strings.TrimSpace(inner[len(inner)-1])
		if strings.HasPrefix(last, "— ") || strings.HasPrefix(last, "-- ") {
			attrib = "— " + strings.TrimLeft(last, "—- ")
			inner = inner[:len(inner)-1]
		}
	}

	body, err := p.parseInner(inner)
	if err != nil {
		return "", err
	}
	s := "<blockquote>\n" + body
	if attrib != "" {
		s += "<footer>" + p.inline(attrib) + "</footer>\n"
	}
	return s + "</blockquote>\n", nil
}

// ---------------------------------------------------------------- lists

type listItem struct {
	indent  int
	ordered bool
	text    string
}

func (p *parser) list() string {
	var items []listItem
	for p.pos < len(p.lines) {
		m := listRe.FindStringSubmatch(p.lines[p.pos])
		if m == nil {
			break
		}
		items = append(items, listItem{
			indent:  len(strings.ReplaceAll(m[1], "\t", "    ")),
			ordered: m[2][0] >= '0' && m[2][0] <= '9',
			text:    m[3],
		})
		p.pos++
	}
	var out strings.Builder
	i := 0
	for i < len(items) {
		out.WriteString(p.renderList(items, &i, items[i].indent))
	}
	return out.String()
}

func (p *parser) renderList(items []listItem, i *int, indent int) string {
	tag := "ul"
	if items[*i].ordered {
		tag = "ol"
	}
	var b strings.Builder
	b.WriteString("<" + tag + ">\n")
	for *i < len(items) && items[*i].indent >= indent {
		b.WriteString("<li>" + p.inline(items[*i].text))
		*i++
		if *i < len(items) && items[*i].indent > indent {
			b.WriteString("\n" + p.renderList(items, i, items[*i].indent))
		}
		b.WriteString("</li>\n")
	}
	b.WriteString("</" + tag + ">\n")
	return b.String()
}

// ---------------------------------------------------------------- code

func (p *parser) fence() (string, error) {
	start := p.pos
	n, lang, _ := fenceOpen(p.lines[p.pos])
	p.pos++

	var code []string
	closed := false
	for p.pos < len(p.lines) {
		if fenceClose(p.lines[p.pos], n) {
			closed = true
			p.pos++
			break
		}
		code = append(code, p.lines[p.pos])
		p.pos++
	}
	if !closed {
		return "", fmt.Errorf("line %d: code fence is never closed", start+1)
	}
	if lang == "terminal" {
		return terminalHTML(code), nil
	}
	return codeHTML(lang, code), nil
}

func codeHTML(lang string, lines []string) string {
	class := ""
	if lang != "" {
		class = ` class="language-` + html.EscapeString(lang) + `"`
	}
	return "<pre><code" + class + ">" + html.EscapeString(strings.Join(lines, "\n")) + "</code></pre>\n"
}

// terminalHTML renders terminal output. Lines starting with "$ " are commands.
func terminalHTML(lines []string) string {
	var b strings.Builder
	b.WriteString(`<pre class="terminal"><code>`)
	for i, l := range lines {
		if i > 0 {
			b.WriteString("\n")
		}
		if strings.HasPrefix(l, "$ ") {
			b.WriteString(`<span class="prompt">$</span> <span class="cmd">` + html.EscapeString(l[2:]) + `</span>`)
		} else {
			b.WriteString(html.EscapeString(l))
		}
	}
	b.WriteString("</code></pre>\n")
	return b.String()
}

// ---------------------------------------------------------------- ::: blocks

func (p *parser) directive() (string, error) {
	start := p.pos
	header := strings.TrimSpace(strings.TrimPrefix(strings.TrimSpace(p.lines[p.pos]), ":::"))

	// "::: canvas id=x ... :::" on one line is self-closing.
	selfClosed := false
	if strings.HasSuffix(header, ":::") {
		header = strings.TrimSpace(strings.TrimSuffix(header, ":::"))
		selfClosed = true
	}
	name, rest, _ := strings.Cut(header, " ")
	rest = strings.TrimSpace(rest)
	if name == "" {
		return "", fmt.Errorf("line %d: stray ::: with no block name", start+1)
	}
	p.pos++

	var inner []string
	if !selfClosed {
		closed := false
		for p.pos < len(p.lines) {
			if strings.TrimSpace(p.lines[p.pos]) == ":::" {
				closed = true
				p.pos++
				break
			}
			inner = append(inner, p.lines[p.pos])
			p.pos++
		}
		if !closed {
			return "", fmt.Errorf("line %d: block ::: %s is never closed with :::", start+1, name)
		}
	}

	switch name {
	case "scripture":
		body, err := p.parseInner(inner)
		if err != nil {
			return "", err
		}
		cite := ""
		if rest != "" {
			cite = "<footer><cite>" + html.EscapeString(rest) + "</cite></footer>\n"
		}
		return "<blockquote class=\"scripture\">\n" + body + cite + "</blockquote>\n", nil

	case "toc":
		body, err := p.parseInner(inner)
		if err != nil {
			return "", err
		}
		open := ""
		for _, f := range strings.Fields(rest) {
			if f == "open" {
				open = " open"
			}
		}
		return "<details class=\"toc\"" + open + ">\n<summary>Contents</summary>\n" +
			"<nav aria-label=\"Table of contents\">\n" + body + "</nav>\n</details>\n", nil

	case "canvas":
		return p.canvas(rest+" "+strings.Join(inner, " "), start)
	}
	return "", fmt.Errorf("line %d: unknown block ::: %s", start+1, name)
}

func parseArgs(s string) map[string]string {
	args := map[string]string{}
	for _, m := range argRe.FindAllStringSubmatch(s, -1) {
		args[m[1]] = strings.Trim(m[2], `"`)
	}
	return args
}

func (p *parser) canvas(argText string, start int) (string, error) {
	a := parseArgs(argText)
	id := a["id"]
	if !idRe.MatchString(id) {
		return "", fmt.Errorf("line %d: canvas needs a valid id=...", start+1)
	}
	w, h := a["width"], a["height"]
	if w == "" {
		w = "600"
	}
	if h == "" {
		h = "300"
	}
	if !numRe.MatchString(w) || !numRe.MatchString(h) {
		return "", fmt.Errorf("line %d: canvas width and height must be whole numbers", start+1)
	}

	var b strings.Builder
	b.WriteString("<figure class=\"canvas\">\n")
	fmt.Fprintf(&b, "<canvas id=\"%s\" width=\"%s\" height=\"%s\"", id, w, h)
	if l := a["label"]; l != "" {
		fmt.Fprintf(&b, " role=\"img\" aria-label=\"%s\"", html.EscapeString(l))
	}
	b.WriteString("></canvas>\n")
	if c := a["caption"]; c != "" {
		b.WriteString("<figcaption>" + p.inline(c) + "</figcaption>\n")
	}
	b.WriteString("</figure>\n")
	if s := a["script"]; s != "" {
		fmt.Fprintf(&b, "<script src=\"%s\"></script>\n", html.EscapeString(s))
	}
	return b.String(), nil
}

// ---------------------------------------------------------------- inline

// stash holds finished HTML while the rest of a line is still being processed,
// so later passes (escaping, bold, italics) cannot touch it.
type stash struct{ items []string }

func (s *stash) put(h string) string {
	s.items = append(s.items, h)
	return "\x00" + strconv.Itoa(len(s.items)-1) + "\x00"
}

func (s *stash) restore(text string) string {
	for i := 0; i < 8 && strings.Contains(text, "\x00"); i++ {
		text = placeholderRe.ReplaceAllStringFunc(text, func(m string) string {
			n, _ := strconv.Atoi(m[1 : len(m)-1])
			if n < 0 || n >= len(s.items) {
				return ""
			}
			return s.items[n]
		})
	}
	return text
}

func (p *parser) inline(text string) string {
	st := &stash{}
	text = strings.ReplaceAll(text, "\x00", "")
	return st.restore(p.inlineRaw(text, st))
}

func (p *parser) inlineRaw(text string, st *stash) string {
	// 1. Code spans: contents are literal.
	text = codeSpanRe.ReplaceAllStringFunc(text, func(m string) string {
		return st.put("<code>" + html.EscapeString(m[1:len(m)-1]) + "</code>")
	})
	// 2. Images.
	text = imageRe.ReplaceAllStringFunc(text, func(m string) string {
		g := imageRe.FindStringSubmatch(m)
		return st.put(fmt.Sprintf(`<img src="%s" alt="%s" loading="lazy">`,
			html.EscapeString(g[2]), html.EscapeString(g[1])))
	})
	// 3. Footnote references (only if the note is defined).
	text = fnRefRe.ReplaceAllStringFunc(text, func(m string) string {
		id := fnRefRe.FindStringSubmatch(m)[1]
		if _, ok := p.fnDefs[id]; !ok {
			return m
		}
		return st.put(p.footnoteRef(id))
	})
	// 4. Links, with optional {new} / {same}.
	text = linkRe.ReplaceAllStringFunc(text, func(m string) string {
		g := linkRe.FindStringSubmatch(m)
		label := p.inlineRaw(g[1], st)
		return st.put(p.linkHTML(label, g[2], g[3]))
	})
	// 5. Escape what is left, then bold, italic, superscript.
	text = html.EscapeString(text)
	text = boldRe.ReplaceAllString(text, "<strong>$1</strong>")
	text = italicRe.ReplaceAllString(text, "<em>$1</em>")
	text = supRe.ReplaceAllString(text, "<sup>$1</sup>")
	return text
}

func isExternal(href string) bool {
	return strings.HasPrefix(href, "http://") || strings.HasPrefix(href, "https://")
}

func (p *parser) linkHTML(label, href, mode string) string {
	newTab := p.newTab && isExternal(href)
	switch mode {
	case "new":
		newTab = true
	case "same":
		newTab = false
	}
	attr := ""
	if newTab {
		attr = ` target="_blank" rel="noopener noreferrer"`
	}
	return fmt.Sprintf(`<a href="%s"%s>%s</a>`, html.EscapeString(href), attr, label)
}

// ---------------------------------------------------------------- footnotes

func (p *parser) footnoteRef(id string) string {
	n, ok := p.fnNum[id]
	if !ok {
		p.fnOrder = append(p.fnOrder, id)
		n = len(p.fnOrder)
		p.fnNum[id] = n
	}
	p.fnRefCount[id]++
	refID := fmt.Sprintf("fnref-%d", n)
	if c := p.fnRefCount[id]; c > 1 {
		refID += "-" + strconv.Itoa(c)
	}
	return fmt.Sprintf(`<sup class="fn"><a href="#fn-%d" id="%s" role="doc-noteref">%d</a></sup>`, n, refID, n)
}

func (p *parser) footnotesHTML() string {
	if len(p.fnOrder) == 0 {
		return ""
	}
	var b strings.Builder
	b.WriteString("<section class=\"footnotes\" role=\"doc-endnotes\">\n<ol>\n")
	for i, id := range p.fnOrder {
		n := i + 1
		fmt.Fprintf(&b, "<li id=\"fn-%d\">%s <a href=\"#fnref-%d\" class=\"back\" role=\"doc-backlink\" aria-label=\"Back to text\">↩</a></li>\n",
			n, p.inline(p.fnDefs[id]), n)
	}
	b.WriteString("</ol>\n</section>\n")
	return b.String()
}
