# Social & Image Art — on-brand raster output for every program

> The design system is dark-first HTML/CSS for web, decks, mobile and documents. But most of
> GSC's daily design work is **raster art for social** (Instagram feed/stories, flyers, event
> key art), historically made by hand in Photoshop with no templates. This guide lets **any
> agent that can generate or edit images** produce on-brand social art for the correct
> program — without a Photoshop file and without inventing brand values.

**Always route first.** Resolve the program with [`program-routing.md`](program-routing.md)
before you generate anything. Then pull that program's `palette`, `fonts`, `voice`, `slogan`,
`instagramRef`, and `imagePromptSeed` from [`programs/registry.json`](../programs/registry.json).

---

## The method (works with any image tool)

1. **Route** → get the program slug.
2. **Ground in reality** → the authoritative visual reference is each program's **Instagram
   feed** (`instagramRef` in the registry). No written art manual exists; the feed is the
   arte style. When possible, look at recent posts before generating, or pull a reference
   image and edit from it rather than imagining from scratch.
3. **Build the prompt** from the program's `imagePromptSeed` + the specific brief (occasion,
   subject, headline, CTA). The seed already encodes palette, display font, and voice.
4. **Reserve logo space** → generate with clear space for the logo; composite the **real
   logo file** from `programs/<slug>/logos/` afterward. Never let the model draw the crest.
5. **Add copy in the program voice** → short, Spanish-first for programs; use only confirmed
   slogans. See `writing-gsc-copy`.
6. **Check** → run the compliance checklist below.

---

## Format cheat-sheet (Instagram-first)

| Use | Aspect ratio | Notes |
|---|---|---|
| Feed post (portrait) | 4:5 | Default for announcements; maximises feed real estate. |
| Feed post (square) | 1:1 | Grid consistency. |
| Story / Reel cover | 9:16 | Keep text in the middle ~1080×1420 safe zone; avoid top/bottom UI. |
| Landscape / web hero | 16:9 | Events, YouTube thumbnails. |

**Safe areas:** keep headline and logo clear of the outer ~8% on every edge; on stories keep
the top ~250px and bottom ~250px clear of essential content (platform UI).

---

## Logo discipline (all programs)

- Composite the **official logo file** from the program's `logos/` folder — do not let a
  generative model render or "recreate" a crest, especially the **Juventus** and **Club
  América / Nido Águila** marks (licensed IP).
- Clear space ≥ the logo's mark height on all sides. Minimum legible size ~120px on a 1080px
  canvas.
- On busy photography, place the logo on a solid brand-colour chip or add a subtle scrim —
  never drop it directly on noise.
- One logo per surface. Co-branding (e.g. Juventus + GSC) only with an approved lockup.

---

## Per-program art recipes

Each recipe = the confirmed palette + display font + voice, plus a base prompt. Paste the base
prompt into your image tool, then append the specific brief (`occasion`, `subject`, `headline`).
Proprietary display fonts (⚠️) usually won't render in a generative model — the model will
approximate; **set the real headline type in post** (or in HTML) rather than trusting the
render, and never let it substitute a *different brand's* face.

### Global Soccer Academy — `gsa`
- **Palette:** `#191919` ink · `#E7290F` red · `#F07D04` orange · `#FFFFFF`. **Display:** Morganite ✅. **Voice:** aspiracional, profesional, deportiva.
- **Base prompt:** *Global Soccer Academy sports key art. Near-black `#191919` background, one red `#E7290F` energy accent, orange `#F07D04` secondary highlight, white type. Tall condensed all-caps headline. Dynamic youth-football photography, stadium-night grade, generous negative space, clear space reserved top-left for the logo.*

### Global Basketball Academy — `gba`
- **Palette:** `#1C1C1C` · `#FE0000` · `#A3A6A9` steel · `#FFFFFF`. **Display:** Academic M54 ⚠️ (fallback heavy condensed sans). **Voice:** ambiente basquetbolista.
- **Base prompt:** *Global Basketball Academy key art. Deep charcoal `#1C1C1C`, one hot red `#FE0000` accent, steel grey `#A3A6A9` support, white type. Court-culture energy, youth basketball action, hardwood + rim detail, dramatic contrast, clear space for the logo.*

### Global Running Academy — `gra`
- **Palette:** `#EE8A04` orange · `#E53518` red · `#FFFFFF` · `#1A1A1A`. **Display:** Unison Pro ⚠️. **Voice:** emocional, atlética, profesional.
- **Base prompt:** *Global Running Academy key art. Warm orange `#EE8A04` lead, red `#E53518` accent, white type, dark `#1A1A1A` grounding. Motion-blur running photography, dawn track light, stride and effort, warm grade, clear space for the logo.*

### Nido Águila Guatemala — `nido-aguila`
- **Palette:** `#F8E602` yellow · `#FFFFFF` · `#111A2D` navy. **Display:** Morganite ✅. **Voice:** locución de estadio. **Slogan:** *Grandes de corazón.* **Partner:** Club América.
- **Base prompt:** *Nido Águila (Club América academy) key art. Club-América yellow `#F8E602` hero colour, white type, deep navy `#111A2D` grounding. Aspirational stadium-announcer energy, youth football, celebratory mood. Composite the official Nido Águila / Club América crest — never redraw it. Clear space for the logo.*

### Ser Portero — `ser-portero`
- **Palette:** `#916E35` gold · `#FFFFFF` · `#000000`. **Display:** Headline Gothic ATF ⚠️. **Voice:** emocional, atlética, inspiracional. **Slogans:** *El Ser está antes que el portero* · *Tu mente dirige tu parada.*
- **Base prompt:** *Ser Portero key art. Gold/brown `#916E35` signature colour, white type, black `#000000` grounding. Goalkeeper-focused photography — gloves, dive, focus, hands and eyes — dramatic low-key with a gold accent, clear space for the logo/symbol.*

### Juventus Academy Guatemala — `juventus-academy`
- **Palette:** `#000000` · `#FFFFFF` · `#F9C016` Juventus yellow. **Display:** JuventusFans ⚠️. **Voice:** alto rendimiento, aspiracional. **Slogan:** *Formamos personas antes que jugadores.* **Partner:** Juventus FC.
- **Base prompt:** *Juventus Academy Guatemala key art. Black `#000000` + white with Juventus yellow `#F9C016` single accent. Elite-club polish, high-performance yet human tone, youth football. Composite the official Juventus Academy crest — never redraw Juventus marks. Clear space for the logo.*

### Baby Juve — `baby-juve` (inherits Juventus Academy)
- **Palette:** `#000000` · `#FFFFFF` · `#F9C016` — **same brand as Juventus Academy.** **Display:** JuventusFans ⚠️. **Voice:** divertido, infantil deportivo, emocionante. Ages 3–5.
- **Base prompt:** *Baby Juve key art (Juventus Academy iniciación, ages 3–5). Black + white + Juventus yellow `#F9C016`, but playful and child-friendly. Rounded warm layout, big friendly type, joyful toddler-football movement, safe and colourful, keeping the black-white-yellow identity. Composite the official Baby Juve logo. Clear space for the logo.*

### GSC corporate — `corporate`
- **Palette:** `#191A19` ink · `#E32213` red · `#EA6020` orange · `#F2E4C8` crema. **Display:** Bebas Neue. **Voice:** investment-grade, restrained. **Tagline:** *Live the dream.*
- **Base prompt:** *GSC corporate key art. Stadium-night ink `#191A19`, red `#E32213` primary + orange `#EA6020` secondary flames, one rationed crema `#F2E4C8` anchor. Condensed all-caps headline. Institutional sports-business imagery, dark and precise, clear space for the corporate logo.*

---

## Do / don't

- ✅ Route first; one program per surface; confirmed palette only.
- ✅ Composite real logo files; keep clear space; Spanish-first program copy.
- ✅ Use the Instagram feed as the arte reference; edit from real reference photos when you can.
- ❌ Invent or shift a palette hex ("brighter yellow", "a nicer red").
- ❌ Let a model draw the Juventus or Club América crest, or swap a proprietary font for a
  different brand's typeface.
- ❌ Mix two programs' colours/logos on one piece.
- ❌ Ship without a human brand check — **Luisa León approves all designs.**

---

## Compliance checklist

- [ ] Program resolved via `program-routing.md`; ambiguous briefs were asked, not guessed.
- [ ] Palette matches the resolved program's confirmed hexes exactly.
- [ ] Display font is the confirmed family (real type set in post if proprietary).
- [ ] Official logo file composited with correct clear space; no model-drawn crest.
- [ ] Copy in the program voice, Spanish-first, confirmed slogans only.
- [ ] Correct aspect ratio and safe areas for the target placement.
- [ ] Flagged for Luisa León's approval before publishing.
