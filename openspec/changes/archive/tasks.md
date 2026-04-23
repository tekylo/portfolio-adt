# Tasks: SEO Meta Tags

## Task 1: Install @astrojs/sitemap package

**Description**: Install the sitemap package as a dev dependency.

**Files affected**:
- `package.json`

**Dependencies**: None

---

## Task 2: Configure sitemap in astro.config.mjs

**Description**: Add site URL and sitemap integration to Astro config.

**Files affected**:
- `astro.config.mjs`

**Dependencies**:
- Task 1

---

## Task 3: Add site config and env setup

**Description**: Set up environment variable handling for SITE in layout.

**Files affected**:
- `src/layouts/Layout.astro`

**Dependencies**:
- Task 2

---

## Task 4: Update Layout.astro with complete meta tags

**Description**: Add standard meta, Open Graph, and Twitter Card tags to Layout `<head>`.

**Files affected**:
- `src/layouts/Layout.astro`

**Dependencies**:
- Task 3

---

## Task 5: Create robots.txt

**Description**: Create robots.txt in public directory.

**Files affected**:
- `public/robots.txt`

**Dependencies**:
- Task 2 (site URL needed)

---

## Task 6: Add JSON-LD structured data

**Description**: Add Person schema JSON-LD script to Layout head.

**Files affected**:
- `src/layouts/Layout.astro`

**Dependencies**:
- Task 4

---

## Task 7: Build and verify

**Description**: Run build and verify sitemap, robots.txt, and meta tags are generated correctly.

**Files affected**:
- `dist/` (generated)

**Dependencies**:
- Tasks 1-6