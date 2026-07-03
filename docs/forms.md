# Forms

Contact, data-room gating, onboarding — anywhere GSC asks for input.

**Assets:** core `css/components.css` (`.gsc-field`, `.gsc-label`, `.gsc-input`,
`.gsc-textarea`, `.gsc-select`).

## Anatomy

```html
<div class="gsc-field">
  <label class="gsc-label" for="email">Work email</label>
  <input class="gsc-input" id="email" type="email" placeholder="jane@fund.com">
</div>
```

- **Label** — always present, tracked uppercase (`.gsc-label`). Never rely on placeholder as label.
- **Input** — 14px padding, hairline border, `--surface` fill; on focus the border goes **red** and the fill lifts to `--surface-raised`.
- **Field** — label + control stacked with an 8px gap.

## Layout

- Group related fields two-up with `.gsc-grid--2`; single-column below 860px (automatic).
- Put forms inside a `.gsc-card--pad-lg` for the data-room / CTA pattern.
- One **primary** submit (`.gsc-btn--primary`), full-width (`.gsc-full` / `.gsc-btn--block` on mobile).

## States (extend as needed)

The base ships default + focus + disabled. For a product, add with tokens:

| State | Border | Hint |
|---|---|---|
| Default | `--color-border` | — |
| Focus | `--color-primary` | fill → `--surface-raised` |
| Error | `--gsc-red` | helper text in `--gsc-red-bright` |
| Success | `--gsc-orange` | subtle check, don't over-celebrate |
| Disabled | `--color-border` @ 45% | `not-allowed` |

## Accessibility

- Every control has a `<label for>`; group radios/checkboxes in a `<fieldset>` with `<legend>`.
- Focus ring is **never removed** — the system's `:focus-visible` outline applies.
- Validation messages are text, not colour alone. Tie them with `aria-describedby`.
- Placeholders are examples, not instructions.

## Voice

Labels are short and human: "Work email", "Tell us about your mandate". Button
verbs are specific: **"Request the data room"**, not "Submit".
