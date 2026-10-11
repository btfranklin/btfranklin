# Site Source

This folder contains the editable Eleventy source for `btfranklin.info`.

## Workflow

Run these commands from the repository root:

```bash
npm install
npm run build
npm run validate
python3 -m http.server 9000 --directory docs
```

The site still deploys from committed files in `docs/`, so run `npm run build` before committing site changes.

Install the native Perfect Doc executable on `PATH` as described in [the root README](../README.md#project-checks).
After Markdown changes, run `npm run check:docs` from the repository root. This uses `perfect-doc.toml` and runs
`perfect-doc check . --offline --no-banner`. It scans maintained Markdown and resolves site links from `docs/`.
Run the build first if a linked page or asset changed. `npm run validate` includes this check.

## Content

- Shared layouts and partials live in `_includes/`.
- Site data lives in `_data/`.
- Project cards on the home page are individual Markdown files under `projects/active/` and `projects/archived/`.
- Writing lives under `writing/` and is rendered through the writing collection.
- Practical notes and cheat sheets are surfaced in the Notes section of the Creations page.
- Static assets live under `assets/` and are passed through to `docs/`.

Resume source remains in `../resume/`; the root build regenerates the resume web include, the full-resume DOCX/PDF
exports, and the PDF-only application resume.
