# Documents & Print

Memoranda, one-pagers, letters, reports — anything destined for PDF, print, or a
Word/Docs-equivalent layout.

**Assets:** `css/print.css` · `templates/document.html`

## The inverted palette (deliberate)

Documents are the **one** place the brand flips: **dark ink on paper**, not white
on ink. Reading a multi-page report on a black page is fatiguing and burns toner.
Red and crema stay as accents; the ink ramp becomes greys on white.

> This is by design. Do not "fix" it to match the dark web theme.

## Page

- `.gsc-page` = one sheet. Default **A4** (`--page-w/h`); switch to `8.5in/11in` for US Letter.
- Margins **22mm** (`--page-margin`).
- `@page { size: A4; margin: 0 }` + `print-color-adjust: exact` keep the red rule and crema callouts when printed.

## Structure

| Part | Class | Notes |
|---|---|---|
| Letterhead | `.gsc-letterhead` | Logo left, meta right, **3px red bottom rule** |
| Eyebrow | `.gsc-doc-eyebrow` | Red tracked caps above the title |
| Title | `h1` (+ `.gsc-accent`) | Bebas, one accent word |
| Lead | `.gsc-doc-lead` | Montserrat, the standfirst |
| Body | `p` | Roboto, **11.5pt / 1.65** — tuned for paper |
| Section | `h2` / `h3` | `h3` is a red kicker |
| Callout | `.gsc-doc-callout` | Crema-tinted, red left border — the pull quote |
| Figures | `.gsc-doc-figures` | Up to 3 headline numbers |
| Table | `.gsc-doc-table` | Zebra rows, heavy header rule |
| Footer | `.gsc-doc-footer` | Tagline + page number |

## Rules

1. Body copy in **points**, not pixels (print convention): 11.5pt body, 13pt lead.
2. One accent per page — a red kicker or one crema callout, not both fighting.
3. Repeat the letterhead + footer on every page for standalone pages.
4. Keep tables to what fits the column; wide data becomes an appendix.

## Producing a real .docx

This CSS is the **spec and the PDF path**. To hand someone an editable Word file,
mirror these styles as named Word/Docs styles:

- Paragraph styles: `Title` (Bebas 46/caps), `Heading 2` (Bebas 26/caps),
  `Heading 3` (Montserrat 12/caps/red), `Body` (Roboto 11.5pt), `Lead`.
- Set the theme accent to `#E32213`, table header rule to `#1C1D1C`.
- Page: A4, 22mm margins, red 3px header rule via a header table border.

Keep the token values identical so the Word doc and the PDF are indistinguishable.
