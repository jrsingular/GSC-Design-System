# Onboarding — use the GSC Design System with any agent

> One source of truth (this repo), many consumers. This page gives each kind of user a
> copy-paste starting point so their agent produces on-brand GSC work for the **right program**
> every time. Pick your row.

The repo stays the single source of truth. Machine entry points for agents:

- **Registry (routing map):** `programs/registry.json` —
  `https://raw.githubusercontent.com/jrsingular/GSC-Design-System/main/programs/registry.json`
- **Manifest (whole-system index):** `gsc.manifest.json` —
  `https://raw.githubusercontent.com/jrsingular/GSC-Design-System/main/gsc.manifest.json`
- **LLM index:** `llms.txt` —
  `https://raw.githubusercontent.com/jrsingular/GSC-Design-System/main/llms.txt`

---

## 1. Coding agents (Claude Code, Cursor, Codex, Windsurf, Copilot)

**Best for:** websites, landing pages, decks, mobile UI, documents built from the components.

```bash
git clone https://github.com/jrsingular/GSC-Design-System
./GSC-Design-System/install.sh          # into the current project (or pass a target dir)
```

- **Claude Code** auto-loads the five Agent Skills from `.claude/skills/` (building-gsc-brand,
  designing-gsc-interfaces, writing-gsc-copy, designing-gsc-landing-pages, creating-gsc-social-art).
- **Cursor / Codex / Windsurf / Copilot** read `AGENTS.md` + `DESIGN.md` (copied beside your code).
- Import `dist/gsc-design-system.css`, then set `data-program="<slug>"` on a root element.

Every skill now begins with a **program-routing preflight** — the agent resolves the correct
program before writing code. See `AGENTS.md`.

---

## 2. Chat agents (ChatGPT, Claude.ai, Gemini) — no repo, no code

**Best for:** quick copy, briefs, single-image social art, planning.

Paste this **system prompt / project instruction** once, then just describe your task:

```
You are a GSC brand assistant. GSC (Global Sports Corporation, "Live the dream.") runs SEVEN
academy brands plus a corporate parent. Before you produce ANYTHING, fetch and follow the GSC
Program Registry:
https://raw.githubusercontent.com/jrsingular/GSC-Design-System/main/programs/registry.json

Rules:
1. Resolve exactly ONE brand for the task using the registry's `routing.decisionOrder`
   (gsa, gba, gra, nido-aguila, ser-portero, juventus-academy, baby-juve, or corporate).
2. If the brief is ambiguous (e.g. bare "fútbol" — could be Global Soccer, Juventus, or Baby
   Juve), ASK which program. Never guess or default.
3. Use ONLY that program's confirmed palette hexes, display font, voice, and slogan from the
   registry. Never invent, substitute, or "improve" a value. Proprietary fonts are named with
   a fallback and are not to be swapped for another typeface.
4. Never mix two programs on one piece. Use `corporate` only for group/investor/ecosystem work.
5. Program copy is Spanish-first; corporate is English-first.
6. For image/social art, follow the program's `imagePromptSeed` and the guide at
   docs/social-and-image.md; reserve space for the real logo — never draw a crest.
Always state which program you resolved to and why before answering.
```

If your chat tool can't fetch URLs, paste the contents of `programs/registry.json` and
`docs/program-routing.md` into the conversation instead.

---

## 3. Hyperagent named agents (e.g. Soul.MD and teammates)

**Best for:** recurring, automated, or team-shared GSC design/brand work inside Hyperagent.

- Point the agent at the two raw URLs above (registry + manifest). An agent with GitHub read
  access can also read the repo directly via the GitHub integration.
- Bake the routing contract into the agent's system prompt (reuse the block in §2, adapting the
  first line to the agent's identity).
- Optionally attach the routing rule as a **skill/memory** so it persists across threads:
  *"For any GSC design task, resolve the program via programs/registry.json first; never mix
  brands; ask when ambiguous."*
- For on-brand raster art, the agent uses its image-generation tool with the program's
  `imagePromptSeed`, then composites the real logo file.

---

## 4. Non-technical staff (no coding tools at all)

**You don't need Git or code.** You need two things: the **program name** and **what you want**.

1. Open your agent (chat or Hyperagent).
2. Tell it the program and the task, e.g.
   *"Haz un post de Instagram para **Ser Portero**: clínica de porteros este sábado 9am."*
3. If you didn't name a program, the agent will ask which one — answer it.
4. The agent produces the art/copy on-brand; **send it to Luisa León for approval** before
   publishing (she approves all designs).

Tip: always start with the program name. "Fútbol" alone is ambiguous (Global Soccer, Juventus,
or Baby Juve) and the agent will have to ask.

---

## 5. External contractors / agencies

- Access is **proprietary and confidential** (see `LICENSE`) — for engaged GSC contractors only.
- Same rules as §1/§2 depending on whether they write code. They must use confirmed values from
  the registry and cannot introduce new palette/fonts.
- All output routes through **Luisa León** for brand approval.

---

## The one rule that never changes

Resolve the **program** first, use **only** its confirmed brand, never **mix**, and when in
doubt **ask** — then send it to **Luisa León** for approval. Everything else in this repo is in
service of that.
