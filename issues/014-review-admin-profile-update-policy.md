# Review admin profile update policy

## Goal

Make sure admin users can update normal profile fields without allowing users to self-promote or change protected role data.

## Context

The initial Supabase schema grants authenticated users updates only on normal profile columns, not `role`. The current profile update RLS policy also requires the resulting row to have `role = 'user'`, which may prevent admin profiles from updating display name, country, favorite club, bio, or trade availability through the normal profile flow.

## Scope

- Review the profile update policy.
- Preserve database protection for `profiles.role`.
- Verify regular users cannot self-promote.
- Verify admin users can update allowed profile fields if the product expects admin profiles to use the same profile editor.

## Acceptance Criteria

- [ ] Normal users cannot update `profiles.role`.
- [ ] Normal users can update their own allowed profile fields.
- [ ] Admin users can update their own allowed profile fields if required.
- [ ] RLS smoke tests cover user and admin profile update behavior.

## Labels

`type: task`, `priority: P1`, `area: engineering`, `area: infrastructure`
