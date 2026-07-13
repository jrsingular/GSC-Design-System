# Asset Manifest — GSC Design System

> **Proprietary & Confidential.** Every asset listed here was recovered from the
> GSC Slack workspace (#soulmd thread) and committed with standard nomenclature.
> Status confirmed as of 2026-07-13. Asset gaps are marked
> **PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN** with the owner to chase.

## Nomenclature convention

Logo files follow `{program}-logo-{variant}.{ext}`:

| Variant | Meaning |
|---|---|
| `color` | Full-color primary logo on transparent / appropriate background |
| `mono` | Single-color (white or black) version for dark/light surfaces |
| `light` | Version optimized for dark backgrounds |
| `dark` | Version optimized for light backgrounds |
| `symbol` | Mark / icon only (no wordmark) |
| `wordmark` | Wordmark only (no symbol) |
| `alt` | Alternate approved variant |

Preferred formats: **SVG** (vector, scalable) → **PNG** (raster with
transparency) → **JPG** (raster, no transparency). `.ai` (Illustrator) source
files are kept for editing but not for production use.

---

## GSC corporate

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `gsc-corporate-logo-color.png` | PNG | 98 KB | repo (pre-existing) | ✅ confirmed |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| **mono / dark / light variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| **favicon** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Global Soccer Academy (GSA)

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `gsa-logo-color.png` | PNG | 483 KB | Slack #soulmd ts 1783614997 | ✅ confirmed |
| `gsa-logo-color.jpg` | JPG | 1.77 MB | Slack #soulmd ts 1783614997 | ✅ confirmed |
| `gsa-logo-line-art.ai` | AI (Illustrator) | 1.85 MB | Slack #soulmd ts 1783614997 | ✅ confirmed (source) |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE (request from Luisa / export from .ai) |
| **mono / dark / light / symbol / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Global Basketball Academy (GBA)

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `gba-logo-color.png` | PNG | 525 KB | Slack #soulmd ts 1783615569 | ✅ confirmed |
| `gba-logo-color.jpg` | JPG | 1.02 MB | Slack #soulmd ts 1783615569 | ✅ confirmed |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **mono / dark / light / symbol / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Global Running Academy (GRA)

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `gra-logo-color.png` | PNG | 733 KB | Slack #soulmd ts 1783615907 | ✅ confirmed |
| `gra-logo-color.jpg` | JPG | 2.24 MB | Slack #soulmd ts 1783615907 | ✅ confirmed |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **mono / dark / light / symbol / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Nido Águila Guatemala

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `nido-aguila-logo-color.png` | PNG | 52 KB | Slack #soulmd ts 1783616281 | ✅ confirmed |
| `nido-aguila-logo-alt.png` | PNG | 55 KB | Slack #soulmd ts 1783616281 | ✅ confirmed (alternate) |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **mono / dark / light / symbol / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Ser Portero

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `ser-portero-logo-color.png` | PNG | 412 KB | Slack #soulmd ts 1783617193 | ✅ confirmed |
| `ser-portero-logo-alt.png` | PNG | 400 KB | Slack #soulmd ts 1783617193 | ✅ confirmed (alternate) |
| `ser-portero-symbol.png` | PNG | 213 KB | Slack #soulmd ts 1783617193 | ✅ confirmed (icon/mark) |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **mono / dark / light / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Juventus Academy Guatemala

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `juventus-academy-logo-color.png` | PNG | 46 KB | Slack #soulmd ts 1783623819 | ✅ confirmed |
| `juventus-academy-logo-mono.png` | PNG | 18 KB | Slack #soulmd ts 1783623819 | ✅ confirmed (inverted/mono) |
| **SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **light / dark / symbol / wordmark variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Baby Juve

> Baby Juve **shares Juventus Academy branding** (same palette, fonts, and
> logo family). It has its own program token (`baby-juve.tokens.json`) and voice,
> but uses the Juventus Academy logo set plus its own mascot assets.

| File | Format | Size | Source | Status |
|---|---|---|---|---|
| `baby-juve-logo-color.png` | PNG | 325 KB | Slack #soulmd ts 1783624250 | ✅ confirmed |
| **dedicated SVG vector** | — | — | — | ⚠️ PENDIENTE |
| **mascot (zebra) asset** | — | — | — | referenced in Baby Juve program doc; ⚠️ PENDIENTE (request isolated mascot file from Luisa) |
| **mono / dark / light variants** | — | — | — | ⚠️ PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

---

## Fonts

### Bundled (open license — Google Fonts OFL)

| Font | Path | Weights | Used by |
|---|---|---|---|
| Morganite | `assets/fonts/morganite-*.ttf` | Black, BlackItalic, Bold, BoldItalic, Book, BookItalic | GSA (primary), Nido Águila (primary) |

### Referenced via CDN (open license — Google Fonts OFL)

| Font | Used by |
|---|---|
| Montserrat | GSA, GBA, GRA, Nido Águila, Ser Portero, Juventus, Baby Juve (secondary); GSC corporate (ui) |
| Bebas Neue | GSC corporate (display) |
| Roboto | GSC corporate (body) |

### NOT bundled (proprietary — license restricts redistribution)

| Font | Used by | How to obtain |
|---|---|---|
| JuventusFans-Bold, JuventusFans-Boldinline | Juventus Academy, Baby Juve | Luisa León (Juventus FC licensing) |
| Academic M54 | GBA | Luisa León |
| Redwing (Light, Medium) | GBA | Luisa León |
| Unison Pro | GRA | Luisa León |
| ITC Avant Garde Gothic Pro | Nido Águila | Luisa León |
| Headline Gothic ATF (regular, Rough) | Ser Portero | Luisa León |

> Proprietary font files were recovered to a local working directory during the
> asset audit but are **intentionally excluded from this repository** to respect
> their licenses. They are named in each program's token file with a generic
> fallback. Authorized designers install them locally for production.

---

## Art / example assets

Example social-media art and photography recovered from Slack is stored in
`assets/art/{program}/` as reference material for the visual style each program
uses on Instagram. These are **not** production logos — they show the applied
brand language (composition, photography, voice in context). See each program's
brand sheet for how the art informs the style.

| Program | Art files | Reference Instagram |
|---|---|---|
| GSA | `assets/art/gsa/` | @global_soccer_academy_gt |
| GBA | `assets/art/gba/` | @global_basketball_academy_gt |
| GRA | `assets/art/gra/` | @globalrunningacademy |
| Nido Águila | `assets/art/nido-aguila/` | @nidoaguilaguatemala |
| Ser Portero | `assets/art/ser-portero/` | @serporteroguatemala |
| Juventus Academy | `assets/art/juventus-academy/` | @juventus_academy_guatemala |
| Baby Juve | `assets/art/baby-juve/` | @juventus_academy_guatemala |

---

## Source documents (Open Knowledge Packs)

The original brand/program documents Luisa shared are kept in
`programs/<slug>/_source/` as provenance for the confirmed values. They are the
authoritative backing for the token files and brand sheets.

| Program | Source file |
|---|---|
| GSA | `programs/gsa/_source/gsa-open-knowledge-pack.pdf` |
| GBA | `programs/gba/_source/gba-open-knowledge-pack.pdf` |
| GRA | `programs/gra/_source/gra-open-knowledge-pack.pdf` |
| Nido Águila | `programs/nido-aguila/_source/nido-aguila-open-knowledge-pack.pdf` |
| Ser Portero | `programs/ser-portero/_source/ser-portero-brand-doc.docx` |
| Juventus Academy | `programs/juventus-academy/_source/juventus-academy-2026.docx` |
| Baby Juve | `programs/baby-juve/_source/baby-juve-program-doc.pdf` |

---

## Summary

- **Logos confirmed & committed:** 7/7 programs (16 files) + GSC corporate.
- **Fonts bundled:** Morganite (OFL). Others via CDN or local install.
- **Open gaps:** SVG vector versions and full variant sets (mono/light/dark/
  symbol/wordmark) for most programs — owned by Luisa León. These do not block
  the design system; the PNG/color versions are production-usable, and the gaps
  are tracked here so they can be closed incrementally.
