# AGENTS.md — GSC Design System

Cross-tool instructions for AI coding agents (Cursor, Codex, Windsurf, Gemini
CLI, Copilot, Claude Code). This is the portable entry point; Claude Code also
auto-loads the richer Agent Skills in `.claude/skills/`.

> **You are working in the Global Sports Corporation (GSC) design system.**
> Produce output that is on-brand for GSC — *Live the dream.* — every time.

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
