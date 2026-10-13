# José Antonio López Molina — AdTech portfolio

Personal portfolio covering AdTech, full-stack work, and professional experience. Astro pages use an editorial homepage and article routes; advertising-format components are part of the presentation. Site content is primarily Spanish.

## What this site shows

- Eight page files: homepage plus seven articles on experience, education, projects, courses, knowledge, Header Bidding, and personal background.
- Editorial, newspaper-inspired presentation with Astro ad-format components used alongside portfolio content. These are visual presentations, not evidence of an ad-serving integration.
- Theme controls and shared page metadata; browser behavior and search-engine outcomes need separate verification.

## Get started

Requires Node.js >= 24.15.0 and pnpm >= 11.1.1 (`package.json`).

```bash
pnpm install
pnpm dev
```

Astro's development server normally serves `http://localhost:4321` (unless the port changes). Other configured commands:

| Command | Purpose |
| --- | --- |
| `pnpm build` | Build site into `dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro` | Run Astro CLI |

No test, lint, or typecheck script is configured in `package.json`. A successful build checks compilation, not browser behavior, accessibility, or SEO correctness.

## Project map

- `src/pages/index.astro` — homepage; seven `src/pages/articulo-*.astro` files — article routes for experience, education, projects, courses, knowledge, Header Bidding, and about-me content.
- `src/layouts/Layout.astro` — shared HTML shell, metadata, theme script, global styles, and Astro `ClientRouter`.
- `src/components/` — UI and content components; `src/components/ads/` — ad-format presentations.
- `src/data/` — article, publication, and recommendation JSON; `src/styles/` — shared styling.
- `public/` — static assets, including `robots.txt` and sitemap XML files.
- `openspec/changes/` — proposals and work plans, not runtime site code.

### Content and component flow

Page files import `Layout.astro` for the document shell. Homepage composes editorial/content components and ad presentations, using `articles.json` and `publications.json`. The knowledge lateral is `src/components/ads/proposals/SkyscraperConcept.astro`, rendered in normal homepage flow with automatic theme; its previous live version is preserved without modification at `src/components/ads/archive/TechStackSkinAd.astro`. Billboard and contact ads are unchanged. The new lateral's brand-artwork provenance and **publication-rights caveat** are in `src/svgs/AD-BRAND-SOURCES.md`; local integration does not establish permission to deploy it. Article pages import shared navigation/header/breadcrumb components and `articles.json`; the experience page also uses `recommendations.json` with `TestimonialAd.astro`. Content and layout also live directly in page files, so JSON is not the sole content source.

Content entry points:

- `src/data/articles.json` feeds homepage and article pages.
- `src/data/publications.json` feeds homepage publication content.
- `src/data/recommendations.json` feeds experience-page testimonials.

Inspect consuming page and component before changing data shape or presentation.

Theme behavior uses the `.dark` class and browser `localStorage` in `Layout.astro`. `ClientRouter` is present, but navigation behavior should be checked in a browser before making transition guarantees.

## Metadata and deployment notes

`astro.config.mjs` sets `site` to `https://jalopezmolina.vercel.app`, a provisional hostname to confirm before publication. `Layout.astro` uses per-page descriptions and route-specific canonical and Open Graph URLs across all eight pages, plus Twitter tags, a robots meta directive and WebPage JSON-LD. Metadata presence alone does not establish SEO correctness. A 64×64 PNG favicon is present at `public/favicon.png` and linked by `Layout.astro`; verify it on the deployed host before relying on it.

`public/robots.txt` allows crawlers and points to `/sitemap-index.xml` on that domain. Sitemap XML files exist in `public/`, but their URLs use `https://tekylo.vercel.app`, whereas `astro.config.mjs` and `robots.txt` use `https://jalopezmolina.vercel.app`. `@astrojs/sitemap` is listed as a dependency but **not** registered as an integration in `astro.config.mjs`; do not assume build-time sitemap generation or freshness. Deployment provider and publishing workflow are not configured here; reconcile the sitemap host and validate output and metadata before publishing.

## Author and rights

José Antonio López Molina — AdTech and Full Stack developer. Original project README describes content, images, and creative work as proprietary; contact the author for usage inquiries. No open-source license is stated here.

For contributor-specific working rules, see [AGENTS.md](AGENTS.md).
