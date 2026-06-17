import Link from "next/link";
import { SearchIcon } from "@/components/icons";
import { CatalogCardRow } from "@/features/catalog/card-components";
import { demoCards } from "@/features/catalog/demo-cards";

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
          <CatalogCardRow card={card} key={card.id} />
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
