# Portfolio page SEO

Repository-relative locator: `odd/tasks/portfolio-seo.md`

## Objective
Make the existing eight-page Astro portfolio's search and social metadata accurate per route, using verified professional wording from site content and existing CV. Hosting and final canonical hostname remain a separate later decision.

## Problem and scope
Shared `src/layouts/Layout.astro` currently repeats one description and homepage canonical/social URL on article routes, emits a reference to an absent OG image, and repeats hard-coded Person JSON-LD on every page. Edit `src/layouts/Layout.astro`, eight `src/pages/*.astro` Layout invocations/frontmatter, and `README.md` metadata notes; add a focused deterministic generated-HTML SEO check if applicable. Preserve pre-existing uncommitted changes, especially `src/pages/index.astro`.

## Constraints
- No new host or deployment change: `astro.config.mjs`, static sitemap, `robots.txt` stay untouched. URL host remains provisional; correct route paths now and recheck host before publication.
- Do not publish private CV contact/address/phone data or invent employment/education claims. User-facing copy follows existing Spanish convention.
- No missing image URL in social tags; no promises of rankings/rich results. No browser QA or host availability claim from a successful build.
- Never stage unrelated existing changes or commit/push/publish without explicit user authorization.
- Route: delegated writer for 2+ nontrivial files and preparation reading; independent verifier as required by review assessment. Approximate authored change forecast: 160–260 lines, under 400-line review heuristic; delivery strategy `ask-on-risk`.

## Tasks
- [x] SEO-1 — Introduce route-aware layout metadata: temporary fallback description, absolute path-specific canonical/OG URL from existing Astro site, social tags without absent image references, conservative truthful JSON-LD. Acceptance: generated routes emit distinct URLs, valid structured data, and no absent OG image metadata. RED: generated-HTML check failed on baseline homepage canonical trailing slash. GREEN: `pnpm build` and `node scripts/check-seo.mjs` passed for all eight routes; independent verifier repeated both and `git diff --check`. Commit: `6313ae9` (`feat(seo): align canonical metadata with each route`), only Layout and checker.
- [x] SEO-2 — Provide distinct Spanish summaries for homepage and seven article pages from visible content; make description required in Layout; update README caveat without staging its pre-existing uncommitted rewrite. Acceptance: eight descriptions relevant and distinct; README no longer claims root-only canonical. RED: generated-HTML checker failed on baseline description. GREEN: `pnpm build` generated eight pages, `node scripts/check-seo.mjs` passed, `git diff --check` passed; independent verifier repeated checks and confirmed wording, then flagged brittle assertions, which were removed and rechecked. Commit: `18588c2` (`feat(seo): add distinct metadata for portfolio pages`), only SEO hunks from index and other page files, Layout and checker; README remains unstaged.

## Progress and evidence
- Branch history: SEO implemented in `feat/portfolio-seo`, then user requested direct `main` workflow. `main` fast-forwarded to `18588c2`, switched without changing worktree status, and merged feature branch deleted. No push; local `main` is two commits ahead of `origin/main`.
- Mapping: all eight Layout calls and shared metadata identified; missing OG image and static sitemap noted. Google Search Central recommends absolute canonicals and distinct relevant meta descriptions; metadata is not ranking guarantee.
- Current: both tasks implemented, checked and committed (`6313ae9`, `18588c2`) on local `main`. User authorized commits only; no push/deploy. Existing uncommitted page/component and README changes remain preserved. `favicon.svg` absent before SEO-1 and deferred to resources step.
- Verification limits: independent build/checks passed; active LSP supported JS checker but no Astro LSP configured (nine Astro files unsupported). Later browser QA sampled homepage at 390/601/768/1440px and article routes at 390px, but full cross-browser QA and deployment remain pending. Final host, sitemap and OG image remain pending. Native review inspect selected unrelated ambient workspace changes due dirty worktree; no START or review closure for the SEO committed slice.
- Next: keep README's earlier authorized documentation rewrite unstaged until its own handling; select final host and reconcile sitemap/assets in later work before publication. If native review desired, obtain a provider-offered committed-slice route without sweeping unrelated working-tree changes.
