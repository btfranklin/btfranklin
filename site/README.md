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

## Content

- Shared layouts and partials live in `_includes/`.
- Site data lives in `_data/`.
- Project cards on the home page are individual Markdown files under `projects/active/` and `projects/archived/`.
- Notes live under `notes/` and are rendered through the notes collection.
- Static assets live under `assets/` and are passed through to `docs/`.

Resume source remains in `../resume/`; the root build regenerates the resume web include plus downloadable DOCX/PDF
exports.
