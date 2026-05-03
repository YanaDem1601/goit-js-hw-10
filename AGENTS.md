# Agent Instructions for goit-js-hw-10

This is a vanilla JavaScript Vite static site template used in a GoIT homework repository.

## Key facts

- The project uses `npm` and `vite`.
- `package.json` defines:
  - `npm run dev` → local development server
  - `npm run build` → production build with `--base=/goit-js-hw-10/`
  - `npm run preview` → preview the built app
- `type` is `module`, so source files use ES module behavior.

## Important files and directories

- `src/index.html` — main entry HTML
- `src/js/` — JavaScript source files
- `src/css/` — styles imported by HTML pages
- `src/partials/` — HTML partials intended for inclusion in page templates
- `src/img/` — image assets
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Conventions

- HTML partials live in `src/partials` and are referenced from HTML pages.
- Styles live in `src/css` and are imported by the page HTML.
- The build output is intended for GitHub Pages; the `build` script uses a repo-specific base path.
- Do not add framework-specific assumptions; this is plain HTML/CSS/JS with Vite.

## What agents should do first

1. Read `package.json` and `README.md` before making changes related to scripts, build paths, or deployment.
2. Preserve the existing template structure and naming conventions.
3. Link to docs instead of duplicating instructions. For full setup and deploy details, refer to `README.md`.

## Links

- [README.md](README.md)
- `package.json`
- `.github/workflows/deploy.yml`
