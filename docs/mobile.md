# Mobile Apps

Native-feeling screens that stay unmistakably GSC.

**Assets:** `css/mobile.css` · `templates/mobile-app.html`

## Shell

`.gsc-app` is a flex column: **status bar → app bar → scroll region → tab bar**.
The `.gsc-phone` frame in the template is for mockups only — drop it in a real app.

- **App bar** (`.gsc-app__bar`, 56px) — Bebas title, icon buttons left/right.
- **Content** (`.gsc-app__scroll`) — the only scrolling region; 16px padding.
- **Tab bar** (`.gsc-tabbar`, 64px) — 3–5 primary destinations, respects `safe-area-inset-bottom`.

## Touch & sizing

- **Minimum touch target 44×44px** (`--tap`). Every button, tab and row obeys it.
- **Body text holds at 15–16px** even though display headlines shrink — legibility beats density on a phone.
- Mobile display ceiling is **~40px** (`.gsc-m-hero h2`); the 132px web hero has no place here.

## Components

| Pattern | Class | Notes |
|---|---|---|
| Compact hero | `.gsc-m-hero` | Radial red glow, one number, one line |
| Stat cards | `.gsc-m-scroller` + `.gsc-m-stat` | Horizontal scroll, bleeds to edge |
| List rows | `.gsc-m-row` | Icon tile + title/sub + trailing value; whole row is the tap target |
| Section label | `.gsc-m-section-label` | Tracked caps divider |
| Full-width CTA | `.gsc-btn--block` | Primary action, thumb-reachable |

## Rules

1. **One primary action per screen**, as a full-width `--block` button near the bottom.
2. Red marks **value and the primary action** — not decoration.
3. Use the tab bar for navigation, never a hamburger for primary destinations.
4. Prefer system back gestures; the app bar back button mirrors them.

## Native mapping

These are CSS references, not a framework. Map them to your stack:
- **iOS / SwiftUI:** tokens → an `Asset Catalog` + `Color`/`Font` extensions.
- **Android / Compose:** tokens → a `MaterialTheme` `ColorScheme` + `Typography`.
- **React Native:** import `tokens.css` values into a JS theme object.
Keep the names (`--gsc-red`, `--space-4`, …) identical across platforms.
