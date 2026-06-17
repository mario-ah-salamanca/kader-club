# Architecture

## Recommended Starting Architecture

Start as a modular monolith.

Recommended stack:

- Next.js
- TypeScript
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Cloudflare Pages
- Resend
- PostHog or Plausible

## Why Modular Monolith

Benefits:

- Faster development
- Easier deployment
- Lower operational complexity
- Strong fit for solo/founder-led MVP
- Clean path to extract services later only if needed

Trade-offs:

- Requires discipline in folder boundaries.
- Background jobs and heavy data pipelines may eventually need separation.
- Future marketplace/payment logic should be isolated when introduced.

## Proposed App Modules

```txt
src/
├── app/
├── components/
├── features/
│   ├── auth/
│   ├── profiles/
│   ├── catalog/
│   ├── collection/
│   ├── pricing/
│   ├── wishlist/
│   ├── trades/
│   └── admin/
├── lib/
│   ├── supabase/
│   ├── validation/
│   ├── analytics/
│   └── permissions/
└── tests/
```

## Security Principles

- Enforce server-side authorization.
- Implement RLS from day one.
- Treat user collections as private by default.
- Public sharing must be explicit.
- Admin routes require role checks on server and database layers.
- Never trust client-side role flags.

## Initial Technical Decisions

- Use Supabase Auth for user identity.
- Use RLS for user-owned records.
- Use append-only price observations.
- Use confidence labels for valuation estimates.
- Keep trade matching as discovery, not transaction execution.
