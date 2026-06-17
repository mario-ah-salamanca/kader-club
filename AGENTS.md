# AGENTS.md

This file defines how AI coding agents, Codex sessions, and human collaborators should work inside the Kader Club repository.

Kader Club is a football-card collection management app for European collectors. The product starts as a trusted digital binder and portfolio dashboard before expanding into trade discovery, premium collector tools, and future playful features such as Fantasy XI.

## 1. Purpose and Scope

This is the root/global agent policy for the repository.

It applies to the entire repository unless a more specific nested `AGENTS.md` exists in a subdirectory. Nested files may refine these rules for a specific area, but must not contradict this root file.

Use nested `AGENTS.md` files only when local rules become specific enough to justify them, for example:

```txt
src/features/catalog/AGENTS.md
src/features/collection/AGENTS.md
supabase/AGENTS.md
docs/AGENTS.md
```

Do not duplicate broad project rules in nested files. Keep shared rules here.

## 2. Current Product Objective

The current execution objective is the **First Collection Loop**:

> A user can sign up, complete a profile, search a curated football-card catalog, add a card to their collection, view it in their digital binder, and see basic collection stats.

Do not optimize for marketplace features, payments, escrow, shipping, or advanced analytics until the First Collection Loop is working.

Use this scope model:

- **First Collection Loop** — immediate demo journey.
- **MVP** — broader v1 foundation, including wishlist and trade discovery foundations.
- **Post-MVP** — marketplace, payments, escrow, advanced ROI dashboards, public forums, and Fantasy XI.

## 3. Source of Truth

Use GitHub as the source of truth.

Important files:

- `README.md` — product identity and current priority
- `ROADMAP.md` — phases, milestones, and product sequencing
- `docs/product-strategy.md` — positioning, personas, product principles
- `docs/requirements.md` — MVP scope, non-goals, and acceptance criteria
- `docs/architecture.md` — technical architecture and engineering assumptions
- `docs/data-model.md` — catalog, collection, pricing, and trade data model
- `docs/project-management.md` — GitHub workflow, labels, milestones, board columns
- `docs/planning/sprint-1-first-collection-loop.md` — active sprint plan
- `docs/decisions/` — ADRs and major product/technical decisions
- `CHANGELOG.md` — notable changes

If implementation contradicts documentation, update the documentation in the same pull request.

Do not treat old Google Drive material, chat history, or external notes as source of truth unless they have been migrated into the repository or explicitly reintroduced by the user.

## 4. Repository Structure

Expected application structure once the app scaffold exists:

```txt
src/
├── app/
├── components/
├── features/
│   ├── auth/
│   ├── profiles/
│   ├── catalog/
│   ├── collection/
│   ├── pricing/
│   ├── wishlist/
│   ├── trades/
│   └── admin/
├── lib/
│   ├── supabase/
│   ├── validation/
│   ├── analytics/
│   └── permissions/
└── tests/
```

Ownership rules:

- `src/app/` — routes, layouts, pages, and server actions.
- `src/components/` — shared reusable UI components only.
- `src/features/auth/` — authentication UI and auth flows.
- `src/features/profiles/` — onboarding, profile setup, and profile settings.
- `src/features/catalog/` — catalog search, card detail, catalog admin flows, and catalog import UI.
- `src/features/collection/` — user-owned card flows and digital binder UI.
- `src/features/pricing/` — valuation logic, price observations, snapshots, and confidence labels.
- `src/features/wishlist/` — wishlist CRUD and wishlist visibility behavior.
- `src/features/trades/` — trade discovery only, not marketplace transactions.
- `src/features/admin/` — admin-only tools and moderation workflows.
- `src/lib/supabase/` — Supabase clients, generated types, and database helpers.
- `src/lib/validation/` — Zod schemas and validation helpers.
- `src/lib/analytics/` — analytics wrappers and event names.
- `src/lib/permissions/` — authorization checks and role helpers.
- `supabase/` — migrations, RLS policies, seed data, and local Supabase configuration.
- `docs/` — product, architecture, planning, and ADR documentation.

Keep feature code inside the owning feature folder unless it is genuinely shared.

## 5. Agent Operating Rules

Before changing code or docs:

1. Read this file.
2. Read `README.md`.
3. Read `ROADMAP.md`.
4. Read the most relevant file under `docs/`.
5. Check related GitHub Issues when available.

During work:

- Keep changes small and reviewable.
- Prefer simple maintainable solutions over complex abstractions.
- Do not introduce marketplace/payment logic unless explicitly requested.
- Do not silently change MVP scope.
- Update docs when behavior, architecture, data model, or product scope changes.
- Add acceptance criteria to new tasks.
- Preserve the distinction between First Collection Loop, MVP, post-MVP, and future features.
- Do not create abstractions before there are at least two real use cases.

After work:

- Summarize what changed.
- Note what remains incomplete.
- Reference affected docs and issues.
- Update `CHANGELOG.md` for notable changes.

## 6. Planning Workflow

Use this workflow before implementing significant work.

### Step 1 — Understand

Identify:

- User problem
- Product phase
- Relevant persona
- Existing issue or missing issue
- Affected files
- MVP vs post-MVP impact
- Security or privacy impact
- Required verification steps

### Step 2 — Plan

Create or update a GitHub Issue for meaningful work.

The issue should include:

- Goal
- Context
- Scope
- Out of scope
- Acceptance criteria
- Dependencies
- Related docs
- Verification plan

Small typo, formatting, or housekeeping changes may be done directly in a focused PR without a separate issue.

For labels, milestones, board columns, and project-management conventions, follow `docs/project-management.md`.

### Step 3 — Execute

Use a focused branch:

```txt
type/short-description
```

Examples:

```txt
feature/add-card-flow
task/supabase-schema
docs/update-roadmap
fix/auth-redirect
```

Use clear, scoped commits:

```txt
feat: add card search page
fix: protect collection routes
docs: improve agent instructions
chore: add markdown lint workflow
```

### Step 4 — Document

Update docs in the same PR when required.

Examples:

- Product behavior changed → update `docs/requirements.md`
- Architecture changed → update `docs/architecture.md`
- Schema changed → update `docs/data-model.md`
- Roadmap changed → update `ROADMAP.md`
- Decision made → add an ADR under `docs/decisions/`

### Step 5 — Review

Before marking work complete, check:

- Acceptance criteria are met.
- Relevant docs are updated.
- Security/privacy assumptions are respected.
- RLS/authorization is considered for user-owned data.
- No MVP non-goal was accidentally introduced.
- Required verification commands were run or explicitly marked unavailable.

## 7. Execution Commands

Use the canonical commands from `package.json` once the app scaffold exists.

Expected commands:

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

For Markdown-only changes, run:

```bash
markdownlint-cli2 "**/*.md" "#node_modules"
```

If a command does not exist yet:

1. Do not invent a successful result.
2. Add the missing script if it is part of the current task.
3. Otherwise, document that the command is unavailable and create a follow-up issue.

Do not mark code work complete unless the relevant verification path is explicit.

## 8. Engineering Principles

Default technical direction:

- Use TypeScript strictly.
- Start as a modular monolith.
- Use Next.js for the application shell unless changed by ADR.
- Use Supabase Auth and Postgres.
- Enforce server-side authorization.
- Implement RLS from day one.
- Treat collections as private by default.
- Make public sharing explicit.
- Use Zod for runtime validation at form, server-action, import, and database-boundary inputs unless changed by ADR.
- Keep pricing estimates transparent and confidence-labeled.
- Prefer boring, well-documented dependencies.

Avoid:

- Over-engineering early abstractions
- Premature microservices
- Marketplace logic inside collection-management modules
- Client-only authorization
- Fake precision in pricing or scoring
- Hidden coupling between unrelated features
- Frameworks or services that are not needed for the current milestone

## 9. Code Boundaries

Respect the modular monolith.

Rules:

- Keep product features under `src/features/*`.
- Keep shared utilities under `src/lib/*`.
- Do not import feature internals across unrelated features.
- Prefer explicit data-access functions over scattered Supabase queries.
- Keep pricing logic separate from collection ownership logic.
- Keep trade discovery separate from marketplace/payment logic.
- Keep admin behavior behind server-side role checks.
- Keep UI components presentation-focused; move business rules into feature or lib modules.

Dependency direction:

```txt
src/app/ -> src/features/* -> src/lib/*
```

Avoid dependencies in the opposite direction.

## 10. Supabase and Data Rules

All database work must protect user-owned data by default.

Rules:

- Represent schema changes as migrations.
- Enable RLS on user-owned tables.
- Write policies for select, insert, update, and delete when applicable.
- Never rely only on client-side filtering for private data.
- Update generated database types after schema changes.
- Keep seed data deterministic and safe for local development.
- Do not store secrets in the repository.
- Use environment variables for service keys and deployment-specific configuration.
- Keep price observations append-only unless a documented correction workflow exists.

For collection data, verify that a user cannot read, update, or delete another user's private records.

## 11. Testing and Verification

Before completing code work:

1. Run type checking.
2. Run linting.
3. Run relevant tests.
4. Run the production build.
5. For auth, database, RLS, or protected-route work, verify ownership and authorization behavior.

Testing expectations:

- Unit tests for pure utilities, valuation logic, validation schemas, and permissions helpers.
- Component tests for forms, empty states, and important UI state transitions.
- Integration or E2E tests for signup, login, onboarding, catalog search, add-to-collection, protected routes, and ownership boundaries.
- Manual verification notes are acceptable only before the automated test harness exists.

If automated tests are missing for a critical path, create a follow-up issue and document the manual verification performed.

## 12. MVP Scope Guardrails

### MVP Includes

- Authentication
- Profiles
- Protected app layout
- Curated catalog
- Catalog search
- Card detail page
- Add card to collection
- My Collection digital binder
- Trade status on owned cards
- Basic estimated value
- Price confidence labels
- Wishlist foundation
- Trade discovery foundation

### MVP Excludes

- Payments
- Escrow
- Checkout
- Shipping workflows
- Physical card authentication
- Public forums
- Complex social feeds
- Fantasy XI squad builder
- Advanced ROI dashboards
- Automated market scraping

If a request touches an excluded area, record it as post-MVP unless the user explicitly changes the scope.

## 13. Documentation Rules

Documentation should be practical, not decorative.

When creating or updating docs:

- Use clear Markdown headings.
- Keep decisions traceable.
- Separate MVP from future ideas.
- Add examples when they reduce ambiguity.
- Prefer checklists for execution tasks.
- Keep long-term ideas in `docs/future/` unless they affect current architecture.
- Keep duplicated process details out of `AGENTS.md` when they already live in `docs/project-management.md` or `CONTRIBUTING.md`.

## 14. Decision Records

Create an ADR when a decision affects:

- Architecture
- Data model
- Authentication/authorization
- Pricing logic
- Trade-matching logic
- Product scope
- Monetization
- Deployment strategy
- Testing strategy
- Major dependency choices

ADR format:

```md
# ADR 000X: Decision Title

## Status

Proposed / Accepted / Rejected / Superseded

## Context

What problem are we solving?

## Decision

What did we decide?

## Consequences

What becomes easier?
What becomes harder?

## Alternatives Considered

- Option A:
- Option B:
```

## 15. Pull Request Checklist

Every PR should answer:

- What changed?
- Why was it needed?
- What is in scope?
- What is out of scope?
- How was it verified?
- Which issue does it close?
- Which docs were updated?
- What remains incomplete, if anything?

Before opening a PR, verify:

- [ ] The change is focused.
- [ ] Acceptance criteria are met or clearly marked incomplete.
- [ ] Relevant docs are updated.
- [ ] `CHANGELOG.md` is updated for notable changes.
- [ ] No MVP non-goal was introduced accidentally.
- [ ] Security/RLS implications were considered.
- [ ] Type check, lint, tests, and build were run when available.

## 16. Progress Tracking

Use this lightweight tracking loop.

### Session Start

Check:

- Active issue
- Current milestone
- Open blockers
- Last modified docs
- Next acceptance criterion
- Required verification command

### During Work

Record:

- Files changed
- Decisions made
- Questions discovered
- Follow-up issues needed
- Verification performed

### Session End

Leave a short progress note in the issue or PR:

```md
## Progress Update

### Completed

-

### Still Open

-

### Blockers / Questions

-

### Verification

-

### Next Step

-
```

## 17. Current Priority Order

Work in this order unless the user explicitly changes priority:

1. Confirm MVP scope and non-goals.
2. Finalize first demo journey.
3. Define seed catalog CSV format.
4. Create Supabase project and migrations.
5. Implement Auth and protected app layout.
6. Build profiles and onboarding.
7. Seed curated football-card catalog.
8. Build catalog search and card detail.
9. Build Add Card flow.
10. Build My Collection binder grid.
11. Add RLS and protected route tests.
12. Add basic collection stats.
13. Prepare wishlist and trade discovery foundation.

## 18. Agent Response Style

When reporting back to the user, use this structure:

```md
## Summary

What changed or what was found.

## Files Changed

- `path/to/file.md` — reason

## Verification

- Commands run or reason commands were unavailable

## Decisions / Trade-offs

-

## Next Actions

-
```

Be direct, practical, and honest about incomplete work.
