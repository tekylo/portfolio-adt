# Technical Design: SEO Meta Tags

## Overview

This design outlines the implementation approach for adding comprehensive SEO meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, and robots.txt to the portfolio site.

---

## 1. Architecture Decisions

### 1.1 Why @astrojs/sitemap (vs Manual XML)

| Factor | @astrojs/sitemap | Manual sitemap.xml |
|--------|------------------|-------------------|
| Auto-discovery | ✅ Crawls all routes at build | ❌ Hardcoded, must update manually |
| Maintenance | ✅ Zero ongoing effort | ❌ Update on every new page |
| Integration | ✅ Native Astro plugin | ❌ Requires separate pipeline |
| Reliability | ✅ Tested, maintained | ❌ Risk of drift/errors |

**Decision**: Use `@astrojs/sitemap`

**Rationale**: The sitemap must include all 8 pages. Manual maintenance creates technical debt and risks stale URLs. The Astro plugin generates at build time with zero ongoing maintenance.

### 1.2 Meta Tag Injection in Layout.astro

Location: `<head>` section of `src/layouts/Layout.astro`

Approach:
- Extend existing `Props` interface to accept `title` and `description`
- All meta tags rendered inline within `<head>`
- Props passed from each page via `<Layout title="..." description="...">`

```astro
interface Props {
  title: string;
  description?: string;
}
```

**Rationale**: Single source of truth in Layout.astro ensures consistent meta tags across all pages. Per-page Props allow unique descriptions while maintaining structure.

### 1.3 JSON-LD Placement

Location: Inline `<script type="application/ld+json">` in `<head>`, right before closing `</head>` tag

```astro
<head>
  <!-- existing tags -->
  <script type="application/ld+json" set:html={jsonLd} />
</head>
```

**Rationale**: 
- Inline placement ensures immediate parsing by crawlers
- No external fetch needed (faster LCP)
- Schema.org Person type is page-agnostic (same data on all pages)

---

## 2. File Changes

### 2.1 package.json

**Action**: Add dependency

```json
{
  "devDependencies": {
    "@astrojs/sitemap": "^3.1.2"
  }
}
```

### 2.2 astro.config.mjs

**Action**: Configure site URL and sitemap integration

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tekylo.vercel.app',
  integrations: [sitemap()],
});
```

### 2.3 src/layouts/Layout.astro

**Action**: Add meta tags to `<head>`

| Tag Type | Count | Placement |
|---------|-------|----------|
| Standard Meta | 4 | description, viewport, robots, canonical |
| Open Graph | 6 | og:title through og:site_name |
| Twitter Cards | 5 | twitter:card through twitter:creator |
| JSON-LD | 1 | Person schema script |

### 2.4 public/robots.txt

**Action**: Create new file

```
User-agent: *
Allow: /

Sitemap: https://tekylo.vercel.app/sitemap-index.xml
```

---

## 3. Implementation Notes

### 3.1 Site URL Configuration

Use `import.meta.env.SITE` when available, fallback to hardcoded production URL:

```javascript
const siteUrl = import.meta.env.SITE || 'https://tekylo.vercel.app';
const canonicalUrl = new URL(Astro.url.pathname, siteUrl).href;
```

**Rationale**: Vercel sets `SITE` environment variable automatically. Hardcoded fallback ensures build works locally.

### 3.2 Default OG Image

Per spec: Use `/jose.jpeg` as default og:image

- Location: `public/jose.jpeg`
- Size: 1200x630px (recommended OG dimensions)
- Fallback: If missing, omit og:image tag (Twitter requires it, optional for OG)

### 3.3 Per-Page Title/Description

Each page passes Props to Layout:

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Cursos | José Antonio" description="Cursos y certificaciones...">
  <!-- page content -->
</Layout>
```

| Page | title Prop | description Prop |
|------|-----------|------------------|
| index | "José Antonio - AdTech & Full Stack" | Portfolio intro (spec 4.4) |
| articulo-cursos | "Cursos \| José Antonio" | From spec 4.4 |
| articulo-proyectos | "Proyectos \| José Antonio" | From spec 4.4 |
| articulo-experiencia | "Experiencia \| José Antonio" | From spec 4.4 |
| articulo-educacion | "Educación \| José Antonio" | From spec 4.4 |
| articulo-header-bidding | "Header Bidding \| José Antonio" | From spec 4.4 |
| articulo-conocimientos | "Conocimientos \| José Antonio" | From spec 4.4 |
| articulo-sobre-mi | "Sobre Mí \| José Antonio" | From spec 4.4 |

### 3.4 Build-Time Generation

Sitemap generated during `npm run build`:
- Output: `dist/sitemap-index.xml`
- Includes all routes from `src/pages/`
- Lastmod dates auto-generated

---

## 4. Testing Approach

### 4.1 Preview Deploy

1. Run `npm run build`
2. Run `npm run preview` locally to verify
3. Deploy preview branch to Vercel
4. Test production URL: `https://tekylo.vercel.app`

### 4.2 Validation Commands

```bash
# Build verification
npm run build

# Check sitemap generated
ls -la dist/sitemap-index.xml

# Check robots.txt accessible
curl -I https://tekylo.vercel.app/robots.txt

# Check sitemap accessible
curl -I https://tekylo.vercel.app/sitemap-index.xml
```

### 4.3 Validator Tools

| Tool | URL | What to Check |
|------|-----|--------------|
| Google Rich Results Test | https://search.google.com/test/rich-results | JSON-LD Person schema |
| Schema Validator | https://validator.schema.org | JSON-LD syntax |
|Facebook OG Debugger | https://developers.facebook.com/tools/debug | Open Graph tags |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter Cards |

### 4.4 Manual Inspection

View page source and verify:
- [ ] `<title>` present with correct content
- [ ] `<meta name="description">` present
- [ ] `<link rel="canonical">` points to correct URL
- [ ] All 6 og:* meta tags present
- [ ] All 5 twitter:* meta tags present
- [ ] `<script type="application/ld+json">` present with valid JSON

---

## 5. Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| OG image 404 | Medium | Low | Verify `/jose.jpeg` exists in `public/` |
| Sitemap build error | Low | Medium | Test with `npm run build` before deploy |
| Invalid JSON-LD | Low | High | Validate at schema.org before deploy |
| Missing canonical URL | Low | Medium | Use absolute URLs in meta tags |

---

## 6. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @astrojs/sitemap | ^3.1.2 | Auto-generate sitemap.xml |

---

## 7. Acceptance Checkpoints

- [ ] `npm install` succeeds with new dependency
- [ ] `npm run build` completes without errors
- [ ] `dist/sitemap-index.xml` contains all 8 routes
- [ ] `/robots.txt` accessible at production URL
- [ ] All pages render with unique descriptions
- [ ] JSON-LD validates in Schema validator
- [ ] OG tags visible in page source
- [ ] Twitter Cards visible in page source