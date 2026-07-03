# Landing Pages

Marketing and campaign web built entirely from core components.

**Asset:** `templates/landing.html`

## The rhythm

A GSC landing page is a narrative, top to bottom:

1. **Nav** (`.gsc-topbar`) — logo left, thin links + one primary CTA right.
2. **Hero** (`.gsc-hero`) — eyebrow → giant headline (one accent word) → sub → two buttons → `.gsc-stat-strip`.
3. **Marquee** (`.gsc-marquee`) — a breath of motion; capabilities or proof words.
4. **Logo / credibility strip** — muted, on `--soft`.
5. **Features** (`.gsc-grid--3` of `.gsc-card--hover`) — the "how it works" trio. One icon, one claim, one sentence each.
6. **Proof band** (`.gsc-band--crema`) — the single strongest fact, with figures.
7. **CTA band** (`.gsc-band--red`) — urgency copy + an inline form card.
8. **Footer** (`.gsc-footer`) — legal + tagline.

## Rules

- **One hero headline, one accent word.** `<span class="gsc-accent">`.
- **One primary button per view.** Everything else is `--ghost`.
- Alternate `.gsc-section` and `.gsc-section.is-soft` to create bands without borders.
- Keep the stat strip to **4 cells**; each is one number + one label.
- Ration crema and red exactly as elsewhere: one proof band, one CTA band.

## Responsive

Core CSS already collapses grids, the stat strip and the top bar at 860px. Hide
secondary nav links below 720px (see the template's local `@media` block) and let
the CTA button persist.

## Performance & SEO

- Self-host fonts; preload the two you use above the fold (Bebas + Montserrat).
- One `<h1>` (the hero). Sections use `<h2>`.
- Ship the reveal-on-scroll snippet (README) for `.gsc-reveal`; it degrades to visible without JS.
