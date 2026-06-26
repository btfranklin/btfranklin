# Repository Guidelines

## Project Structure & Module Organization
- `site/` contains editable Eleventy source: layouts, shared nav/footer partials, Markdown notes, project card Markdown,
  and passthrough assets. Treat it as the primary site source.
- `site/projects/active/` and `site/projects/archived/` contain one Markdown source file per project card. Update the
  relevant card file instead of hand-editing the generated projects page.
- `docs/` is the generated-but-committed GitHub Pages output. Do not hand-edit generated HTML or `docs/styles.min.css`.
- `resume/` owns resume Markdown variants and export automation. The root build calls it before Eleventy renders
  `/resume/`.

## Build, Test, and Development Commands
- `npm install` — install the root Eleventy, Tailwind, and validation toolchain.
- `npm run build` — cleanly regenerates committed `docs/` output, resume exports, Eleventy pages, and Tailwind CSS.
- `npm run build:site` — runs Eleventy only; use `npm run build` for normal full-site regeneration.
- `npm run build:css` — compiles Tailwind utilities into `docs/styles.min.css`.
- `npm run validate` — verifies generated CSS freshness, static links/assets, semantic page structure, clean-break routes,
  link policy, and crawler metadata.
- `npm run serve` — serves Eleventy for local development.
- `python3 -m http.server 9000 --directory docs` — serves the site locally; visit `http://localhost:9000` to verify content and assets.

## Coding Style & Naming Conventions
- Templates/HTML: semantic landmarks (`<main>`, `<section>`), double-quoted attributes, Tailwind utility classes ordered
  layout → spacing → color → state. Keep lines ≤120 chars where practical and favor descriptive `aria` labels.
- JavaScript (`site/assets/circuits.js` and inline snippets): vanilla ES2015+, 4-space indentation, `const`/`let`, single
  quotes, no semicolons. Keep helpers pure and prefer small classes like `Circuit` with self-explanatory methods.
- CSS is Tailwind-generated. Extend design through `tailwind.config.js` or `input.css`, then rebuild; never patch
  `docs/styles.min.css` directly.
- Static assets live under `site/assets/` and are passed through to `docs/`; use lowercase, hyphenated filenames and
  web-safe formats.

## Testing Guidelines
- After each change, run `npm run build` and `npm run validate`, then start the local server and smoke-test the touched
  pages. The site intentionally forces dark mode on modern top-level pages, so verify that dark rendering remains
  correct rather than expecting OS theme switching. Confirm `circuitCanvas` renders without console errors and that
  email obfuscation still injects correctly on `/about/`. Describe manual coverage in your PR.

## Commit & Pull Request Guidelines
- Follow the existing history: imperative, single-sentence commit subjects that describe the change (“Remove glow effect…”, “Refactor canvas resizing…”). Group unrelated work into separate commits.
- PRs should include a concise summary, linked issue (if any), before/after screenshots for visible tweaks, a list of manual tests performed, and callouts for new assets or content added to `llms.txt`.

## Security & Deployment Notes
- `site/assets/CNAME` generates `docs/CNAME` and pins the live domain; do not modify unless ownership changes. Keep the
  repo free of secrets and rely only on public endpoints. Whenever you add marquee content, update the Eleventy
  `llms.txt` source and ensure new external links use `rel="noopener noreferrer"` plus descriptive titles.
