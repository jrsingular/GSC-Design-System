# Design Tokens & Cross-Platform Export

GSC ships tokens in the **W3C Design Tokens (DTCG) format** — the
[first stable spec (2025.10)](https://www.w3.org/community/design-tokens/) — so
one source drives every platform identically.

## Two-layer source of truth (v3)

1. **Corporate base** — `tokens/gsc.tokens.json`. Palette, type, spacing,
   radius, motion for the GSC parent brand.
2. **Program overrides** — `programs/*/tokens.json`, one per academy
   (gsa, gba, gra, nido-aguila, ser-portero, juventus-academy, baby-juve).
   Each overrides **colour + font family only**; spacing/radius/motion are
   inherited from the corporate base. Values are confirmed by Luisa León —
   see `docs/governance.md` before editing anything.

The hand-authored `css/tokens.css` (corporate) and `programs/<slug>/skin.css` (skins)
remain the canonical **web** stylesheets. CI enforces that their values match
the token files (`npm run validate`).

## Build

```bash
npm install
npm run tokens        # canonical: Style Dictionary v4 via scripts/run-style-dictionary.mjs
npm run tokens:fallback  # no-registry fallback: scripts/build-tokens.mjs (identical output)
npm run validate      # DTCG validity · token↔CSS hex parity · WCAG contrast audit
```

The canonical driver builds the corporate base and each program as **separate
Style Dictionary instances** — merging all files into one source is wrong
(program token paths collide). Program output is scoped CSS only; the
cross-platform outputs (SCSS/JS/iOS/Android) are corporate.

Outputs (committed for convenience):

| Layer | Platform | File |
|---|---|---|
| Corporate | CSS variables | `build/css/gsc-tokens.css` |
| Corporate | SCSS | `build/scss/_gsc-tokens.scss` |
| Corporate | JS / JSON | `build/js/gsc-tokens.{js,json}` |
| Corporate | iOS (Swift `UIColor`) | `build/ios/GSCTokens.swift` |
| Corporate | Android (XML) | `build/android/gsc_colors.xml`, `gsc_dimens.xml` |
| Programs | Scoped CSS | `build/css/gsc-program-tokens.css` (`[data-program="…"]` blocks) |

## Figma

All DTCG files import directly into Figma variables (native DTCG support) and
tools like Tokens Studio, Terrazzo and Supernova — no plugin export scripts.
Import a program file as its own variable collection.

## Editing tokens

1. Brand values require Luisa León's approval first (`docs/governance.md`).
2. Edit the token file (`tokens/gsc.tokens.json` or `programs/*/tokens.json`).
3. Mirror the value into `css/tokens.css` / `programs/<slug>/skin.css`.
4. `npm run build` (regenerates `build/` + `dist/`), then `npm run validate` —
   parity and the contrast audit (0 hard failures) must pass; CI runs the same
   check on every PR.

Keeping the names identical across platforms (`--gsc-red` ↔ `color-brand-red` ↔
`colorBrandRed`) is what makes the mobile guidance in `docs/mobile.md` real.
