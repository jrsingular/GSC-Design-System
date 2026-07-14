# AGENTS.md — GSC Design System

Cross-tool instructions for AI agents (Cursor, Codex, Windsurf, Gemini CLI, Copilot, Claude
Code, chat agents, Hyperagent). This is the portable entry point; Claude Code also auto-loads
the richer Agent Skills in `.claude/skills/`.

> **You are working in the Global Sports Corporation (GSC) design system.**
> Produce output that is on-brand for GSC — *Live the dream.* — every time.

GSC is a **multi-program sports-development ecosystem: seven academy brands plus a corporate
parent.** The single most important thing you do on any task is **pick the right brand.**

---

## STEP 0 — Route to a program (do this before anything else)

**Every task belongs to exactly one brand.** Before you design, write, or generate, resolve
which one, using the canonical map in [`programs/registry.json`](programs/registry.json) and the
guide in [`docs/program-routing.md`](docs/program-routing.md).

Decision order (first match wins):

1. **Explicit** — the brief names a program or slug → use it.
2. **Instagram handle** named → map to that program.
3. **Partner** named — "Juventus" → `juventus-academy`; "Club América"/"Águila" → `nido-aguila`.
4. **Keyword** — `portero`/`goalkeeper` → `ser-portero`; `baby`/`iniciación`/`3–5 años` →
   `baby-juve`; `basketball`/`básquet` → `gba`; `running`/`atletismo` → `gra`.
5. **Sede** unique to one program → map it.
6. **Group-level** (investor, rights, ecosystem, GSC Complex, "GSC corporate") → `corporate`.
7. **Still unresolved → ASK.** Do not guess or default.

Two rules people get wrong:

- **Ambiguity:** bare "fútbol / soccer" is *not* enough — it matches Global Soccer Academy,
  Juventus Academy, **and** Baby Juve. Ask which one.
- **No mixing:** one surface = one brand. A true multi-program piece uses `corporate` as the
  wrapper; program logos appear only in a neutral, equal-weight lockup.

Then: load that program's palette/fonts/voice/logos from the registry (and
`programs/<slug>/tokens.json`, `skin.css`, `brand.md`), produce the work, and run the
compliance check.

---

## The brands (after you've routed)

Apply a program via `data-program="<slug>"` on a root element; use its confirmed palette +
display font. Never invent or substitute values.

| Program | data-program | Palette | Display font |
|---|---|---|---|
| Global Soccer Academy | `gsa` | #191919 #E7290F #F07D04 #FFFFFF | Morganite |
| Global Basketball Academy | `gba` | #1C1C1C #FE0000 #A3A6A9 #FFFFFF | Academic M54* |
| Global Running Academy | `gra` | #EE8A04 #E53518 #FFFFFF | Unison Pro* |
| Nido Águila Guatemala | `nido-aguila` | #F8E602 #FFFFFF #111A2D | Morganite |
| Ser Portero | `ser-portero` | #916E35 #FFFFFF #000000 | Headline Gothic ATF* |
| Juventus Academy Guatemala | `juventus-academy` | #000000 #FFFFFF #F9C016 | JuventusFans* |
| Baby Juve | `baby-juve` | #000000 #FFFFFF #F9C016 | JuventusFans* |
| GSC corporate | *(none)* | #191A19 #E32213 #EA6020 #F2E4C8 | Bebas Neue |

\* = proprietary font, not bundled — reference the family with its fallback; never substitute.
Baby Juve inherits Juventus Academy's brand (only the voice differs — playful, ages 3–5).
Full specs in `programs/<slug>/brand.md`; the token files are canonical; the registry mirrors
them for routing. All values confirmed by Luisa León — do not edit without her approval.

## Golden rules

0. **Route first.** Resolve the program (STEP 0) before producing anything. Never mix brands.
1. **Tokens only.** Never hard-code a hex, size, or radius. Use the `--gsc-*` custom properties
   (`css/tokens.css` / `tokens/gsc.tokens.json`) and the program `skin.css`.
2. **Import one stylesheet:** `dist/gsc-design-system.css`. Add a channel sheet after it when
   relevant: `css/presentation.css`, `css/mobile.css`, `css/print.css`.
3. **Compose, don't reinvent.** Use `.gsc-` components (see `DESIGN.md`). Only write new CSS
   when nothing fits, and then with tokens.
4. **Ration red & crema.** One primary action and at most one crema anchor per surface. Depth =
   hairlines + surface shifts, not shadows.
5. **Copy is on-brand too.** Clarity beats cleverness; write the CTA first; numbers do the
   bragging. Program copy is Spanish-first; corporate English-first. See `docs/copywriting.md`.
6. **Accessibility:** keep focus rings, honour `prefers-reduced-motion`, label controls, AA
   contrast on ink; program accents on dark are large-text-only in GSA/GBA/GRA/Ser Portero.
7. **Documents invert:** print/DOCX is dark-ink-on-paper; everything else is dark-first.
8. **Images:** for social/raster art, follow `docs/social-and-image.md` and the program's
   `imagePromptSeed`; composite the real logo file — never let a model draw a crest.

## Where things live

| You need | Go to |
|---|---|
| **Which program? (route first)** | `programs/registry.json` · `docs/program-routing.md` |
| Whole-system machine index | `gsc.manifest.json` · `llms.txt` |
| Onboarding for any agent/person | `docs/onboarding.md` |
| Design tokens | `css/tokens.css` · `tokens/gsc.tokens.json` (DTCG) · `programs/<slug>/tokens.json` |
| Components + demo | `css/components.css` · `index.html` |
| Condensed design reference | `DESIGN.md` |
| Channel guides | `docs/` (presentations, landing-pages, mobile, forms, documents) |
| Social & image art | `docs/social-and-image.md` |
| Brand rules | `docs/brand.md` · per-program `programs/<slug>/brand.md` |
| Copywriting | `docs/copywriting.md` |
| Working templates | `templates/` (presentation, landing, mobile-app, document) |

## Skills (Claude Code, and portable to other tools)

`.claude/skills/` contains five Agent Skills. Each one begins with a **program-routing
preflight** — resolve the program first. Read the relevant `SKILL.md` before generating:

- `building-gsc-brand` — logo, colour, type, identity
- `designing-gsc-interfaces` — product UI from tokens + components
- `writing-gsc-copy` — voice, tone, lexicon, microcopy
- `designing-gsc-landing-pages` — conversion-focused marketing pages
- `creating-gsc-social-art` — on-brand raster art for Instagram, flyers, key art

Other agents: treat each `SKILL.md` as a rules file — read it, then follow its compliance
checklist before returning output.

## Compliance (every task)

- [ ] Resolved to exactly one program (or `corporate`); asked when ambiguous.
- [ ] Used only that program's confirmed palette, display font, voice, and logo files.
- [ ] No second program's values on the same surface.
- [ ] Tokens only; one primary action; crema rationed; accessibility intact.
- [ ] Documents inverted to paper; everything else dark-first.
- [ ] Flagged for Luisa León's approval where a design ships.
