import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moxin Applications — AI Crafted in Pure Rust",
  description:
    "Native AI applications built by the Moxin organization with pure Rust and Makepad. No Python runtime required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
