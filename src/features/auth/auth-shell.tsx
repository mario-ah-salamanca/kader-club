import { Brand } from "@/components/brand";
import { ShieldCheckIcon, SparklesIcon } from "@/components/icons";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children
}: AuthShellProps) {
  return (
    <section className="premium-auth-page">
      <aside className="auth-showcase" aria-label="Kader Club collection preview">
        <div className="auth-showcase-glow" />
        <Brand href="/" />
        <div className="auth-card-mockup">
          <div className="foil-card-sheen" />
          <span className="card-position">ST</span>
          <strong>HAALAND</strong>
          <small>Topps Chrome Gold · 99 OVR</small>
        </div>
        <div className="auth-showcase-copy">
          <span>
            <SparklesIcon /> Premium binder workspace
          </span>
          <h2>Your digital binder awaits.</h2>
          <p>
            Secure access first, then onboarding, scouting focus, and your first
            acquisition.
          </p>
        </div>
      </aside>

      <div className="auth-form-pane">
        <div className="mobile-brand-link">
          <Brand compact />
        </div>
        <div className="auth-panel premium-auth-panel">
          <span className="eyebrow dark">
            <ShieldCheckIcon /> {eyebrow}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
