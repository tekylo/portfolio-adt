# Semantic headings and homepage code cleanup

Repository-relative locator: `odd/tasks/semantic-code-cleanup.md`

## Objective
Keep one page-level H1 per route while retaining newspaper masthead appearance; remove genuinely unused homepage imports/data and unsafe publication typing without changing visible content.

## Decisions and constraints
- User explicitly chose to retain build-time dates on all articles and masthead as a reference. Do not change dates or invent historical publication timestamps. Build time is not guaranteed deployment time; report that distinction.
- Direct local `main` work-unit commits per standing preference; no push/PR/deployment. User excluded untracked `false` and `.codegraph/.gitignore` from commits; leave them alone.
- Baseline: seven article routes render masthead H1 plus article H1; homepage renders masthead H1 only. Existing `scripts/check-seo.mjs` reads generated HTML. Test-first: add generated-HTML assertion for one H1 per route, observe RED on current build, then implement GREEN. Preserve logo link and same visual masthead geometry at 320/390/1440px. Masthead hover currently uses `--accent-primary` (light gold on light background); use existing `--accent-text` if changing this component to keep contrast.
- Homepage `src/pages/index.astro` contains eight unused component imports and an unused `experiences` array. `homepagePublication` uses `as any`; its JSON entry **does include** slug `header-bidding` (independently verified), and existing publication card renders. Remove dead items and replace `any` with type-safe handling without changing card content/visibility. Avoid formatting whole file.
- Forecast <120 authored diff lines (removing ~50 dead lines), two reviewable work units. Tests/build/browser as appropriate; stage only intended hunks and keep task doc evidence updated.

## Tasks
- [x] HEADING-1 — Added generated-HTML one-H1 assertion. RED: `node scripts/check-seo.mjs` failed on `dist/articulo-conocimientos/index.html` (`2 !== 1`) after homepage passed. GREEN: after change `pnpm build` and checker passed all eight routes. Homepage masthead remains H1; articles retain article-title H1 with linked masthead span. Browser sampled home/sobre-mi/experiencia at 320/390/1440: one H1, visual dimensions and link name intact, no overflow. Light masthead hover uses `--accent-text` (#806000 on white). Independent verifier and diff check passed. Commit `324357f` (`fix(a11y): use article titles as sole page headings`). Dates untouched.
- [x] CLEANUP-1 — Removed eight unused homepage component imports and unused `experiences` data; replaced `as any` with a narrowed `theme` union while keeping the conditional publication card. Browser at 320/390/1440 confirmed one dark `Header Bidding` card with identical title, Medium CTA/href, widths 288/358/728px, no page overflow. `pnpm build` (8 routes), SEO/H1 checker, independent verifier and diff check passed. Commit `e0fee07` (`refactor(home): remove unused content and unsafe publication cast`).

## Progress
- Both tasks done and scoped-committed on local `main`; no push/PR/deploy. Dates remain exactly as user chose: build-time reference, not guaranteed deployment time. `false` and `.codegraph/.gitignore` remain excluded untracked artifacts. Tracking evidence recorded here.
- Native review pending: ambient untracked files prevent assessment of this slice, and previous inspect routes target unrelated workspace unless a committed-slice route is offered. Do not review excluded artifacts or mutate authority.
