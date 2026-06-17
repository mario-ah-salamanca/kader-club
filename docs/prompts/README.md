# AI Prompt System

This directory contains reusable prompts for AI-assisted development in Kader Club.

Use these prompts as operational templates. Do not paste the entire project context into every prompt. Instead, reference the relevant files and issue.

## Prompt Files

| Prompt | Purpose |
|---|---|
| `CODEX_MASTER_PROMPT.md` | Start a repository-aware coding session |
| `PLAN_TASK.md` | Convert an issue or idea into a scoped plan |
| `EXECUTE_TASK.md` | Implement one focused task |
| `REVIEW_TASK.md` | Review implementation quality and scope |
| `DOCUMENT_PROGRESS.md` | Update progress, docs, and project memory |
| `REFACTOR_TASK.md` | Improve code safely without scope creep |
| `DEBUG_TASK.md` | Reproduce, isolate, fix, and verify bugs |

## Default Sequence

```txt
CODEX_MASTER_PROMPT
→ PLAN_TASK
→ EXECUTE_TASK
→ REVIEW_TASK
→ DOCUMENT_PROGRESS
```

Use `DEBUG_TASK` instead of `PLAN_TASK` when starting from a defect.
Use `REFACTOR_TASK` instead of `EXECUTE_TASK` when the goal is internal improvement rather than user-facing behavior.

## Required Inputs for Most Prompts

- Active GitHub Issue or task description
- Relevant docs
- Acceptance criteria
- Files likely to change
- Verification commands
- Known constraints

## Output Standard

Every AI response should clearly separate:

- Summary
- Plan or changes
- Files affected
- Verification
- Risks
- Next actions

## Scope Rule

The prompts must protect the First Collection Loop. Do not use them to add marketplace, payments, escrow, shipping, complex social feeds, or Fantasy XI features unless the project owner explicitly changes MVP scope.
