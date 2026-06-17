# Implement Auth and protected app layout

## Goal

Allow users to sign up, log in, log out, and access protected app pages only when authenticated.

## Acceptance Criteria

- [x] Signup works.
- [x] Login works.
- [x] Logout works.
- [x] Protected routes block unauthenticated users.
- [x] Server-side checks are used.
- [x] Auth errors are handled clearly.

## Progress Update

### Completed

- Added a minimal Next.js App Router and strict TypeScript foundation.
- Added Supabase SSR client helpers for server, browser, and middleware use.
- Added signup, login, and logout server actions.
- Added public auth pages with clear error/success messages.
- Added a protected `/app` layout that verifies identity server-side before
  rendering private app content.
- Added an authenticated dashboard placeholder for the next Sprint 1 tasks.

### Verification

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm audit --audit-level=moderate`
- Temporary Playwright smoke test confirmed logged-out `/app` redirect, signup,
  logout, login, authenticated `/app` rendering, and no browser console errors.

### Still Open

- Profile onboarding is tracked in issue 006.
- Catalog, add-card, collection binder, and stats are tracked in later Sprint 1
  issues.

### Blockers / Questions

- None for this issue.

### Next Step

- Continue with profile onboarding from issue 006.

## Labels

`type: feature`, `priority: P0`, `area: engineering`
