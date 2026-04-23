# Specifications: SEO Meta Tags

## Overview

Comprehensive SEO implementation including meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, and robots.txt for the portfolio site.

---

## 1. Requirements

### 1.1 Standard Meta Tags

| Tag | Attribute | Source | Required |
|----|-----------|--------|----------|
| title | - | Props + site name | Yes |
| description | name="description" | Props (per-page) | Yes |
| canonical | rel="canonical" | Astro.url | Yes |
| viewport | name="viewport" | "width=device-width, initial-scale=1" | Yes |
| robots | name="robots" | "index, follow" | Yes |

### 1.2 Open Graph Tags

| Tag | Attribute | Source | Required |
|----|-----------|--------|----------|
| og:title | property="og:title" | Props title + site name | Yes |
| og:description | property="og:description" | Props description | Yes |
| og:image | property="og:image" | `/og-image.png` (absolute URL) | Yes |
| og:url | property="og:url" | Astro.url (canonical) | Yes |
| og:type | property="og:type" | "website" | Yes |
| og:site_name | property="og:site_name" | "José Antonio - AdTech & Full Stack" | Yes |

### 1.3 Twitter Card Tags

| Tag | Attribute | Source | Required |
|----|-----------|--------|----------|
| twitter:card | name="twitter:card" | "summary_large_image" | Yes |
| twitter:title | name="twitter:title" | Props title + site name | Yes |
| twitter:description | name="twitter:description" | Props description | Yes |
| twitter:image | name="twitter:image" | `/og-image.png` (absolute URL) | Yes |
| twitter:site | name="twitter:site" | "@joseantonioweb" | Yes |

### 1.4 JSON-LD Structured Data

Inline `<script type="application/ld+json">` in `<head>` with Schema.org Person:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "José Antonio",
  "url": "https://portfolio-jose-antonio.com",
  "jobTitle": "AdTech Expert & Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "sameAs": [
    "https://linkedin.com/in/jose-antonio-adtech",
    "https://github.com/joseantonio-dev",
    "https://twitter.com/joseantonioweb"
  ]
}
```

### 1.5 Sitemap

- Generated automatically via `@astrojs/sitemap`
- Includes all 8 pages from `src/pages/`
- Output: `dist/sitemap-index.xml` (Astro default)
- Configured in `astro.config.mjs`

### 1.6 Robots.txt

Location: `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://portfolio-jose-antonio.com/sitemap-index.xml
```

---

## 2. Scenarios

### 2.1 OG Image on WhatsApp

**Given** a user shares a portfolio page on WhatsApp
**When** the recipient opens the shared link
**Then** the preview shows the og:image with title and description
**And** tapping opens the full page in browser

### 2.2 OG Image on Twitter/X

**Given** a user posts a portfolio link on X (Twitter)
**When** the tweet renders as a card
**Then** the twitter:card displays with summary_large_image
**And** shows title, description, and og:image

### 2.3 Structured Data Validation

**Given** the page is submitted to Google Rich Results Test
**When** the tester parses the JSON-LD
**Then** it validates as a valid Person schema
**And** all required properties are detected

### 2.4 Sitemap Contains All Pages

**Given** the site builds successfully
**When** inspecting sitemap-index.xml
**Then** it contains all 8 routes:
- `/`
- `/articulo-cursos`
- `/articulo-proyectos`
- `/articulo-experiencia`
- `/articulo-educacion`
- `/articulo-header-bidding`
- `/articulo-conocimientos`
- `/articulo-sobre-mi`

### 2.5 Robots.txt Accessible

**Given** a user visits `https://portfolio-jose-antonio.com/robots.txt`
**When** the browser loads the page
**Then** it returns the robots.txt content with crawl directives
**And** includes the sitemap reference

---

## 3. Acceptance Criteria

### 3.1 Meta Tags in Head

- [ ] `<title>` tag present with page-specific title
- [ ] `<meta name="description">` present on every page
- [ ] `<link rel="canonical">` points to correct URL
- [ ] `<meta name="viewport">` with width=device-width
- [ ] `<meta name="robots">` with "index, follow"

### 3.2 Open Graph Tags

- [ ] All 6 OG meta tags present in `<head>`
- [ ] og:title includes site suffix for index page
- [ ] og:image uses absolute URL (https://...)
- [ ] og:url matches current page canonical

### 3.3 Twitter Card Tags

- [ ] All 5 Twitter meta tags present
- [ ] twitter:card set to "summary_large_image"
- [ ] twitter:site includes @ handle

### 3.4 JSON-LD Schema

- [ ] Inline `<script type="application/ld+json">` present
- [ ] Valid JSON syntax (no parse errors)
- [ ] Contains @type: "Person"
- [ ] Includes name, jobTitle, url, worksFor, sameAs

### 3.5 Sitemap

- [ ] Builds without errors
- [ ] sitemap-index.xml generated in dist/
- [ ] All 8 pages listed with correct URLs
- [ ] Lastmod dates present

### 3.6 Robots.txt

- [ ] File exists at public/robots.txt
- [ ] Contains "User-agent: *"
- [ ] Contains "Allow: /"
- [ ] Contains sitemap reference with absolute URL

### 3.7 Build

- [ ] `npm run build` completes without errors
- [ ] No console warnings about missing SEO tags
- [ ] Output HTML has all required tags in `<head>`

---

## 4. Technical Implementation

### 4.1 Layout.astro Props

```astro
interface Props {
  title: string;
  description?: string;
}
```

Default description: "Portfolio de José Antonio - AdTech Expert & Full Stack Developer"

### 4.2 Site URL Configuration

In `astro.config.mjs`:

```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-jose-antonio.com',
  integrations: [sitemap()]
});
```

### 4.3 File Modifications

| File | Action |
|------|--------|
| src/layouts/Layout.astro | Add SEO meta tags + JSON-LD + Props |
| astro.config.mjs | Add site URL + sitemap integration |
| public/robots.txt | Create new file |
| public/og-image.png | Create (1200x630px recommendation) |

### 4.4 Per-Page Descriptions

| Page | description Prop |
|------|------------------|
| index | "Portfolio de José Antonio - AdTech Expert & Full Stack Developer especializado en programática, bidding y tecnologías web modernas." |
| articulo-cursos | "Cursos y certificaciones de José Antonio en AdTech, Full Stack Development, Google Ads, Meta Business y más." |
| articulo-proyectos | "Proyectos destacados de José Antonio - soluciones AdTech, dashboards de analytics, aplicaciones web y más." |
| articulo-experiencia | "Experiencia profesional de José Antonio - AdTech, Full Stack, programmatic bidding y desarrollo web." |
| articulo-educacion | "Educación y formación de José Antonio - carreras, bootcamps, certificaciones y estudios continuos." |
| articulo-header-bidding | "Artículos sobre Header Bidding, programática y estrategias de monetización en publicidad digital." |
| articulo-conocimientos | "Conocimientos técnicos de José Antonio - JavaScript, TypeScript, Astro, React, Node.js y más." |
| articulo-sobre-mi | "Sobre José Antonio - AdTech Expert & Full Stack Developer con experiencia en programática y tecnologías web." |

---

## 5. Validation Commands

```bash
# Build and check for errors
npm run build

# Verify sitemap generation
ls -la dist/sitemap-index.xml

# Check robots.txt exists
curl -I https://portfolio-jose-antonio.com/robots.txt

# Validate JSON-LD (manual)
# Visit: https://validator.schema.org
# Enter URL or paste HTML
```

---

## 6. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @astrojs/sitemap | ^3.x | Auto-generate sitemap.xml |