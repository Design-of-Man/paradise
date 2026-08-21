import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { RevealScript } from "@/components/RevealScript";
import { site } from "@/data/site";
import { BASE_URL, jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/seo";

// One family carries the whole site. Geist is a geometric grotesque with a
// tall x-height and near-flat terminals — it holds up at the -0.045em tracking
// the display sizes are set at, which is where the previous serif fell apart.
const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

// Geist Mono is not decoration. Every label on the site — eyebrows, statistic
// captions, dates, the coordinates in the hero — is set in it at uppercase,
// and that contrast against the tight display type is most of the look.
const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} | Retail Real Estate Development in Florida & the Southeast`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: BASE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "Real Estate",
  keywords: [
    "retail real estate developer",
    "Publix shopping center developer",
    "Walgreens build to suit developer",
    "grocery anchored development",
    "Florida commercial real estate developer",
    "Georgia retail development",
    "shopping center leasing",
    "commercial property management Tampa Bay",
    "St. Petersburg commercial developer",
    "build to suit retail",
  ],
  alternates: { canonical: BASE_URL },
  formatDetection: { telephone: true, address: true, email: true },
  // Icons are wired up automatically from app/icon.svg and app/apple-icon.tsx.
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f0b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <JsonLd data={jsonLdGraph(organizationSchema(), websiteSchema())} />
      </head>
      <body className="antialiased">
        <RevealScript />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
