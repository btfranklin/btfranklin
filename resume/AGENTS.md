# Resume Content Project

## Scope
- `variants/full.md` is the complete source of truth for B.T. Franklin's resume.
- `variants/application.md` is the shorter export-oriented resume derived from `variants/full.md`.
- `scripts/build_resume.py` regenerates Eleventy resume include/data artifacts and downloadable resume files.

## Commands
- `pdm run build` - regenerate `../site/_includes/generated/resume-body.html`, `../site/_data/resume.json`, DOCX, and
  PDF outputs.
- `pdm run check` - run the same generator and verify expected outputs exist.

## Rules
- Manage this folder with PDM.
- Do not hand-edit generated resume artifacts under `../site/_includes/generated/`, `../site/_data/resume.json`, or
  `../docs/downloads/`.
- Keep resume source in Markdown and update `last_updated` when making substantive resume content changes.
- The web resume is always rendered from `variants/full.md` through Eleventy; do not publish the application variant as
  a web page.

## Application Variant Guidance
- Start from `variants/full.md` and preserve factual accuracy. Do not invent metrics, savings, percentages, team sizes,
  revenue impact, or other quantification that is not known.
- Keep the top third strong: contact header, headline, Professional Summary, Core Expertise, and the most recent
  Zilliant AI/architecture roles should remain prominent.
- Cut content before shrinking type. The generated DOCX/PDF style is intentionally matched to the original resume and
  should not be made smaller just to fit more history.
- Target a two-page exported PDF when practical. If it spills slightly because of meaningful content, shorten older or
  less relevant material before touching the summary or current AI leadership work.
- Condense older Zilliant history first. Keep the 2025-present AI Tech Lead role and 2022-2025 Software Architect role
  detailed; compress 2020-2022 and 2009-2019 into fewer bullets or an earlier-roles summary.
- Compress founder-led products to one role line and one bullet each unless the application target makes them central.
- Keep selected open-source AI work, but make it compact.
- Convert Additional Experience to a single concise earlier-roles paragraph unless a specific target role needs those
  details.
- Keep Research and Publications because it differentiates B.T.; use compact citations.
- Keep Skills, but allow dense line-oriented content at the bottom.
