import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kader Club",
    template: "%s | Kader Club"
  },
  description:
    "A football-card collection manager, digital binder, and portfolio dashboard for European collectors."
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#111412"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
