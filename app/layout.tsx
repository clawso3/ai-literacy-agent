import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Literacy Agent",
  description: "Clemson × NCCU × IAIER AI Literacy Reflection Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
