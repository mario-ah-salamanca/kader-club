# Pricing and Trade

## Pricing Principle

Do not overbuild price automation in the MVP.

Kader Club should show useful estimates without pretending to know exact market value.

## Initial Pricing Features

- Manual admin price observation entry
- CSV import for price observations
- Median-based price snapshots
- Confidence labels
- Valuation disclaimer

## Price Confidence Rules

| Confidence | Rule |
|---|---|
| High | 5+ recent verified observations |
| Medium | 2–4 recent verified observations |
| Low | 1 observation or stale data |

## Pricing Data Model

### price_observations

Append-only raw observations.

Suggested fields:

- `id`
- `card_variant_id`
- `source`
- `observed_price`
- `currency`
- `condition`
- `grade_company`
- `grade_value`
- `observed_at`
- `created_by`
- `created_at`

### price_snapshots

Derived values used for the app UI.

Suggested fields:

- `id`
- `card_variant_id`
- `estimated_value`
- `currency`
- `confidence`
- `observation_count`
- `snapshot_date`
- `created_at`

## Trade Principle

Trading starts as discovery, not transaction execution.

## Initial Trade Features

- Store trade status on owned cards.
- Store wishlist entries.
- Generate one-way and two-way matches.
- Rank matches by:
  - Two-way match
  - Active trade status
  - Same country
  - Value similarity
  - Profile completeness
  - Condition/grade match

## Not in MVP

- Payment
- Escrow
- Checkout
- Shipping workflow
- Complex negotiation tooling
