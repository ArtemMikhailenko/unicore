import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const hyWenHei = localFont({
  src: "../fonts/HYWenHei-85W.ttf",
  variable: "--font-hywenhei",
  weight: "700",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "UNICORE",
  description: "UNICORE platform",
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
