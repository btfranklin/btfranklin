# Hi! I'm B.T. 👋

I'm a software developer and entrepreneur specializing in **AI-driven applications**. With 20+ years in tech, I've worked across game development, enterprise software, and generative art/music.

### Current Focus
- **Founder and Principal Engineer at Manage AI** – Guiding product and system architecture for AI workforces that companies own
- **Independent Researcher** – Exploring computational creativity and AI (published & presented at international conferences)

### What I'm Into
- Building tools that push creative boundaries
- Making AI more accessible and useful
- Open source Swift, Python, and TypeScript libraries

## Project Checks

Install the native [Perfect Doc executable](https://github.com/btfranklin/perfect-doc#build-and-install)
and put it on your `PATH`. On supported systems, use:

```sh
brew install btfranklin/tap/perfect-doc
```

Run the documentation check from the repository root after Markdown changes:

```sh
npm run check:docs
```

This runs `perfect-doc check . --offline --no-banner` with [perfect-doc.toml](perfect-doc.toml).
The check scans maintained Markdown, including site content and resume sources. It checks document structure
and local references. It does not check facts, code behavior, or external link availability.
Site links start at `docs/`. Sources can be outside this web root. Eleventy supplies some headings, so the
check allows Markdown fragments and does not require a first heading level or consecutive heading levels.

Run `npm run build` before `npm run validate`. The full validation command includes the documentation check,
HTML validation, and the existing site checks. See [the site workflow](site/README.md) for build details.
