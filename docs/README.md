# GSC Design System — Channel Guidelines

The core system (tokens, type, components) is one language. These guides say how
to speak it in each medium — because a slide, a phone screen and a printed
memorandum have different physics.

| Guide | Covers | Assets |
|---|---|---|
| [About GSC](about-gsc.md) | Who Global Sports Corporation is — company profile | — |
| [Brand](brand.md) | Logo, colour discipline, voice, do/don't | `assets/gsc-logo.png` |
| [Copywriting](copywriting.md) | Voice, tone, lexicon (EN/ES), microcopy | `.claude/skills/writing-gsc-copy/` |
| [Tokens](tokens.md) | DTCG source, cross-platform export | `tokens/gsc.tokens.json` |
| [Presentations](presentations.md) | 16:9 decks, slide types, FONDOS backgrounds, iconography | `css/presentation.css`, `templates/presentation.html` |
| [Landing pages](landing-pages.md) | Marketing web, hero → proof → CTA rhythm | `templates/landing.html` |
| [Mobile apps](mobile.md) | App shell, touch targets, mobile type scale | `css/mobile.css`, `templates/mobile-app.html` |
| [Forms](forms.md) | Inputs, states, validation, accessibility | core `components.css` |
| [Documents & print](documents.md) | Letterhead, reports, DOCX/PDF, the inverted palette | `css/print.css`, `templates/document.html` |

**One rule above all:** raw values live only in `css/tokens.css`. Every channel
consumes the same tokens, so the brand stays identical whether it's projected,
tapped or printed.

## The channel matrix at a glance

| | Background | Type ceiling | Red used for | Notes |
|---|---|---|---|---|
| **Web / Landing** | Ink (dark) | `--fs-display-1` (132px) | CTAs, accents | Full motion, hover states |
| **Presentation** | Ink + FONDOS | 104px slide title | 1 hero moment/section | 16:9, one idea per slide |
| **Mobile** | Ink (dark) | 40px | Primary action, values | 44px min touch target, body holds 16px |
| **Document / Print** | **Paper (light)** | 46px | Accents only | Palette **inverts** — dark ink on paper |

The document row is the deliberate exception: long-form reading and toner cost
mean documents flip to dark-ink-on-paper. Everything else stays dark-first.
