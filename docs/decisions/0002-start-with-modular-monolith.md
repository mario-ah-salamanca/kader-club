# ADR 0002: Start With a Modular Monolith

## Status

Proposed

## Context

Kader Club needs speed, clarity, and low operational overhead.

The first product version includes authentication, catalog, collection, pricing, wishlist, and trade discovery. These domains are related and do not yet require separate services.

## Decision

Start with a modular monolith using:

- Next.js
- TypeScript
- Supabase Postgres/Auth/Storage
- Cloudflare Pages
- Resend
- PostHog or Plausible

## Consequences

### Positive

- Simple deployment
- Fast iteration
- Clear ownership
- Easy local development
- Suitable for solo/founder-led execution

### Negative

- Requires discipline around module boundaries
- Future background jobs may need separate workers
- Marketplace/payment features should be isolated later

## Review Trigger

Revisit this decision when:

- Data import/pricing jobs become heavy
- Real-time trade matching becomes expensive
- Payments or marketplace workflows enter scope
- Team size increases
