# Design Tokens & Cross-Platform Export

GSC ships tokens in the **W3C Design Tokens (DTCG) format** — the
[first stable spec (2025.10)](https://www.w3.org/community/design-tokens/) — so
one source drives every platform identically.

## Source of truth

`tokens/gsc.tokens.json` — DTCG format, with `$type`, `$value`, `$description`
and aliases (`{color.brand.red}`). This is the canonical machine-readable
definition of the palette, type, spacing, radius and motion.

The hand-authored `css/tokens.css` remains the canonical **web** stylesheet
(richly commented, with the semantic aliases components consume). The DTCG file
and `tokens.css` are kept in lock-step by value.

## Build

```bash
npm install
npm run tokens     # Style Dictionary v4 → build/
```

Outputs (committed for convenience):

| Platform | File |
|---|---|
| CSS variables | `build/css/gsc-tokens.css` |
| SCSS | `build/scss/_gsc-tokens.scss` |
| JS / JSON | `build/js/gsc-tokens.{js,json}` |
| iOS (Swift `UIColor`) | `build/ios/GSCTokens.swift` |
| Android (XML resources) | `build/android/gsc_colors.xml`, `gsc_dimens.xml` |

## Figma

The DTCG file imports directly into Figma variables (native DTCG support) and
tools like Tokens Studio, Terrazzo and Supernova — no plugin export scripts.

## Editing tokens

1. Edit `tokens/gsc.tokens.json` (the source).
2. Run `npm run tokens` to regenerate `build/`.
3. Mirror any web-facing change into `css/tokens.css` (or migrate the web build
   to consume `build/css/gsc-tokens.css` if you prefer a single generated path).
4. Run `npm run css` to rebuild the bundled `dist/gsc-design-system.css`.

Keeping the names identical across platforms (`--gsc-red` ↔ `color-brand-red` ↔
`colorBrandRed`) is what makes the mobile guidance in `docs/mobile.md` real.
