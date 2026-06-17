# Kader Club Roadmap

## Milestone 1: First Collection Loop

A user can sign up, complete profile, search catalog, add a card, view it in collection, and see basic collection stats.

## Phase 0 — Product Foundation

Goal: remove ambiguity before engineering accelerates.

Deliverables:

- Final MVP scope
- Data schema review
- Seed catalog CSV format
- User roles: `user`, `admin`
- RLS policy plan
- Wireframe/design handoff notes
- Definition of Done for first demo

Exit criteria:

- Team can describe exactly what can and cannot be done in MVP.
- Schema and seed-catalog format are approved.
- Sprint 1 backlog is ready.

## Phase 1 — Core Platform

Goal: authenticated app shell.

Deliverables:

- Supabase project
- Supabase Auth
- Profiles table
- Protected app layout
- Onboarding/profile settings
- Admin role support
- Baseline RLS

Exit criteria:

- User can sign up, log in, and update profile.
- Admin can access admin-only routes.
- User cannot access or edit another user's private data.

## Phase 2 — Card Catalog

Goal: searchable curated card catalog.

Deliverables:

- Players
- Clubs
- Leagues
- Card sets
- Card variants
- Catalog search page
- Card detail page
- Admin CRUD
- CSV import

Exit criteria:

- Admin can seed 100–300 football cards.
- User can search by player, club, set, season, and parallel.

## Phase 3 — Collection Management

Goal: digital binder replacement for spreadsheets.

Deliverables:

- Add card to collection
- Edit owned card
- Delete owned card
- Duplicate card
- Collection filters
- Collection sorting
- CSV export

Exit criteria:

- User can manage a basic collection end-to-end.

## Phase 4 — Portfolio Valuation

Goal: basic but transparent estimated collection value.

Deliverables:

- Price observations table
- Price snapshots table
- Admin price entry
- Collection value calculation
- P/L dashboard
- Confidence labels

Exit criteria:

- User can see estimated collection value and acquisition cost comparison.

## Phase 5 — Wishlist and Trade Matching

Goal: turn collection data into network value.

Deliverables:

- Wishlist CRUD
- Public/private wishlist visibility
- Trade status on owned cards
- Match-generation query
- Trade matches page
- Trade interest message/contact request

Exit criteria:

- User can discover at least one collector who owns a wanted card.

## Phase 6 — Closed Beta

Goal: validate real collector behavior.

Deliverables:

- Invite-only beta
- Analytics
- Feedback form
- Error tracking
- Admin moderation workflow
- Catalog/pricing cleanup loop

Exit criteria:

- 25–50 collectors use the app with real collections.
- Team identifies top data-quality and workflow issues.
