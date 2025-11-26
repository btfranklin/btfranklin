# Repository Guidelines

## Project Structure & Module Organization
- `docs/` contains the public site: key pages (`index.html`, `llms-txt.html`), assets (`circuits.js` animation, `cheat-sheets/` references), and the compiled `styles.min.css` served via GitHub Pages/custom domain. Treat it as the source of truth.
- `docs/styles.min.css` is generated; never hand-edit. Rebuild it whenever Tailwind classes or tokens change.
- `tailwind/` houses the Node-based build toolchain (`package.json`, `tailwind.config.js`) scoped to `../docs/**/*.{html,js}`. Run all CSS builds from here.
- There is no backend layer; keep new content static and colocate imagery or downloads inside `docs/` subfolders with descriptive, hyphenated names.

## Build, Test, and Development Commands
- `cd tailwind && npm install` — install Tailwind dependencies once per machine.
- `npm run build:css` (inside `tailwind/`) — compiles Tailwind utilities into `../docs/styles.min.css`.
- `npx tailwindcss --watch -o ../docs/styles.min.css` — optional watch mode while editing markup or config.
- `python3 -m http.server 9000 --directory docs` — serves the site locally; visit `http://localhost:9000` to verify content and assets.

## Coding Style & Naming Conventions
- HTML: semantic landmarks (`<main>`, `<section>`), double-quoted attributes, Tailwind utility classes ordered layout → spacing → color → state. Keep lines ≤120 chars and favor descriptive `aria` labels.
- JavaScript (`docs/circuits.js` and inline snippets): vanilla ES2015+, 4-space indentation, `const`/`let`, single quotes, no semicolons. Keep helpers pure and prefer small classes like `Circuit` with self-explanatory methods.
- CSS is Tailwind-generated. Extend design through `tailwind.config.js` (colors, fonts) or dedicated source layers, then rebuild; never patch `styles.min.css` directly.
- Static assets live beside their consumers (e.g., `docs/cheat-sheets/`); use lowercase, hyphenated filenames and web-safe formats.

## Testing Guidelines
- No automated suite. After each change, run `npm run build:css`, start the local server, and smoke-test in light/dark OS themes plus desktop/mobile breakpoints. Confirm `circuitCanvas` renders without console errors and that `email` obfuscation still injects correctly. Describe manual coverage in your PR.

## Commit & Pull Request Guidelines
- Follow the existing history: imperative, single-sentence commit subjects that describe the change (“Remove glow effect…”, “Refactor canvas resizing…”). Group unrelated work into separate commits.
- PRs should include a concise summary, linked issue (if any), before/after screenshots for visible tweaks, a list of manual tests performed, and callouts for new assets or content added to `llms.txt`.

## Security & Deployment Notes
- `docs/CNAME` pins the live domain; do not modify unless ownership changes. Keep the repo free of secrets and rely only on public endpoints. Whenever you add marquee content, update `docs/llms.txt` so crawlers discover it, and ensure new external links use `rel="noopener noreferrer"` plus descriptive titles.
