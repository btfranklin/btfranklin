# Resume Build

This folder owns B.T. Franklin's resume source and generated resume artifacts.

## Source

- `source.md` is the editable source of truth.
- Generated files are written outside this folder:
  - `../docs/resume/index.html`
  - `../docs/downloads/bt-franklin-resume.docx`
  - `../docs/downloads/bt-franklin-resume.pdf`

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
