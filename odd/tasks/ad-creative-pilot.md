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
- [x] CREATIVE-1 — Isolated 980×250 billboard concept, light/dark with fluid mobile layout and projects CTA. Browser at 320/390/768/1440: no clipped descendants or document overflow; desktop both 980×250, keyboard CTA visible. Screenshots: `odd/previews/billboard-light.png` and `billboard-dark.png`. Build and generated HTML passed. Work-unit commit `c93b334` (`feat(ads): add alternate AdTech billboard creative`).
- [x] CREATIVE-2 — Isolated 300×600 skyscraper concept, light/dark, AdTech integration sequence, CTA to experience. Browser at 320/390/768/1440: both exactly 300×600, no clipped descendants or document overflow; keyboard CTA outline; foreground/background contrast sampled ≥4.89:1 in light and ≥6.88:1 in dark for accent/panel text. Screenshots: `odd/previews/skyscraper-light.png` and `skyscraper-dark.png`. Temporary route removed; final build passed (original eight routes only), `git diff --check` clean; existing live ad components/pages unchanged. Work-unit commit `f36f0ee` (`feat(ads): add alternate AdTech skyscraper creative`).

## Revision 2 — return to portfolio-ad roles and newspaper identity
User rejected the first prototypes' teal/green palette and generic/duplicated AdTech message. The billboard must remain a personal CV ad; the lateral must remain a technology/knowledge ad. Keep existing live ads, their badge essence, and four first-round screenshots for comparison; revise only isolated concepts. Site colors from `src/layouts/Layout.astro`: white/light gray/near-black and gold `#d4a017` / `#f3d34d`, Georgia display type. Inspired by conventional display-ad controls, not by Google brand imitation: visible `ANUNCIO`, advertiser identity and keyboard-operable close `×` that dismisses only its own ad; no auto popup, overlay, sticky banner, or interference with main reading. Popup idea remains undecided for a separate request. Keep mobile legibility, truthful copy, no unconfirmed availability. Use new `*-v2-{light,dark}.png` screenshots, retain previous images. Temporary comparison route untracked and removed before final build. Both components remain unmounted on live routes.

## Revision 2 tasks
- [ ] CREATIVE-3 — Rework isolated 980×250 billboard in both site-matched themes as José Antonio's profile ad: name, AdTech specialty, original skill-badge essence, working CV download, genuine ad chrome with functional close `×`. Browser RED for missing close on old concept before behavioral change, GREEN for close/destination; capture two v2 screenshots. Work-unit commit pending.
- [ ] CREATIVE-4 — Rework isolated 300×600 lateral in both themes as grouped AdTech/frontend/backend technology ad, preserving knowledge CTA and distinct purpose. Add functioning close `×`, capture two v2 screenshots, remove temporary preview, final eight-route build and original-ad isolation checks. Work-unit commit pending.

## Progress
- CREATIVE-1 and CREATIVE-2 committed as initial, user-rejected prototypes. CREATIVE-3 in progress; CREATIVE-4 pending. Task file revised before new source writes and mirrored in Engram.
