import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kader Club",
  description: "A football-card collection manager for European collectors."
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
