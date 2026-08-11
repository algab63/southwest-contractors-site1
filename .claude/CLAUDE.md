# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Website Design Recreation

## Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes:

1. **Generate** a single `index.html` file using Tailwind CSS (via CDN). Include all content inline - no external files unless requested.
2. **Screenshot** the rendered page using Puppeteer (`npx puppeteer screenshot index.html --fullpage` or equivalent). If the page has distinct sections, capture those individually too.
3. **Compare** your screenshot against the reference image. Check for mismatches in:
   - Spacing and padding (measure in px)
   - Font sizes, weights, and line heights
   - Colors (exact hex values)
   - Alignment and positioning
   - Border radii, shadows, and effects
   - Responsive behavior
   - Image/icon sizing and placement
4. **Fix** every mismatch found. Edit the HTML/Tailwind code.
5. **Re-screenshot** and compare again.
6. **Repeat** steps 3-5 until your result is within ~2-3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

## Technical Defaults

- Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use placeholder images from `https://placehold.co/` when source images aren't provided
- Mobile-first responsive design
- Single `index.html` file unless the user requests otherwise

## Rules

- Do not add features, sections, or content not present in the reference image
- Match the reference exactly – do not "improve" the design
- If the user provides CSS classes or style tokens, use them verbatim
- Keep code clean but don't over-abstract – inline Tailwind classes are fine
- When comparing screenshots, be specific about what's wrong (e.g., "heading is 32px but reference shows ~24px", "gap between cards is 16px but should be 24px")

## Commands

Screenshot a rendered page with Puppeteer (already installed in `node_modules`, no `package.json`/npm scripts defined):

```
node scripts/screenshot.js <url> <outPath> [width=1440] [height=900] [fullPage=true|false]
```

Example, after serving the page locally:

```
python -m http.server 8000
node scripts/screenshot.js http://localhost:8000/index.html screenshot.png 1440 900 true
```

There is no build, lint, or test tooling configured in this repo.

## File layout

- `index.html` — the current design recreation (single-file, Tailwind via CDN, inline styles for gradients/fonts not expressible in utility classes).
- `styles.css` — minimal base stylesheet, not linked from `index.html`; currently unused by the active page.
- `app.js` — placeholder entry point, currently unused by the active page.
- `scripts/screenshot.js` — Puppeteer CLI script used for the compare step of the design-recreation workflow.
- `README.txt` — Romanian-language course notes/reference for Claude Code itself; not project documentation.
