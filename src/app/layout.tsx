import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Chandika Mohan Visweswar — Insurance & Financial Services",
  description:
    "Insurance, loans and investment services for families and businesses — advised personally, end to end.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
