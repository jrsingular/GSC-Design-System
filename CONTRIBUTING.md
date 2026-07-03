# Contributing to the GSC Design System

Thanks for helping keep GSC on-brand. This system covers **design and copy**
across web, presentations, mobile, and documents — plus the AI skills that
enforce it.

## Principles (read before proposing changes)

1. **One source of truth.** Raw values live only in `tokens/gsc.tokens.json` and
   `css/tokens.css`. Never hard-code hex/px in components.
2. **Ration red & crema.** Restraint is the brand; new components must respect it.
3. **Depth via hairlines,** not shadows.
4. **Accessibility is a gate,** not a nice-to-have (focus rings, reduced-motion, AA, labels).
5. **Copy is design.** Text changes follow `docs/copywriting.md`.

## How to propose a change

1. Branch from `main`.
2. Make the change at the right layer:
   - **Token** → `tokens/gsc.tokens.json` (+ mirror into `css/tokens.css`), run `npm run tokens`.
   - **Component** → `css/components.css`, add a demo to `index.html`.
   - **Channel** → the relevant `css/*.css` + `docs/*.md` + `templates/*.html`.
   - **Skill** → `.claude/skills/<skill>/` (keep SKILL.md < 500 lines; update its checklist).
   - **Copy rule** → `docs/copywriting.md` and the `writing-gsc-copy` skill.
3. Rebuild: `npm run build` (CSS bundle + tokens).
4. Verify `index.html` and any touched template render correctly.
5. Open a PR using the template; fill every section.

## Definition of done

- [ ] Tokens only — no raw literals.
- [ ] Demoed in `index.html` (for components) or a `templates/` file.
- [ ] Docs updated (channel guide and/or copywriting).
- [ ] Skill + its compliance checklist updated if behaviour changed.
- [ ] `npm run build` succeeds; bundle committed.
- [ ] Accessibility checks pass.

## Versioning

Semantic versioning in `package.json`. Note user-facing changes in
`CHANGELOG.md` under "Unreleased".
