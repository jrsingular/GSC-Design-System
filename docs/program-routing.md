# Program Routing — pick the right brand for every task

> **This is the most important rule in the system.** GSC is **seven academies plus a
> corporate parent**. Every task belongs to exactly **one** of them. Before you design,
> write, or generate anything, you must **resolve which brand applies** and use **only**
> that brand's confirmed palette, fonts, voice, and logos. Getting the wrong program — or
> mixing two — is the one failure this system exists to prevent.

Canonical machine-readable source: [`programs/registry.json`](../programs/registry.json).
This document is the narrative version of the `routing` block in that file. If the two ever
disagree, the registry wins.

---

## The three steps (do them in order, every time)

1. **RESOLVE the brand.** Use the decision order below to map the task to exactly one of:
   `gsa`, `gba`, `gra`, `nido-aguila`, `ser-portero`, `juventus-academy`, `baby-juve`, or
   `corporate`. If you cannot resolve to one, **ask** — do not guess.
2. **LOAD its brand.** Pull that program's entry from `registry.json` (palette, fonts, voice,
   slogan, logos) and its files: `programs/<slug>/tokens.json`, `skin.css`, `brand.md`.
3. **CHECK compliance.** Before returning output, confirm you used the confirmed values for
   the resolved program and nothing from another program. Run the checklist at the bottom.

---

## Decision order

Work top to bottom. The first rule that fires wins.

| # | Signal | Action |
|---|---|---|
| 1 | **Explicit** — the brief names a program or slug ("Ser Portero", "gba", "Juventus Academy") | Route to it. |
| 2 | **Instagram handle** — a handle in the registry is named | Map handle → program. |
| 3 | **Partner** — an official partner is named | "Juventus" → `juventus-academy`; "Club América"/"Águila" → `nido-aguila`. |
| 4 | **Keyword** — a program-unique word appears | `portero`/`goalkeeper`/`arquero` → `ser-portero`; `baby`/`iniciación`/`3–5 años` → `baby-juve`; `basketball`/`básquet`/`baloncesto` → `gba`; `running`/`atletismo`/`velocidad`/`resistencia` → `gra`. |
| 5 | **Sede** — a venue unique to one program | Map venue → program. |
| 6 | **Group-level** — investor, rights, M&A, ecosystem-wide, GSC Complex, or explicitly "GSC corporate" | Use `corporate`. |
| 7 | **Still unresolved** | **ASK.** Never default. |

---

## The two rules people get wrong

### Ambiguity: bare "fútbol / soccer" is NOT enough
Three programs are football: **Global Soccer Academy**, **Juventus Academy**, and **Baby
Juve**. A brief that only says "haz un post de fútbol" does **not** resolve. Ask:
*"¿Para cuál programa — Global Soccer Academy, Juventus Academy o Baby Juve?"* Only route
automatically when one is named, a handle/partner is given, or an age cue appears (3–5 →
Baby Juve).

### No mixing: one surface = one brand
Never put two programs' palettes or display fonts on the same artifact. If the piece is
genuinely about the whole ecosystem (e.g. an investor overview of all academies), use the
**corporate** brand as the wrapper; individual program logos may appear only in a neutral,
equal-weight lockup, each on its own correct treatment — not restyled to match each other.

---

## When to use `corporate`

Use the GSC parent brand (ink `#191A19`, red `#E32213`, orange `#EA6020`, crema `#F2E4C8`;
Bebas Neue / Montserrat / Roboto; *Live the dream.*) **only** for:

- Investor, rights, sponsorship, or M&A material
- Group-level or multi-program communication
- GSC Complex or ecosystem-wide topics
- Anything explicitly labelled "GSC corporate" / "the parent brand"

Everything aimed at parents/players of a single academy is a **program** brand, not corporate.

---

## Quick brand map (source of truth is the registry)

| Program | slug | Palette | Display font | Voice (short) |
|---|---|---|---|---|
| Global Soccer Academy | `gsa` | `#191919` `#E7290F` `#F07D04` `#FFFFFF` | Morganite ✅ | aspiracional, profesional, deportiva |
| Global Basketball Academy | `gba` | `#1C1C1C` `#FE0000` `#A3A6A9` `#FFFFFF` | Academic M54 ⚠️ | ambiente basquetbolista |
| Global Running Academy | `gra` | `#EE8A04` `#E53518` `#FFFFFF` | Unison Pro ⚠️ | emocional, atlética |
| Nido Águila Guatemala | `nido-aguila` | `#F8E602` `#FFFFFF` `#111A2D` | Morganite ✅ | locución de estadio · *Grandes de corazón* |
| Ser Portero | `ser-portero` | `#916E35` `#FFFFFF` `#000000` | Headline Gothic ATF ⚠️ | inspiracional · *El Ser está antes que el portero* |
| Juventus Academy GT | `juventus-academy` | `#000000` `#FFFFFF` `#F9C016` | JuventusFans ⚠️ | alto rendimiento · *Formamos personas antes que jugadores* |
| Baby Juve | `baby-juve` | `#000000` `#FFFFFF` `#F9C016` | JuventusFans ⚠️ | divertido, infantil (inherits Juventus) |
| GSC corporate | `corporate` | `#191A19` `#E32213` `#EA6020` `#F2E4C8` | Bebas Neue | investment-grade, restrained |

✅ = bundled (Morganite is self-hosted OFL). ⚠️ = proprietary, **not bundled** — reference the
family name with its fallback; never substitute a different typeface. All values confirmed by
**Luisa León**; do not edit without her approval.

---

## How to apply the resolved brand, by output type

- **HTML / CSS (web, deck, mobile, document):** import `dist/gsc-design-system.css`, then set
  `data-program="<slug>"` on a root element (e.g. `<body data-program="ser-portero">`). The
  skin re-tokens colour + display font; spacing/radius/motion stay corporate. See
  `designing-gsc-interfaces` and `designing-gsc-landing-pages`.
- **Image / social art (Instagram, flyers, key art):** feed the program's palette + display
  font + voice + `imagePromptSeed` into the generation prompt. See
  [`social-and-image.md`](social-and-image.md) and the `creating-gsc-social-art` skill.
- **Copy:** use the program's `voice` and confirmed `slogan`; program copy is Spanish-first,
  corporate is English-first. See `writing-gsc-copy`.

---

## Worked examples

| Brief | Resolves to | Why |
|---|---|---|
| "Instagram post para Ser Portero, clínica del sábado" | `ser-portero` | Explicit name (rule 1). |
| "Flyer de inscripción, niños de 3 a 5 años" | `baby-juve` | Age cue 3–5 (rule 4). |
| "Landing para la academia de básquet" | `gba` | Keyword básquet (rule 4). |
| "Post para @nidoaguilaguatemala" | `nido-aguila` | Handle (rule 2). |
| "Deck para inversionistas del ecosistema GSC" | `corporate` | Group/investor (rule 6). |
| "Necesito un post de fútbol para mañana" | **ASK** | Ambiguous across GSA / Juventus / Baby Juve. |
| "Arte para el torneo, con Juventus" | `juventus-academy` | Partner Juventus (rule 3). |

---

## Compliance checklist (run before returning any output)

- [ ] I resolved to exactly **one** program (or `corporate`) using the decision order.
- [ ] If the brief was ambiguous, I **asked** instead of guessing.
- [ ] Every colour is from the resolved program's confirmed palette — no other program's hex.
- [ ] The display font is the resolved program's confirmed family (or its named fallback if
      proprietary and unavailable) — never a substitute face.
- [ ] Voice/tone and any slogan match the resolved program (Spanish-first for programs).
- [ ] Only the resolved program's logo files are used; no redrawn crests.
- [ ] No second program's palette, font, or logo appears on the same surface.
