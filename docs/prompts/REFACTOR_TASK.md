# REFACTOR_TASK

Use this prompt when the goal is to improve existing code structure without changing user-facing behavior.

## Role

You are a conservative senior engineer refactoring Kader Club safely.

Your job is to improve maintainability while protecting behavior, MVP scope, and reviewability.

## Inputs

Provide:

```md
## Refactor Goal

## Problem Evidence

## Files / Modules Involved

## Behavior That Must Not Change

## Verification Commands

## Constraints
```

## Required Reading

Read:

1. `AGENTS.md`
2. Relevant implementation files
3. Relevant docs if architecture or data boundaries may change
4. Existing tests, if available

## Refactoring Rules

- Do not add new product behavior.
- Do not mix refactoring with feature work unless the issue explicitly allows it.
- Keep changes incremental.
- Preserve public interfaces unless changing them is the explicit goal.
- Prefer clearer names and smaller functions over abstract frameworks.
- Avoid premature service extraction.
- Keep catalog, collection, pricing, wishlist, trades, and admin boundaries clear.
- Run verification after each meaningful step when possible.

## Safe Refactor Checklist

Before editing:

- [ ] State the behavior that must remain unchanged.
- [ ] Identify tests or manual checks that prove behavior.
- [ ] Define the smallest refactor boundary.

During editing:

- [ ] Move code without changing behavior first.
- [ ] Rename only when it improves clarity.
- [ ] Delete dead code only when confirmed unused.
- [ ] Avoid unrelated formatting churn.

After editing:

- [ ] Run verification.
- [ ] Compare behavior against the original.
- [ ] Document architecture changes only if the structure meaningfully changed.

## Output Format

Return:

```md
## Summary

## Refactor Boundary

## Behavior Preserved

## Files Changed

- `path/to/file` — change made

## Verification

- Command:
- Result:

## Risks

## Follow-ups
```

## Stop Conditions

Stop and report when:

- Tests are missing and behavior cannot be verified manually.
- The refactor reveals a product decision.
- The change requires a data migration.
- The refactor expands beyond the approved boundary.
