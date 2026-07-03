# Presentations

Mirrors the official **GSC TEMPLATE.pptx**: numbered slide titles, section
dividers, an official iconography set, and FONDOS (background) variants.

**Assets:** `css/presentation.css` · `templates/presentation.html`

## Canvas

- **16:9**, authored at **1280×720**. Each `.gsc-slide` is a fixed canvas; wrap
  it in `.gsc-slide-fit` to scale down responsively (`container` query, no JS).
- Margin (`--slide-pad`) is **72px**. Keep content inside it — nothing touches the edge except full-bleed FONDOS.
- Every slide carries a **kicker** (top-left), a **footer** (logo · section · page number).

## Slide types

| Type | Class | Use |
|---|---|---|
| Cover | `.gsc-slide--glow` + `__title` | Opening. One headline, one line of subtitle. |
| Section divider | `.gsc-slide--section` + `__num` | Giant number + section name. Resets attention. |
| Content | `__heading` + `__cols` | Title + two columns (prose ⟷ bullet list). |
| Stats | `.gsc-slide-stats` | Up to 3 headline numbers. Never more. |
| Quote / thesis | `.gsc-slide--red` + `__quote` | The one line you want remembered. |
| Iconography | `.gsc-icon-grid` | The official icon set reference. |
| Closing | `.gsc-slide--glow` centred | Logo + "Let's talk." + contact. |

## FONDOS (backgrounds)

`--ink` (default) · `--soft` (raised) · `--glow` (radial red/orange atmosphere,
for covers) · `--red` (solid, for the one thesis moment) · `--crema` (warm, for a
single anchor claim). Add `.gsc-slide__texture` for the chalk-line pitch overlay.

**Ration them:** a deck is mostly `--ink`/`--soft`. One `--red` and one `--crema`
per deck, maximum. Contrast is what makes them land.

## Iconography

The official set: **2px strokes, rounded joins, one red accent per icon** (give
the accent path `class="accent"`). One idea per icon. Tiles are square with a
hairline border on `--soft`.

## Rules

1. **One idea per slide.** If it needs two headings, it's two slides.
2. **Max 3 stats** in a row; max ~4 bullets in a list.
3. Body text never below **18px** on the 1280 canvas (≈ 24px projected).
4. Numbers are Bebas; running labels are Montserrat.

## Export

Print to PDF for distribution — the `@media print` block renders one slide per
page, full-bleed, colours preserved. For a native `.pptx`, rebuild these slide
layouts as PowerPoint masters using the same tokens (see the PPTX in the brand
Drive folder as the canonical reference).
