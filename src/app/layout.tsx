import type { Metadata } from "next";
import { Geist, Geist_Mono, Yatra_One, Rozha_One, Cinzel } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yatraOne = Yatra_One({
  weight: "400",
  variable: "--font-yatra",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  weight: "400",
  variable: "--font-rozha",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "DNA Astrology | Maharishii Astrological Centre - Ancestral Karma & Genetic Blueprint Analysis",
  description: "Maharishii Astrological Centre specializes in DNA Astrology, decoding your ancestral karma and genetic blueprint. Discover your family lineage's cosmic influence and heal inherited patterns with expert Vedic insights.",
  keywords: "DNA Astrology, Genetic Astrology, Ancestral Karma, Vedic Astrology India, DNA Jyotish, Genetic Blueprint Reading, Maharishii Astrological Centre, Family Lineage Astrology, Karmic DNA Patterns, Nakshatra Genetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link href="https://fonts.cdnfonts.com/css/samarkan" rel="stylesheet" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${yatraOne.variable} ${rozhaOne.variable} ${cinzel.variable}`}>
        <SmoothScroll />
        <div className="grid-bg" />
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
