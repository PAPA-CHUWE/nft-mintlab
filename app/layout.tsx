import type { Metadata } from "next";
import { Bruno_Ace_SC, Viga } from "next/font/google";
import "./globals.css";

/* Logo font */
const brunoAce = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

/* UI / body font */
const viga = Viga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MintLab — NFT Marketplace",
  description: "MintLab is a next-generation NFT marketplace for creators and collectors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${viga.variable} ${brunoAce.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
