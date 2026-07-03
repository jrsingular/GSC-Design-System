# DESIGN.md — GSC Design System reference

A condensed, single-file design reference (the `DESIGN.md` convention) for AI
agents and quick human lookup. Full source in `css/`, live demo in `index.html`.

## Identity

**Global Sports Corporation** · tagline *Live the dream.* Investment-grade,
confident, restrained. Stadium-night dark; two brand flames (red + orange);
condensed all-caps headlines; warmth rationed.

## Colour tokens

```
--gsc-red:        #E32213   /* primary: 1 action / accent per view */
--gsc-red-deep:   #B01A0E   /* pressed / on-cream */
--gsc-orange:     #EA6020   /* secondary accent */
--gsc-crema:      #F2E4C8   /* the one anchor claim */
--gsc-ink:        #191A19   /* background */
--gsc-ink-soft:   #232423   /* raised surface */
--gsc-line:       #3A3B3A   /* hairline borders */
/* text ramp: --gsc-text (#fff) → --gsc-text-4 (#b7b8b7) → --gsc-text-ghost (#6f706f) */
/* semantic aliases: --color-bg --color-surface --color-border --color-primary --color-accent */
```

## Type

```
--font-display: 'Bebas Neue'   /* ALL-CAPS headlines, big numbers */
--font-ui:      'Montserrat'    /* labels, eyebrows, buttons */
--font-body:    'Roboto'        /* reading */
/* display ramp --fs-display-1 (132px) … -7; text --fs-lead … --fs-2xs */
```

## Spacing / radius / motion

```
--space-1..25   /* 4px grid: 4,8,12,16,20,24,28,32,40,44,56,72,100 */
--radius-sm/md/lg 12/14/16 · --radius-pill 100
--transition 0.25s · reveal 0.7s · honour prefers-reduced-motion
```

## Components (prefix `.gsc-`)

- **Layout:** `.gsc-wrap`, `.gsc-section` (`.is-soft`), `.gsc-pitch-texture`
- **Structure:** `.gsc-topbar`, `.gsc-hero`, `.gsc-marquee`, `.gsc-footer`
- **Type:** `.gsc-display-1..4`, `.gsc-eyebrow`, `.gsc-kicker`, `.gsc-section-head`, `.gsc-lead`
- **Buttons:** `.gsc-btn` × `--primary`/`--ghost`/`--crema` × `--sm`/`--lg`/`--block`
- **Cards:** `.gsc-card` × `--hover`/`--hover-accent`/`--pad-lg`; grids `.gsc-grid--2/3/4`
- **Badges:** `.gsc-badge` × `--primary`/`--accent`
- **Numbers:** `.gsc-stat-strip`, `.gsc-fact`, `.gsc-figure`
- **Bands:** `.gsc-band` × `--crema`/`--red`/`--tint`; `.gsc-arrow-list`
- **Data:** `.gsc-chart-card` + `.gsc-bar*`/`.gsc-axis-line`; `.gsc-table`
- **Forms:** `.gsc-field`, `.gsc-label`, `.gsc-input`, `.gsc-textarea`, `.gsc-select`
- **Motion:** `.gsc-reveal` (+ IntersectionObserver snippet in README)

## Channel matrix

| Channel | Background | Type ceiling | Red for | Stylesheet |
|---|---|---|---|---|
| Web / landing | Ink | 132px | CTAs, accents | core |
| Presentation | Ink + FONDOS | 104px | 1 / section | `css/presentation.css` |
| Mobile | Ink | 40px | action, values | `css/mobile.css` |
| Document | **Paper** | 46px | accents only | `css/print.css` |

## Copy in one line

Clarity beats cleverness · write the CTA first · numbers do the bragging ·
CTAs name the action ("Request the data room") · ration urgency. Full guide:
`docs/copywriting.md`.

## Do / don't

- ✅ One primary red action; orange secondary; crema once.
- ✅ Depth via hairlines + surface shifts.
- ✅ Documents dark-ink-on-paper; else dark-first.
- ❌ Raw hex/px literals. ❌ Shadows for depth. ❌ Hype words. ❌ Multiple competing CTAs.
