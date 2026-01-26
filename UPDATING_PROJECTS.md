# How to Update the Projects Page

This guide documents the proven workflow for updating `docs/projects.html`. Follow these steps to ensure consistency with the current design and data logic.

## 1. Fetch Authoritative Data
**Do not scrape GitHub.** Use the GitHub CLI (`gh`) for the most accurate data, especially for dates.

Run this command to get the full JSON list:
```bash
gh repo list btfranklin --visibility=public --limit 100 --json name,description,url,pushedAt,isArchived,homepageUrl,isFork
```

## 2. Filtering Logic
When processing the list, apply these filters:
*   **Exclude the website repo**: Ignore `btfranklin` to avoid "inception".
*   **Exclude forks**: Ignore any repo where `isFork` is `true` (e.g., `cerebras-moa`).
*   **Exclude example repos**: Skip any repo with `example` in the name (case-insensitive).
*   **Separate by Status**: Split the remaining repos into two groups based on `isArchived`.

## 3. Sorting Strategy
**Always sort by `pushedAt`.**
*   The raw `updatedAt` field often reflects administrative changes (like issue edits).
*   `pushedAt` accurately reflects the last code commit, which is what we want to talk about.
*   Sort descending (newest first).

## 4. Crafting Descriptions
**Do not just use the repository description.**
*   Fetch the `README.md` for proper context (e.g., `gh api repos/btfranklin/<repo>/readme --jq .content | base64 -D`).
*   **Voice**: Write a custom, enthusiastic 1-2 sentence description in the first person ("I built this because..."). Avoid generic "A library for..." text.
*   **Tone match**: Keep descriptions punchy and conversational, mirroring the existing voice across the page.
*   **Format**: Keep it punchy.
*   **Only for new projects**: If a project already exists on the page, keep its description exactly as-is.

## 5. Handling Images
Check for a social preview image for **Active Projects**.
*   **Standard Path**: `https://raw.githubusercontent.com/btfranklin/<repo>/main/.github/social%20preview/<repo>_social_preview.[jpg|png]`
*   **Verification**: Run a quick `curl -I` to verify the image exists (check both `.jpg` and `.png`) before including it.
*   **Naming edge case**: If the standard path 404s, also try the same filename with `-` replaced by `_`
    (some repos still use the underscore form, e.g., `wordsmith_engine_social_preview.jpg`).
*   **HTML**: If it exists, use the "Image Div" structure (see below).

## 6. HTML Structure
The page uses Tailwind CSS. Ensure you maintain the two-section layout.

### Active Projects Section
*   **Grid**: `grid-cols-1 md:grid-cols-2`
*   **Cards**: Large, `bg-white/80` (glassmorphism).
*   **Image Div** (if applicable):
    ```html
    <div class="h-64 overflow-hidden relative group">
        <img src="..." alt="..." class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    ```

### Archived Projects Section
*   **Grid**: `grid-cols-1 md:grid-cols-3`
*   **Style**: Subdued opacity (`opacity-80 hover:opacity-100`), simpler card background.
*   **Content**: No images, shorter descriptions.

## 7. Build CSS
After editing the HTML, you **must** rebuild the Tailwind CSS to pick up any new classes.

```bash
cd tailwind
npm run build:css
```
