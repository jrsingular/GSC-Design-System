# Changelog

All notable changes to the GSC Design System. Format follows
[Keep a Changelog](https://keepachangelog.com/); versioning is
[SemVer](https://semver.org/).

## [3.0.0] — 2026-07-13 — Multi-program design system

### Added
- **Two-layer token architecture**: corporate base (tokens/gsc.tokens.json) +
  7 program brand tokens (tokens/programs/*.tokens.json), each confirmed by
  Luisa León (GSC Brand & Communications).
- **Program brands**: Global Soccer Academy, Global Basketball Academy, Global
  Running Academy, Nido Águila Guatemala, Ser Portero, Juventus Academy
  Guatemala, Baby Juve — each with confirmed palette, typography, voice, and
  logo assets.
- **Brand assets**: 16 logos with standard nomenclature across 7 programs +
  GSC corporate (see docs/asset-manifest.md); Morganite font bundled (OFL);
  proprietary fonts documented but not bundled for licensing.
- **Program CSS skins**: css/programs.css applies each program's confirmed
  palette + display font via `data-program` attribute scopes.
- **Per-program brand sheets**: docs/programs/{program}.md (7 files).
- **Asset manifest**: docs/asset-manifest.md documents every committed asset,
  its source (Slack #soulmd), and open gaps marked PENDIENTE DE CONFIRMACIÓN POR
  LUISA LEÓN.
- **Source documents**: original Open Knowledge Pack PDFs/DOCX kept in
  docs/programs/_source/ as provenance.
- **Token build script**: scripts/build-tokens.mjs regenerates cross-platform
  outputs (CSS, SCSS, JS, iOS Swift, Android XML) from W3C DTCG source without
  requiring npm registry access.

### Added (premium implementation pass)
- **Morganite self-hosted for real**: TTFs converted to WOFF2 (~74% smaller)
  with full `@font-face` rules (`font-display: swap`) in css/fonts.css — program
  headlines now render Morganite instead of silently falling back to Impact.
- **Canonical token pipeline**: `scripts/run-style-dictionary.mjs` builds the
  corporate base and each program as separate Style Dictionary v4 instances
  (merging all files in one config produced 299 token collisions). Programs
  emit scoped CSS (`build/css/gsc-program-tokens.css`); cross-platform outputs
  stay corporate. `npm run tokens` is canonical; `npm run tokens:fallback`
  (build-tokens.mjs) is the dependency-free mirror — outputs verified identical.
- **CI brand-integrity gate**: `scripts/validate-tokens.mjs` (dependency-free)
  + `.github/workflows/validate.yml` enforce DTCG validity, token↔CSS hex
  parity, the WCAG contrast audit (0 hard failures) and dist freshness on every
  push/PR — closing the self-evaluation's maintainability gap.
- **docs/governance.md**: roles (Luisa León = brand approver), sources of
  truth, change workflows, licensing; Open-Knowledge-Pack matters explicitly
  scoped out — closing the self-evaluation's governance gap.
- **Program-aware AI skills**: building-gsc-brand, designing-gsc-interfaces and
  writing-gsc-copy now teach the data-program skins, the brand-accuracy rule,
  large-only accent rule, and per-program voices/slogans.

### Changed
- DESIGN.md rebuilt as the multi-program reference (corporate identity §1 +
  program brands §2-3 + fonts/licensing §4 + governance §9). Earlier versions
  contained invented program palettes — removed; all values now Luisa-confirmed.
- build.sh bundles css/programs.css into dist/gsc-design-system.css.
- css/programs.css now also applies each program's confirmed body-text tint
  (`color.semantic.body` → `--gsc-text-4`) — previously defined in tokens but
  never rendered.
- scripts/build-tokens.mjs: repo root derived from script location (was a
  hardcoded sandbox path) and multi-word font families quoted per CSS spec.
- dist/gsc-design-system.css regenerated (includes program scopes + Morganite).
- build/ outputs regenerated with corporate + program tokens.

### Removed
- style-dictionary.config.js — superseded by scripts/run-style-dictionary.mjs
  (the single-source config merged program namespaces and could not produce
  scoped program CSS).

### Brand accuracy
- All 7 program palettes and fonts are CONFIRMED by Luisa León. No invented
  hex codes or font names. Gaps (SVG vectors, full variant sets) are tracked in
  docs/asset-manifest.md with Luisa León as owner.

## [1.1.2] — 2026-07-03

### Added
- **Company profile** — `docs/about-gsc.md` describing what Global Sports
  Corporation is (Guatemala-based sports development, events & rights company,
  founded 2013; Juventus Academy partner; LaLiga Next Gen & EA SPORTS FC Futures
  host). Added an "About GSC" section to the README, company context to the
  `building-gsc-brand` skill and `docs/brand.md`, and links from the docs index.

## [1.1.1] — 2026-07-03

### Changed
- **Licensing.** Replaced the permissive MIT license with a **Proprietary &
  Confidential** license that protects GSC's implementation: all rights
  reserved, use limited to authorized GSC personnel and contractors, no
  copying/redistribution/derivative works outside GSC. Marked the npm package
  `private` and `license: SEE LICENSE IN LICENSE`; added confidentiality notices
  to the README and contributing guide. All upgraded functionality (skills,
  copywriting system, DTCG tokens, governance) is retained.

## [1.1.0] — 2026-07-03

### Added
- **AI skills** (`.claude/skills/`): `building-gsc-brand`,
  `designing-gsc-interfaces`, `writing-gsc-copy`, `designing-gsc-landing-pages`
  — Agent Skills authored to Anthropic's spec (frontmatter, progressive
  disclosure, compliance checklists, evaluations).
- **Copywriting & content design**: `docs/copywriting.md` plus the
  `writing-gsc-copy` skill with voice/tone, lexicon (EN/ES), microcopy and
  before/after examples.
- **Cross-tool portability**: root `AGENTS.md` and `DESIGN.md`, plus `install.sh`
  so Cursor/Codex/Windsurf/Copilot pick up the system.
- **DTCG design tokens**: `tokens/gsc.tokens.json` (W3C stable format) +
  `style-dictionary.config.js` generating CSS/SCSS/JS/iOS/Android (`build/`).
- **Governance**: `CONTRIBUTING.md`, `LICENSE`, PR/issue templates, this
  changelog; GitHub Pages workflow to publish the style guide.

## [1.0.0] — 2026-07-03

### Added
- Core system: tokens, base, typography, utilities, components; bundled
  `dist/gsc-design-system.css`; living style guide `index.html`.
- Channel systems: presentations (16:9 deck), landing page, mobile app, and
  documents/print (inverted palette) — CSS + templates + guides in `docs/`.
