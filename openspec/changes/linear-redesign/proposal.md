# Proposal: Linear-Style Portfolio Redesign

## Intent

Redesign portfolio applying Linear.app's design system principles (dark-first, ultra-subtle borders, refined transitions) while preserving AdTech newspaper identity, replacing indigo accent with gold (#F3D34D).

## Scope

### In Scope
1. Layout.astro: Define CSS variables for Linear dark palette + gold accent
2. NewspaperHeader: Adapt typography and borders to Linear aesthetics
3. NavMenu: Minimal thin borders, smooth hover transitions
4. All ad components: Update design language (borders, shadows, spacing)
5. Footer: Adapt to Linear style
6. Article pages: Ensure style consistency

### Out of Scope
- New pages or sections
- Content changes
- Accessibility audit

## Capabilities

### New Capabilities
- `linear-design-system`: CSS variable system matching Linear dark palette with gold accent
- `smooth-transitions`: Unified transition timing across all components

### Modified Capabilities
None. Pure design refactor—preserves all existing functionality.

## Approach

1. Define Linear-style CSS variables in Layout.astro (dark backgrounds, subtle borders #2A2F3D, gold accent #F3D34D)
2. Apply consistent transitions (150ms ease)
3. Update each component incrementally, starting with global styles
4. Preserve Georgia fonts for newspaper identity

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/layouts/Layout.astro` | Modified | CSS variables, transitions |
| `src/components/NewspaperHeader.astro` | Modified | Borders, hover states |
| `src/components/NavMenu.astro` | Modified | Thin borders, transitions |
| `src/components/Footer.astro` | Modified | Linear style adaptation |
| `src/components/ads/*.astro` | Modified | Design language consistency |
| `src/components/NewspaperArticle.astro` | Modified | Style alignment |

## Risks

| Risk | Likelihood | Mitigation |
|------|----------|-------------|
| Design inconsistency during rollout | Medium | Incrementally update components |
| Gold accent contrast issues | Low | Use #F3D34D on dark already validated |

## Rollback Plan

Revert CSS variable changes in Layout.astro to previous commit. Original accent was --accent-primary: #d4a017 (light) / #f3d34d (dark).

## Dependencies

- None. Pure frontend design changes.

## Success Criteria

- [ ] All components use consistent Linear-inspired design
- [ ] Gold accent (#F3D34D) applied correctly
- [ ] Smooth transitions (150ms) across all interactive elements
- [ ] Newspaper identity preserved (Georgia fonts, AdTech branding)
- [ ] Dark mode default, light mode functional