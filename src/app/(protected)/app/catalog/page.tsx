import Link from "next/link";
import { SearchIcon } from "@/components/icons";
import { demoCards, formatCurrencyEur } from "@/features/catalog/demo-cards";

export default function CatalogPage() {
  return (
    <section className="dashboard">
      <div className="section-heading compact">
        <span className="eyebrow dark">
          <SearchIcon /> Curated catalog
        </span>
        <h1>Starter football-card catalog</h1>
        <p>
          This is the MVP catalog preview. The production next step is replacing
          the static seed with Supabase-backed catalog tables and admin import.
        </p>
      </div>

      <div className="catalog-list">
        {demoCards.map((card) => (
          <article className="catalog-row" key={card.id}>
            <div className={`mini-card-art tone-${card.accent}`} />
            <div>
              <h2>{card.playerName}</h2>
              <p>
                {card.club} · {card.season} · {card.setName} · {card.parallel}
              </p>
            </div>
            <div className="catalog-row-meta">
              <strong>{formatCurrencyEur(card.estimatedValueEur)}</strong>
              <span>{card.confidence} confidence</span>
            </div>
          </article>
        ))}
      </div>

      <div className="empty-state-card">
        <h2>Ready for database integration</h2>
        <p>
          Keep this page as the UI contract while wiring players, clubs, sets,
          variants, and price observations into Supabase.
        </p>
        <Link className="button button-primary" href="/app/onboarding/first-card">
          Try first acquisition
        </Link>
      </div>
    </section>
  );
}
