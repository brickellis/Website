package main

// Usage:
//
//	go run .                  build src/ + asset-src/ into build/, then serve build/ on :8080
//	go run . -newtab          external links open in a new tab by default
//	go run . -serve=false     build only
//	go run . -addr :3000      serve on another port
//	go run . -src site -assets static -out public
//
// src/ and asset-src/ are merged into build/ as if they were one folder.
// Put pages and things you edit often in src/, and files you rarely touch
// (style.css, katex/, fonts, images) in asset-src/.
//
// Every .md file (at any depth, in either folder) becomes a .html file with
// the same name in the same place in build/ (about.md -> about.html,
// math/index.md -> math/index.html). The exception is a file named after the
// folder it sits in, which becomes that folder's index.html
// (math/math.md -> math/index.html). Every other file is copied unchanged.
//
// If two files would end up at the same path in build/, the program reports
// them and builds nothing. build/ is wiped and recreated on every run, so it
// never holds anything that isn't in src/ or asset-src/. If any Markdown file
// fails to convert, build/ is left alone.
//
// asset-src/ is optional: if it doesn't exist, only src/ is used.
//
// Pages expect style.css at the root of the merged site. Pages with math also
// need katex/katex.css and katex/fonts/ (copied from KaTeX's dist/ folder).

import (
	_ "embed"
	"flag"
	"fmt"
	"html"
	"io"
	"io/fs"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"sync"
	"unicode"

	"github.com/dop251/goja"
)

//go:embed assets/katex.js
var katexJS string

var (
	katexOnce  sync.Once
	katexVM    *goja.Runtime
	katexFn    goja.Callable
	katexErr   error
	katexCache = map[string]string{} // display flag + TeX -> HTML
)

const pageTmpl = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<link rel="stylesheet" href="%s">
%s</head>
<body>
<nav class="home"><a href="%s">BrickAcademy</a></nav>
<main>
%s%s</main>
</body>
</html>
`

func main() {
	src := flag.String("src", "src", "folder holding the Markdown and assets you edit")
	assets := flag.String("assets", "asset-src", "second source folder, merged with src (optional)")
	out := flag.String("out", "build", "folder the site is built into (wiped on every run)")
	newTab := flag.Bool("newtab", false, "open external links in a new tab by default")
	serve := flag.Bool("serve", true, "serve the build folder after building")
	addr := flag.String("addr", ":8080", "address for the static server")
	flag.Parse()

	if err := build(*src, *assets, *out, *newTab); err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}
	if !*serve {
		return
	}

	fmt.Printf("serving %s on http://localhost%s\n", *out, *addr)
	if err := http.ListenAndServe(*addr, noCache(http.FileServer(http.Dir(*out)))); err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}
}

// noCache stops the browser from holding on to stale pages while you edit.
func noCache(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "no-store")
		next.ServeHTTP(w, r)
	})
}

type page struct {
	src, dst, content string
}

type copyJob struct {
	src, dst string
	mode     fs.FileMode
}

func build(src, assets, out string, newTab bool) error {
	// Work out which source folders exist. src is required; assets is optional.
	roots := []string{src}
	if _, err := os.Stat(assets); err == nil {
		roots = append(roots, assets)
	} else if !os.IsNotExist(err) {
		return err
	}
	if err := checkFolders(roots, out); err != nil {
		return err
	}

	// 1. Plan everything first (converting Markdown in memory), so an error
	// leaves the existing build untouched.
	var (
		dirs   []string
		pages  []page
		copies []copyJob
	)
	seen := map[string]string{} // path inside build -> the source file that makes it

	for _, root := range roots {
		root := root
		err := filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
			if err != nil {
				return err
			}
			rel, err := filepath.Rel(root, path)
			if err != nil {
				return err
			}
			if d.IsDir() {
				dirs = append(dirs, filepath.Join(out, rel))
				return nil
			}
			if !d.Type().IsRegular() {
				return fmt.Errorf("%s: only regular files and folders are supported", path)
			}

			dstRel := rel
			isMarkdown := strings.HasSuffix(rel, ".md")
			if isMarkdown {
				dstRel = markdownDest(rel)
			}
			if other, ok := seen[dstRel]; ok {
				return fmt.Errorf("%s and %s would both become %s", other, path, filepath.Join(out, dstRel))
			}
			seen[dstRel] = path
			dst := filepath.Join(out, dstRel)

			if !isMarkdown {
				info, err := d.Info()
				if err != nil {
					return err
				}
				copies = append(copies, copyJob{src: path, dst: dst, mode: info.Mode().Perm()})
				return nil
			}

			data, err := os.ReadFile(path)
			if err != nil {
				return err
			}
			doc, err := Convert(string(data), newTab)
			if err != nil {
				return fmt.Errorf("%s: %w", path, err)
			}
			// style.css and katex/ live at the root, so nested pages reach up.
			depth := strings.Count(filepath.ToSlash(rel), "/")
			prefix := strings.Repeat("../", depth)
			pages = append(pages, page{src: path, dst: dst, content: renderPage(doc, prefix)})
			return nil
		})
		if err != nil {
			return err
		}
	}

	// 2. Start from an empty build folder.
	if err := os.RemoveAll(out); err != nil {
		return err
	}
	for _, d := range dirs {
		if err := os.MkdirAll(d, 0o755); err != nil {
			return err
		}
	}

	// 3. Copy the non-Markdown files, then write the pages.
	for _, c := range copies {
		if err := copyFile(c.src, c.dst, c.mode); err != nil {
			return err
		}
		fmt.Printf("%s -> %s (copied)\n", c.src, c.dst)
	}
	for _, p := range pages {
		if err := os.WriteFile(p.dst, []byte(p.content), 0o644); err != nil {
			return err
		}
		fmt.Printf("%s -> %s\n", p.src, p.dst)
	}
	return nil
}

// markdownDest maps a Markdown path (relative to its source folder) to the
// HTML path it is built to. A file named after its folder (foo/foo.md) becomes
// that folder's index.html; everything else just swaps .md for .html, so
// index.md still becomes index.html. Files at the top level are never renamed.
func markdownDest(rel string) string {
	dir, _ := filepath.Split(rel)
	return dir + "index.html"
}

// checkFolders makes sure the source folders exist and that no two of the
// folders (sources and output) overlap, because out is deleted on every run
// and overlapping sources would be read twice.
func checkFolders(roots []string, out string) error {
	for _, r := range roots {
		info, err := os.Stat(r)
		if err != nil {
			return err
		}
		if !info.IsDir() {
			return fmt.Errorf("%s is not a folder", r)
		}
	}
	all := append(append([]string{}, roots...), out)
	abs := make([]string, len(all))
	for i, p := range all {
		a, err := filepath.Abs(p)
		if err != nil {
			return err
		}
		abs[i] = a
	}
	for i := range abs {
		for j := i + 1; j < len(abs); j++ {
			if within(abs[i], abs[j]) || within(abs[j], abs[i]) {
				return fmt.Errorf("%s and %s must be separate folders, neither inside the other", all[i], all[j])
			}
		}
	}
	return nil
}

// within reports whether path is dir itself or somewhere inside it.
func within(dir, path string) bool {
	rel, err := filepath.Rel(dir, path)
	if err != nil {
		return false
	}
	return rel != ".." && !strings.HasPrefix(rel, ".."+string(filepath.Separator))
}

func copyFile(src, dst string, mode fs.FileMode) error {
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()
	f, err := os.OpenFile(dst, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, mode)
	if err != nil {
		return err
	}
	if _, err := io.Copy(f, in); err != nil {
		f.Close()
		return err
	}
	return f.Close()
}

func renderPage(doc *Doc, root string) string {
	title := doc.Meta["title"]
	header := ""
	if title != "" {
		header = "<header>\n<h1>" + html.EscapeString(title) + "</h1>\n"
		if s := doc.Meta["subtitle"]; s != "" {
			header += `<p class="subtitle">` + html.EscapeString(s) + "</p>\n"
		}
		var meta []string
		for _, k := range []string{"author", "date"} {
			if v := doc.Meta[k]; v != "" {
				meta = append(meta, html.EscapeString(v))
			}
		}
		if len(meta) > 0 {
			header += `<p class="meta">` + strings.Join(meta, " · ") + "</p>\n"
		}
		header += "</header>\n"
	}
	if title == "" {
		title = "Untitled"
	}
	extraHead := ""
	if doc.Math {
		extraHead = `<link rel="stylesheet" href="` + root + "katex/katex.css\">\n"
	}
	return fmt.Sprintf(pageTmpl, html.EscapeString(title), root+"style.css", extraHead, root+"index.html", header, doc.Body)
}

type Doc struct {
	Meta map[string]string // front matter (title, subtitle, date, ...)
	Body string            // HTML for the page body
	Math bool              // true if the page contains math (needs katex.min.css)
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
	math       bool  // set once any math has been rendered
	mathErr    error // first KaTeX failure, reported by Convert
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
	if p.mathErr != nil {
		return nil, p.mathErr
	}
	return &Doc{Meta: meta, Body: body, Math: p.math}, nil
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
		case strings.HasPrefix(trim, "$$"):
			s, err = p.displayMath()
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

// hardBreak stands in for a Markdown hard line break (a line ending in two or
// more spaces) until the text has been HTML-escaped; inlineRaw then turns it
// into <br>. Any real \x01 in the source is dropped so it cannot be forged.
const hardBreak = "\x01"

func (p *parser) paragraph() string {
	var sb strings.Builder
	first := true
	for p.pos < len(p.lines) && (first || !isBlockStart(p.lines[p.pos])) {
		first = false
		raw := strings.ReplaceAll(strings.TrimRight(p.lines[p.pos], "\r\n"), hardBreak, "")
		sb.WriteString(strings.TrimSpace(raw))
		p.pos++

		// Only a line that is followed by more of the same paragraph can break.
		if p.pos >= len(p.lines) || isBlockStart(p.lines[p.pos]) {
			break
		}
		if strings.HasSuffix(raw, "  ") {
			sb.WriteString(hardBreak)
		} else {
			sb.WriteByte(' ')
		}
	}
	text := sb.String()
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
	// 1b. Math: contents are literal TeX, rendered by KaTeX.
	text = p.mathInline(text, st)
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
	text = strings.ReplaceAll(text, hardBreak, "<br>\n")
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

func initKatex() {
	vm := goja.New()
	if _, err := vm.RunString(katexJS); err != nil {
		katexErr = fmt.Errorf("loading katex.js: %w", err)
		return
	}
	k := vm.Get("katex")
	if k == nil || goja.IsUndefined(k) || goja.IsNull(k) {
		katexErr = fmt.Errorf("katex.js did not define a global katex")
		return
	}
	fn, ok := goja.AssertFunction(k.ToObject(vm).Get("renderToString"))
	if !ok {
		katexErr = fmt.Errorf("katex.renderToString is not a function")
		return
	}
	katexVM, katexFn = vm, fn
}

// renderMath turns TeX into KaTeX's HTML (with MathML for screen readers).
func renderMath(tex string, display bool) (string, error) {
	key := "i" + tex
	if display {
		key = "d" + tex
	}
	if h, ok := katexCache[key]; ok {
		return h, nil
	}
	katexOnce.Do(initKatex)
	if katexErr != nil {
		return "", katexErr
	}
	opts := katexVM.NewObject()
	_ = opts.Set("displayMode", display)
	_ = opts.Set("throwOnError", true)
	_ = opts.Set("strict", "ignore") // strict warnings go to console, which goja lacks
	v, err := katexFn(goja.Undefined(), katexVM.ToValue(tex), opts)
	if err != nil {
		return "", err
	}
	h := v.String()
	katexCache[key] = h
	return h, nil
}

// mathHTML renders one formula. A failure is remembered on the parser (Convert
// reports it, so nothing is written) and the raw TeX is returned meanwhile.
func (p *parser) mathHTML(tex string, display bool) string {
	h, err := renderMath(strings.TrimSpace(tex), display)
	if err != nil {
		if p.mathErr == nil {
			p.mathErr = fmt.Errorf("math %q: %w", tex, err)
		}
		return html.EscapeString(tex)
	}
	p.math = true
	return h
}

// mathInline replaces $...$ and $$...$$ in text with stashed KaTeX HTML. It
// runs after code spans are stashed, so dollars in `code` are left alone, and
// before bold/italic, so * and _ inside math are never treated as Markdown.
func (p *parser) mathInline(text string, st *stash) string {
	if !strings.Contains(text, "$") {
		return text
	}
	var out strings.Builder
	for i := 0; i < len(text); {
		switch {
		case text[i] == '\\' && i+1 < len(text) && text[i+1] == '$':
			out.WriteString(st.put("$"))
			i += 2
		case text[i] == '$':
			n := 1
			if strings.HasPrefix(text[i:], "$$") {
				n = 2
			}
			tex, next, ok := scanMath(text, i, n)
			if !ok {
				out.WriteString(text[i : i+n])
				i += n
				continue
			}
			out.WriteString(st.put(p.mathHTML(tex, n == 2)))
			i = next
		default:
			out.WriteByte(text[i])
			i++
		}
	}
	return out.String()
}

// scanMath looks for the delimiter (n dollars) that closes the formula opened
// at text[i:]. It returns the TeX and the index just past the closing dollars.
func scanMath(text string, i, n int) (tex string, next int, ok bool) {
	start := i + n
	for j := start; j < len(text); j++ {
		switch {
		case text[j] == '\\':
			j++ // skip the escaped character, so \$ does not close the formula
		case text[j] == '$' && (n == 1 || strings.HasPrefix(text[j:], "$$")):
			tex, next = text[start:j], j+n
			if strings.TrimSpace(tex) == "" {
				return "", 0, false
			}
			if n == 1 {
				if isSpaceByte(tex[0]) || isSpaceByte(tex[len(tex)-1]) {
					return "", 0, false
				}
				if next < len(text) && text[next] >= '0' && text[next] <= '9' {
					return "", 0, false
				}
			}
			return tex, next, true
		}
	}
	return "", 0, false
}

func isSpaceByte(b byte) bool { return b == ' ' || b == '\t' }

// displayMath handles a block that starts with $$, spanning as many lines as
// it needs. If the line is really a paragraph that happens to begin with
// inline $$...$$ and carries on with text, it is handed to paragraph().
func (p *parser) displayMath() (string, error) {
	start := p.pos
	rest := strings.TrimSpace(p.lines[p.pos])[2:]
	if i := strings.Index(rest, "$$"); i >= 0 {
		if strings.TrimSpace(rest[i+2:]) != "" {
			return p.paragraph(), nil
		}
		p.pos++
		return p.mathBlock(rest[:i]), nil
	}

	body := []string{rest}
	p.pos++
	for p.pos < len(p.lines) {
		line := p.lines[p.pos]
		p.pos++
		if i := strings.Index(line, "$$"); i >= 0 {
			if strings.TrimSpace(line[i+2:]) != "" {
				return "", fmt.Errorf("line %d: put nothing after the closing $$", p.pos)
			}
			body = append(body, line[:i])
			return p.mathBlock(strings.Join(body, "\n")), nil
		}
		body = append(body, line)
	}
	return "", fmt.Errorf("line %d: display math is never closed with $$", start+1)
}

func (p *parser) mathBlock(tex string) string {
	return "<div class=\"math\">" + p.mathHTML(tex, true) + "</div>\n"
}
