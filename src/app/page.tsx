import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">KC</span>
          <span>Kader Club</span>
        </Link>
        <nav className="nav-actions" aria-label="Auth navigation">
          <Link className="ghost-button" href="/login">
            Log in
          </Link>
          <Link className="button" href="/signup">
            Sign up
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Kader Club</h1>
          <p>
            Build a trusted digital binder for your football-card collection,
            starting with secure access and private collection management.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/signup">
              Start collection
            </Link>
            <Link className="ghost-button" href="/login">
              Open binder
            </Link>
          </div>
        </div>

        <div className="binder-preview" aria-label="Football card binder preview">
          <div className="card-preview">
            <small>Topps Chrome</small>
            <strong>Musiala</strong>
          </div>
          <div className="card-preview">
            <small>Prizm</small>
            <strong>Bellingham</strong>
          </div>
          <div className="card-preview">
            <small>Merlin</small>
            <strong>Wirtz</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
