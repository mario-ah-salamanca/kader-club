# ADR 0001: Build System of Record Before Marketplace

## Status

Accepted

## Context

Kader Club could eventually become a marketplace, but the MVP needs to validate whether collectors are willing to use the app as their primary collection tracker.

Marketplace features introduce complexity:

- Payments
- Escrow
- Shipping
- Disputes
- Authentication
- Trust and safety
- Transaction support

These would distract from proving the core behavior: users adding real collections.

## Decision

Build the MVP as a trusted digital binder and portfolio dashboard.

Trade matching will exist only as discovery, not transaction execution.

## Consequences

### Positive

- Faster MVP path
- Lower operational risk
- Cleaner product identity
- Easier beta validation
- Stronger catalog and collection foundation

### Negative

- No direct transaction revenue in MVP
- Trade value must be validated indirectly
- Marketplace demand remains unproven until later

## Non-Goals Confirmed

- No payments
- No escrow
- No checkout
- No shipping workflows
- No complex negotiation tooling
