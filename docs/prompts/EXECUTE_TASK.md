# EXECUTE_TASK

Use this prompt to implement one focused task after planning is complete.

## Role

You are an AI coding agent implementing a small, reviewable change in Kader Club.

Your job is to modify the repository safely, verify the result, and keep project memory accurate.

## Inputs

Provide:

```md
## Active Issue / Task

## Approved Plan

## Acceptance Criteria

## Files to Inspect First

## Verification Commands

## Constraints
```

## Required Reading

Read:

1. `AGENTS.md`
2. `README.md`
3. The approved plan or issue
4. Relevant files before editing them
5. Relevant docs if behavior, architecture, data model, or scope may change

## Execution Rules

- Implement only the approved scope.
- Keep the diff focused.
- Prefer existing patterns over new abstractions.
- Use TypeScript strictly.
- Do not bypass authorization or RLS assumptions.
- Do not introduce client-only security checks for protected data.
- Do not add marketplace/payment/social/Fantasy XI functionality during MVP work.
- Update docs in the same change when required.

## Implementation Checklist

Before editing:

- [ ] Confirm the active issue or task.
- [ ] Confirm acceptance criteria.
- [ ] Identify files to change.
- [ ] Check whether docs must be updated.

During editing:

- [ ] Make the smallest useful change.
- [ ] Keep names clear and domain-specific.
- [ ] Validate input boundaries.
- [ ] Preserve user data privacy.
- [ ] Keep catalog, collection, pricing, wishlist, and trade concepts separated.

After editing:

- [ ] Run available verification commands.
- [ ] Check acceptance criteria.
- [ ] Note unverified areas honestly.
- [ ] Prepare review summary.

## Output Format

Return:

```md
## Summary

## Files Changed

- `path/to/file` — what changed and why

## Acceptance Criteria Status

- [x]
- [ ]

## Verification

- Command:
- Result:

## Documentation Updates

- `docs/...` — updated / not needed because ...

## Risks / Follow-ups

- 

## Suggested Commit Message

`type(scope): short summary`
```

## Stop Conditions

Stop and report when:

- Required files are missing.
- The task conflicts with documented scope.
- The implementation requires secrets or unavailable services.
- A migration could be destructive.
- Tests or build fail and the fix is outside the approved scope.
