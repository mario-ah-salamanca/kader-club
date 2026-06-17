# Contributing

## Working Style

Kader Club uses GitHub as the source of truth for planning, engineering, and documentation.

## Workflow

1. Capture ideas as issues.
2. Refine issues with acceptance criteria.
3. Move ready work into the active milestone.
4. Create a branch from the issue.
5. Open a pull request.
6. Update docs in the same PR when behavior, architecture, or product scope changes.
7. Merge only after review checklist is complete.

## Branch Naming

Use:

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

## Commit Style

Use clear, scoped commits:

```txt
feat: add card search page
fix: protect collection routes
docs: document MVP scope
chore: add markdown lint workflow
```

## Definition of Done

A task is done only when:

- The implementation works.
- Acceptance criteria are met.
- Relevant docs are updated.
- Security/privacy implications are checked.
- Tests or manual verification notes are included.
- The PR explains what changed and why.
