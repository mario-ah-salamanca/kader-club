# AGENTS.md

This file defines how AI coding agents, Codex sessions, and human collaborators should work inside the Kader Club repository.

Kader Club is a football-card collection management app for European collectors. The first product goal is to build a trusted digital binder and portfolio dashboard before expanding into trade discovery, premium collector tools, and future playful features such as Fantasy XI.

## 1. Project Objective

The current execution objective is the **First Collection Loop**:

> A user can sign up, complete a profile, search a curated football-card catalog, add a card to their collection, view it in their digital binder, and see basic collection stats.

Do not optimize for marketplace features, payments, escrow, shipping, or advanced analytics until the First Collection Loop is working.

## 2. Source of Truth

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

## 3. Agent Operating Rules

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
- Preserve the distinction between MVP, post-MVP, and future features.

After work:

- Summarize what changed.
- Note what remains incomplete.
- Reference affected docs and issues.
- Update `CHANGELOG.md` for notable changes.

## 4. Planning Workflow

Use this workflow before implementing significant work.

### Step 1 — Understand

Identify:

- User problem
- Product phase
- Relevant persona
- Existing issue or missing issue
- Affected files
- MVP vs post-MVP impact

### Step 2 — Plan

Create or update a GitHub Issue with:

- Goal
- Context
- Scope
- Out of scope
- Acceptance criteria
- Dependencies
- Related docs

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

## 5. Issue Management Rules

Every meaningful unit of work should map to a GitHub Issue.

Use issue labels consistently:

### Type

- `type: feature`
- `type: bug`
- `type: task`
- `type: docs`
- `type: research`
- `type: decision`
- `type: risk`

### Priority

- `priority: P0` — required for the active milestone
- `priority: P1` — important, but not blocking immediate demo
- `priority: P2` — later or post-MVP

### Area

- `area: product`
- `area: design`
- `area: engineering`
- `area: data`
- `area: pricing`
- `area: trade`
- `area: docs`
- `area: infrastructure`

### Status

- `status: blocked`
- `status: needs-review`
- `status: needs-decision`

## 6. MVP Scope Guardrails

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

## 7. Engineering Principles

Default technical direction:

- Use TypeScript strictly.
- Start as a modular monolith.
- Use Supabase Auth and Postgres.
- Enforce server-side authorization.
- Implement RLS from day one.
- Treat collections as private by default.
- Make public sharing explicit.
- Use Zod or equivalent validation for forms and input boundaries.
- Keep pricing estimates transparent and confidence-labeled.

Avoid:

- Over-engineering early abstractions
- Premature microservices
- Marketplace logic inside collection-management modules
- Client-only authorization
- Fake precision in pricing or scoring

## 8. Documentation Rules

Documentation should be practical, not decorative.

When creating or updating docs:

- Use clear Markdown headings.
- Keep decisions traceable.
- Separate MVP from future ideas.
- Add examples when they reduce ambiguity.
- Prefer checklists for execution tasks.
- Keep long-term ideas in `docs/future/` unless they affect current architecture.

## 9. Decision Records

Create an ADR when a decision affects:

- Architecture
- Data model
- Authentication/authorization
- Pricing logic
- Trade-matching logic
- Product scope
- Monetization
- Deployment strategy

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

## 10. Pull Request Checklist

Every PR should answer:

- What changed?
- Why was it needed?
- What is in scope?
- What is out of scope?
- How was it verified?
- Which issue does it close?
- Which docs were updated?

Before opening a PR, verify:

- [ ] The change is focused.
- [ ] Acceptance criteria are met or clearly marked incomplete.
- [ ] Relevant docs are updated.
- [ ] `CHANGELOG.md` is updated for notable changes.
- [ ] No MVP non-goal was introduced accidentally.
- [ ] Security/RLS implications were considered.

## 11. Progress Tracking

Use this lightweight tracking loop.

### Daily / Session Start

Check:

- Active issue
- Current milestone
- Open blockers
- Last modified docs
- Next acceptance criterion

### During Work

Record:

- Files changed
- Decisions made
- Questions discovered
- Follow-up issues needed

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

### Next Step

- 
```

## 12. Current Priority Order

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

## 13. Agent Response Style

When reporting back to the user, use this structure:

```md
## Summary

What changed or what was found.

## Files Changed

- `path/to/file.md` — reason

## Decisions / Trade-offs

- 

## Next Actions

- 
```

Be direct, practical, and honest about incomplete work.
