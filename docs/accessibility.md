# Accessibility — colour contrast (WCAG 2.1 AA)

> Audit performed 2026-07-13 against the confirmed program palettes. Ratios
> computed with the standard WCAG 2.1 relative-luminance formula.

## Summary

**27 text-on-background combinations tested across the 7 program palettes.**
- **23 PASS AA for normal text** (≥ 4.5:1) — safe for body copy.
- **4 are LARGE-ONLY** (≥ 3:1 but < 4.5:1) — safe for large/bold text only.
- **0 hard failures.**

## The rule that matters most

The **primary accent colour of four programs fails AA for normal text** when
placed on the program's dark surface. These accents are safe for **large text
only** (≥ 24px regular / ≥ 18.66px bold) — eyebrows, headlines, display type.
**Never use them for body copy, captions, or form labels.**

| Program | Accent on dark surface | Ratio | Use for |
|---|---|---|---|
| GSA | `#E7290F` on `#191919` | 3.95:1 | large/bold only — NOT body |
| GBA | `#FE0000` on `#1C1C1C` | 4.23:1 | large/bold only — NOT body |
| GRA | `#E53518` on `#1A1A1A` | 4.02:1 | large/bold only — NOT body |
| Ser Portero | `#916E35` on `#000000` | 4.49:1 | large/bold only — NOT body |

For body text in those programs, use **white on the dark surface** (17–21:1, all
pass) or the program's secondary accent where it passes (GSA `#F07D04` 6.40:1,
GBA `#A3A6A9` 6.97:1, GRA `#EE8A04` 6.86:1, Ser Portero gold on white 4.68:1).

## Fully safe combinations (both directions)

These palettes pass AA normal in every direction they're likely to be used:

| Program | Combination | Ratio |
|---|---|---|
| Nido Águila | `#F8E602` on `#111A2D` / inverse | 13.49:1 |
| Juventus Academy | `#F9C016` on `#000000` / inverse | 12.58:1 |
| Baby Juve | `#F9C016` on `#000000` / inverse | 12.58:1 |

## Default body text

Across **every program**, white (`#FFFFFF`) on the dark surface passes AA normal
at 17–21:1. Default body copy is always safe; the accent restriction above
applies only to coloured text.

## Implementation guidance

- **Eyebrows / kickers / display headlines:** program primary accent is fine
  (large text).
- **Body / captions / labels / links in running text:** white or a passing
  secondary — never the LARGE-ONLY accent.
- **Buttons:** primary-accent fill with white text needs checking per program;
  prefer the dark-surface + accent-border pattern for guaranteed contrast, or
  test the specific fill/text pair before shipping.

This audit is a snapshot of the confirmed palettes. If a palette changes (only
with Luisa León's approval), re-run the contrast check.
