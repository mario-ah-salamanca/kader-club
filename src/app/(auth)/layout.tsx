import Link from "next/link";

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">KC</span>
          <span>Kader Club</span>
        </Link>
      </header>
      {children}
    </main>
  );
}
