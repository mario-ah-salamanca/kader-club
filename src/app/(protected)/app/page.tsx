import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "@/components/icons";
import { BinderCard } from "@/features/catalog/card-components";
import {
  dashboardCards,
  demoCards,
  formatCurrencyEur
} from "@/features/catalog/demo-cards";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function AppDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email ?? "Collector";
  const displayName =
    typeof data.user?.user_metadata?.full_name === "string"
      ? data.user.user_metadata.full_name
      : email;

  const totalValue = demoCards.reduce(
    (sum, card) => sum + card.estimatedValueEur,
    0
  );
  const tradeableCount = demoCards.filter(
    (card) => card.tradeStatus !== "not_for_trade"
  ).length;

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <span className="eyebrow dark">
            <SparklesIcon /> Private digital binder
          </span>
          <h1>Welcome back, {displayName.split("@")[0]}.</h1>
          <p>
            Signed in as {email}. Your MVP shell now supports the premium
            prototype journey: onboarding, catalog preview, binder grid, and
            collection stats.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/app/onboarding/welcome">
              Continue onboarding <ArrowRightIcon />
            </Link>
            <Link className="button button-muted" href="/app/catalog">
              Search catalog
            </Link>
          </div>
        </div>
        <div className="dashboard-vault-card">
          <span>Activation target</span>
          <strong>10 cards + 1 wishlist item</strong>
          <p>
            Guide collectors toward the first habit loop without creating
            marketplace behavior.
          </p>
        </div>
      </div>

      <div className="stat-grid" aria-label="Collection foundation stats">
        <div className="stat">
          <span>Owned cards</span>
          <strong>{demoCards.length}</strong>
        </div>
        <div className="stat">
          <span>Estimated value</span>
          <strong>{formatCurrencyEur(totalValue)}</strong>
        </div>
        <div className="stat">
          <span>Open to trade</span>
          <strong>{tradeableCount}</strong>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="section-heading compact">
          <span className="eyebrow dark">Binder preview</span>
          <h2>Recently added cards</h2>
        </div>
        <div className="binder-grid">
          {dashboardCards.map((card) => (
            <BinderCard card={card} footer="confidence" key={card.id} />
          ))}
        </div>
      </section>
    </section>
  );
}
