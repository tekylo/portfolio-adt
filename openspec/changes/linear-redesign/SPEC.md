# Linear-Style Portfolio Redesign Specification

## Purpose

Define the Linear-inspired design system for the portfolio, applying dark-first aesthetics with ultra-subtle borders, gold accent (#F3D34D), and refined 150ms transitions while preserving the newspaper identity through Georgia typography.

---

## Requirements

### Requirement: Color Palette

The design system MUST define a complete dark-mode color palette aligned with Linear.app aesthetics.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0F1117` | Main background |
| `--bg-secondary` | `#161920` | Cards, elevated surfaces |
| `--bg-tertiary` | `#1C1F2B` | Hover states, input backgrounds |
| `--border-subtle` | `#2A2F3D` | Ultra-subtle borders (Linear signature) |
| `--border-default` | `#363B4D` | Default borders |
| `--text-primary` | `#EDEDEF` | Primary text |
| `--text-secondary` | `#A1A4B3` | Secondary text, labels |
| `--text-tertiary` | `#6B6E7A` | Disabled, placeholder |
| `--accent-primary` | `#F3D34D` | Gold accent (primary actions) |
| `--accent-hover` | `#F7DE6A` | Gold hover state |
| `--accent-muted` | `#3D3820` | Gold at 20% for subtle highlights |
| `--success` | `#5AB953` | Success states |
| `--error` | `#E54D4D` | Error states |

#### Scenario: Dark Background Applied

- GIVEN the portfolio is rendered
- WHEN the page loads
- THEN `--bg-primary` (#0F1117) MUST be applied to the body background

#### Scenario: Gold Accent on Interactive Elements

- GIVEN a button or link is rendered
- WHEN user hovers over the element
- THEN the accent color MUST transition to `--accent-hover` (#F7DE6A) over 150ms

---

### Requirement: Typography System

The design system MUST preserve newspaper identity through Georgia while enabling modern system-ui fallback.

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `Georgia, 'Times New Roman', serif` | Headlines, brand elements |
| `--font-body` | `system-ui, -apple-system, sans-serif` | Body text, UI elements |
| `--font-mono` | `'SF Mono', Monaco, monospace` | Code snippets |
| `--text-xs` | 0.75rem (12px) | Labels, captions |
| `--text-sm` | 0.875rem (14px) | Secondary text |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Large body |
| `--text-xl` | 1.25rem (20px) | Section headers |
| `--text-2xl` | 1.5rem (24px) | Page titles |
| `--text-3xl` | 2rem (32px) | Hero headlines |

#### Scenario: Headline Typography

- GIVEN a headline component is rendered
- WHEN the component displays text
- THEN `--font-display` (Georgia) MUST be applied
- AND the font-size MUST use `--text-2xl` or larger

#### Scenario: UI Typography

- GIVEN a navigation or button component is rendered
- WHEN the component displays text
- THEN `--font-body` (system-ui) MUST be applied

---

### Requirement: Border System

The design system MUST use ultra-subtle borders as the signature Linear aesthetic.

| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `#2A2F3D` | Default component borders |
| `--border-default` | `#363B4D` | Emphasized borders |
| `--border-radius-sm` | 4px | Small elements (buttons, inputs) |
| `--border-radius-md` | 6px | Cards, panels |
| `--border-radius-lg` | 8px | Large containers |

#### Scenario: Component Border Application

- GIVEN a card or panel component is rendered
- WHEN the component is displayed
- THEN `--border-subtle` (#2A2F3D) MUST be applied as a 1px border
- AND `--border-radius-md` (6px) MUST be applied when applicable

---

### Requirement: Transition System

The design system MUST define unified transition timing for all interactive elements.

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | 100ms | Quick feedback (hover) |
| `--transition-base` | 150ms | Default transitions (Linear standard) |
| `--transition-slow` | 300ms | Complex animations |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Ease-out curve |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Ease-in curve |

#### Scenario: Hover Transition

- GIVEN an interactive element (button, link, nav item)
- WHEN user hovers over the element
- THEN color and background transitions MUST complete in 150ms
- AND transition timing function MUST use `--ease-default`

#### Scenario: Focus Transition

- GIVEN a focusable element receives focus
- THEN outline or ring transition MUST complete in 100ms

---

### Requirement: Spacing Scale

The design system MUST define a consistent spacing scale.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Default element spacing |
| `--space-3` | 12px | Between related elements |
| `--space-4` | 16px | Section padding |
| `--space-5` | 20px | Component gaps |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section margins |
| `--space-10` | 40px | Large gaps |
| `--space-12` | 48px | Hero spacing |

#### Scenario: Card Padding

- GIVEN a card component is rendered
- THEN the internal padding MUST use `--space-4` (16px) minimum
- AND the border-radius MUST be `--border-radius-md` (6px)

#### Scenario: Navigation Spacing

- GIVEN navigation items are rendered
- THEN the gap between items MUST use `--space-3` (12px)

---

### Requirement: Component Patterns

The design system MUST define reusable component patterns.

#### Scenario: Button Pattern

- GIVEN a button component is rendered
- THEN it MUST apply:
  - Background: `--bg-tertiary` for default state
  - Background: `--accent-primary` for primary/CTA buttons
  - Border-radius: `--border-radius-sm` (4px)
  - Padding: `--space-2` (8px) horizontal, `--space-1` (4px) vertical
  - Transition: `--transition-base` (150ms) on hover

#### Scenario: Card Pattern

- GIVEN a card component is rendered
- THEN it MUST apply:
  - Background: `--bg-secondary` (#161920)
  - Border: 1px solid `--border-subtle` (#2A2F3D)
  - Border-radius: `--border-radius-md` (6px)
  - Padding: `--space-4` (16px)

#### Scenario: Input Pattern

- GIVEN an input component is rendered
- THEN it MUST apply:
  - Background: `--bg-tertiary` (#1C1F2B)
  - Border: 1px solid `--border-subtle` (#2A2F3D)
  - Border-radius: `--border-radius-sm` (4px)
  - Focus border: `--accent-primary` (#F3D34D)
  - Transition: `--transition-fast` (100ms) on focus

#### Scenario: Nav Item Pattern

- GIVEN a navigation item is rendered
- THEN it MUST apply:
  - Text color: `--text-secondary` initially
  - Border: none by default
  - Left border: 2px solid transparent
  - Left border: 2px solid `--accent-primary` on active state
  - Transition: `--transition-base` (150ms) on hover/active

#### Scenario: Link Pattern

- GIVEN a link component is rendered
- THEN it MUST apply:
  - Text color: `--text-primary` or `--accent-primary` for accent links
  - Text-decoration: none
  - Text-decoration: underline on hover (optional)
  - Transition: `--transition-base` (150ms) for color change

---

## Success Criteria

- [ ] All color tokens defined as CSS custom properties in Layout.astro
- [ ] Typography tokens include both Georgia and system-ui
- [ ] Border tokens use Linear signature #2A2F3D for subtle borders
- [ ] Transitions unified at 150ms ease-out curve
- [ ] Spacing scale follows 4px base unit
- [ ] Component patterns documented and applied consistently
- [ ] Gold accent (#F3D34D) used for all primary CTAs
- [ ] Dark mode is default; light mode functional via media query

---

## Edge Cases

### Requirement: Light Mode Support

The design system MUST support light mode while defaulting to dark.

- GIVEN user prefers light mode (prefers-color-scheme: light)
- THEN background tokens MUST flip to light values:
  - `--bg-primary`: `#FFFFFF`
  - `--bg-secondary`: `#F6F6F8`
  - `--text-primary`: `#0F1117`
- AND border tokens remain subtle: `#E5E5E7`

### Requirement: Reduced Motion

The design system MUST respect prefers-reduced-motion.

- GIVEN user has prefers-reduced-motion: reduce
- THEN all transition durations MUST be set to 0ms
- AND no animations should play