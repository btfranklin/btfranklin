---
name: update-projects-page
description: Update `docs/projects.html` for btfranklin.info by gathering repository metadata with `gh`, filtering and sorting projects, writing project descriptions, handling social preview images, and preserving the active/archived card layout. Use for any task that adds, removes, or refreshes entries on the projects page. Do not use for unrelated pages or general site copy updates.
---

# Update Projects Page

Maintain `docs/projects.html` with consistent data quality and visual structure.
Follow this workflow exactly to keep project cards accurate and aligned with existing page conventions.

## 1. Fetch Authoritative Data

Do not scrape GitHub. Use `gh` as the source of truth.

```bash
gh repo list btfranklin \
  --visibility=public \
  --limit 100 \
  --json name,description,url,pushedAt,isArchived,homepageUrl,isFork
```

## 2. Apply Filtering Rules

- Exclude the website repo: ignore `btfranklin`
- Exclude forks: ignore repos where `isFork` is `true`
- Exclude example repos: ignore names containing `example` (case-insensitive)
- Split the remaining repos into active vs archived based on `isArchived`

## 3. Sort Correctly

Sort by `pushedAt` descending (newest first).
Do not use `updatedAt`; it includes administrative activity that does not reflect code changes.

## 4. Write Project Descriptions

Do not copy GitHub repository descriptions directly.
Pull each repo README for context before writing new descriptions:

```bash
gh api repos/btfranklin/<repo>/readme --jq .content | base64 -D
```

When writing or updating descriptions:

- Use first-person voice
- Keep tone punchy and conversational
- Keep length to 1-2 sentences
- Keep existing descriptions unchanged for projects that are already on the page

## 5. Handle Social Preview Images

For active projects, check whether a social preview image exists.

- Find the exact image path/filename in the repo README first
- Verify URL availability with `curl -I` before using it
- If image exists, use this HTML structure:

```html
<div class="h-64 overflow-hidden relative group">
    <img src="..." alt="..." class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
```

## 6. Preserve Projects Page Layout

Use the existing two-section structure in `docs/projects.html`:

### Active Projects

- Use `grid-cols-1 md:grid-cols-2`
- Keep larger card style with `bg-white/80`
- Include image block when available

### Archived Projects

- Use `grid-cols-1 md:grid-cols-3`
- Use subdued card style with `opacity-80 hover:opacity-100`
- Do not include images
- Keep descriptions shorter than active project descriptions

## 7. Build CSS and Verify

After changing classes in HTML, rebuild generated CSS:

```bash
cd tailwind
npm run build:css
```

Before finishing, smoke-test the page locally:

```bash
python3 -m http.server 9000 --directory docs
```

Confirm cards render correctly on desktop and mobile widths.
