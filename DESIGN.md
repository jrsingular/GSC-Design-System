# DESIGN.md — GSC Design System reference

> **Proprietary & Confidential — © 2026 Global Sports Corporation. All rights reserved.**
> Brand values confirmed by **Luisa León** (GSC Brand & Communications). Do not
> edit palette, typography, or voice values without her approval.

A single-file design reference for AI agents and quick human lookup. Full source
in `css/`, `tokens/`, live demo in `index.html`. GSC is a **multi-program
sports-development ecosystem** — this system defines one corporate identity plus
seven program brands, each with its own confirmed palette, type, and voice.

---

## Route first — which brand is this task?

> **Before anything else, resolve which of the seven programs (or corporate) the task is
> for, and use only that brand.** This is the system's first rule. The canonical routing
> map is [`programs/registry.json`](programs/registry.json); the decision procedure,
> ambiguity rule ("fútbol/soccer" is ambiguous across Global Soccer, Juventus, and Baby
> Juve — ask), and no-mixing rule are in [`docs/program-routing.md`](docs/program-routing.md).
> One surface = one brand. Use `corporate` only for group/investor/ecosystem work. Everything
> below assumes you have already routed.

---

## 0 · Architecture — corporate base + program overrides

GSC runs a **two-layer token system**:

1. **Corporate base** (`tokens/gsc.tokens.json`) — the GSC parent brand. Defines
   spacing, radius, motion, the neutral ink ramp, and the corporate red/orange/
   crema palette. Shared by every surface that speaks *as GSC* (investor decks,
   corporate site, group-level communications).
2. **Program overrides** (`programs/*/tokens.json`) — one per academy.
   Each inherits the corporate base (spacing, radius, motion, type ramp) and
   overrides **color** and **font family** with that program's confirmed brand.

A program token file never redefines spacing/radius/motion — it only skins color
and type. This keeps the system coherent while letting each academy look like
itself. The build (Style Dictionary) compiles both layers into per-platform
outputs (CSS, SCSS, JS, iOS, Android).

**Organization is program-first**: the shared corporate system lives in `css/`
and `tokens/gsc.tokens.json`; each academy is a self-contained folder under
`programs/<slug>/` holding everything about that brand.

```
tokens/gsc.tokens.json         # corporate base (red/orange/crema/ink + type + space)
css/                           # shared system (base, components, typography, channels…)
programs/                      # one self-contained folder per academy
  gsa/                         # Global Soccer Academy
    tokens.json                #   DTCG brand tokens (canonical source)
    skin.css                   #   [data-program="gsa"] palette + font override
    brand.md                   #   full brand sheet
    logos/                     #   logo files
    _source/                   #   Open Knowledge Pack (provenance)
  gba/ · gra/ · nido-aguila/ · ser-portero/ · juventus-academy/ · baby-juve/
```

---

## 1 · Corporate identity (GSC parent)

**Global Sports Corporation** · tagline *Live the dream.* Investment-grade,
confident, restrained. Stadium-night dark; two brand flames (red + orange);
condensed all-caps headlines; warmth rationed. This is the voice for corporate,
investor, rights, and group-level work — **not** for individual academy comms.

### Colour tokens

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

### Type (corporate)

```
--font-display: 'Bebas Neue'   /* ALL-CAPS headlines, big numbers */
--font-ui:      'Montserrat'    /* labels, eyebrows, buttons */
--font-body:    'Roboto'        /* reading */
/* display ramp --fs-display-1 (132px) … -7; text --fs-lead … --fs-2xs */
```

### Spacing / radius / motion (shared by ALL programs)

```
--space-1..25   /* 4px grid: 4,8,12,16,20,24,28,32,40,44,56,72,100 */
--radius-sm/md/lg 12/14/16 · --radius-pill 100
--transition 0.25s · reveal 0.7s · honour prefers-reduced-motion
```

---

## 2 · Program brands (confirmed)

Each program has its own brand sheet at `programs/<slug>/brand.md`. This table is the
quick reference; the token files are the source of truth.

| Program | Primary | Accent | Surface | Display font | UI font | Voice |
|---|---|---|---|---|---|---|
| **GSC corporate** | `#E32213` red | `#EA6020` orange | `#191A19` ink | Bebas Neue | Montserrat | investment-grade, restrained |
| **Global Soccer Academy** | `#E7290F` red | `#F07D04` orange | `#191919` ink | Morganite | Montserrat | aspiracional, profesional, deportiva |
| **Global Basketball Academy** | `#FE0000` red | `#A3A6A9` steel | `#1C1C1C` ink | Academic M54 ⚠️ | Redwing + Montserrat | aspiracional, ambiente basquetbolista |
| **Global Running Academy** | `#EE8A04` orange | `#E53518` red | `#1A1A1A` dark | Unison Pro ⚠️ | Montserrat | emocional, atlética, profesional |
| **Nido Águila Guatemala** | `#F8E602` yellow | `#FFFFFF` white | `#111A2D` navy | Morganite | ITC Avant Garde Gothic Pro ⚠️ | aspiracional, locución de estadio |
| **Ser Portero** | `#916E35` gold | `#FFFFFF` white | `#000000` black | Headline Gothic ATF ⚠️ | Montserrat | emocional, atlética, inspiracional |
| **Juventus Academy GT** | `#F9C016` yellow | `#FFFFFF` white | `#000000` black | JuventusFans ⚠️ | Montserrat | aspiracional, alto rendimiento |
| **Baby Juve** | `#F9C016` yellow | `#FFFFFF` white | `#000000` black | JuventusFans ⚠️ | Montserrat | divertido, infantil deportivo |

> ⚠️ = proprietary font, **not bundled** in this repo (see §4). Use the named
> family with a generic fallback; never substitute a different typeface.

### Brand-accuracy rule (non-negotiable)

Every palette hex and font name above was **confirmed by Luisa León**. Do not
substitute, "improve," or invent values. If a value seems wrong, the fix is to
**ask Luisa**, not to change the token. Earlier versions of this file contained
invented program palettes — those have been removed. The token files
(`programs/*/tokens.json`) are the canonical source.

---

## 3 · Per-program detail

### Global Soccer Academy (GSA)
- **Palette** `#191919` `#E7290F` `#F07D04` `#FFFFFF` — confirmed.
- **Fonts** Morganite (primary, Google Fonts — bundled in `assets/fonts/`) +
  Montserrat (secondary).
- **Voice** aspiracional, profesional, deportiva.
- **Logos** `programs/gsa/logos/` — `gsa-logo-color.png`, `.jpg`, `gsa-logo-line-art.ai`.
- **Full sheet** → `programs/gsa/brand.md`

### Global Basketball Academy (GBA)
- **Palette** `#1C1C1C` `#FE0000` `#A3A6A9` `#FFFFFF` — confirmed.
- **Fonts** Academic M54 (primary, proprietary) + Redwing (proprietary) +
  Montserrat (secondary).
- **Voice** aspiracional, profesional, deportiva, ambiente basquetbolista.
- **Logos** `programs/gba/logos/` — `gba-logo-color.png`, `.jpg`.
- **Full sheet** → `programs/gba/brand.md`

### Global Running Academy (GRA)
- **Palette** `#EE8A04` `#E53518` `#FFFFFF` — confirmed.
- **Fonts** Unison Pro (primary, proprietary) + Montserrat (secondary).
- **Voice** emocional, atlética, profesional.
- **Logos** `programs/gra/logos/` — `gra-logo-color.png`, `.jpg`.
- **Full sheet** → `programs/gra/brand.md`

### Nido Águila Guatemala
- **Palette** `#F8E602` `#FFFFFF` `#111A2D` (Club América) — confirmed.
- **Fonts** Morganite (primary, Google Fonts — bundled) + ITC Avant Garde Gothic
  Pro (secondary, proprietary).
- **Voice** aspiracional, profesional, deportiva Club América, locución de
  estadio. **Slogan:** *Grandes de corazón.*
- **Partner** Club América de México (official).
- **Logos** `programs/nido-aguila/logos/` — `nido-aguila-logo-color.png`, `-alt.png`.
- **Full sheet** → `programs/nido-aguila/brand.md`

### Ser Portero
- **Palette** `#916E35` (marrón/oro) `#FFFFFF` `#000000` — confirmed.
- **Fonts** Headline Gothic ATF (primary, proprietary — regular + Rough) +
  Montserrat (secondary).
- **Voice** emocional, atlética, profesional e inspiracional.
- **Slogans** *El Ser está antes que el portero* · *Tu mente dirige tu parada.*
- **Logos** `programs/ser-portero/logos/` — `ser-portero-logo-color.png`,
  `-alt.png`, `ser-portero-symbol.png`.
- **Full sheet** → `programs/ser-portero/brand.md`

### Juventus Academy Guatemala
- **Palette** `#000000` `#FFFFFF` `#F9C016` (Juventus yellow) — confirmed.
- **Fonts** JuventusFans-Bold + JuventusFans-Boldinline (primary, proprietary
  Juventus FC custom fonts) + Montserrat (secondary).
- **Voice** aspiracional, divertido, profesional como equipo de alto rendimiento.
- **Philosophy** *Formamos personas antes que jugadores.* Methodology: Juventus
  Way (Style of Play, Technical, Tactical, Mental, Emotional & Social).
- **Partner** Juventus FC (official licensed academy).
- **Logos** `programs/juventus-academy/logos/` — `juventus-academy-logo-color.png`,
  `-mono.png`.
- **Full sheet** → `programs/juventus-academy/brand.md`

### Baby Juve
- **Inherits Juventus Academy branding** — same palette, same fonts.
- **Voice differs:** divertido, infantil deportivo, emocionante.
- **Program** iniciación deportiva, ages 3–5, non-competitive, Juventus Academy
  methodology with introduction to Italian language.
- **Logos** `programs/baby-juve/logos/` — `baby-juve-logo-color.png`.
- **Full sheet** → `programs/baby-juve/brand.md`

---

## 4 · Fonts & licensing

| Font | License | Bundled? | Used by |
|---|---|---|---|
| Morganite | Google Fonts (OFL) | ✅ `assets/fonts/` | GSA, Nido Águila |
| Montserrat | Google Fonts (OFL) | referenced via CDN | GSA, GBA, GRA, Nido Águila, Ser Portero, Juventus, Baby Juve (secondary) |
| Bebas Neue | Google Fonts (OFL) | referenced via CDN | GSC corporate |
| Roboto | Google Fonts (OFL) | referenced via CDN | GSC corporate |
| JuventusFans-Bold / -Boldinline | **Proprietary (Juventus FC)** | ❌ no | Juventus Academy, Baby Juve |
| Academic M54 | **Proprietary** | ❌ no | GBA |
| Redwing (Light/Medium) | **Proprietary** | ❌ no | GBA |
| Unison Pro | **Proprietary** | ❌ no | GRA |
| ITC Avant Garde Gothic Pro | **Proprietary** | ❌ no | Nido Águila |
| Headline Gothic ATF | **Proprietary** | ❌ no | Ser Portero |

**Proprietary fonts are NOT committed to this repository** — redistributing them
would breach their licenses. They are named in the token files with a generic
fallback (`Impact`, `sans-serif`). Authorized GSC designers obtain the real
files from **Luisa León** and install them locally; production builds reference
them by family name only. Never substitute a different typeface for a
proprietary font — if it is unavailable, fall back to the named generic and flag
it, do not silently swap in a "similar" face.

---

## 5 · Components (prefix `.gsc-`)

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

Program skins are applied by setting a `data-program` attribute on a root
element (e.g. `<body data-program="gsa">`); the compiled program CSS variables
override the corporate defaults for that subtree. See `programs/<slug>/brand.md` for
usage.

---

## 6 · Channel matrix

| Channel | Background | Type ceiling | Red for | Stylesheet |
|---|---|---|---|---|
| Web / landing | Ink | 132px | CTAs, accents | core |
| Presentation | Ink + FONDOS | 104px | 1 / section | `css/presentation.css` |
| Mobile | Ink | 40px | action, values | `css/mobile.css` |
| Document | **Paper** | 46px | accents only | `css/print.css` |

Program channels inherit the matrix but swap the palette and display font per
the program's token file.

---

## 7 · Copy in one line

Clarity beats cleverness · write the CTA first · numbers do the bragging ·
CTAs name the action ("Request the data room") · ration urgency. Full guide:
`docs/copywriting.md`. Program voice overrides apply on `data-program` scopes.

---

## 8 · Do / don't

- ✅ One primary action per view; accent secondary; crema (corporate) once.
- ✅ Depth via hairlines + surface shifts.
- ✅ Documents dark-ink-on-paper; else dark-first.
- ✅ Use the **confirmed** program palette from the token file — never a guess.
- ❌ Raw hex/px literals. ❌ Shadows for depth. ❌ Hype words. ❌ Multiple competing CTAs.
- ❌ Substituting a font for a named proprietary face. ❌ Inventing palette values.

---

## 9 · Governance

- **Brand approval:** Luisa León approves all designs and any change to palette,
  typography, or voice values.
- **Token changes:** edit `programs/*/tokens.json`, run `npm run tokens`,
  open a PR. Do not edit generated `build/` files directly.
- **Asset additions:** drop logos into `programs/{slug}/logos/` using the
  nomenclature in `docs/asset-manifest.md`; update the manifest in the same PR.
- **Full governance** → `docs/governance.md` (roles, sources of truth, change
  workflows); operational matters live in the Open Knowledge Pack (`SOUL.md`).
