# GSC Design System

**Global Sports Corporation — _Live the dream._**

![version](https://img.shields.io/badge/version-3.3.0-E32213)
![license](https://img.shields.io/badge/license-Proprietary%20%26%20Confidential-B01A0E)
![tokens](https://img.shields.io/badge/tokens-W3C%20DTCG-EA6020)
![skills](https://img.shields.io/badge/AI%20skills-5-E32213)
![channels](https://img.shields.io/badge/channels-web%20·%20deck%20·%20mobile%20·%20print-191A19)
![programs](https://img.shields.io/badge/programs-7%20academies-F9C016)

> **Proprietary & Confidential — © 2026 Global Sports Corporation. All rights reserved.**
> This repository and its contents are the confidential property of GSC, licensed
> only to authorized personnel and contractors for work on behalf of GSC. Do not
> copy, distribute, or reuse outside GSC. See [`LICENSE`](LICENSE).

A brand, product **and copy** design system for Global Sports Corporation:
DTCG design tokens, three-voice typography, 20+ components, four channel
systems, and **AI skills** that make any agent (Claude Code, Cursor, Codex,
Windsurf) build and write on-brand. One investment-grade language across every
surface.

## About Global Sports Corporation

**Global Sports Corporation (GSC)** is a Guatemala-based sports company —
founded **2013** — that develops talent, stages events, and manages sports
rights across Central America and beyond. Its mission: **create opportunities
and transform lives through sport.** GSC is the region's official **Juventus
Academy** partner and has brought **LaLiga "Next Gen"** and **EA SPORTS FC
Futures** to Guatemala, running recurring programs for thousands of young
athletes (ages ~3–18) across football, basketball, tennis and volleyball — with
football at the core.

This design system is the identity that carries GSC across all of that work:
academy and event communications, marketing pages, rights and partnership
decks, and investor prospectuses. Full profile → **[docs/about-gsc.md](docs/about-gsc.md)**.

### Seven academy brands, one system

GSC runs seven youth-sports academies, each with its own confirmed brand
identity — palette, typography, and voice — all approved by **Luisa León**
(Brand & Communications). This design system carries all of them:

- **Global Soccer Academy** · **Global Basketball Academy** · **Global Running
  Academy** · **Nido Águila Guatemala** (Club América) · **Ser Portero** ·
  **Juventus Academy Guatemala** · **Baby Juve**

Each academy is a **self-contained folder** — `programs/<slug>/` holds its
tokens, skin, brand sheet, logos and source docs. Apply a program's brand with
`data-program="gsa"` (etc.) on a root element. Full reference →
**[DESIGN.md](DESIGN.md)**.

## Use it with any agent — route to a program first

Different people across GSC use different agents (Claude Code, Cursor, ChatGPT, Gemini,
Hyperagent) — and non-technical staff use no code at all. They all share **one source of
truth: this repo.** The one rule every consumer follows: **for each task, resolve which of the
seven programs (or corporate) it is for, and use only that brand — never mix, and ask when
ambiguous.**

- **Routing map (machine-readable):** [`programs/registry.json`](programs/registry.json) — every
  program's confirmed palette, fonts, voice, slogan, logos, and match rules.
- **Routing guide (how to decide):** [`docs/program-routing.md`](docs/program-routing.md) —
  decision order, the "fútbol is ambiguous" rule, the no-mixing rule, worked examples.
- **System manifest / LLM index:** [`gsc.manifest.json`](gsc.manifest.json) ·
  [`llms.txt`](llms.txt) — one fetchable index so any agent can pull the system by URL,
  no clone required.
- **Onboarding per consumer:** [`docs/onboarding.md`](docs/onboarding.md) — copy-paste setup for
  coding agents, chat agents, Hyperagent agents, and non-technical staff.
- **Social & image art:** [`docs/social-and-image.md`](docs/social-and-image.md) — on-brand
  Instagram/flyer/key-art generation per program.

## Install as an AI skill (authorized GSC users)

Give your coding agent the GSC brain in one command (for internal GSC projects
and engaged contractors only — see [`LICENSE`](LICENSE)):

```bash
git clone https://github.com/jrsingular/GSC-Design-System
./GSC-Design-System/install.sh   # copies skills + AGENTS.md/DESIGN.md into your project
```

- **Claude Code** auto-loads the five Agent Skills from `.claude/skills/`.
- **Cursor / Codex / Windsurf / Copilot** read `AGENTS.md` + `DESIGN.md`.
- **Chat agents / non-technical staff** → see [`docs/onboarding.md`](docs/onboarding.md).

### The five skills

Every skill starts with a **program-routing preflight** — resolve the brand before producing.

| Skill | Does |
|---|---|
| `building-gsc-brand` | Logo, colour, type, core identity — is this on-brand? |
| `designing-gsc-interfaces` | Product UI from tokens + components |
| `writing-gsc-copy` | Voice, tone, lexicon (EN/ES), microcopy, CTAs |
| `designing-gsc-landing-pages` | Conversion-focused marketing pages |
| `creating-gsc-social-art` | On-brand raster art for Instagram, flyers, key art |

Each `SKILL.md` follows Anthropic's authoring spec (frontmatter, progressive
disclosure to `reference/`, a compliance checklist, evaluations).

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

> **Program skins:** add `data-program="gsa"` (or gba, gra, nido-aguila,
> ser-portero, juventus-academy, baby-juve) to `<body>` to switch to that
> academy's confirmed palette and display font. Everything for an academy lives
> in `programs/<slug>/` (tokens, `skin.css`, `brand.md`, logos).

---

## What's in the box

```
GSC-Design-System/
├── index.html                     # Living style guide (start here)
├── dist/gsc-design-system.css     # Bundled build — the one file to import
│
│   ── ROUTING & ENTRY POINTS (read before designing) ──
├── programs/registry.json         # Canonical routing map — which brand for this task
├── gsc.manifest.json · llms.txt   # Fetchable system index for any agent
├── AGENTS.md · DESIGN.md          # Cross-tool agent instructions + design reference
├── docs/program-routing.md        # Decision order, ambiguity + no-mixing rules
├── docs/onboarding.md             # Setup per consumer (coding/chat/Hyperagent/non-tech)
├── docs/social-and-image.md       # On-brand Instagram / flyer / key-art generation
│
│   ── SHARED SYSTEM (corporate, program-agnostic) ──
├── tokens/gsc.tokens.json         # W3C DTCG corporate token source
├── css/                           # Modular source
│   ├── fonts.css tokens.css base.css typography.css utilities.css components.css
│   └── presentation.css mobile.css print.css     # channel overlays
├── templates/                     # Copy-me starting points
│   └── presentation.html landing.html mobile-app.html document.html
│
│   ── PROGRAM LAYER (one self-contained folder per academy) ──
├── programs/
│   ├── gsa/                        # Global Soccer Academy
│   │   ├── tokens.json             #   DTCG brand tokens (canonical)
│   │   ├── skin.css                #   [data-program="gsa"] palette + font
│   │   ├── brand.md                #   full brand sheet
│   │   ├── logos/                  #   logo files
│   │   └── _source/                #   Open Knowledge Pack (provenance)
│   └── gba/ gra/ nido-aguila/ ser-portero/ juventus-academy/ baby-juve/
│
│   ── TOOLING & DOCS ──
├── .claude/skills/                # 5 AI Agent Skills (routing-preflighted)
├── scripts/                       # run-style-dictionary · build-tokens · validate-tokens
├── build/                         # Generated tokens (CSS/SCSS/JS/Swift/XML)
├── docs/                          # Guidelines (brand, copywriting, tokens, governance, a11y…)
├── assets/                        # gsc-logo.png · fonts/ (Morganite) · logos/gsc-corporate/
├── build.sh · install.sh · CONTRIBUTING.md · CHANGELOG.md · LICENSE
└── README.md
```

Import the modular files during development or the single `dist/` bundle in
production. The **channel** stylesheets (`presentation.css`, `mobile.css`,
`print.css`) load *after* the core and are opt-in per medium.

```bash
npm install
npm run build      # rebuilds dist/gsc-design-system.css + tokens in build/
```

## Design tokens — one source, every platform

Tokens are authored in the **[W3C DTCG format](docs/tokens.md)** (the first
stable spec, 2025.10) in `tokens/gsc.tokens.json`, and compiled with Style
Dictionary v4 to **CSS, SCSS, JS, iOS (Swift `UIColor`) and Android (XML)** —
plus native Figma-variable import. Identical values everywhere, so the mobile
guidance is real, not aspirational. See **[docs/tokens.md](docs/tokens.md)**.

## Copywriting — the words are half the system

The look means nothing off-brand copy can undo. **[docs/copywriting.md](docs/copywriting.md)**
and the `writing-gsc-copy` skill define GSC voice (the disciplined operator),
tone by context, a lexicon (words to use / avoid, EN + ES), and microcopy
patterns. The rule: *clarity beats cleverness; write the CTA first; numbers do
the bragging.*

## Channels — one language, every medium

The core is one design language; each medium speaks it with different physics.
Every channel ships a working template **and** a written guide.

| Channel | Template | Guide | Stylesheet |
|---|---|---|---|
| **Presentations** | [`templates/presentation.html`](templates/presentation.html) | [presentations.md](docs/presentations.md) | `css/presentation.css` |
| **Landing pages** | [`templates/landing.html`](templates/landing.html) | [landing-pages.md](docs/landing-pages.md) | core |
| **Mobile apps** | [`templates/mobile-app.html`](templates/mobile-app.html) | [mobile.md](docs/mobile.md) | `css/mobile.css` |
| **Documents / print** | [`templates/document.html`](templates/document.html) | [documents.md](docs/documents.md) | `css/print.css` |
| **Forms** | in the style guide | [forms.md](docs/forms.md) | core |
| **Brand & voice** | — | [brand.md](docs/brand.md) | — |

**The channel matrix** — the one thing to internalise:

| | Background | Type ceiling | Red is for | Notes |
|---|---|---|---|---|
| Web / Landing | Ink (dark) | 132px | CTAs, accents | Full motion & hover |
| Presentation | Ink + FONDOS | 104px | 1 moment / section | 16:9, one idea per slide |
| Mobile | Ink (dark) | 40px | Primary action, values | 44px touch target, body 16px |
| Document | **Paper (light)** | 46px | Accents only | Palette **inverts** by design |

The document row is the deliberate exception — long-form reading flips to
dark-ink-on-paper. Everything else is dark-first. Full rationale in
[`docs/README.md`](docs/README.md).

### Source references

The presentation and iconography systems mirror the official **GSC
TEMPLATE.pptx** and brand assets (Tipografía, Presentaciones/FONDOS) from the
GSC brand Drive folder. The core palette and type stack come from the
investment prospectus in [`examples/`](examples/prospectus.html).

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

_GSC Design System · v3.3.0 · Global Sports Corporation · Live the dream._
