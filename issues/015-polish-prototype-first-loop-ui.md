# Polish prototype-inspired First Collection Loop UI

## Goal

Turn the uploaded prototype direction into maintainable Next.js UI surfaces for
the First Collection Loop without copying the Vite prototype or expanding MVP
scope.

## Context

This work supports the premium collector-club presentation across landing,
auth, verification, onboarding, dashboard, catalog preview, and collection
preview. It keeps the current app as the production source and treats
`prototype/` as a reference input only.

Related issues:

- `issues/006-build-profiles-and-onboarding.md`
- `issues/008-build-catalog-schema-and-search.md`
- `issues/010-build-my-collection-binder-grid.md`

## Scope

- Reusable catalog/card presentation components.
- Prototype-inspired dark premium visual system.
- Clean onboarding shell separate from dashboard navigation.
- Static catalog and collection previews as UI contracts for later Supabase
  wiring.
- Production tooling boundaries that exclude the Vite prototype reference.

## Out of Scope

- Full profile persistence.
- Supabase-backed catalog search.
- Add-to-collection persistence.
- User-owned `user_cards` CRUD.
- Marketplace, payment, checkout, escrow, shipping, negotiation, social feed, or
  Fantasy XI functionality.

## Acceptance Criteria

- [x] Landing, auth, verify, dashboard, onboarding, catalog, and collection
  surfaces retain the premium prototype direction.
- [x] Repeated card UI is extracted into reusable feature components.
- [x] Signup and login continue to use existing server actions.
- [x] Protected app routes still redirect logged-out users.
- [x] Onboarding uses a clean standalone visual shell without the dashboard
  sidebar.
- [x] Static catalog rows show player, club, season, manufacturer, set,
  parallel, card number, rarity, estimated value, and confidence.
- [x] No MVP non-goal is introduced.
- [x] Typecheck, lint, build, and whitespace checks pass.

## Progress Update

### Completed

- Added shared catalog/card components for foil previews, binder cards, mini-card
  art, and catalog rows.
- Updated landing, dashboard, catalog, collection, and first-card onboarding to
  reuse shared card components.
- Added an MVP-safe landing signal strip using activation/catalog/no-checkout
  messaging instead of fake social proof.
- Removed the extra auth route wrapper so auth screens render directly in the
  premium split-screen shell.
- Cleaned up onboarding presentation so it uses a dark standalone shell and does
  not show the dashboard menu while onboarding.
- Updated production checks to ignore the untracked `prototype/` reference
  folder.
- Updated `CHANGELOG.md`.

### Verification

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- `npx markdownlint-cli2 CHANGELOG.md`
- Playwright screenshot checks for landing, signup, verify, and logged-out
  protected onboarding redirect.

### Still Open

- Profile onboarding persistence remains in issue 006.
- Supabase-backed catalog search remains in issue 008.
- Add-card and `user_cards` collection persistence remain in issues 009 and 010.
- Authenticated onboarding screenshot was not captured because the route
  correctly redirected without a session in the browser check.

### Blockers / Questions

- None for this UI polish scope.

### Next Step

- Continue with database-backed profile onboarding or catalog search, depending
  on the next Sprint 1 priority.

## Labels

`type: feature`, `priority: P0`, `area: design`, `area: engineering`
