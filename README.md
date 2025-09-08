# Malware Analysis & Threat Intelligence — Static Site

Minimal, accessible, and elegant static website ready for GitHub Pages.

## Features
- Plain HTML/CSS/JS, no build step
- Responsive layout with system font stack
- Light/Dark mode via prefers-color-scheme
- Accessible semantics, skip link, good contrast
- Client-side search (titles + keywords)
- Sticky table of contents on content pages
- Syntax highlighting (highlight.js) and Mermaid diagrams
- Print-friendly stylesheet

## Getting Started
1. Clone this repository.
2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`) and `/ (root)`
   - Save
3. Visit your site at `https://<username>.github.io/<repo>/`.

## Local Preview
Just open `index.html` in your browser. For best results with relative links, use a simple local server:

```bash
# Python 3
python -m http.server 8000
# or Node.js
npx http-server -p 8000
```

Then browse `http://localhost:8000`.

## Customization
- Edit content in `index.html`, `pages/`, and `posts/`.
- Update search index in `assets/js/search-index.js`.
- Adjust styles in `assets/css/styles.css`.

## License
MIT
