---
name: creating-gsc-social-art
description: Creates on-brand raster/social art for Global Sports Corporation (GSC) programs — Instagram feed and story posts, flyers, event key art, thumbnails — using each academy's confirmed palette, display font, voice, and logo. Use when asked for a social post, flyer, story, poster, or any generated/edited IMAGE for a GSC program (Global Soccer Academy, Global Basketball Academy, Global Running Academy, Nido Águila, Ser Portero, Juventus Academy, or Baby Juve), or corporate GSC.
---

# Creating GSC Social Art

GSC's daily design output is **raster art for social** — historically hand-made in Photoshop
with no templates. This skill lets you produce it on-brand for the **right program**, with any
image-generation/editing tool, without inventing brand values.

For HTML/UI use `designing-gsc-interfaces`; for words use `writing-gsc-copy`; for brand
foundations use `building-gsc-brand`.

## STEP 0 — Route to a program FIRST (non-negotiable)

Resolve exactly one brand before generating: `gsa`, `gba`, `gra`, `nido-aguila`,
`ser-portero`, `juventus-academy`, `baby-juve`, or `corporate`. Use
`programs/registry.json` (`routing.decisionOrder`) and `docs/program-routing.md`.

- Bare "fútbol/soccer" is ambiguous across Global Soccer, Juventus, and Baby Juve — **ask.**
- Age 3–5 / iniciación → `baby-juve` (not Juventus Academy).
- One piece = one program. Never mix two programs' colours/logos.

State the resolved program before you generate.

## STEP 1 — Load the confirmed brand

From the program's registry entry, pull `palette`, `fonts.display`, `voice`, `slogan`,
`instagramRef`, and `imagePromptSeed`. Palette hexes and font family are **confirmed by Luisa
León** — never shift or "improve" them.

## STEP 2 — Ground in the real arte

No written art manual exists; the **Instagram feed** (`instagramRef`) is the authoritative arte
style. When you can, view recent posts or edit from a real reference photo rather than imagining
from scratch.

## STEP 3 — Build the prompt

Start from the program's `imagePromptSeed`, then append the brief: occasion, subject, headline,
CTA. Full per-program base prompts are in `docs/social-and-image.md`.

Format defaults (Instagram-first): feed **4:5** or **1:1**; story/reel **9:16**; web/landscape
**16:9**. Keep headline + logo clear of the outer ~8%; on stories keep top/bottom ~250px clear.

## STEP 4 — Composite the real logo (do not draw it)

Reserve clear space in the generated art, then composite the **official logo file** from
`programs/<slug>/logos/`. Never let a generative model render or "recreate" a crest — especially
the **Juventus** and **Club América / Nido Águila** marks (licensed IP). Clear space ≥ mark
height; min ~120px on a 1080px canvas; add a scrim/chip over busy photography.

## STEP 5 — Add copy in the program voice

Short, Spanish-first for programs; use only confirmed slogans (e.g. Ser Portero *"El Ser está
antes que el portero"*; Nido Águila *"Grandes de corazón"*; Juventus *"Formamos personas antes
que jugadores"*). See `writing-gsc-copy`.

## Proprietary display fonts

`Academic M54` (GBA), `Unison Pro` (GRA), `Headline Gothic ATF` (Ser Portero), `JuventusFans`
(Juventus, Baby Juve), `ITC Avant Garde Gothic Pro` (Nido Águila secondary) are **not bundled**
and usually won't render in a generative model. The model will approximate — **set the real
headline type in post**, and never swap in a *different brand's* face. Morganite (GSA, Nido
Águila) is bundled/OFL.

## Compliance checklist

- [ ] Resolved to exactly one program (or corporate); asked when ambiguous.
- [ ] Palette matches the resolved program's confirmed hexes exactly.
- [ ] Display font is the confirmed family (real type set in post if proprietary).
- [ ] Official logo file composited with correct clear space; no model-drawn crest.
- [ ] Copy in program voice, Spanish-first, confirmed slogans only.
- [ ] Correct aspect ratio + safe areas for the placement.
- [ ] No second program's palette/font/logo on the same surface.
- [ ] Flagged for Luisa León's approval before publishing.

## Evaluations

1. *"Post para Ser Portero, clínica del sábado."* → `ser-portero`; gold `#916E35`/black/white,
   goalkeeper photography, 4:5, real Ser Portero logo, slogan optional, Spanish copy.
2. *"Historia para inscripciones de niños 3–5 años."* → `baby-juve`; black/white/`#F9C016`,
   playful child-football, 9:16, Baby Juve logo — not a recoloured brand.
3. *"Necesito un post de fútbol para mañana."* → **ask** which program before generating.
4. *"Key art para inversionistas del ecosistema."* → `corporate`; ink/red/orange/crema,
   Bebas headline, institutional imagery, GSC corporate logo.
