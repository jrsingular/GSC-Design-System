# Global Basketball Academy — Brand Sheet

> Proprietary & Confidential. © Global Basketball Academy Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Global Basketball Academy (GBA) is the basketball development arm of the GSC ecosystem, built to shape complete basketball players through professional, aspirational training. Its visual identity pairs a near-black ink base with a high-intensity primary red and a steel grey secondary, evoking the hardwood, the arena, and the competitive basketball environment. GBA's identity carries a distinctly basketball-cultural atmosphere — hard, focused, and driven.

## Colour

| Token        | Hex       | Role                  |
|--------------|-----------|-----------------------|
| `--ink`      | `#1C1C1C` | Ink / base            |
| `--primary`  | `#FE0000` | Primary red           |
| `--steel`    | `#A3A6A9` | Steel (secondary)     |
| `--white`    | `#FFFFFF` | White                 |

## Typography

**Primary font:** Academic M54 — **PROPRIETARY.** Not bundled in the repository for licensing reasons.

**Additional proprietary font:** Redwing (Light + Medium weights) — **PROPRIETARY.** Not bundled.

**Secondary font:** Montserrat — Google Fonts.

> ⚠️ **Proprietary font callout:** Academic M54 and Redwing are NOT included in this repo. Do not attempt to bundle or redistribute them. For production use, obtain the licensed font files directly from **Luisa León**. In stylesheets, reference the font by family name with a fallback stack: `'Academic M54', Impact, sans-serif`. The same applies to Redwing: `'Redwing', Impact, sans-serif`.

**Fallback stack:** `'Academic M54', Impact, sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **aspiracional, profesional, deportiva, ambiente basquetbolista.**

Communication should channel the atmosphere of the basketball world — energetic, competitive, and grounded in the sport's culture. Maintain a professional and aspirational register that speaks to dedication and growth. The "ambiente basquetbolista" quality means copy and visuals should feel native to basketball culture, not generic sport.

## Logo

Logo files are stored in `assets/logos/gba/`:

| File                        | Format | Status                                   |
|-----------------------------|--------|------------------------------------------|
| `gba-logo-color.png`        | PNG    | Confirmed                                |
| `gba-logo-color.jpg`        | JPG    | Confirmed                                |
| SVG variant                  | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Monochrome (black/white)    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants          | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `gba-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@global_basketball_academy_gt](https://instagram.com/global_basketball_academy_gt) — authoritative for arte style.
- **Art reference assets:** `assets/art/gba/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="gba">
  <!-- content -->
</body>
```

The `data-program="gba"` selector maps to `tokens/programs/gba.tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens/programs/gba.tokens.json`
- **Source document:** `docs/programs/_source/gba-open-knowledge-pack.pdf`
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.
