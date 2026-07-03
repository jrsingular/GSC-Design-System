# GSC Design System

**Global Sports Corporation — _Live the dream._**

A brand & product design system distilled from the GSC investment prospectus
and extended into a reusable toolkit: design tokens, three-voice typography,
and 20+ components. It keeps every prospectus, pitch deck and product surface
speaking the same investment-grade language.

> This system is derived from the prospectus you liked — the ink-dark palette,
> the two brand flames (red + orange), the trophy-parchment "crema" surface,
> and the Bebas / Montserrat / Roboto type stack — then formalised into tokens
> and generalised components, with the missing product pieces (buttons, forms,
> tables) added in the same voice.

---

## Quick start

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/gsc-design-system.css">
</head>
<body>
  <section class="gsc-hero">
    <div class="gsc-hero__inner">
      <div class="gsc-eyebrow">Football Investment Opportunity</div>
      <h1 class="gsc-display-1">Comunicaciones <span class="gsc-accent">FC</span></h1>
      <p class="gsc-hero__sub">A crown no one else wears.</p>
      <a class="gsc-btn gsc-btn--primary" href="#">Request the data room</a>
    </div>
  </section>
</body>
</html>
```

One stylesheet gets you everything (fonts included via `@import`). Open
**[`index.html`](index.html)** for the living style guide — the visual
reference for every token and component.

---

## What's in the box

```
GSC-Design-System/
├── index.html                     # Living style guide (start here)
├── dist/
│   └── gsc-design-system.css      # Bundled build — the one file to import
├── css/                           # Modular source
│   ├── fonts.css                  #   00 · Google Fonts import
│   ├── tokens.css                 #   01 · Design tokens (single source of truth)
│   ├── base.css                   #   02 · Reset, base type, layout primitives
│   ├── typography.css             #   03 · Named type styles
│   ├── utilities.css              #   04 · Layout/spacing helpers
│   └── components.css             #   05 · All components
├── assets/
│   └── gsc-logo.png               # Brand mark
├── examples/
│   └── prospectus.html            # The original prospectus (reference)
├── build.sh                       # Concatenates css/ → dist/
└── README.md
```

Import the modular files during development or the single `dist/` bundle in
production. Run `./build.sh` to regenerate the bundle after editing any source
file.

---

## Foundations

### Colour

| Token | Value | Use |
|---|---|---|
| `--gsc-red` | `#E32213` | Primary — CTAs, accents, the "SPORTS" red |
| `--gsc-red-deep` | `#B01A0E` | Pressed / on-cream red |
| `--gsc-orange` | `#EA6020` | Accent — the running figure, secondary highlights |
| `--gsc-crema` | `#F2E4C8` | Warm feature surface (the anchor claim) |
| `--gsc-ink` | `#191A19` | App background |
| `--gsc-ink-soft` | `#232423` | Raised surface / alternating sections |
| `--gsc-line` | `#3A3B3A` | Hairline borders (the system is border-led, not shadow-led) |

Text runs a seven-step neutral ramp (`--gsc-text` → `--gsc-text-ghost`) for
high-to-low emphasis. Components consume **semantic aliases**
(`--color-primary`, `--color-surface`, `--color-border`, …), so you can re-skin
the whole system by editing `tokens.css` alone.

### Typography — three voices

| Voice | Family | Role |
|---|---|---|
| **Display** | Bebas Neue | Condensed all-caps headlines & big numbers |
| **UI** | Montserrat | Eyebrows, labels, buttons, structural text |
| **Body** | Roboto | Long-form reading |

Fluid display ramp (`--fs-display-1` … `-7`) plus a text ramp
(`--fs-lead` … `--fs-2xs`). Named styles: `.gsc-display-1..4`, `.gsc-eyebrow`,
`.gsc-section-num`, `.gsc-kicker`, `.gsc-lead`, `.gsc-prose`, `.gsc-body`.

### Spacing

A 4px grid exposed as `--space-1` (4px) → `--space-25` (100px, the section
rhythm). Utility classes (`.gsc-gap-*`, `.gsc-mt-*`, `.gsc-mb-*`) cover common
layout without new CSS.

### Radii, motion, elevation

`--radius-sm/md/lg` (12/14/16px) and `--radius-pill`. Motion is a single
`--transition` (`0.25s`) with a slow `0.7s` for scroll reveals. The system is
intentionally flat and border-led; shadow tokens (`--shadow-*`) exist for
lifted UI (modals, menus) the prospectus didn't need.

---

## Components

All components are prefixed `.gsc-`. Highlights:

- **Layout** — `.gsc-wrap`, `.gsc-section` (`.is-soft`), `.gsc-pitch-texture`
- **Structure** — `.gsc-topbar`, `.gsc-hero`, `.gsc-footer`, `.gsc-marquee`
- **Type blocks** — `.gsc-section-head`, `.gsc-eyebrow`, `.gsc-kicker`
- **Buttons** *(new)* — `.gsc-btn` × `--primary` / `--ghost` / `--crema`, sizes `--sm` / `--lg`
- **Cards** — `.gsc-card` with `--hover` / `--hover-accent` / `--pad-lg`; grids `.gsc-grid--2/3/4`
- **Badges** — `.gsc-badge` × `--primary` / `--accent`
- **Numbers** — `.gsc-stat-strip`, `.gsc-fact`, `.gsc-figure`
- **Lists** — `.gsc-rows` / `.gsc-row`, `.gsc-ledger`
- **Bands** — `.gsc-band` × `--crema` / `--red` / `--tint`, with `.gsc-arrow-list`
- **Data** — `.gsc-chart-card` + SVG bar classes (`.gsc-bar`, `.gsc-bar-value`, `.gsc-axis-line`), `.gsc-table` *(new)*
- **Forms** *(new)* — `.gsc-field`, `.gsc-label`, `.gsc-input`, `.gsc-textarea`, `.gsc-select`
- **Motion** — `.gsc-reveal` (see snippet below)

### Reveal-on-scroll

The one behaviour the system ships. Add `.gsc-reveal` to any element and drop
this in:

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.gsc-reveal').forEach((el) => io.observe(el));
```

---

## Principles

1. **One source of truth.** Raw values live only in `tokens.css`. Components
   consume tokens, never hex.
2. **Border-led, not shadow-led.** Depth comes from hairlines and surface
   shifts — it reads as precise and editorial.
3. **Caps for impact, sans for reading.** Bebas headlines earn their weight
   because the body copy stays calm.
4. **Crema and red are rationed.** The parchment band is for the single most
   important claim; solid red is for urgency. Overuse dilutes both.
5. **Accessible by default.** Visible focus rings, `prefers-reduced-motion`
   honoured, semantic HTML, AA-minded contrast on ink.

---

## Accessibility

- Focus-visible outlines on all interactive elements (never removed).
- `prefers-reduced-motion` disables animation and smooth scroll.
- Neutral text ramp is tuned for contrast on `--gsc-ink`; keep body copy at
  `--gsc-text-4` or lighter on dark surfaces.
- Charts pair SVG with `role="img"` + `aria-label`; mirror data in a
  `.gsc-table` where possible.

---

## Fonts in production

`fonts.css` loads the three families from Google Fonts for convenience.
Self-host the WOFF2 files for production and replace the `@import` — the token
stacks already include system fallbacks (`Oswald`/`Arial Narrow` for display,
`system-ui` for UI/body).

---

_GSC Design System · v1.0 · Global Sports Corporation · Live the dream._
