# Resume Content Project

## Scope
- `variants/full.md` is the complete source of truth for B.T. Franklin's resume.
- `variants/application.md` is the shorter export-oriented resume derived from `variants/full.md`.
- `scripts/build_resume.py` regenerates Eleventy resume include/data artifacts, the full-resume DOCX/PDF downloads, and
  the PDF-only application resume.

## Commands
- `pdm run build` - regenerate `../site/_includes/generated/resume-body.html`, `../site/_data/resume.json`, the full
  DOCX/PDF outputs, and the application PDF.
- `pdm run check` - run the same generator and verify expected outputs exist.

## Rules
- Manage this folder with PDM.
- Do not hand-edit generated resume artifacts under `../site/_includes/generated/`, `../site/_data/resume.json`, or
  `../docs/downloads/`.
- Keep resume source in Markdown and update `last_updated` when making substantive resume content changes.
- The web resume is always rendered from `variants/full.md` through Eleventy; do not publish the application variant as
  a web page.
- Treat Salesforce and Java as historical depth and enterprise-system credibility, not as target specializations.
  Do not remove them in ways that create suspicious career gaps, but compress and translate them into enterprise
  platform architecture, product modernization, integration design, UI modernization, technical leadership, and durable
  software engineering foundations.
- Do not optimize public or application resume variants toward Salesforce or Java roles unless B.T. explicitly asks for
  that direction.

## Application Variant Guidance
- Start from `variants/full.md` and preserve factual accuracy. Do not invent metrics, savings, percentages, team sizes,
  revenue impact, or other quantification that is not known.
- Omit a branding headline unless B.T. explicitly requests one. Use a Professional Summary of no more than 45 words,
  then show the most recent Zilliant AI and architecture roles without implying current employment there.
- Do not add a Core Expertise section. Keep one compact, evidence-backed Skills section at the bottom.
- Give each bullet one primary competency, action, or result. Target 30 words or fewer and review every bullet over 35
  words before export.
- Cut content before shrinking type. The generated application PDF style should not be made smaller just to fit more
  history.
- Treat two pages as a hard ceiling, not a content target. Remove older or less relevant content before changing the
  summary or recent AI leadership work.
- Include only skills that support the target role, are truthful in `variants/full.md`, and have selected experience or
  project evidence.
- Show the highest relevant degree by default. Omit minors, academic honors, and awards unless the target makes them
  relevant.
- Omit certifications, awards, hobbies, and references unless they are directly relevant and credible.
- Do not generate, publish, link, or validate an application DOCX. The application variant is PDF-only; its temporary
  build intermediate is ODT.
- Condense older Zilliant history first. Keep the 2025-2026 AI Tech Lead role and 2022-2025 Software Architect role
  detailed; compress 2020-2022 and 2009-2019 into fewer bullets or an earlier-roles summary.
- Compress founder-led products to one role line and one bullet each unless the application target makes them central.
- Keep selected open-source AI work, but make it compact.
- Convert Additional Experience to a single concise earlier-roles paragraph unless a specific target role needs those
  details.
- Keep Research and Publications because it differentiates B.T.; use compact citations.
- Keep Skills compact and line-oriented at the bottom.
