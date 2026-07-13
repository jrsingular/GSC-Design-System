# Program Brand Scorecards

> **A world-class, evidence-based evaluation of each GSC academy brand as
> implemented in this design system.** Every score traces to a measurable fact
> in the repo — not opinion. Reproduce the numbers with
> `node scripts/score-programs.mjs`. Assessed 2026-07-13 against v3.1.0.

Each program is graded **/10** across eight weighted pillars drawn from
recognised standards: design-system **maturity models** (completeness,
consistency, adoption-readiness), **brand-consistency** practice, the **W3C
Design Tokens (DTCG)** spec, and **WCAG 2.1 AA**. This is an *implementation*
scorecard — it measures how premium, efficient, and system-native each brand is
**as shipped here**, which is why a legitimate brand can still lose points for,
say, a font that isn't bundled or logos that ship only as raster.

---

## The rubric

| # | Pillar | Weight | What it measures | 9–10 looks like |
|---|---|---|---|---|
| **P1** | **Brand Fidelity & Confirmation** | 15% | Every value authoritative & confirmed by Luisa León; zero invented data | Palette/type locked to a confirmed or licensed-partner source |
| **P2** | **Token Architecture & Completeness** | 15% | Valid DTCG; complete semantic set; metadata richness; correct corporate inheritance | Full semantic tokens + rich `program.*` metadata (partner, philosophy, slogans) |
| **P3** | **Accessibility (WCAG 2.1 AA)** | 15% | Contrast of heading/body/accent on the program's own surfaces | 5/5 combinations pass AA-normal; 0 hard failures |
| **P4** | **Typography Delivery / Production Readiness** | 15% | Does the confirmed display font actually *render* out of the box? | Font bundled & self-hosted (renders everywhere) |
| **P5** | **Visual Asset Completeness** | 15% | Logo variant coverage (color/mono/alt/symbol) **and web-vector (SVG)** availability | Full variant set + scalable SVG |
| **P6** | **Documentation Depth** | 10% | Completeness of `brand.md` (palette, type, voice, usage, provenance) | Thorough, cross-linked, all sections populated |
| **P7** | **Voice & Content System** | 10% | Defined voice, slogans/philosophy, differentiation, language register | Distinct voice + confirmed slogan(s)/philosophy |
| **P8** | **Provenance & Governance** | 5% | Source document present; named owner; traceable confirmation | Editable source doc + owner named |

**Scoring bands (per pillar):** 10 exemplary · 8–9 strong · 6–7 solid with a
clear gap · 4–5 functional but sub-premium · ≤3 deficient.
**Final grade** = Σ(pillar × weight) ÷ 100.

---

## Results — ranked

| Rank | Program | Grade | Headline |
|---|---|---|---|
| 🥇 1 | **Nido Águila Guatemala** | **9.1/10** | Reference implementation — bundled font, AA-clean, partner-locked |
| 🥈 2 | **Juventus Academy Guatemala** | **8.3/10** | Elite brand & a11y; only the proprietary font holds it back |
| 🥉 3 | **Global Soccer Academy** | **8.2/10** | Bundled Morganite + vector source; accent is large-only |
| 4 | **Ser Portero** | **8.1/10** | Richest voice (2 slogans) & most logo variants; font not bundled |
| 5 | **Baby Juve** | **7.8/10** | Strong docs/a11y; single raster logo + proprietary font |
| 6 | **Global Running Academy** | **7.4/10** | AA-clean palette; raster-only logo + proprietary font |
| 7 | **Global Basketball Academy** | **7.1/10** | Solid brand; large-only accent + raster logo + proprietary font |

**Portfolio average: 8.0 / 10** — a strong, consistent system. The recurring
drag on the lower ranks is not brand quality (all values are confirmed) but two
*delivery* gaps: **proprietary display fonts that aren't bundled** (P4) and
**logos shipping only as raster, no SVG** (P5).

---

## Scorecards

### 🥇 Nido Águila Guatemala — 9.1/10
`P1 10 · P2 9 · P3 10 · P4 10 · P5 6 · P6 9 · P7 9 · P8 10`
- **Why it leads:** the only program that is simultaneously **AA-clean (5/5)**, uses a **bundled font (Morganite)** so it renders everywhere, and is **palette-locked to an official partner (Club América)** — maximal authority. Yellow `#F8E602` on navy `#111A2D` scores a superb **13.49:1**. Rich metadata (partner + slogan *"Grandes de corazón"*).
- **To reach 10:** add SVG logo + a mono/wordmark variant (P5 6→9).

### 🥈 Juventus Academy Guatemala — 8.3/10
`P1 10 · P2 9 · P3 10 · P4 5 · P5 6 · P6 9 · P7 9 · P8 10`
- **Strengths:** official licensed Juventus brand (fidelity 10), AA-clean (yellow on black **12.58:1**), a genuine **philosophy** (*"Formamos personas antes que jugadores"*), editable `.docx` source.
- **Ceiling:** `JuventusFans` is **proprietary and not bundled** — headlines fall back to Impact until the licensed font is added (P4 5). SVG logo would lift P5.

### 🥉 Global Soccer Academy — 8.2/10
`P1 9 · P2 8 · P3 8 · P4 10 · P5 6.5 · P6 8 · P7 7 · P8 10`
- **Strengths:** **Morganite bundled** (renders out of the box), and it ships an **`.ai` vector source** — the only program with any vector master.
- **Gaps:** primary red `#E7290F` on `#191919` is **3.95:1 → large-text-only** (P3 8); voice is defined but only a generic tagline, no slogan (P7 7). Export the `.ai` to SVG to lift P5.

### Ser Portero — 8.1/10
`P1 9 · P2 9 · P3 8 · P4 5 · P5 7 · P6 9 · P7 10 · P8 10`
- **Strengths:** the **richest content system** — two confirmed slogans (*"El Ser está antes que el portero"*, *"Tu mente dirige tu parada"*) earn a perfect P7; **most logo variants** (color + alt + symbol).
- **Gaps:** `Headline Gothic ATF` not bundled (P4 5); gold `#916E35` on black is **4.49:1 → large-only** (P3 8).

### Baby Juve — 7.8/10
`P1 9 · P2 9 · P3 10 · P4 5 · P5 4 · P6 9 · P7 8 · P8 10`
- **Strengths:** inherits Juventus's AA-clean palette (5/5), the **most thorough brand sheet** (647 words), distinct playful register + age-range metadata.
- **Gaps:** a **single raster logo, no variants, no SVG** (P5 4); proprietary `JuventusFans` not bundled (P4 5).

### Global Running Academy — 7.4/10
`P1 9 · P2 8 · P3 10 · P4 5 · P5 4 · P6 8 · P7 7 · P8 10`
- **Strengths:** **AA-clean (5/5)** — orange `#EE8A04` on `#1A1A1A` is a comfortable **6.86:1**, unusual for a warm accent.
- **Gaps:** `Unison Pro` not bundled (P4 5); **raster-only single-variant logo** (P5 4); tagline-only voice (P7 7).

### Global Basketball Academy — 7.1/10
`P1 9 · P2 8 · P3 8 · P4 5 · P5 4 · P6 8 · P7 7 · P8 10`
- **Strengths:** confirmed palette, complete tokens, solid documentation.
- **Gaps (three delivery misses):** `Academic M54` not bundled (P4 5); red `#FE0000` on `#1C1C1C` is **4.23:1 → large-only** (P3 8); **raster-only single-variant logo** (P5 4). Highest upside in the portfolio.

---

## What moves the whole portfolio up

The scores cluster by two systemic, owner-tracked gaps — close them and every
lower rank jumps a full band:

1. **Bundle or license the proprietary display fonts** (Academic M54, Unison Pro,
   Headline Gothic ATF, JuventusFans) → P4 5→10 for five programs. Biggest single
   lever (+~0.75 grade each).
2. **Ship SVG logo masters + full variant sets** (mono/light/dark/wordmark) from
   Luisa León's source files → P5 to 9–10 across the board. GSA already has an
   `.ai` master ready to export.
3. **Add a confirmed slogan/philosophy** to GSA, GBA, GRA → P7 7→9.
4. Where an accent is large-only (GSA, GBA, Ser Portero), the system already
   enforces the rule; no palette change needed — it's a documented constraint,
   not a failure.

Neither font licensing nor vector export can be fabricated in-repo — both are
tracked in [`asset-manifest.md`](asset-manifest.md) with **Luisa León** as owner.
The design system is built to receive them: drop the WOFF2/SVG in and the grades
rise automatically.

---

_Methodology note: this scorecard grades the brands **as implemented in this
repository**, so "world-class" here means production-premium and system-native.
A program's real-world brand may be excellent while its in-repo delivery still
has a gap (e.g. a licensed font not yet bundled). Regenerate anytime with
`node scripts/score-programs.mjs` after assets change._
