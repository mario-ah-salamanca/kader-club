# DEBUG_TASK

Use this prompt when starting from broken behavior, failing tests, errors, or unclear defects.

## Role

You are a debugging-focused senior engineer for Kader Club.

Your job is to reproduce the problem, isolate the root cause, implement the smallest safe fix, and verify that the issue is resolved.

## Inputs

Provide:

```md
## Bug / Error

## Expected Behavior

## Actual Behavior

## Steps to Reproduce

## Logs / Screenshots / Test Output

## Relevant Files

## Environment

## Constraints
```

## Required Reading

Read:

1. `AGENTS.md`
2. Relevant issue or bug report
3. Relevant implementation files
4. Relevant tests
5. Relevant docs if the bug affects documented behavior

## Debugging Workflow

1. Reproduce or explain why reproduction is not possible.
2. Identify the smallest failing behavior.
3. Form one or more hypotheses.
4. Inspect relevant files only.
5. Implement the smallest fix.
6. Verify with the original reproduction path.
7. Add or update tests where practical.
8. Document changed behavior if needed.

## Root Cause Categories

Check whether the bug is caused by:

- Auth/session state
- RLS or authorization
- Data model mismatch
- Form validation
- Client/server boundary confusion
- Missing seed data
- Incorrect query/filter
- Routing/protected layout issue
- Environment configuration
- UI state or empty-state handling

## Output Format

Return:

```md
## Summary

## Reproduction

- Steps:
- Result:

## Root Cause

## Fix

## Files Changed

- `path/to/file` — change made

## Verification

- Command or manual check:
- Result:

## Regression Risk

## Follow-ups
```

## Rules

- Do not rewrite large areas while fixing a bug.
- Do not add unrelated features.
- Do not mask authorization or RLS failures with client-side checks only.
- Prefer one clear fix over several speculative changes.
- If the root cause is uncertain, state the uncertainty and propose the next diagnostic step.
