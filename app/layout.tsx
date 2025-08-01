import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Ramen Recipes",
  description: "A collection of ramen recipes",
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
