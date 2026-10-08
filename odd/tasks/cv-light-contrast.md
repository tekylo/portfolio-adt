# CV download and light-theme contrast

Repository-relative locator: `odd/tasks/cv-light-contrast.md`

## Objective
Make the existing CV download work using the user's July 13, 2026 PDF, and restore readable light-theme gold controls while preserving dark theme and unrelated worktree edits.

## Scope and evidence
- User authorized copying the unique July 13 CV from `~/Documents/Personal/José Antonio López Molina · CV.pdf` to the existing matching public link, and fixing contrast. Source has 9 pages, 1,901,672 bytes, no PDF JavaScript/encryption; detected email and phone already appear on the public site's source. Do not publish externally: local `main` commits only, no push/PR/deploy.
- Existing CV URL `/José Antonio López Molina · CV.pdf` returns 404 (browser HEAD). Other eight local routes return 200.
- Mobile light-theme Lighthouse RED: accessibility 93; eight white-on-gold elements at 2.37:1 (<4.5:1): CV CTA, six article badges, publication CTA. Missing main landmark is a separate out-of-scope finding. Dark theme sampled at 98. Lighthouse is lab evidence, not physical-device proof.
- Pre-existing uncommitted edits in `src/components/ads/PublicationAd.astro` and `src/pages/index.astro` belong to user. Stage only task-specific edits; avoid source-wide formatting. Source PDF remains untouched.
- Two reviewable work units, <60 authored text lines plus 1.9MB binary. CSS has observed browser RED; use Lighthouse plus targeted contrast geometry/color checks for GREEN, not a synthetic unit test. CV has real HTTP RED and can be verified by URL response and PDF signature.

## Tasks
- [x] CV-1 — Copied July 13 PDF to `public/José Antonio López Molina · CV.pdf`, preserving existing CTA URL. Source, public and built bytes match (SHA-256 `aa6e53c693cc…`); `pnpm build` generated 8 routes, preview HEAD 200 `application/pdf`, size 1,901,672 bytes, `git diff --check` clean. File-specific `git add -f` bypassed existing `*.pdf` ignore without changing policy. Work-unit commit `1ac21c0` (`fix(assets): restore portfolio CV download`).
- [x] CONTRAST-1 — Added theme tokens for dark text on gold controls and a legible article-title hover. Normal foreground/gold ratios: light 7.11:1, dark 11.44:1; title hover on card: light 5.55:1, dark 12.91:1; Billboard opacity hover >=5.14:1. Browser computed colors confirmed at 390px mobile and 1440px desktop; Lighthouse mobile light rose 93→98 with only pre-existing missing-main finding, dark and desktop light 98. `pnpm build` (8 routes), staged diff check and independent verifier passed. Work-unit commit `8ec248c` (`fix(a11y): improve gold control and title contrast`); unrelated PublicationAd changes remain unstaged.

## Progress
- Both tasks done, verified, and scoped-committed on local `main`; no push/PR/deploy. Existing unrelated dirty files remain untouched. Workload: 1.9MB PDF plus nine net changed CSS lines in contrast commit. Tracking evidence recorded here.
- Remaining out-of-scope Lighthouse finding: no `<main>` landmark on portfolio pages. Physical-device and deployed-host checks pending.
