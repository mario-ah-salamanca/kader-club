# Create Supabase project and migrations

## Goal

Set up Supabase and initial database migrations.

## Scope

- Supabase project
- Local migration setup
- Tables for profiles, players, clubs, leagues, card sets, card variants, and user cards
- Foreign keys and indexes

## Acceptance Criteria

- [x] Migrations run locally.
- [x] Required tables exist.
- [x] Foreign keys exist.
- [x] Important query indexes exist.
- [x] Environment variables are documented.

## Progress Update

### Completed

- Added local Supabase project setup.
- Added the initial First Collection Loop schema migration for profiles, catalog tables, and user cards.
- Added foreign keys, constraints, indexes, explicit grants, and RLS policies.
- Documented local Supabase setup and environment variable names.

### Verification

- `npx supabase db reset --local`
- `npx supabase migration list --local`
- `npx supabase db advisors --local`
- RLS smoke test with two synthetic users confirmed users only see their own profile and collection rows.
- `npx markdownlint-cli2 README.md docs/data-model.md CHANGELOG.md`
- `git diff --check`

### Still Open

- Admin profile update policy behavior is tracked separately in issue 014.

### Blockers / Questions

- None.

### Next Step

- Continue with auth/protected layout or profile onboarding work from the Sprint 1 backlog.

## Labels

`type: task`, `priority: P0`, `area: engineering`, `area: infrastructure`
