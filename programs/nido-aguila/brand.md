# Nido Águila Guatemala — Brand Sheet

> Proprietary & Confidential. © Nido Águila Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Nido Águila Guatemala is the official Club América partner academy in Guatemala, bringing the identity, colours, and spirit of one of Mexico's most storied football clubs to young Guatemalan players. Its visual language centres on Club América's signature yellow against a deep navy surface, with white as the balancing neutral. The identity is aspiracional and profesional, carrying the deportiva pride of Club América with a stadium-announcer locución energy that connects emotionally with fans and families.

**Official partner:** Club América de México.

## Colour

| Token        | Hex       | Role                  |
|--------------|-----------|-----------------------|
| `--primary`  | `#F8E602` | Primary yellow        |
| `--white`    | `#FFFFFF` | White                 |
| `--surface`  | `#111A2D` | Navy surface          |

## Typography

**Primary font:** Morganite — Google Fonts (SIL Open Font License). Bundled in `assets/fonts/`.

**Secondary font:** ITC Avant Garde Gothic Pro — **PROPRIETARY.** Not bundled in the repository for licensing reasons.

> ⚠️ **Proprietary font callout:** ITC Avant Garde Gothic Pro is NOT included in this repo. Do not attempt to bundle or redistribute it. For production use, obtain the licensed font files directly from **Luisa León**. In stylesheets, reference the font by family name with a fallback stack: `'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif`.

**Fallback stack:** `Morganite, 'Arial Narrow', sans-serif` for primary; `'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **aspiracional, profesional, deportiva Club América, locución de estadio.**

Communication should carry the pride and energy of Club América, delivered with the dramatic, rallying cadence of a stadium announcer. Maintain a professional and aspirational register. The "deportiva Club América" quality means language should reflect the club's identity and heritage, while "locución de estadio" means copy can adopt a dramatic, rallying, public-address energy for appropriate contexts.

**Slogan:**

> Grandes de corazón

## Logo

Logo files are stored in `logos/`:

| File                            | Format | Status                                   |
|---------------------------------|--------|------------------------------------------|
| `nido-aguila-logo-color.png`    | PNG    | Confirmed                                |
| `nido-aguila-logo-alt.png`      | PNG    | Confirmed (alternate variant)            |
| SVG variant                      | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Monochrome (black/white)        | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants              | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `nido-aguila-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@nidoaguilaguatemala](https://instagram.com/nidoaguilaguatemala) — authoritative for arte style.
- **Art reference assets:** `assets/art/nido-aguila/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="nido-aguila">
  <!-- content -->
</body>
```

The `data-program="nido-aguila"` selector maps to `tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens.json`
- **Source document:** `_source/nido-aguila-open-knowledge-pack.pdf`
- **Partner relationship:** Club América de México (official partner). Respect Club América brand guidelines where they apply; Luisa León is the arbiter for local adaptation.
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.

## Accesibilidad (WCAG 2.1 AA — auditado)

- El acento primario `#F8E602` sobre `#111A2D` rinde **13.49:1** — cumple AA para texto normal; puede usarse con libertad.
- Texto corrido: usa el tinte de lectura del programa (`#C7CDD9`, **10.88:1** sobre fondo) o blanco — ambos superan AA holgadamente.
- Estas reglas están **aplicadas por CI** (`npm run validate`, auditoría de contraste con 0 fallos duros) y demostradas en el showcase.

## Entrega tipográfica

- Morganite está **empaquetada y auto-alojada** por el sistema (WOFF2, `font-display: swap`) — el titular renderiza la marca en cualquier entorno.

## Showcase

Página de demostración premium del programa — héroe, paleta, tipografía y
componentes con esta piel: [`preview.html`](preview.html). Verificada en
navegador (0 errores, disciplina de acento en texto corrido).
