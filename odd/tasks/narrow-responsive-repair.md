# Narrow viewport repair

Repository-relative locator: `odd/tasks/narrow-responsive-repair.md`

## Objective
Fix browser-confirmed clipping/overlap on portfolio at narrow viewports while preserving desktop ad layouts and user's existing uncommitted design edits.

## Scope and constraints
- User authorized fixes for publication ad label/title overlap (320–768px), expanded testimonial clipping at 320px, article masthead extending past 320px viewport, and homepage footer icon clipping at 320px.
- Work directly on local `main` with scoped Conventional Commits; no push/PR/deployment. `PublicationAd.astro` and `index.astro` contain pre-existing uncommitted user edits. Never stage those unrelated hunks or replace the files wholesale.
- Preserve Spanish UI copy, existing ad formats, 728×90 desktop publication card, and light/dark themes. Do not mask new overflow globally; fix component layout.
- Browser baseline RED: at 320px publication label overlaps title ~55×13px; expanded experience testimonial has scrollWidth 188 vs clientWidth 151 and CTA extends ~37px beyond card; seven article mastheads extend to x328; homepage last footer icon to x346. Global overflow-x:hidden hides those defects from page scroll metrics.
- Approximate authored change forecast: <120 lines; delivery strategy `ask-on-risk`. Delegate bounded multi-file writers and command verifiers. Use browser before/after checks as functional evidence; CSS layout has no meaningful unit-test RED beyond observed rendering.

## Tasks
- [x] RESP-1 — Fixed publication label/title collision and expanded testimonial clipping, widened narrow timeline. Browser checked 320/390/601/768/1024/1440: zero overlap and shell scroll delta; 1024/1440 publication remains 728×90; 320 screenshot confirms full quote and link. `pnpm build` and `git diff --check` passed. Work-unit commit: `b7f8ec0` (`fix(ads): prevent narrow publication and testimonial clipping`). PublicationAd's other pre-existing modifications remain unstaged.
- [x] RESP-2 — Fixed masthead box sizing and homepage footer icon spacing/wrapping. Browser checked all eight routes at 320/390/768/1440: article mastheads fit (right edge 296px at 320); all six footer icons fit one row at 320 (left 38.8px, right 289.2px); no page scroll delta. Light theme homepage at 390 and side skins at 1920 checked; `pnpm build` (8 pages) and `git diff --check` passed. Work-unit commit: `c082158` (`fix(layout): keep mobile masthead and social links in view`).

## Progress
- Current: both tasks done; two scoped work-unit commits and tracking commit `d52b8ba` on local `main`, no push. Existing user edits in README, StickyFooterBanner, ContactSkyscraperAd, PublicationAd, TechStackSkinAd and index remain unstaged.
- Native RDD review pending: inspect selected unrelated dirty workspace; explicit committed-only slice START could not bind to retained intended-untracked selection (`native-start-retained-selection-candidate-mismatch`). No review lineage or mutation created; never submit unrelated user changes as this feature's candidate.
- Next: leave unrelated workspace intact; report verified fixes and pending native review.
