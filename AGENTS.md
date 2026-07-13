# AGENTS.md — GSC Design System

Cross-tool instructions for AI coding agents (Cursor, Codex, Windsurf, Gemini
CLI, Copilot, Claude Code). This is the portable entry point; Claude Code also
auto-loads the richer Agent Skills in `.claude/skills/`.

> **You are working in the Global Sports Corporation (GSC) design system.**
> Produce output that is on-brand for GSC — *Live the dream.* — every time.

## Multi-program brands (v3.0)

GSC is a multi-program sports-development ecosystem with 7 academy brands, each
confirmed by Luisa León. When producing work for a specific academy, apply its
brand via the `data-program` attribute and use its confirmed palette + display
font — never invent or substitute values.

| Program | data-program | Palette | Display font |
|---|---|---|---|
| Global Soccer Academy | `gsa` | #191919 #E7290F #F07D04 #FFFFFF | Morganite |
| Global Basketball Academy | `gba` | #1C1C1C #FE0000 #A3A6A9 #FFFFFF | Academic M54* |
| Global Running Academy | `gra` | #EE8A04 #E53518 #FFFFFF | Unison Pro* |
| Nido Águila Guatemala | `nido-aguila` | #F8E602 #FFFFFF #111A2D | Morganite |
| Ser Portero | `ser-portero` | #916E35 #FFFFFF #000000 | Headline Gothic ATF* |
| Juventus Academy Guatemala | `juventus-academy` | #000000 #FFFFFF #F9C016 | JuventusFans* |
| Baby Juve | `baby-juve` | #000000 #FFFFFF #F9C016 | JuventusFans* |

* = proprietary font, not bundled — see DESIGN.md §4. Full per-program specs in
docs/programs/. Token files (tokens/programs/*.tokens.json) are the canonical
source. All values confirmed by Luisa León — do not edit without her approval.

## Golden rules

1. **Tokens only.** Never hard-code a hex, size, or radius. Use the `--gsc-*`
   custom properties (`css/tokens.css` / `tokens/gsc.tokens.json`).
2. **Import one stylesheet:** `dist/gsc-design-system.css`. Add a channel sheet
   after it when relevant: `css/presentation.css`, `css/mobile.css`, `css/print.css`.
3. **Compose, don't reinvent.** Use `.gsc-` components (see `DESIGN.md`). Only
   write new CSS when nothing fits, and then with tokens.
4. **Ration red & crema.** One primary red action and at most one crema anchor
   per surface. Depth = hairlines + surface shifts, not shadows.
5. **Copy is on-brand too.** Clarity beats cleverness; write the CTA first;
   numbers do the bragging. See `docs/copywriting.md`.
6. **Accessibility:** keep focus rings, honour `prefers-reduced-motion`, label
   controls, AA contrast on ink.
7. **Documents invert:** print/DOCX is dark-ink-on-paper; everything else is dark-first.

## Where things live

| You need | Go to |
|---|---|
| Design tokens | `css/tokens.css` · `tokens/gsc.tokens.json` (DTCG) |
| Components + demo | `css/components.css` · `index.html` |
| Condensed design reference | `DESIGN.md` |
| Channel guides | `docs/` (presentations, landing-pages, mobile, forms, documents) |
| Brand rules | `docs/brand.md` |
| Copywriting | `docs/copywriting.md` |
| Working templates | `templates/` (presentation, landing, mobile-app, document) |

## Skills (Claude Code, and portable to other tools)

`.claude/skills/` contains four Agent Skills. Read the relevant `SKILL.md`
before generating:

- `building-gsc-brand` — logo, colour, type, identity
- `designing-gsc-interfaces` — product UI from tokens + components
- `writing-gsc-copy` — voice, tone, lexicon, microcopy
- `designing-gsc-landing-pages` — conversion-focused marketing pages

Other agents: treat each `SKILL.md` as a rules file — read it, then follow its
compliance checklist before returning output.
