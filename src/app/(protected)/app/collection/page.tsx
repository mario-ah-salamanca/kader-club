import Link from "next/link";
import { BinderCard } from "@/features/catalog/card-components";
import { dashboardCards } from "@/features/catalog/demo-cards";

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
          <BinderCard
            card={card}
            footer="trade"
            headingLevel="h2"
            key={card.id}
          />
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
