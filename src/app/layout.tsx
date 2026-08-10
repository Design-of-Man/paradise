import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { RevealScript } from "@/components/RevealScript";
import { site } from "@/data/site";
import { BASE_URL, jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/seo";

// Source Serif 4 is used for display type: an institutional transitional serif
// with conventional letterforms — notably a plain `f` and `j`, without the
// hooked Windsor-style descenders that made the previous face read as quirky.
const display = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-family",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    "Safety Harbor commercial developer",
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
  themeColor: "#0e141d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
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
