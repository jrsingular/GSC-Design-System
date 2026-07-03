---
name: building-gsc-brand
description: Applies the Global Sports Corporation (GSC) brand — logo usage, colour, typography, and the core visual/verbal identity — across any artifact. Use when working on GSC-branded material, when the user mentions the GSC brand, logo, brand colours, brand fonts, or asks whether something is on-brand.
---

# Building the GSC Brand

Global Sports Corporation — *Live the dream.* GSC brings institutional
discipline to football-club investment. The brand reads **investment-grade,
confident, restrained**: stadium-night dark, two brand flames (red + orange),
condensed all-caps headlines, and rationed warmth.

This skill is the fast brand overview. For product UI reach for
`designing-gsc-interfaces`; for words reach for `writing-gsc-copy`.

## Who GSC is (context for on-brand output)

Global Sports Corporation is a **Guatemala-based sports company (founded 2013)**
that develops talent, runs events, and manages sports rights across Central
America and beyond. Regional **Juventus Academy** partner; host of **LaLiga
"Next Gen"** and **EA SPORTS FC Futures**; thousands of young athletes (ages
~3–18) across football, basketball, tennis and volleyball — football at the
core. Mission: *create opportunities and transform lives through sport.* It also
develops football investment/partnership initiatives. Write and design for a
real, ambitious sports organisation — not a generic "fund." Full profile:
`docs/about-gsc.md`.

## Brand at a glance

- **Name:** "Global Sports Corporation" first use, "GSC" after. Never "the GSC" / "G.S.C."
- **Tagline:** *Live the dream.* (EN lockup).
- **Mark:** the running-figure monogram + "GLOBAL / SPORTS / CORPORATION" lockup.
- **Feel:** heritage that can't be manufactured + numbers that do the bragging.

## Colour

| Token | Hex | Use |
|---|---|---|
| Red `--gsc-red` | `#E32213` | Primary — one action / one accent per view |
| Red deep `--gsc-red-deep` | `#B01A0E` | Pressed, on-cream |
| Orange `--gsc-orange` | `#EA6020` | Secondary accent (kickers, figure, chart series) |
| Crema `--gsc-crema` | `#F2E4C8` | The single most important claim only |
| Ink `--gsc-ink` | `#191A19` | Background |
| Ink soft `--gsc-ink-soft` | `#232423` | Raised surface |
| Line `--gsc-line` | `#3A3B3A` | Hairline borders (depth = borders, not shadows) |

**Discipline:** red marks one primary thing; orange never competes with red;
crema is rationed to one anchor per surface. Restraint *is* the brand.

## Typography — three voices

| Voice | Family | Role |
|---|---|---|
| Display | Bebas Neue | ALL-CAPS headlines, big numbers |
| UI | Montserrat | Labels, eyebrows, buttons |
| Body | Roboto | Reading |

## Logo rules

- **Clear space:** ≥ the figure-mark height on all sides.
- **Min size:** 28px screen / 12mm print.
- **Placement:** top-left in bars & letterheads; centred only on covers/closings.
- **Backgrounds:** built for dark (ink) and light (paper). On solid red, use a mono knockout if legibility drops.
- **Never:** recolour the figure, stretch, add shadows, box it, or drop it on a busy photo without a scrim.

## The channel rule (where the palette flips)

Everything is **dark-first** — except **documents/print**, which invert to
**dark ink on paper** (reading + toner). Red and crema stay accents there.

## References

- **Full brand guide** → the repo's `docs/brand.md`
- **Voice at a glance** → use `writing-gsc-copy` for anything with words

## Compliance checklist

- [ ] One primary red action per view; orange stays secondary.
- [ ] Crema used at most once (the anchor claim).
- [ ] Headlines Bebas ALL-CAPS; body Roboto sentence case; labels Montserrat tracked.
- [ ] Logo has clear space, min size, correct background treatment.
- [ ] Documents are dark-ink-on-paper; everything else dark-first.
- [ ] Name/tagline written correctly (GSC; *Live the dream.*).
