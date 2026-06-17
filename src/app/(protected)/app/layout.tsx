import Link from "next/link";
import { redirect } from "next/navigation";
import { logoutAction } from "@/features/auth/actions";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function ProtectedAppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims?.sub) {
    redirect("/login?error=Please%20log%20in%20to%20open%20your%20binder.");
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Link className="brand" href="/app">
          <span className="brand-mark">KC</span>
          <span>Kader Club</span>
        </Link>
        <nav aria-label="App navigation">
          <Link aria-current="page" href="/app">
            Dashboard
          </Link>
          <Link href="/app">My Collection</Link>
          <Link href="/app">Catalog</Link>
          <form action={logoutAction}>
            <button type="submit">Log out</button>
          </form>
        </nav>
      </aside>
      <main className="app-main">{children}</main>
    </div>
  );
}
