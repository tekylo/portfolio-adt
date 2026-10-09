# Alternate display-ad creative pilot

Repository-relative locator: `odd/tasks/ad-creative-pilot.md`

## Objective
Offer two new portfolio display-ad creatives, each in explicit light and dark variants, without replacing or modifying any live ads. Keep authentic ad formats and disclose the owner/portfolio identity rather than implying an outside sponsor.

## User decision and guardrails
- User specifically wants ad appearance retained, accepts new creative content/design, and chose a local-only pilot: alternative 980×250 billboard and 300×600 lateral. Existing BillboardAd, TechStackSkinAd, ContactSkyscraperAd, PublicationAd, TestimonialAd and live callers/data must stay unchanged.
- A temporary Astro route may render variants for local browser screenshots, but must be removed before final commit/build; no deployable unapproved gallery route. Persist comparison screenshots in `odd/previews/` so the user can judge. New proposal components are isolated and not mounted on live pages.
- CV-backed claims only: publisher AdTech architecture, GAM, Prebid.js, OpenRTB, Xandr, adserver migration/rollback, multisite integrations. No invented performance numbers, availability claims, or third-party endorsements. Spanish-facing UI copy per project convention; include a truthful advertiser identity (`José Antonio / portfolio`) while retaining `ANUNCIO` style.
- Direct local `main` work-unit commits; no push/PR/deploy. User-excluded `false` and `.codegraph/.gitignore` remain untouched. Browser previews must cover light/dark, 320/390/768/1440 and at least desktop format geometry; ensure visual contrast and keyboard CTA.
- Visual-only creative work has no meaningful deterministic unit RED; use browser screenshot/geometry, link checks, `pnpm build` and `git diff --check`. Estimated authored source changes ~300–380 lines across two components, temporary gallery not committed; work units stay reviewable.

## Tasks
- [ ] CREATIVE-1 — Build isolated 980×250 billboard concept with distinct light/dark palettes and mobile fluid layout, career-grounded headline and working internal projects CTA. Create temporary local preview route as needed, capture screenshots for both themes, build/inspect and commit only component plus screenshots. Commit pending.
- [ ] CREATIVE-2 — Build isolated 300×600 skyscraper concept with light/dark palettes and an AdTech integration visual, career-grounded copy and internal experience CTA. Extend temporary preview, capture both screenshots, check geometry/themes/links, remove temporary route before final build. Commit component plus screenshots; original creatives unchanged. Commit pending.

## Progress
- CREATIVE-1 in progress; CREATIVE-2 pending. File and Engram mirror read back before source writes. Next: delegate CREATIVE-1, keep temporary preview uncommitted.
