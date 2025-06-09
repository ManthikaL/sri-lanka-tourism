import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visit Sri Lanka",
  description: "Created with TypeScript, tailwind",
  generator: "001.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
