# Brand

**Global Sports Corporation — _Live the dream._**

## The mark

`assets/gsc-logo.png` — the running-figure monogram beside the "GLOBAL /
SPORTS / CORPORATION" lockup, with the *Live the dream!* tagline.

- **Clear space:** keep at least the height of the figure mark clear on all sides.
- **Minimum size:** 28px tall on screen, 12mm in print.
- **Placement:** top-left in app bars and letterheads; centred only on covers and closing moments.
- **Backgrounds:** the mark is built for dark (ink) and light (paper). On the solid **red** FONDO, use the mark as-is only if legibility holds; otherwise switch to a mono knockout.
- **Don't:** recolour the figure, stretch, add shadows, box it, or place it on a busy photo without a scrim.

## Voice

Investment-grade, confident, plain. Short declaratives. Numbers do the bragging.

- **Say:** "A crown no one else wears." "Priced below its history." "The window is open."
- **Avoid:** hype adjectives, exclamation stacking, jargon for its own sake.
- Headlines are **ALL CAPS** (Bebas). Body is sentence case (Roboto). Labels are UPPERCASE tracked (Montserrat).

## Colour discipline

The palette is small on purpose. Restraint is the brand.

- **Red (`--gsc-red`)** — one primary action or one hero accent per view. Not a background for paragraphs of text (except the deliberate red FONDO / CTA band).
- **Orange (`--gsc-orange`)** — the *secondary* accent (kickers, chart series, the figure). Never competes with red for the primary action.
- **Crema (`--gsc-crema`)** — reserved for the single most important claim ("the anchor"). Overuse turns a highlight into wallpaper.
- **Ink ramp** — everything else. Depth comes from hairlines and surface shifts, not shadows.

## Typography — three voices

| Voice | Family | Fallback | Role |
|---|---|---|---|
| Display | Bebas Neue | Oswald, Arial Narrow | Headlines, big numbers |
| UI | Montserrat | system-ui | Labels, eyebrows, buttons |
| Body | Roboto | system-ui | Reading |

Self-host WOFF2 in production; the token stacks already carry system fallbacks.

## Motion

One idea: reveal, don't perform. `--transition` (0.25s) for hovers, `--dur-slow`
(0.7s) for scroll reveals. Always honour `prefers-reduced-motion`.
