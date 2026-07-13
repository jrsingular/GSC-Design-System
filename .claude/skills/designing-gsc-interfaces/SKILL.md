---
name: designing-gsc-interfaces
description: Builds product UI and web interfaces with the Global Sports Corporation (GSC) design system — using its tokens and components for web apps, mobile apps, dashboards, forms, and data views. Use when building or styling any GSC screen or component, when the user mentions GSC UI, components, buttons, cards, tokens, or asks to make an interface on-brand.
---

# Designing GSC Interfaces

Build screens from the GSC design system: consume **tokens**, compose
**components**, respect the **channel matrix**. Never hard-code a raw hex, size,
or radius — reach for a token. The system is border-led and flat: depth comes
from hairlines and surface shifts, not shadows.

For brand foundations use `building-gsc-brand`; for copy use `writing-gsc-copy`.

## Setup

Import one stylesheet, then compose with `.gsc-` classes:

```html
<link rel="stylesheet" href="dist/gsc-design-system.css">
```

Channel add-ons load *after* the core: `css/presentation.css` (16:9 decks),
`css/mobile.css` (app shell), `css/print.css` (documents — inverted palette).

## Core rules

1. **Tokens only.** Colour/space/type/radius come from `--gsc-*` / semantic aliases. No literals.
2. **One primary action per view** (`.gsc-btn--primary`); rest are `--ghost`.
3. **Ration red & crema.** One red accent, one crema anchor per surface.
4. **Alternate surfaces**, don't box everything: `.gsc-section` ⟷ `.gsc-section.is-soft`.
5. **Accessibility is not optional:** keep the `:focus-visible` ring, honour `prefers-reduced-motion`, label every control, AA contrast on ink.

## Component quick-map

| Need | Class |
|---|---|
| Page column | `.gsc-wrap`, `.gsc-section` (`.is-soft`) |
| Hero | `.gsc-hero` + `.gsc-eyebrow` + `.gsc-display-1` |
| Button | `.gsc-btn` × `--primary` / `--ghost` / `--crema`, `--sm`/`--lg`/`--block` |
| Card | `.gsc-card` + `--hover` / `--hover-accent` / `--pad-lg`; grids `.gsc-grid--2/3/4` |
| Badge | `.gsc-badge` × `--primary` / `--accent` |
| Numbers | `.gsc-stat-strip`, `.gsc-fact`, `.gsc-figure` |
| Bands | `.gsc-band` × `--crema` / `--red` / `--tint` |
| Data | `.gsc-chart-card` + `.gsc-bar*`; `.gsc-table` |
| Forms | `.gsc-field`, `.gsc-label`, `.gsc-input`, `.gsc-textarea` |

## Program skins (v3)

To build for one of GSC's seven academies, set `data-program` on a root element
— the skin re-tokens colour + display font while spacing/radius/motion stay
corporate:

```html
<body data-program="juventus-academy">  <!-- or gsa · gba · gra · nido-aguila · ser-portero · baby-juve -->
```

All components work unchanged under a skin (they consume tokens). Rules:
values come from `tokens/programs/*.tokens.json` — never hard-code or invent a
program colour; program accents on dark are **large-text-only** in GSA, GBA,
GRA and Ser Portero (body text stays white/the program body tint — see
`docs/accessibility.md`); Morganite is bundled and self-hosted, other program
display fonts are proprietary and load only if the consuming project has them.

## Channel matrix

| Channel | Background | Type ceiling | Red for | Notes |
|---|---|---|---|---|
| Web / landing | Ink (dark) | 132px | CTAs, accents | full motion & hover |
| Presentation | Ink + FONDOS | 104px | 1 moment / section | 16:9, one idea per slide |
| Mobile | Ink (dark) | 40px | primary action, values | 44px touch target, body 16px |
| Document | **Paper (light)** | 46px | accents only | palette **inverts** |

## References (read as needed)

- **Tokens** → repo `css/tokens.css` · **DTCG export** → `tokens/gsc.tokens.json`
- **Components** → repo `css/components.css`, live demo `index.html`
- **Channel guides** → repo `docs/` (presentations, mobile, documents, landing-pages, forms)
- **Landing pages specifically** → use `designing-gsc-landing-pages`

## Compliance checklist

- [ ] No raw hex/px literals — tokens only.
- [ ] Exactly one primary button per view.
- [ ] Red once, crema at most once per surface.
- [ ] Focus rings intact; reduced-motion honoured; controls labelled.
- [ ] Correct channel stylesheet loaded; document surfaces inverted.
- [ ] Grids/stat-strips collapse correctly on mobile.

## Evaluations

1. *"Build a GSC pricing card grid."* → `.gsc-grid--3` of `.gsc-card--hover`, tokens only, one CTA.
2. *"Style this form for the data room."* → `.gsc-field`/`.gsc-input`, one `--primary --block` submit, labels present.
3. *"Make a KPI row for the dashboard."* → `.gsc-stat-strip` or `.gsc-fact` grid, Bebas numbers, orange units.
