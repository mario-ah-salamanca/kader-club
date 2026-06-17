import Link from "next/link";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "@/components/icons";
import { FoilCardPreview } from "@/features/catalog/card-components";
import { dashboardCards } from "@/features/catalog/demo-cards";

const featureCards = [
  {
    title: "The Digital Binder",
    description:
      "Replace spreadsheets with a private binder that feels closer to the real hobby: visual, structured, and easy to update.",
    metric: "10-card activation loop"
  },
  {
    title: "Portfolio Intelligence",
    description:
      "Track estimated value, acquisition cost, confidence, and movement without pretending the market is more precise than it is.",
    metric: "Confidence-labeled pricing"
  },
  {
    title: "Trade Discovery",
    description:
      "Mark cards as open to offers and prepare future collector matches while staying far away from marketplace checkout.",
    metric: "Discovery, not escrow"
  }
];

const productSignals = [
  {
    label: "Activation target",
    value: "10 cards",
    supporting: "+ 1 wishlist item"
  },
  {
    label: "Catalog principle",
    value: "Curated",
    supporting: "quality over volume"
  },
  {
    label: "MVP guardrail",
    value: "No checkout",
    supporting: "collection first"
  }
];

export function MarketingLandingPage() {
  return (
    <main className="marketing-page">
      <header className="marketing-nav">
        <Link className="brand brand-on-dark" href="/">
          <span className="brand-mark">KC</span>
          <span>Kader Club</span>
        </Link>
        <nav className="marketing-nav-actions" aria-label="Landing navigation">
          <Link href="/login">Log in</Link>
          <Link className="button button-gold" href="/signup">
            Start collection
          </Link>
        </nav>
      </header>

      <section className="marketing-hero">
        <div className="marketing-hero-copy">
          <span className="eyebrow">
            <SparklesIcon />
            Football card portfolio for European collectors
          </span>
          <h1>Build your trusted digital binder.</h1>
          <p>
            Kader Club gives collectors a premium home for catalog search,
            portfolio value, wishlist planning, and trade readiness without
            turning the MVP into a marketplace.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/signup">
              Create your binder <ArrowRightIcon />
            </Link>
            <Link className="button button-muted" href="/login">
              Open existing binder
            </Link>
          </div>
          <div className="trust-row" aria-label="MVP guardrails">
            <span>
              <CheckIcon /> Private by default
            </span>
            <span>
              <CheckIcon /> Curated catalog
            </span>
            <span>
              <CheckIcon /> No checkout
            </span>
          </div>
        </div>

        <div className="hero-binder" aria-label="Premium card binder preview">
          {dashboardCards.map((card, index) => (
            <FoilCardPreview card={card} index={index} key={card.id} />
          ))}
        </div>
      </section>

      <section className="proof-strip" aria-label="Kader Club MVP signals">
        {productSignals.map((signal) => (
          <div key={signal.label}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
            <small>{signal.supporting}</small>
          </div>
        ))}
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow dark">MVP product surface</span>
          <h2>Engineered for the first collection loop.</h2>
          <p>
            The prototype is implemented as modular product surfaces that can
            later connect to Supabase tables, RLS, and admin catalog tooling.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span>{feature.metric}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link href="/signup">
                Start here <ArrowRightIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="binder-story">
        <div>
          <span className="eyebrow">Collector dashboard</span>
          <h2>Your collection, wishlist, and trade signals in one club room.</h2>
          <p>
            Start with a beautiful binder experience now, then expand into
            serious collection management as catalog and pricing data mature.
          </p>
        </div>
        <Link className="button button-primary" href="/signup">
          Join Kader Club
        </Link>
      </section>
    </main>
  );
}
