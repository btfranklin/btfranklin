# Resume Build

This folder owns B.T. Franklin's resume variants and generated resume artifacts.

## Source

- `variants/full.md` is the complete editable source of truth.
- `variants/application.md` is a shorter export-oriented variant derived from the full source.
- Generated files are written outside this folder:
  - `../docs/resume/index.html`
  - `../docs/downloads/bt-franklin-resume-full.docx`
  - `../docs/downloads/bt-franklin-resume-full.pdf`
  - `../docs/downloads/bt-franklin-resume-application.docx`
  - `../docs/downloads/bt-franklin-resume-application.pdf`

## Usage

Install the local PDM environment:

```bash
pdm install
```

Regenerate the resume outputs:

```bash
pdm run build
```

Run the generator and verify the expected files exist:

```bash
pdm run check
```

The build uses `python-docx` for the downloadable DOCX, `pandoc` for the web HTML fragment, and LibreOffice `soffice`
for PDF generation.
