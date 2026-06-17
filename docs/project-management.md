# GitHub Project Management Workflow

## Source of Truth

GitHub is the source of truth for:

- Product documentation
- Technical decisions
- Roadmap
- Backlog
- Tasks
- Sprint planning
- Pull requests
- Progress tracking

Google Drive can remain an archive or input source, but active planning should happen in GitHub.

## Recommended Project Board Columns

```txt
Inbox
Backlog
Ready
In Progress
In Review
Done
Archived
```

## Issue Label System

### Type

- `type: feature`
- `type: bug`
- `type: task`
- `type: docs`
- `type: research`
- `type: decision`
- `type: risk`

### Priority

- `priority: P0`
- `priority: P1`
- `priority: P2`

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

## Milestones

- `Phase 0 — Product Foundation`
- `Phase 1 — Core Platform`
- `Phase 2 — Card Catalog`
- `Phase 3 — Collection Management`
- `Phase 4 — Portfolio Valuation`
- `Phase 5 — Wishlist and Trade Matching`
- `Phase 6 — Closed Beta`
- `Post-MVP — Collector Plus`
- `Future — Fantasy XI`

## Weekly Review

Use [`docs/planning/weekly-review.md`](planning/weekly-review.md).

## Rule for Docs

Every PR must update docs when it changes:

- Product behavior
- User flow
- Data model
- Architecture
- Product scope
- Pricing logic
- Trade logic
- Security assumptions
