# Resume Content Project

## Scope
- `source.md` is the source of truth for B.T. Franklin's resume.
- `scripts/build_resume.py` regenerates the public web page and downloadable resume files.

## Commands
- `pdm run build` - regenerate `../docs/resume/index.html`, DOCX, and PDF outputs.
- `pdm run check` - run the same generator and verify expected outputs exist.

## Rules
- Manage this folder with PDM.
- Do not hand-edit generated files under `../docs/resume/` or `../docs/downloads/`.
- Keep resume source in Markdown and update `last_updated` when making substantive resume content changes.
