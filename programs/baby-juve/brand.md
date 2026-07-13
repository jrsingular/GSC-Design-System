# Baby Juve — Brand Sheet

> Proprietary & Confidential. © Juventus Academy Guatemala. All rights reserved.
> Confirmed by Luisa León.

## Identity

Baby Juve is the pre-academy program of Juventus Academy Guatemala, designed for children ages 3–5 as their first encounter with structured sporting activity. It inherits the Juventus Academy visual identity — black, white, and signature yellow — but its voice shifts to be divertido, infantil deportivo, and emocionante. Baby Juve is iniciación deportiva: non-competitive, focused on motricity and values, applying the Juventus Academy methodology with an introduction to the Italian language. It shares the Juventus Academy Instagram account and branding family.

**Parent program:** Juventus Academy (`juventus-academy`).

**Age range:** 3–5 years.

**Program nature:** Iniciación deportiva — non-competitive. Juventus Academy methodology with introduction to Italian language. Focus on motricity and values.

## Colour

Baby Juve inherits the Juventus Academy palette. No separate palette exists.

| Token        | Hex       | Role                          |
|--------------|-----------|-------------------------------|
| `--surface`  | `#000000` | Black surface                 |
| `--white`    | `#FFFFFF` | White                         |
| `--primary`  | `#F9C016` | Juventus signature yellow     |

## Typography

Baby Juve inherits the Juventus Academy typography stack.

**Primary font:** JuventusFans-Bold + JuventusFans-Boldinline — **PROPRIETARY Juventus FC custom fonts.** Not bundled in the repository for licensing reasons.

**Secondary font:** Montserrat — Google Fonts.

> ⚠️ **Proprietary font callout:** JuventusFans-Bold and JuventusFans-Boldinline are NOT included in this repo. These are Juventus FC custom proprietary fonts and must not be bundled or redistributed. For production use, obtain the licensed font files through **Luisa León** and/or Juventus licensing channels. In stylesheets, reference the font by family name with a fallback stack: `'JuventusFans-Bold', Impact, sans-serif` and `'JuventusFans-Boldinline', Impact, sans-serif`.

**Fallback stack:** `'JuventusFans-Bold', Impact, sans-serif` for primary; `Montserrat, system-ui, sans-serif` for secondary.

## Voice & tone

Confirmed voice descriptors: **divertido, infantil deportivo, emocionante.**

Baby Juve's voice differs intentionally from Juventus Academy's. Communication should be playful, child-appropriate, and exciting — designed to appeal to young children and their parents. The "infantil deportivo" quality means content is age-appropriate sport introduction, not competitive training. The "emocionante" quality means copy should convey the joy and excitement of a child's first sporting experience. Keep it warm, fun, and welcoming.

## Logo

Logo files are stored in `logos/`:

| File                        | Format | Status                                       |
|-----------------------------|--------|----------------------------------------------|
| `baby-juve-logo-color.png`  | PNG    | Confirmed                                    |
| SVG variant                  | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN     |
| Monochrome (black/white)    | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN     |
| Light/dark variants          | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN     |
| Wordmark-only                | —      | PENDIENTE DE CONFIRMACIÓN POR LUISA LEÓN     |

**Note:** Baby Juve shares the Juventus Academy branding/logo family. The logo is part of the same visual system as `juventus-academy`.

**Nomenclature:** `baby-juve-logo-{variant}.{ext}`

## Art direction

- **Instagram reference:** [@juventus_academy_guatemala](https://instagram.com/juventus_academy_guatemala) — shared with Juventus Academy. Authoritative for arte style.
- **Art reference assets:** `assets/art/baby-juve/`
- **Workflow:** All art is produced in Adobe Photoshop. No templates exist.
- **No written design manual exists.** Designers and AI agents must reference the Instagram feed for visual language, composition, and treatment before producing new arte.

## Usage

Apply the program identity via the `data-program` attribute on the document body:

```html
<body data-program="baby-juve">
  <!-- content -->
</body>
```

The `data-program="baby-juve"` selector maps to `tokens.json` for all colour, typography, and spacing tokens. Baby Juve tokens inherit from `juventus-academy` tokens where values are shared; overrides apply only where Baby Juve differs (voice/tone, age range, program nature).

## Governance

- **Design approval:** Luisa León approves all designs before publication or deployment.
- **Token file (canonical source of truth):** `tokens.json`
- **Source document:** `_source/baby-juve-program-doc.pdf`
- **Parent program:** Juventus Academy (`juventus-academy`). Refer to `../juventus-academy/brand.md` for the full Juventus Academy identity, methodology, and partner relationship details.
- If any value in this sheet conflicts with the token file, the token file prevails. If a value is missing from the token file, Luisa León is the arbiter.
