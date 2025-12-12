import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true
});

const hyWenHei = localFont({
  src: "../fonts/HYWenHei-85W.ttf",
  variable: "--font-hywenhei",
  weight: "700",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true
});

export const metadata: Metadata = {
  title: "UNICORE - Premium Gaming Cheats & Mods",
  description: "We offer premium cheats that are affordable, high-quality, easy-to-use, frequently updated, and part of a growing catalog. Unicore for Genshin Impact, Wuthering Waves, Zenless Zone Zero, and more.",
  keywords: ["gaming", "cheats", "mods", "genshin impact", "wuthering waves", "zenless zone zero"],
  authors: [{ name: "UNICORE" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0A0218",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unicore.com",
    title: "UNICORE - Premium Gaming Cheats & Mods",
    description: "Premium cheats for Genshin Impact, Wuthering Waves, Zenless Zone Zero, and more.",
    siteName: "UNICORE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${hyWenHei.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
