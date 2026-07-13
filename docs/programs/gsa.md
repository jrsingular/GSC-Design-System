# Global Soccer Academy — Brand Sheet

> Proprietary & Confidential. © Global Soccer Academy Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Global Soccer Academy (GSA) is the foundational soccer development program of the GSC ecosystem, dedicated to the holistic development of young footballers. Its identity blends a dark, athletic base with a bold primary red and an energetic accent orange, communicating professionalism and aspiration on and off the pitch. GSA serves as the entry point for comprehensive player development, grounded in discipline, technical growth, and character formation.

## Colour

| Token        | Hex       | Role                  |
|--------------|-----------|-----------------------|
| `--ink`      | `#191919` | Ink / base            |
| `--primary`  | `#E7290F` | Primary red           |
| `--accent`   | `#F07D04` | Accent orange         |
| `--white`    | `#FFFFFF` | White                 |

## Typography

**Primary font:** Morganite — Google Fonts (SIL Open Font License). Bundled in `assets/fonts/`.

**Secondary font:** Montserrat — Google Fonts.

Both fonts are freely licensed and bundled in the repository. No proprietary licensing required.

**Fallback stack:** `Morganite, 'Arial Narrow', sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **aspiracional, profesional, deportiva.**

Communication should elevate and motivate young players while maintaining a professional, credible tone. The deportiva quality means language is grounded in the sport — training, effort, growth — without drifting into hype or informality. Tagline to use across materials:

> Desarrollo integral de jóvenes futbolistas

## Logo

Logo files are stored in `assets/logos/gsa/`:

| File                        | Format | Status                                   |
|-----------------------------|--------|------------------------------------------|
| `gsa-logo-color.png`        | PNG    | Confirmed                                |
| `gsa-logo-color.jpg`        | JPG    | Confirmed                                |
| `gsa-logo-line-art.ai`      | AI     | Confirmed (source vector)                |
| SVG variant                  | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Monochrome (black/white)    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants          | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `gsa-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@global_soccer_academy_gt](https://instagram.com/global_soccer_academy_gt) — authoritative for arte style.
- **Art reference assets:** `assets/art/gsa/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body so that CSS tokens and program-scoped styles load automatically:

```html
<body data-program="gsa">
  <!-- content -->
</body>
```

The `data-program="gsa"` selector maps to `tokens/programs/gsa.tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens/programs/gsa.tokens.json`
- **Source document:** `docs/programs/_source/gsa-open-knowledge-pack.pdf`
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.
