---
name: update-projects-page
description: Update the btfranklin.info projects landing page after the Eleventy migration by gathering public repository metadata with `gh`, filtering/sorting active and archived projects, editing the individual Markdown project card sources under `site/projects/`, preserving card voice and social-preview conventions, and regenerating committed `docs/` output. Use for any task that adds, removes, archives, reorders, or refreshes project entries on the site landing page. Do not use for unrelated pages or general site copy updates.
---

# Update Projects Page

Maintain the projects landing page from Eleventy source data. The editable source of truth is one Markdown file per
project card under `site/projects/active/` or `site/projects/archived/`; `docs/index.html` is generated output.

## 1. Fetch Authoritative Data

Use `gh` as the source of truth for repository metadata. Do not scrape GitHub pages.

```bash
gh repo list btfranklin \
  --visibility=public \
  --limit 100 \
  --json name,description,url,pushedAt,isArchived,homepageUrl,isFork
```

## 2. Filter Repositories

- Exclude the website repo: `btfranklin`
- Exclude the public skills repo: `skills`
- Exclude forks: `isFork == true`
- Exclude example repos: names containing `example` case-insensitively
- Split remaining repos by `isArchived`

## 3. Sort And Compare

- Sort active and archived groups by `pushedAt` descending.
- Do not use `updatedAt`; it includes administrative activity.
- Compare the sorted repo lists against `site/projects/active/*.md` and `site/projects/archived/*.md`.
- Update each card’s numeric `order` so Eleventy renders the current sort.
- Move card files between `active/` and `archived/` when archive state changes, and update `status`.

## 4. Edit Project Card Sources

Each project card is a Markdown file with YAML frontmatter and a short body description.

Required frontmatter:

```yaml
---
title: "repo-name"
repo_url: "https://github.com/btfranklin/repo-name"
status: "active"
order: 1
updated: "June 2026"
tags:
  - "project"
permalink: false
---
```

Additional active-project image fields, when a verified preview exists:

```yaml
image: "https://raw.githubusercontent.com/btfranklin/repo-name/main/.github/social%20preview/example.jpg"
image_alt: "Human Readable Project Name"
```

Rules:

- Keep existing descriptions unchanged for projects already represented unless the user asks for copy changes or the
  repo has materially changed.
- Write new descriptions in first-person voice, 1-2 punchy sentences.
- Use README context before writing a new description:

```bash
gh api repos/btfranklin/<repo>/readme --jq .content | base64 -D
```

- Keep active descriptions slightly richer; keep archived descriptions shorter.
- Use the repo name as the filename, preserving the repo’s casing where already established.
- Set `permalink: false`; project card files must not render standalone pages.

## 5. Handle Social Preview Images

Only active project cards use images.

- Prefer an existing social preview path named or shown in the repo README.
- If the README does not reveal the path, inspect the repo tree through `gh api` before guessing.
- Verify any raw preview URL before adding it. If `curl` is unavailable, use Python’s standard library HTTP client.
- Omit `image` and `image_alt` for archived projects.

## 6. Regenerate And Verify

Never hand-edit `docs/index.html` or `docs/styles.min.css`.

Run from the repository root:

```bash
npm run build
npm run validate
```

For visual smoke testing, serve the generated deployment output:

```bash
python3 -m http.server 9000 --directory docs
```

Check `/` at desktop and mobile widths when card order, card count, or card copy changed. Confirm active cards render in
the two-column larger-card section and archived cards render in the subdued three-column section.
