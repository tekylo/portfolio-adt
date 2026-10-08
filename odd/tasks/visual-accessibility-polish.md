# Portfolio visual accessibility polish

Repository-relative locator: `odd/tasks/visual-accessibility-polish.md`

## Objective
Finish the browser-observed visual issues before deployment: readable light-theme billboard labels, discoverable horizontal navigation on narrow screens, accessible homepage footer links, and working on-brand favicon/share image. Hosting and sitemap remain deferred.

## Existing evidence and constraints
- Browser preview sampled 390/601/768/1440px; light-theme small gold text on pale billboard surfaces measured ~2:1. Mobile nav is horizontally scrollable but hides scrollbar. Six homepage footer icon links have no accessible name, and the Google glyph links to mail.
- Billboard and homepage have pre-existing uncommitted user changes; preserve them byte-for-byte outside narrow corrections. Local commits on `main` are authorized; NO PUSH/PR/deployment. Stage only task-specific hunks, never unrelated user edits.
- Keep existing Spanish-facing copy and newspaper/AdTech visual identity. Avoid new hostname, external service or CV private data. Static site should not advertise image URLs until files exist.
- No meaningful test-first RED for visual-only CSS/markup; use observed before/after browser measurements, `pnpm build`, responsive screenshots and focused structural checks. Generated image assets may be verified with dimensions and browser HTTP responses. Each work unit receives a conventional local commit.
- Forecast ~100-220 authored text lines plus binary image assets; delivery strategy `ask-on-risk`.

## Tasks
- [x] VIS-1 — Repaired light-theme billboard labels (independent contrast calculation minimum 4.98:1; browser conservative pairs 5.29–6.42:1), added mobile scroll hint at ≤767px, six footer aria-labels and envelope icon. Browser at 390/601/768/1440 confirmed no horizontal page overflow; hint visible where nav overflows at 390/601, hidden at 768/1440. `pnpm build` built eight routes and `git diff --check` passed. Touch/keyboard navigation not separately exercised. User explicitly authorized including pre-existing BillboardAd redesign in this commit; other dirty changes preserved. Commit: `7818bfd` (`fix(ui): improve portfolio navigation and contrast`).
- [x] VIS-2 — Added on-brand `public/favicon.png` (64×64) and `public/og-image.png` (1200×630), and linked PNG favicon, absolute OG/Twitter image URLs, alt text and dimensions from the existing provisional Astro.site. Test-first checker RED on missing favicon, GREEN after `pnpm build` for eight routes; independent verifier repeated build, SEO checker and `git diff --check`. PNGs visually inspected; both returned HTTP 200 `image/png` via local preview. Commit: `b3b6379` (`feat(assets): add portfolio favicon and sharing image`).

## Progress
- Current: both tasks complete on local `main` (`7818bfd`, `b3b6379`). No push/PR/deployment. User's unrelated dirty component/homepage/README changes remain unstaged. Browser restart invalidated old page IDs; new preview tabs were opened without repository mutation.
- Verification limits: no full cross-browser, physical touch, keyboard-only navigation or external crawler preview; image host remains provisional. Native review inspect was blocked by unrelated untracked files and selected ambient dirty workspace, not the committed visual slice; no START/closure. Final hostname and sitemap remain future work.
- Next: decide and configure free host at end; align absolute metadata host and sitemap, then perform deployed smoke/preview checks.
