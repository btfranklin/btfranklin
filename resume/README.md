# Resume Build

This folder owns B.T. Franklin's resume variants and generated resume artifacts.

## Source

- `variants/full.md` is the complete editable source of truth.
- `variants/application.md` is a shorter export-oriented variant derived from the full source.
- Generated site artifacts and downloads are written outside this folder:
  - `../site/_includes/generated/resume-body.html`
  - `../site/_data/resume.json`
  - `../docs/downloads/bt-franklin-resume-full.docx`
  - `../docs/downloads/bt-franklin-resume-full.pdf`
  - `../docs/downloads/bt-franklin-resume-application.pdf`

The application variant is intentionally PDF-only. Its build uses a temporary ODT plus
`templates/application-reference.odt`; it does not create or publish an application DOCX.

## Usage

Install the local PDM environment:

```bash
pdm install
```

Regenerate the resume outputs:

```bash
pdm run build
```

The normal full-site build runs this automatically from the repository root:

```bash
npm run build
```

Run the generator and verify the expected files exist:

```bash
pdm run check
```

The build uses `python-docx` for the downloadable full-resume DOCX, `pandoc` for the web HTML fragment and temporary
application ODT, and LibreOffice `soffice` for PDF generation.
