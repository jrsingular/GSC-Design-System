# Juventus Academy Guatemala — Brand Sheet

> Proprietary & Confidential. © Juventus Academy Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Juventus Academy Guatemala is the official Juventus FC licensed academy in Guatemala, delivering the Juventus Way methodology to young players. Its visual identity is built on Juventus's iconic black and white, accented with the club's signature yellow. The program is aspiracional, profesional, and divertido — operating as a high-performance team while maintaining a joyful, engaging environment. Its philosophy is clear: form people before players, using the Juventus Way across five developmental pillars.

**Official partner:** Juventus FC (official licensed academy).

## Colour

| Token        | Hex       | Role                          |
|--------------|-----------|-------------------------------|
| `--surface`  | `#000000` | Black surface                 |
| `--white`    | `#FFFFFF` | White                         |
| `--primary`  | `#F9C016` | Juventus signature yellow     |

## Typography

**Primary font:** JuventusFans-Bold + JuventusFans-Boldinline — **PROPRIETARY Juventus FC custom fonts.** Not bundled in the repository for licensing reasons.

**Secondary font:** Montserrat — Google Fonts.

> ⚠️ **Proprietary font callout:** JuventusFans-Bold and JuventusFans-Boldinline are NOT included in this repo. These are Juventus FC custom proprietary fonts and must not be bundled or redistributed. For production use, obtain the licensed font files through **Luisa León** and/or Juventus licensing channels. In stylesheets, reference the font by family name with a fallback stack: `'JuventusFans-Bold', Impact, sans-serif` and `'JuventusFans-Boldinline', Impact, sans-serif`.

**Fallback stack:** `'JuventusFans-Bold', Impact, sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **aspiracional, divertido, profesional como equipo de alto rendimiento.**

Communication should balance aspiration and joy. The "divertido" quality means content should be engaging and fun, especially for younger audiences and families. The "profesional como equipo de alto rendimiento" quality means the program is serious about development and operates at a high standard. These are not contradictory — Juventus Academy Guatemala is a place where serious development happens in an enjoyable, aspirational environment.

**Philosophy:**

> Formamos personas antes que jugadores

**Methodology — Juventus Way (five pillars):**
1. Style of Play
2. Technical
3. Tactical
4. Mental
5. Emotional & Social

## Logo

Logo files are stored in `logos/`:

| File                                | Format | Status                                   |
|-------------------------------------|--------|------------------------------------------|
| `juventus-academy-logo-color.png`   | PNG    | Confirmed                                |
| `juventus-academy-logo-mono.png`    | PNG    | Confirmed (monochrome)                   |
| SVG variant                          | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Light/dark variants                  | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |
| Wordmark-only                        | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN |

**Nomenclature:** `juventus-academy-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@juventus_academy_guatemala](https://instagram.com/juventus_academy_guatemala) — authoritative for arte style.
- **Art reference assets:** `assets/art/juventus-academy/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="juventus-academy">
  <!-- content -->
</body>
```

The `data-program="juventus-academy"` selector maps to `tokens.json` for all colour, typography, and spacing tokens.

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens.json`
- **Source document:** `_source/juventus-academy-2026.docx`
- **Partner relationship:** Juventus FC (official licensed academy). Respect Juventus FC brand guidelines where they apply; Luisa León is the arbiter for local adaptation.
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.
