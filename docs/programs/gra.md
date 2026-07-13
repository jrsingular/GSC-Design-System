# Global Running Academy — Brand Sheet

> Proprietary & Confidential. © Global Running Academy Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Global Running Academy (GRA) is the running and endurance development program of the GSC ecosystem. Its identity is built on emotional connection and athletic drive, using a warm primary orange and a vivid accent red against white to convey energy, movement, and the personal, emotional journey of the runner. GRA speaks to the individual athlete's grit, growth, and emotional relationship with the sport.

## Colour

| Token        | Hex       | Role                  |
|--------------|-----------|-----------------------|
| `--primary`  | `#EE8A04` | Primary orange        |
| `--accent`   | `#E53518` | Accent red            |
| `--white`    | `#FFFFFF` | White                 |

## Typography

**Primary font:** Unison Pro — **PROPRIETARY.** Not bundled in the repository for licensing reasons.

**Secondary font:** Montserrat — Google Fonts.

> ⚠️ **Proprietary font callout:** Unison Pro is NOT included in this repo. Do not attempt to bundle or redistribute it. For production use, obtain the licensed font files directly from **Luisa León**. In stylesheets, reference the font by family name with a fallback stack: `'Unison Pro', Impact, sans-serif`.

**Fallback stack:** `'Unison Pro', Impact, sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **emocional, atlética, profesional.**

Communication should connect emotionally with runners, speaking to personal journeys, perseverance, and the inner experience of the sport. The atlética quality keeps it grounded in physical performance and training, while the profesional register maintains credibility. This is not hype — it is emotional authenticity paired with athletic substance.

## Logo

Logo files are stored in `assets/logos/gra/`:

| File                        | Format | Status                                   |
|-----------------------------|--------|------------------------------------------|
| `gra-logo-color.png`        | PNG    | Confirmed                                |
| `gra-logo-color.jpg`        | JPG    | Confirmed                                |
| SVG variant                  | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Monochrome (black/white)    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants          | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `gra-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@globalrunningacademy](https://instagram.com/globalrunningacademy) — authoritative for arte style.
- **Art reference assets:** `assets/art/gra/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="gra">
  <!-- content -->
</body>
```

The `data-program="gra"` selector maps to `tokens/programs/gra.tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens/programs/gra.tokens.json`
- **Source document:** `docs/programs/_source/gra-open-knowledge-pack.pdf`
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.
