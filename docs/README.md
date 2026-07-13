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
| [Governance](governance.md) | Roles, sources of truth, change workflows | Luisa León = brand approver |
| [Accessibility](accessibility.md) | WCAG contrast audit, large-only accents | enforced by `npm run validate` |
| [Asset manifest](asset-manifest.md) | Every logo/font, provenance, gaps | `assets/logos/`, `assets/fonts/` |
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

## Program brands

GSC is a multi-program ecosystem. Each academy has its own confirmed brand:

| Program | Brand sheet | Token file |
|---|---|---|
| Global Soccer Academy | [programs/gsa.md](programs/gsa.md) | tokens/programs/gsa.tokens.json |
| Global Basketball Academy | [programs/gba.md](programs/gba.md) | tokens/programs/gba.tokens.json |
| Global Running Academy | [programs/gra.md](programs/gra.md) | tokens/programs/gra.tokens.json |
| Nido Águila Guatemala | [programs/nido-aguila.md](programs/nido-aguila.md) | tokens/programs/nido-aguila.tokens.json |
| Ser Portero | [programs/ser-portero.md](programs/ser-portero.md) | tokens/programs/ser-portero.tokens.json |
| Juventus Academy Guatemala | [programs/juventus-academy.md](programs/juventus-academy.md) | tokens/programs/juventus-academy.tokens.json |
| Baby Juve | [programs/baby-juve.md](programs/baby-juve.md) | tokens/programs/baby-juve.tokens.json |

See also: [asset-manifest.md](asset-manifest.md) (logos, fonts, gaps) and
[../DESIGN.md](../DESIGN.md) (full multi-program reference).
