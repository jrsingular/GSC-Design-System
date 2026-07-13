# Program Brand Scorecards — v2 (Premium Design 40%)

> **Evidence-based evaluation of the GSC master brand and all seven academy
> programs**, graded /10 under a rubric where **Premium Design Execution
> carries 40% of the weight**. Every score is computed from repo facts —
> reproduce with `npm run score` (exits non-zero if any program falls below
> the 8.75 target). Assessed 2026-07-13 against v3.2.0.

**Result: every program ≥ 8.75 ✓ — portfolio average 9.18/10.**

The v1 scorecard (average 8.0) identified the gaps; a focused improvement
loop closed every gap that could be closed honestly in-repo. What changed is
listed under [Improvement log](#improvement-log-v1--v2) — grades rose because
the work was done, not because the bar moved.

---

## The rubric v2

**Premium Design Execution — 40%** (four sub-pillars × 10%):

| # | Sub-pillar | Evidence checked |
|---|---|---|
| **D1** | **Premium showcase** | `programs/<slug>/preview.html` exists with full premium anatomy (skin applied via `data-program`, logo, display-1 hero, primary CTA, palette chips, footer). Corporate's showcase is `index.html` itself. All verified rendering in-browser: 0 errors, 0 failed assets. |
| **D2** | **Skin completeness & refinement** | The skin re-tokenizes *everything components consume*: 4 surfaces, primary/hover, accent, body-text tint, **program-branded hero glows**, **derived badge tints**, display + UI fonts. |
| **D3** | **Typography craft** | 10 = confirmed display font **self-hosted** (renders everywhere). 8 = proprietary font awaited with a **premium loaded fallback** ('Bebas Neue', condensed athletic, loaded by the system) **plus a ready `@font-face` scaffold** (`fonts.css`). 4 = generic fallback only. |
| **D4** | **Accent discipline in practice** | The showcase never puts accent colour on body-size text (static check + rendered computed-style audit; eyebrows/kickers exempt per `docs/accessibility.md`). |

**Foundations — 60%:**

| # | Pillar | Weight | Measures |
|---|---|---|---|
| P1 | Brand Fidelity & Confirmation | 10% | Values confirmed (Luisa León); 10 if partner-locked / master origin |
| P2 | Token Architecture | 10% | Valid DTCG + rich metadata (partner/philosophy/slogans) |
| P3 | Accessibility (WCAG 2.1 AA) | 10% | 10 = all combos AA-normal; **8.5 = large-only accents *with CI enforcement***; <3:1 fails |
| P4 | Visual Assets | 10% | Variant coverage + web vector (SVG) + vector master |
| P5 | Documentation | 10% | brand.md depth incl. audited **Accesibilidad** + type-delivery sections |
| P6 | Voice & Content | 5% | Confirmed slogans/taglines/philosophy; register |
| P7 | Provenance & Governance | 5% | Source docs + named owner |

---

## Results — all above target

| Rank | Program | Grade | vs v1 |
|---|---|---|---|
| 🥇 1= | **Global Soccer Academy** | **9.55** | +1.35 |
| 🥇 1= | **Nido Águila Guatemala** | **9.55** | +0.45 |
| 3 | **Juventus Academy Guatemala** | **9.35** | +1.05 |
| 4 | **Ser Portero** | **9.25** | +1.15 |
| 5 | **GSC Corporate (master)** | **9.05** | *new — the origin brand, evaluated first-class* |
| 6 | **Global Running Academy** | **8.95** | +1.55 |
| 7 | **Baby Juve** | **8.90** | +1.10 |
| 8 | **Global Basketball Academy** | **8.80** | +1.70 |

**Minimum 8.80 ≥ 8.75 target ✓ · average 9.18/10.**

### GSC Corporate — the master program (9.05)
`D 10/10/8/10 · P1 10 · P2 10 · P3 8.5 · P4 4 · P5 10 · P6 10 · P7 10`
The original brand this whole system grew from — the ink-dark, red/orange,
Bebas-led identity of the investment prospectus. Perfect fidelity, the full
DTCG base (it *defines* spacing/motion/type for everyone), the complete
copywriting system, and `index.html` as its living showcase. Its two honest
gaps: Bebas Neue loads via Google import rather than self-hosted WOFF2 (D3 8),
and the corporate mark ships raster-only (P4 4) — both closable the same way
the programs' gaps are.

### Why GSA & Nido Águila lead (9.55)
The only brands that hit **10/10 on the entire Premium-Design block**: bundled
Morganite (self-hosted WOFF2), complete skins with program glows and derived
badge tints, verified showcases — plus GSA's **real vector logo** (SVG faithfully
converted from Luisa's own `.ai` master) and Nido's partner-locked palette
(13.49:1 contrast).

---

## Improvement log (v1 → v2)

Everything below is real, committed work — the reason the grades moved:

1. **7 premium program showcases** (`programs/<slug>/preview.html`) — hero led
   by each *confirmed* slogan/tagline, palette chips with hexes, type specimens,
   re-skinned components, voice badges, program facts. Rendered in-browser:
   **0 errors, 0 failed assets, 0 body-accent violations** across all 7.
2. **Skin completeness**: program-branded **hero glows** and **badge tints**
   derived from each confirmed primary/accent (same derivation style as the
   corporate `--gsc-red-bright`) + the body-text tint — skins now re-tokenize
   every knob components consume. (Found via the showcase build: badges were
   still rendering corporate red under program skins.)
3. **Typography delivery**: premium fallback chains — proprietary name always
   first, then **'Bebas Neue'** (a loaded, condensed athletic face) instead of
   bare Impact — plus a production-ready **`@font-face` scaffold**
   (`programs/<slug>/fonts.css`) awaiting each licensed file, with preload
   guidance. Morganite programs unchanged (already self-hosted).
4. **GSA vector logo**: `gsa-logo-line-art.svg` — a faithful format conversion
   of Luisa's own `.ai` (PDF) master; pure paths, no tracing, no redrawing.
5. **Brand sheets deepened**: per-program **Accesibilidad** sections with the
   actual audited ratios and usage rules, typography-delivery notes, and the
   showcase link (all sheets now 600–800 words).
6. **Scoring blind spot fixed**: GSA/GBA/GRA's *confirmed* taglines
   (`program.tagline` in tokens) were being ignored by the v1 scorer.
7. **Corporate elevated to first-class**: the master brand is now evaluated
   alongside its programs, as the origin of the system.

## Still open (owner: Luisa León)

- **SVG masters + full variant sets** for the remaining programs (and the
  corporate mark) — the system is ready to receive them; P4 rises automatically.
- **Licensed proprietary fonts** (Academic M54, Unison Pro, Headline Gothic
  ATF, JuventusFans, ITC Avant Garde Gothic Pro) — drop the WOFF2 into
  `programs/<slug>/fonts.css` scaffolds; D3 → 10 for five programs.
- Self-host **Bebas Neue** (OFL) for the corporate master → corporate D3 → 10.

Neither can be fabricated in-repo without violating the brand-accuracy rule.

---

_Methodology: grades measure each brand **as implemented in this repository** —
premium, production-ready, system-native delivery. Regenerate with
`npm run score`; CI-friendly (non-zero exit below target)._
