import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatBytes Store — Shop the Best Products Online",
  description:
    "Discover a wide range of electronics, clothing, and home products at WhatBytes Store. Filter by category, price, and brand to find exactly what you need.",
  keywords: ["online store", "electronics", "clothing", "home", "shopping"],
  openGraph: {
    title: "WhatBytes Store",
    description: "Shop electronics, clothing, and home goods at great prices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
