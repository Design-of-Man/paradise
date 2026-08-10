import type { Metadata } from "next";
import { site, addressOneLine } from "@/data/site";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? site.url;

export function absolute(path: string): string {
  return new URL(path, BASE_URL).toString();
}

interface PageMetaInput {
  title: string;
  description: string;
  /** Root-relative path, e.g. "/portfolio". */
  path: string;
  /** Overrides the generated OG image. */
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Builds a complete metadata object: canonical URL, Open Graph, Twitter card
 * and robots directives. Every page routes through this so nothing ships
 * without a canonical or a social image.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  keywords,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absolute(path);

  // Social images come from the `opengraph-image` file convention, which Next
  // inherits down the route tree — the root card covers every page, and any
  // segment with its own file overrides it. Setting `images` here would break
  // that inheritance, so we only do it when a caller passes an explicit image.
  const imageMeta = image
    ? {
        openGraph: { images: [{ url: absolute(image), width: 1200, height: 630, alt: title }] },
        twitter: { images: [absolute(image)] },
      }
    : { openGraph: {}, twitter: {} };

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      // Advertised on every page, not just /insights. Readers, aggregators and
      // Bing's discovery all look for the feed link in <head> wherever they
      // happen to land, and the feed is the only route on the site that
      // announces new content without waiting for a recrawl.
      types: { "application/rss+xml": [{ url: absolute("/insights/feed.xml"), title: `${site.name} — Insights` }] },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          // These also belong on the generic directive, not only under
          // googleBot: Bing, DuckDuckGo and the answer engines read
          // `<meta name="robots">` and would otherwise fall back to a truncated
          // snippet and a thumbnail-sized image.
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      ...imageMeta.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...imageMeta.twitter,
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "RealEstateAgent", "GeneralContractor"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
    image: absolute("/opengraph-image"),
    description: site.description,
    foundingDate: String(site.founded),
    slogan: site.tagline,
    telephone: site.phone,
    faxNumber: site.fax,
    email: site.email,
    // Separating leasing from general enquiries gives an answer engine the
    // right address to quote when someone asks about space rather than about
    // the firm, which is the more common high-intent question.
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phone,
        email: site.email,
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "leasing",
        telephone: site.phone,
        email: site.leasingEmail,
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "State", name: "Florida" },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "South Carolina" },
    ],
    knowsAbout: [
      "Retail real estate development",
      "Grocery-anchored shopping centers",
      "Build-to-suit development",
      "Construction management",
      "Commercial leasing",
      "Property management",
    ],
    sameAs: [site.social.linkedin, site.social.facebook],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE_URL,
    name: site.name,
    description: site.shortDescription,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absolute(opts.path),
    provider: { "@id": ORG_ID },
    serviceType: opts.name,
    areaServed: [
      { "@type": "State", name: "Florida" },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "South Carolina" },
    ],
  };
}

export function personSchema(opts: {
  name: string;
  title: string;
  path: string;
  description: string;
  email?: string;
  education?: string[];
}) {
  return {
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.title,
    url: absolute(opts.path),
    description: opts.description,
    ...(opts.email ? { email: opts.email } : {}),
    worksFor: { "@id": ORG_ID },
    ...(opts.education?.length
      ? {
          alumniOf: opts.education.map((e) => ({
            "@type": "EducationalOrganization",
            name: e,
          })),
        }
      : {}),
  };
}

export function placeSchema(opts: {
  name: string;
  path: string;
  description: string;
  city: string;
  region: string;
}) {
  return {
    "@type": "Place",
    name: opts.name,
    url: absolute(opts.path),
    description: opts.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: opts.city,
      addressRegion: opts.region,
      addressCountry: "US",
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: absolute(opts.path),
    mainEntityOfPage: absolute(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    image: absolute(`${opts.path}/opengraph-image`),
    author: { "@type": "Organization", name: opts.author, "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function itemListSchema(
  items: { name: string; path: string }[],
  listName: string,
) {
  return {
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absolute(item.path),
    })),
  };
}

/** Wraps one or more schema nodes in a single @graph document. */
export function jsonLdGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const localBusinessSummary = `${site.name}, ${addressOneLine}. ${site.phoneDisplay}.`;
