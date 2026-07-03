# Changelog

All notable changes to the GSC Design System. Format follows
[Keep a Changelog](https://keepachangelog.com/); versioning is
[SemVer](https://semver.org/).

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
