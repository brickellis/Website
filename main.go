package main

// Usage:
//
//	go run .                  convert, then serve src/ on :8080
//	go run . -newtab          external links open in a new tab by default
//	go run . -serve=false     convert only
//	go run . -addr :3000      serve on another port
//	go run . -dir site        use a folder other than src/
//
// There is one folder. Every foo.md in it (at any depth) becomes foo.html
// right beside it. style.css, scripts and images live in the same folder.
//
// On every run, all .html files under the folder are deleted and regenerated
// from the .md files. If any Markdown file fails to convert, nothing is deleted.

import (
	"flag"
	"fmt"
	"html"
	"io/fs"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const pageTmpl = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<link rel="stylesheet" href="%s">
</head>
<body>
<main>
%s%s</main>
</body>
</html>
`

func main() {
	dir := flag.String("dir", "src", "folder holding the Markdown, assets and generated HTML")
	newTab := flag.Bool("newtab", false, "open external links in a new tab by default")
	serve := flag.Bool("serve", true, "serve the folder after converting")
	addr := flag.String("addr", ":8080", "address for the static server")
	flag.Parse()

	if err := build(*dir, *newTab); err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}
	if !*serve {
		return
	}

	fmt.Printf("serving %s on http://localhost%s\n", *dir, *addr)
	if err := http.ListenAndServe(*addr, noCache(http.FileServer(http.Dir(*dir)))); err != nil {
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

func build(dir string, newTab bool) error {
	// 1. Convert everything in memory first, so a typo leaves the old pages intact.
	var pages []page
	err := filepath.WalkDir(dir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() || !strings.HasSuffix(path, ".md") {
			return nil
		}
		rel, err := filepath.Rel(dir, path)
		if err != nil {
			return err
		}
		data, err := os.ReadFile(path)
		if err != nil {
			return err
		}
		doc, err := Convert(string(data), newTab)
		if err != nil {
			return fmt.Errorf("%s: %w", path, err)
		}
		// style.css lives at the root of the folder, so nested pages reach up.
		depth := strings.Count(filepath.ToSlash(rel), "/")
		css := strings.Repeat("../", depth) + "style.css"

		pages = append(pages, page{
			src:     path,
			dst:     strings.TrimSuffix(path, ".md") + ".html",
			content: renderPage(doc, css),
		})
		return nil
	})
	if err != nil {
		return err
	}

	// 2. Delete every existing .html file.
	err = filepath.WalkDir(dir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && strings.HasSuffix(path, ".html") {
			return os.Remove(path)
		}
		return nil
	})
	if err != nil {
		return err
	}

	// 3. Write the new ones, each beside its .md file.
	for _, p := range pages {
		if err := os.WriteFile(p.dst, []byte(p.content), 0o644); err != nil {
			return err
		}
		fmt.Printf("%s -> %s\n", p.src, p.dst)
	}
	return nil
}

func renderPage(doc *Doc, css string) string {
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
	return fmt.Sprintf(pageTmpl, html.EscapeString(title), css, header, doc.Body)
}
