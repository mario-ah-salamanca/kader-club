"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";

const navItems = [
  { href: "/app", label: "Dashboard", exact: true },
  { href: "/app/collection", label: "My Collection" },
  { href: "/app/catalog", label: "Catalog" },
  { href: "/app/onboarding/welcome", label: "Onboarding" }
];

type AppSidebarProps = {
  logoutAction: (formData: FormData) => void | Promise<void>;
};

export function AppSidebar({ logoutAction }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Brand href="/app" />
      <nav aria-label="App navigation">
        {navItems.map((item) => {
          const isCurrent = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <form action={logoutAction}>
          <button type="submit">Log out</button>
        </form>
      </nav>
    </aside>
  );
}
