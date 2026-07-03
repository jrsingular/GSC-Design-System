---
name: designing-gsc-landing-pages
description: Builds high-converting, on-brand landing pages for Global Sports Corporation (GSC) — marketing, campaign, and investor-interest pages combining the GSC design system with conversion copywriting. Use when creating or improving a GSC landing page, marketing page, campaign page, or hero-to-CTA web narrative.
---

# Designing GSC Landing Pages

A GSC landing page is a **narrative that ends in one action** — usually
"Request the data room." It pairs the design system's dark, investment-grade
look with conversion copy discipline. Build the page around the CTA, then fill
in the story that earns it.

Uses `designing-gsc-interfaces` (components) + `writing-gsc-copy` (words).
Working reference: the repo's `templates/landing.html`.

## The page skeleton (top → bottom)

1. **Nav** `.gsc-topbar` — logo left; ≤4 links + one primary CTA right.
2. **Hero** `.gsc-hero` — eyebrow → claim headline (`.gsc-display-1`, one accent word) → one-line sub → two buttons → `.gsc-stat-strip` (4 numbers).
3. **Marquee** `.gsc-marquee` — a beat of motion; capability or proof words.
4. **Credibility strip** — muted logos/affiliations on `.is-soft`.
5. **How it works** — `.gsc-grid--3` of `.gsc-card--hover`; one icon, one claim, one sentence each.
6. **Proof band** `.gsc-band--crema` — the single strongest fact + `.gsc-figure` row.
7. **CTA band** `.gsc-band--red` — urgency line + inline form card (`.gsc-field` + `--primary --block`).
8. **Footer** `.gsc-footer` — risk line + tagline.

## Conversion rules

1. **Write the CTA first.** Every section is a step toward "Request the data room."
2. **One primary action, repeated** — same verb in nav, hero, and CTA band. Never competing asks.
3. **Above the fold earns the scroll:** claim + proof numbers visible without scrolling.
4. **Show, then ask.** Proof band (crema) precedes the CTA band (red).
5. **One hero headline, one accent word.** `<span class="gsc-accent">`.
6. **Numbers over adjectives** in every section (stat strip, figures, cards).
7. **Ration urgency:** red CTA band uses "the window is open" energy once.
8. **Qualify, don't beg:** "For qualified investors only" reads as confidence.

## Copy hooks that work for GSC

- Hero: a claim ("Own the game." / "A crown no one else wears.")
- Sub: what GSC does, in one sentence, with a specific noun.
- Cards: verb-led value ("Renegotiate media rights", "Build the academy pipeline").
- CTA: the action, named. Risk line nearby.

## Performance & SEO

- Self-host + preload above-the-fold fonts (Bebas, Montserrat).
- One `<h1>` (the hero); sections use `<h2>`.
- Ship the reveal-on-scroll snippet for `.gsc-reveal`; degrades to visible without JS.
- Collapse handled by core CSS at 860px; hide secondary nav < 720px, keep the CTA.

## References

- **Template** → repo `templates/landing.html`
- **Guide** → repo `docs/landing-pages.md`
- **Copy** → `writing-gsc-copy` (voice, lexicon, microcopy)

## Compliance checklist

- [ ] Single primary CTA, same verb across nav/hero/band.
- [ ] Claim headline + one accent word; proof numbers above the fold.
- [ ] Proof (crema) precedes CTA (red); each rationed to one.
- [ ] Every section carries a specific number, not an adjective.
- [ ] One `<h1>`; fonts preloaded; reveal degrades without JS.
- [ ] Risk/qualification line present near the CTA.

## Evaluations

1. *"Landing page for a new Costa Rica club raise."* → full skeleton, one CTA, claim hero, crema proof + red CTA.
2. *"Improve this hero — 'Welcome to our investment platform.'"* → claim headline, accent word, specific sub, named CTA.
3. *"Add a proof section."* → `.gsc-band--crema` + `.gsc-figure` row with benchmarked numbers.
