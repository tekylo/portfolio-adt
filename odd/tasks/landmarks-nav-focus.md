# Main landmarks and keyboard-visible navigation

Repository-relative locator: `odd/tasks/landmarks-nav-focus.md`

## Objective
Add one semantic main-content landmark to each of the eight portfolio routes and keep mobile horizontal-menu keyboard focus in view.

## Evidence and constraints
- User authorized the two next functional/accessibility fixes after CV and contrast work. Direct local `main` commits per standing preference; no push/PR/deployment. Do not alter unrelated dirty files or untracked artifacts. `src/pages/index.astro` contains pre-existing user edits; stage only task-specific hunks.
- Browser RED: all eight routes have zero `main,[role="main"]`; Lighthouse mobile homepage/experience reports `landmark-one-main`, accessibility 98. Article masthead and nav must stay outside main; breadcrumbs and article content belong inside. Homepage billboard/side ads, header/nav and footer must stay outside main.
- Browser RED at 320px: Tab to final `CONOCIMIENTOS` link focuses box x281–409 while nav scrollport x24–296; nav list scrollLeft=196/max309. Enter still navigates. Never change page scrollY when correcting horizontal focus.
- Home has existing broad `main` CSS selectors at `index.astro:422,635,675,737`, currently inert; new main needs a class override/structural strategy preserving current padding and widths. Do not simply wrap the entire Layout slot or put header/nav/footer inside main.
- Forecast <120 authored diff lines across nine route files and NavMenu. Two reviewable work units under 400-line heuristic. Functional RED is measured DOM geometry/Lighthouse; GREEN via browser, keyboard and build, not synthetic unit tests.

## Tasks
- [x] LANDMARK-1 — Added exactly one `<main>` on all eight routes; homepage editorial/publication inside, billboard/asides/site header/nav/footer outside; articles include breadcrumbs and content, site masthead/nav outside. Browser checked all routes at 320/390/768/1440 with no document overflow and unchanged homepage main padding 0; mobile Lighthouse homepage and experience accessibility 100 (50/50 checks). `pnpm build` (8 routes), independent structural verification and staged diff check passed. Work-unit commit `7ce6233` (`fix(a11y): add main landmarks across portfolio routes`); prior index hunks remain unstaged.
- [x] NAV-1 — Added delegated `focusin` handler adjusting only `.nav-list.scrollLeft` when focused link crosses either edge. Browser at 320: all six links fully visible forward/reverse Tab, scrollY remained 0; at 390 last/first visible; at 768 no horizontal scroll. Enter navigated to `articulo-conocimientos` and focused last link remained visible after transition. Independent verification, `pnpm build` (8 routes) and diff check passed. Work-unit commit `bc25c45` (`fix(a11y): keep focused mobile navigation links visible`). Physical touch not tested.

## Progress
- Both tasks done and scoped-committed on local `main`; no push/PR/deployment. Earlier dirty changes in index, README and ad components remain unstaged. Tracking evidence recorded here.
- Native RDD review pending: unrelated dirty workspace and untracked selection prevent a bound review of just these work-unit commits. No reset/recovery or unrelated candidate submission. Browser automation used Chromium emulation; physical touch and Firefox/Safari remain untested.
