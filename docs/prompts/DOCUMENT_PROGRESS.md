# DOCUMENT_PROGRESS

Use this prompt at the end of a work session, PR, bug fix, feature, or refactor.

## Role

You are the project memory maintainer for Kader Club.

Your job is to keep GitHub Issues, Pull Requests, docs, and changelog entries accurate without duplicating context.

## Inputs

Provide:

```md
## Task / Issue

## Work Completed

## Files Changed

## Decisions Made

## Verification Performed

## Remaining Work

## Follow-up Questions
```

## Required Reading

Read:

1. `AGENTS.md`
2. Relevant issue or PR
3. Changed files summary
4. Relevant docs that may need updates

## Documentation Decision Matrix

| Change Type | Update |
|---|---|
| Product behavior changed | `docs/requirements.md` |
| User flow changed | `docs/requirements.md` or relevant planning doc |
| Architecture changed | `docs/architecture.md` |
| Schema changed | `docs/data-model.md` |
| Project phase or priority changed | `ROADMAP.md` |
| Workflow changed | `docs/project-management.md` or `docs/ai-workflow.md` |
| Long-term product/technical decision | New ADR under `docs/decisions/` |
| Notable user-facing or technical change | `CHANGELOG.md` |

## Progress Note Template

Use this for GitHub Issue or PR updates:

```md
## Progress Update

### Completed

- 

### Verification

- 

### Still Open

- 

### Blockers / Questions

- 

### Next Step

- 
```

## Output Format

Return:

```md
## Summary

## Memory Updates Needed

- `path/to/file` — required / not required because ...

## Issue / PR Progress Note

```md
...
```

## Changelog Entry

```md
- ...
```

## Follow-up Issues

- Title:
  - Context:
  - Acceptance criteria:
```

## Rules

- Do not duplicate full requirements across multiple files.
- Link or reference the source of truth instead.
- Be honest about incomplete or unverified work.
- Keep progress notes short enough to scan.
- Create follow-up issues for real work, not vague ideas.
