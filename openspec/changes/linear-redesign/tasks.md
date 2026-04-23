# Tasks: Linear-Style Portfolio Redesign

## Phase 1: Foundation — Global Design System

- [x] 1.1 Define CSS color tokens in `src/layouts/Layout.astro`: `--bg-primary` (#0F1117), `--bg-secondary` (#161920), `--bg-tertiary` (#1C1F2B)
- [x] 1.2 Define border tokens: `--border-subtle` (#2A2F3D), `--border-default` (#363B4D), radius scale (4px/6px/8px)
- [x] 1.3 Define accent tokens: `--accent-primary` (#F3D34D), `--accent-hover` (#F7DE6A), `--accent-muted` (#3D3820)
- [x] 1.4 Define typography tokens: `--font-display` (Georgia), `--font-body` (system-ui), full type scale (xs → 3xl)
- [x] 1.5 Define transition tokens: `--transition-fast` (100ms), `--transition-base` (150ms), `--transition-slow` (300ms), ease curves
- [x] 1.6 Define spacing scale: `--space-1` through `--space-12` (4px base unit)
- [x] 1.7 Add light mode media query override (bg-primary: #FFFFFF, bg-secondary: #F6F6F8)
- [x] 1.8 Add `prefers-reduced-motion` check to disable transitions

## Phase 2: Core Components

- [x] 2.1 Update `NewspaperHeader.astro`: Apply `--border-subtle` 1px border, Georgia font display, `--transition-base` on hover
- [x] 2.2 Update `NavMenu.astro`: Add `--text-secondary` default text, 2px left border on active (gold), `--transition-base` (150ms)
- [x] 2.4 Update `BillboardAd.astro`: Apply card pattern (bg-secondary, border-subtle, radius-md, space-4 padding)
- [x] 2.5 Update `MediumRectangleAd.astro`: Apply card pattern with consistent spacing
- [x] 2.6 Update `LeaderboardAd.astro`: Apply card pattern with horizontal layout adaptation
- [ ] 2.3 Update footer: Apply `--bg-secondary` background, `--border-subtle` border, system-ui font

## Phase 3: Article & Integration

- [ ] 3.1 Update `NewspaperArticle.astro`: Apply `--text-primary` body, `--font-display` headlines, subtle borders
- [ ] 3.2 Verify all components reference CSS variables (no hardcoded colors)
- [ ] 3.3 Ensure consistent `--transition-base` across all interactive elements

## Phase 4: Testing & Verification

- [ ] 4.1 Test dark mode: body bg #0F1117, borders #2A2F3D visible, gold accent on CTAs
- [ ] 4.2 Test light mode: toggle via prefers-color-scheme, verify #FFFFFF bg, subtle borders
- [ ] 4.3 Test responsive: verify spacing/typography scales at mobile (< 768px) and desktop (> 1024px)
- [ ] 4.4 Test hover transitions: all interactive elements transition within 150ms
- [ ] 4.5 Test reduced motion: verify `prefers-reduced-motion: reduce` disables animations
- [ ] 4.6 Visual check: newspaper identity preserved (Georgia headlines), Linear aesthetics applied (subtle borders, gold accent)

## Phase 5: Cleanup (if needed)

- [ ] 5.1 Remove any hardcoded color overrides found during testing
- [ ] 5.2 Add comments to Layout.astro documenting the design token system