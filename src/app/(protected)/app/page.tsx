import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function AppDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email ?? "Collector";

  return (
    <section className="dashboard">
      <h1>Your digital binder is ready.</h1>
      <p>
        Signed in as {email}. Profile onboarding, catalog search, and collection
        cards build on this protected foundation in the next Sprint 1 tasks.
      </p>

      <div className="stat-grid" aria-label="Collection foundation stats">
        <div className="stat">
          <span>Owned cards</span>
          <strong>0</strong>
        </div>
        <div className="stat">
          <span>Wishlist items</span>
          <strong>0</strong>
        </div>
        <div className="stat">
          <span>Trade status</span>
          <strong>Private</strong>
        </div>
      </div>
    </section>
  );
}
