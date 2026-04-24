# homepage-editorial-frontpage Specification

## Purpose

Define a homepage composition that reads like a real newspaper front page, using asymmetry and editorial hierarchy instead of equal-card presentation.

## Requirements

### Requirement: Asymmetrical Front Page Composition

The homepage MUST present its lead stories in an asymmetrical editorial layout and MUST NOT render the main story block as a uniform set of equal cards.

#### Scenario: Desktop editorial hierarchy is visible

- GIVEN the homepage is rendered on desktop
- WHEN the lead story area is visible
- THEN the layout shows one dominant story plus secondary stories with unequal footprint
- AND the composition reads as an editorial front page rather than a balanced card grid

#### Scenario: Editorial asymmetry survives content rendering

- GIVEN all homepage stories are present
- WHEN the page loads
- THEN spacing, sizing, or placement differences preserve visible asymmetry
- AND no story tier is visually normalized into identical card dimensions

### Requirement: Sobre mí Remains the Lead Story

The “Sobre mí” article MUST remain the most prominent homepage story by position and size.

#### Scenario: Sobre mí leads the composition

- GIVEN the homepage is rendered on desktop
- WHEN a user scans the front page from top to bottom
- THEN “Sobre mí” appears in the primary lead position
- AND it occupies the largest visual area among all stories

#### Scenario: Sobre mí keeps priority on smaller screens

- GIVEN the homepage is rendered on tablet or mobile
- WHEN the layout reflows
- THEN “Sobre mí” remains the first-priority story in reading order
- AND its headline/media treatment still signals higher prominence than the rest

### Requirement: Secondary Stories Use Distinct Prominence Tiers

Remaining homepage stories MUST be distributed into differentiated medium and small prominence tiers.

#### Scenario: Medium and small stories are distinguishable

- GIVEN the homepage displays non-lead stories
- WHEN a user compares them visually
- THEN medium-tier stories show more visual weight than small-tier stories
- AND the difference is perceivable through size, placement, or content density

### Requirement: Responsive Layout Preserves Editorial Coherence

The homepage MUST remain coherent on tablet and mobile while preserving editorial hierarchy.

#### Scenario: Tablet layout keeps hierarchy

- GIVEN the homepage is rendered on tablet
- WHEN the lead area reflows
- THEN the composition remains scannable and ordered by prominence
- AND the lead, medium, and small tiers stay understandable without overlap or ambiguity

#### Scenario: Mobile layout stays readable

- GIVEN the homepage is rendered on mobile
- WHEN content stacks or compresses
- THEN the page keeps a clear top-to-bottom editorial reading order
- AND story hierarchy remains evident without relying on desktop-only positioning

### Requirement: Existing Publicity Modules Stay in Place

Existing ad/publicity modules MUST remain in their current homepage positions and SHALL remain compatible with the new editorial layout.

#### Scenario: Publicity modules are preserved

- GIVEN the homepage editorial layout is applied
- WHEN the page is rendered across supported breakpoints
- THEN existing ad/publicity modules remain present in their established locations
- AND they do not displace or replace editorial story slots
