import Link from "next/link";
import { dashboardCards, formatCurrencyEur } from "@/features/catalog/demo-cards";

export default function CollectionPage() {
  return (
    <section className="dashboard">
      <div className="section-heading compact">
        <span className="eyebrow dark">My collection</span>
        <h1>Digital binder grid</h1>
        <p>
          Binder cards use the same component language as the dashboard so the
          collection can scale into filtering, sorting, card detail, and trade
          status edits.
        </p>
      </div>

      <div className="binder-grid full">
        {dashboardCards.map((card) => (
          <article className={`binder-card tone-${card.accent}`} key={card.id}>
            <div className="binder-card-art">
              <span>{card.position}</span>
            </div>
            <div className="binder-card-copy">
              <span>{card.manufacturer}</span>
              <h2>{card.playerName}</h2>
              <p>
                {card.club} · {card.parallel}
              </p>
              <div>
                <strong>{formatCurrencyEur(card.estimatedValueEur)}</strong>
                <em>{card.tradeStatus.replaceAll("_", " ")}</em>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="empty-state-card">
        <h2>Add-card flow next</h2>
        <p>
          The view is ready for user-owned `user_cards` data with condition,
          quantity, grade, purchase price, and trade status.
        </p>
        <Link className="button button-primary" href="/app/catalog">
          Find cards to add
        </Link>
      </div>
    </section>
  );
}
