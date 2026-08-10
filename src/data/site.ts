/**
 * Single source of truth for company identity, NAP data and global SEO defaults.
 * NAP (name / address / phone) must stay byte-identical with Google Business
 * Profile and every citation source, so nothing here should be re-typed inline.
 */

export const site = {
  name: "Paradise Ventures, Inc.",
  shortName: "Paradise Ventures",
  legalName: "Paradise Ventures, Inc.",
  founded: 1988,
  url: "https://paradiseventuresinc.com",
  tagline: "We build more than buildings. We build relationships and value.",
  description:
    "Paradise Ventures is a Florida-based retail real estate developer specializing in development, acquisitions, construction management, leasing and property management. One of the nation's leading developers of Publix-anchored shopping centers and Walgreens stores.",
  shortDescription:
    "Retail development, construction management, leasing and property management since 1988.",
  phone: "+17277261115",
  phoneDisplay: "(727) 726-1115",
  fax: "+17277261118",
  email: "info@paradiseventuresinc.com",
  leasingEmail: "leasing@paradiseventuresinc.com",
  address: {
    /**
     * Client-confirmed August 2026. This is the Sundial building on 2nd Avenue
     * North — the firm's own downtown St. Petersburg lifestyle center, which is
     * also in the portfolio as `sundial-st-pete`.
     *
     * The firm was founded in Safety Harbor in 1988 and that history stands
     * where it is stated; this is the operating office today. Both sit in
     * Pinellas County, so "the same market since 1988" remains accurate.
     */
    street: "153 2nd Ave N",
    city: "St. Petersburg",
    region: "FL",
    regionName: "Florida",
    postalCode: "33701",
    country: "US",
    countryName: "United States",
  },
  geo: { lat: 27.7715, lng: -82.6376 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/paradise-ventures",
    facebook: "https://www.facebook.com/Paradiseventuresinc/",
  },
  /** Headline metrics. Kept together so the same numbers appear everywhere. */
  stats: {
    yearsOperating: new Date().getFullYear() - 1988,
    squareFeetDeveloped: 5_000_000,
    publixStores: 52,
    walgreensStores: 100,
    statesActive: 8,
    projectsDelivered: 150,
  },
} as const;

export const addressOneLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${addressOneLine}`,
)}`;

/** Primary navigation. Drives the header, the footer and the sitemap. */
export const nav: {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
}[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Development", href: "/services/development", blurb: "Site selection through grand opening." },
      { label: "Construction Management", href: "/services/construction-management", blurb: "Self-performed oversight, on schedule." },
      { label: "Leasing", href: "/services/leasing", blurb: "Shop space beside national anchors." },
      { label: "Property Management", href: "/services/property-management", blurb: "Assets held to an owner's standard." },
      { label: "Acquisitions", href: "/services/acquisitions", blurb: "Value-add and net-leased retail." },
      { label: "Build-to-Suit", href: "/services/build-to-suit", blurb: "Single-tenant delivery, nationwide." },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "All Projects", href: "/portfolio", blurb: "Five million square feet and counting." },
      { label: "Active Development", href: "/portfolio/active", blurb: "What is under way right now." },
      { label: "Completed", href: "/portfolio/completed", blurb: "Three decades of delivered centers." },
      { label: "Markets", href: "/markets", blurb: "Where we build, state by state." },
      { label: "Anchor Partners", href: "/partners", blurb: "The tenants we build for." },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about", blurb: "How the firm is built." },
      { label: "Our Team", href: "/team", blurb: "The people behind the portfolio." },
      { label: "Our Process", href: "/process", blurb: "Nine stages, one accountable team." },
      { label: "Insights", href: "/insights", blurb: "Field notes on retail real estate." },
      { label: "FAQ", href: "/faq", blurb: "Straight answers, no runaround." },
    ],
  },
  { label: "Leasing", href: "/leasing" },
  { label: "Contact", href: "/contact" },
];
