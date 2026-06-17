import { redirect } from "next/navigation";
import { AppSidebar } from "@/features/app/app-sidebar";
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
      <AppSidebar>
        <form action={logoutAction}>
          <button type="submit">Log out</button>
        </form>
      </AppSidebar>
      <main className="app-main">{children}</main>
    </div>
  );
}
