# Ser Portero — Brand Sheet

> Proprietary & Confidential. © Ser Portero Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Ser Portero is the goalkeeper-focused development program of the GSC ecosystem, dedicated to the specialised craft and mindset of the goalkeeper. Its identity is grounded in a rich gold/brown primary against black and white, communicating gravitas, focus, and the emotional weight of the position. The program's philosophy places the person before the player — "El Ser está antes que el portero" — making its tone emotional, athletic, professional, and inspirational. Ser Portero speaks to the unique mental and physical demands of goalkeeping.

## Colour

| Token        | Hex       | Role                  |
|--------------|-----------|-----------------------|
| `--primary`  | `#916E35` | Marrón / oro (gold)   |
| `--white`    | `#FFFFFF` | White                 |
| `--surface`  | `#000000` | Black surface         |

## Typography

**Primary font:** Headline Gothic ATF (Regular + Rough variants) — **PROPRIETARY.** Not bundled in the repository for licensing reasons.

**Secondary font:** Montserrat — Google Fonts.

> ⚠️ **Proprietary font callout:** Headline Gothic ATF (including the Rough variant) is NOT included in this repo. Do not attempt to bundle or redistribute it. For production use, obtain the licensed font files directly from **Luisa León**. In stylesheets, reference the font by family name with a fallback stack: `'Headline Gothic ATF', Impact, sans-serif`.

**Fallback stack:** `'Headline Gothic ATF', Impact, sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **emocional, atlética, profesional e inspiracional.**

Communication should speak to the goalkeeper's emotional journey — the isolation, the pressure, the moment of the save. The atlética quality grounds copy in the physical and technical demands of the position. The profesional register maintains credibility, while the inspiracional quality elevates and motivates. This is not generic sport copy; it is written for and about goalkeepers.

**Slogans:**

> El Ser está antes que el portero

> Tu mente dirige tu parada

## Logo

Logo files are stored in `logos/`:

| File                            | Format | Status                                   |
|---------------------------------|--------|------------------------------------------|
| `ser-portero-logo-color.png`    | PNG    | Confirmed                                |
| `ser-portero-logo-alt.png`      | PNG    | Confirmed (alternate variant)            |
| `ser-portero-symbol.png`        | PNG    | Confirmed (symbol/icon)                  |
| SVG variant                      | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Monochrome (black/white)        | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants              | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `ser-portero-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@serporteroguatemala](https://instagram.com/serporteroguatemala) — authoritative for arte style.
- **Art reference assets:** `assets/art/ser-portero/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="ser-portero">
  <!-- content -->
</body>
```

The `data-program="ser-portero"` selector maps to `tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens.json`
- **Source document:** `_source/ser-portero-brand-doc.docx`
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.

## Accesibilidad (WCAG 2.1 AA — auditado)

- El acento primario `#916E35` sobre `#000000` rinde **4.49:1** — **solo texto grande** (≥24px, o ≥18.66px en bold): titulares, eyebrows, cifras. Nunca en texto corrido, captions o labels de formulario.
- Texto corrido: usa el tinte de lectura del programa (`#D4CBBE`, **13.09:1** sobre fondo) o blanco — ambos superan AA holgadamente.
- Estas reglas están **aplicadas por CI** (`npm run validate`, auditoría de contraste con 0 fallos duros) y demostradas en el showcase.

## Entrega tipográfica

- `Headline Gothic ATF` es **propietaria y no se distribuye** en este repositorio. La cadena de respaldo de ingeniería es `Bebas Neue → Impact → sans-serif` — 'Bebas Neue' (condensada, atlética, cargada por el sistema corporativo) mantiene el carácter premium mientras se obtiene la licencia. Plantilla `@font-face` lista en [`fonts.css`](fonts.css); al recibir el WOFF2 licenciado, descomentar y precargar (`<link rel="preload" as="font" crossorigin>`).

## Showcase

Página de demostración premium del programa — héroe, paleta, tipografía y
componentes con esta piel: [`preview.html`](preview.html). Verificada en
navegador (0 errores, disciplina de acento en texto corrido).
