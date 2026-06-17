import Link from "next/link";
import { MailIcon, ShieldCheckIcon } from "@/components/icons";
import { Brand } from "@/components/brand";

type VerifyPageProps = {
  searchParams: Promise<{
    email?: string;
  }>;
};

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const { email } = await searchParams;

  return (
    <main className="verify-page">
      <header className="verify-header">
        <Brand href="/" />
      </header>
      <section className="verify-shell">
        <div className="verify-visual">
          <div className="auth-card-mockup secure-card">
            <ShieldCheckIcon />
            <strong>Secure Vault</strong>
            <small>Protecting your private collection.</small>
          </div>
        </div>
        <div className="verify-panel">
          <span className="verify-icon">
            <MailIcon />
          </span>
          <h1>Check your inbox</h1>
          <p>
            We sent a verification link{email ? ` to ${email}` : ""}. Confirm
            your email, then return to continue onboarding your binder.
          </p>
          <div className="hero-actions centered">
            <Link className="button button-primary" href="/login">
              I verified my account
            </Link>
            <Link className="button button-muted" href="/signup">
              Use another email
            </Link>
          </div>
          <p className="fine-print">
            Email confirmation depends on the Supabase project settings for this
            environment.
          </p>
        </div>
      </section>
    </main>
  );
}
