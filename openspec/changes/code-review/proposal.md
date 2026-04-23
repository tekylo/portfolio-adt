# Proposal: Code Review - Portfolio Quality Audit

## Intent

Conduct comprehensive code review of the Astro portfolio to identify code quality issues, code smells, potential bugs, accessibility gaps, and performance bottlenecks across all 8 pages and main components. Goal: deliver actionable refactoring recommendations.

## Scope

### In Scope
- Manual review of all 8 `.astro` pages in `src/pages/`
- Review `src/layouts/Layout.astro`
- Review main components: `NavMenu.astro`, `ThemeToggle.astro`, `AdBanner.astro`, `ThemeToggle.astro`
- Check for: duplicate code, HTML semantics, accessibility (WCAG), performance, SEO issues

### Out of Scope
- Writing fixes (only recommendations)
- Automated testing setup
- Review of SVG logo components (~80 files)

## Capabilities

### New Capabilities
None — this is a review-only change.

### Modified Capabilities
None — spec-level behavior unchanged.

## Approach

1. **Page-by-page manual review**: Scan each `.astro` page for:
   - Semantic HTML (header, main, footer, article, section)
   - Duplicate code patterns
   - CSS organization issues (inline styles vs classes)
   - Accessibility: alt text, ARIA labels, keyboard navigation
   - SEO: meta tags, heading hierarchy

2. **Component review**: Check shared components for:
   - Props validation
   - Consistent patterns across similar components
   - Reusability issues

3. **Output**: Compile findings into structured report with severity, location, and recommendation per issue.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/*.astro` | Modified | 8 pages reviewed |
| `src/layouts/Layout.astro` | Modified | Review base layout |
| `src/components/*.astro` | Modified | Main components reviewed |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Subjective code style opinions | Medium | Focus on objective issues (bugs, a11y, perf) |
| Large volume of findings | High | Prioritize by severity (must-fix / should-fix / nice-to-fix) |

## Rollback Plan

N/A — this is a review-only change. No code modifications.

## Dependencies

None — pure manual review.

## Success Criteria

- [ ] All 8 pages reviewed and documented
- [ ] Layout.astro reviewed
- [ ] At least 5 main components reviewed
- [ ] Report includes severity, file path, line (if applicable), issue, recommendation
- [ ] Findings grouped by category: code-smells, bugs, accessibility, performance, seo

---

**Next**: sdd-spec (write specs for each identified issue) or sdd-tasks (create implementation task list if approved).