# Tasks: Homepage Editorial Layout Redesign

## Phase 1: Layout Definition

- [x] 1.1 Refactor `src/pages/index.astro` to replace `.frontpage-grid` / `column-*` with an editorial lead block that places `sobre-mi` first, followed by 2 medium stories and 2 small stories.
- [x] 1.2 Keep the existing `PublicationAd` and other publicity wrappers in `src/pages/index.astro` in the same overall order after the lead-story block so ad flow does not change.

## Phase 2: Article Prominence Variants

- [x] 2.1 Update `src/components/FrontPageArticle.astro` props to support explicit prominence variants (`hero`, `secondary`, `brief` or equivalent) without changing article copy inputs.
- [x] 2.2 Rework `FrontPageArticle.astro` markup/styles so each prominence tier has distinct image ratio, title scale, spacing, and subtitle density while keeping current links, categories, and author rendering.
- [x] 2.3 Keep backward compatibility for current `size` usage or migrate `src/pages/index.astro` callers in the same change so no homepage article renders as an equal-card fallback.

## Phase 3: Responsive Integration

- [x] 3.1 Replace homepage CSS in `src/pages/index.astro` with breakpoint rules that preserve editorial hierarchy on desktop, degrade cleanly to tablet, and stack in clear reading order on mobile.
- [x] 3.2 Tune `src/components/FrontPageArticle.astro` responsive styles so the lead story still reads as most prominent on tablet/mobile without overflow, overlap, or clipped content.
- [x] 3.3 Update `src/data/articles.json` only if prominence metadata is strictly needed for layout wiring; preserve all existing titles, subtitles, categories, links, and author copy.

## Phase 4: Verification

- [x] 4.1 Verify in `src/pages/index.astro` that “Sobre mí” remains the largest and first-priority story, with 2 clearly medium stories and 2 clearly small stories.
- [x] 4.2 Verify across desktop, tablet, and mobile that publicity modules stay in their current homepage positions and do not displace editorial story slots.
- [x] 4.3 Review rendered homepage spacing/typography to confirm the page reads as an editorial front page rather than a uniform 3-column card grid.
