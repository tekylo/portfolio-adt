# Proposal: SEO Meta Tags Implementation

## Intent

The portfolio has minimal SEO meta tags (only basic title + description). Missing Open Graph, Twitter Cards, structured data, sitemap, and robots.txt—hurting discoverability and social sharing preview quality.

## Scope

### In Scope
- Modify `src/layouts/Layout.astro` with full SEO meta tags
- Install `@astrojs/sitemap` for automatic sitemap.xml
- Create `public/robots.txt`
- Add JSON-LD Person schema in Layout
- Per-page meta descriptions

### Out of Scope
- Blog feed generation
- RSS feed
- Multi-language SEO (ES-only for now)

## Capabilities

### New Capabilities
- `seo-meta-tags`: Comprehensive Open Graph + Twitter Card tags
- `seo-sitemap`: Auto-generated sitemap.xml via @astrojs/sitemap
- `seo-structured-data`: JSON-LD Person schema
- `seo-robots`: robots.txt for crawl control

### Modified Capabilities
- None (layout updates only)

## Approach

1. Install `@astrojs/sitemap` (adds to astro.config.mjs)
2. Add site URL to astro.config.mjs
3. Update Layout.astro with:
   - Open Graph meta tags (og:title, og:description, og:image, og:url, og:type)
   - Twitter Card meta tags (twitter:card, twitter:site, twitter:creator)
   - JSON-LD Person schema (inline script)
   - Canonical URL (from Astro.url)
   - Per-page meta descriptions via Props
4. Create `public/robots.txt`
5. Pass descriptions from each page to Layout

## Affected Areas

| Area | Impact | Description |
|------|-------|-------------|
| `src/layouts/Layout.astro` | Modified | Add SEO meta + JSON-LD + Props for description |
| `astro.config.mjs` | Modified | Add site URL + sitemap integration |
| `public/robots.txt` | New | Crawl directives |
| `package.json` | Modified | Add @astrojs/sitemap dependency |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| OG image missing | Medium | Use existing favicon.svg as fallback og:image |
| Build errors from sitemap | Low | Test with `astro build` after changes |

## Rollback Plan

1. `npm uninstall @astrojs/sitemap`
2. Remove sitemap from astro.config.mjs
3. Revert Layout.astro to previous version
4. Delete public/robots.txt
5. Run `npm install` to clean

## Dependencies

- `@astrojs/sitemap` — needed for auto-sitemap

## Success Criteria

- [ ] Sitemap.xml generated at build
- [ ] robots.txt accessible at /robots.txt
- [ ] OG tags render correctly (inspect source)
- [ ] JSON-LD validates in Schema validator
- [ ] All 8 pages have unique descriptions