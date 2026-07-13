# Governance — GSC Design System

Who approves what, where the sources of truth live, and how changes move.
Referenced from DESIGN.md §9 (this file closes the "pending" it named).

## Roles

| Role | Person | Authority |
|---|---|---|
| **Brand approver** | **Luisa León** (GSC Brand & Communications) | Final say on every palette hex, font name, logo, slogan, and voice value — corporate and all 7 programs. No brand value changes without her written approval. |
| **Leadership sponsor** | Juan Sebastian Rohrmann | Owns the quality rubric (docs/self-evaluation.md) and repo direction. |
| **Contributors** | Authorized GSC personnel & engaged contractors | Propose changes by PR under CONTRIBUTING.md; never merge brand-value changes without Luisa's approval recorded in the PR. |

## Sources of truth (in priority order)

1. **Token files** — `tokens/gsc.tokens.json` + `tokens/programs/*.tokens.json`.
   Canonical for every colour, font stack, spacing, radius, motion value.
2. **Hand-authored CSS** — `css/tokens.css`, `css/programs.css`. Must mirror the
   token files exactly; CI (`.github/workflows/validate.yml`) fails a PR whose
   skin hexes drift from the tokens.
3. **Generated outputs** — `build/`, `dist/`. Never edited by hand; regenerate
   with `npm run build`.
4. **Docs** — DESIGN.md, docs/programs/*.md describe; they never override tokens.

## Change workflows

### Brand value (palette / font / voice / slogan)
1. Get Luisa León's confirmation in writing (Slack #soulmd or equivalent).
2. Edit the token file; mirror the value in `css/tokens.css` or `css/programs.css`.
3. `npm run build && npm run validate` — parity + contrast must pass (0 hard failures).
4. PR citing Luisa's confirmation; update `docs/accessibility.md` if a palette changed.

### Component / channel / template
CONTRIBUTING.md applies (tokens only, demo in index.html, docs updated, a11y gate).
No Luisa sign-off needed unless brand values are touched.

### Assets (logos / fonts)
1. Only official files from Luisa's Photoshop/Illustrator sources — never traced,
   AI-generated, or "cleaned up" third-party copies.
2. Nomenclature `{program}-logo-{variant}.{ext}` per `docs/asset-manifest.md`;
   update the manifest in the same PR.
3. Fonts: bundle only openly licensed faces (Morganite — OFL). Proprietary faces
   (Academic M54, Unison Pro, Headline Gothic ATF, JuventusFans, ITC Avant Garde
   Gothic Pro, Redwing) are referenced by name, never committed.

### AI skills (`.claude/skills/`)
Skill edits follow the component workflow. A skill must never instruct an agent
to invent or substitute brand values — the brand-accuracy rule (DESIGN.md §2)
is non-negotiable in skill text too.

## Licensing & confidentiality

The repo is **Proprietary & Confidential** (see LICENSE). Do not mirror, publish,
or reuse outside GSC. The GitHub Pages workflow is manual-only for this reason.
Partner marks (Juventus FC, Club América) carry their owners' licensing terms —
use only within the scope of GSC's partner agreements.

## Out of scope here — lives in the Open Knowledge Pack (SOUL.md)

Operational governance is **not** duplicated in this repo. For these, consult
the Open Knowledge Pack / SOUL.md (owner: GSC leadership):

- Social-post approval flow (per-program accounts, who posts, who approves)
- Parent & guardian communications
- Payments, enrollment, and pricing communications
- Child-safety and safeguarding matters

> PENDIENTE: when SOUL.md is ported into or linked from this repo, replace this
> pointer with direct links. Until then, treat the above as explicitly not
> covered by the design system's governance.
