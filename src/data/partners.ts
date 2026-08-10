/**
 * Anchor and category partners. Generates /partners and /partners/[slug].
 * These pages exist to capture high-intent search ("Publix shopping center
 * developer", "Walgreens build to suit developer") that the service pages
 * do not target directly.
 */

export interface Partner {
  slug: string;
  name: string;
  category: string;
  /** Count of stores/centers delivered, where published. */
  delivered?: string;
  summary: string;
  body: string[];
  order: number;
}

export const partners: Partner[] = [
  {
    slug: "publix",
    name: "Publix Super Markets",
    category: "Grocery",
    delivered: "52 stores built from the ground up",
    summary:
      "One of the nation's leading developers of Publix-anchored shopping centers, with fifty-two stores delivered.",
    body: [
      "Paradise Ventures is one of the leading developers of Publix-anchored shopping centers in the country, having built fifty-two Publix stores from the ground up across Florida, Georgia and the Southeast.",
      "The Publix format sets the discipline for the rest of the center. The store demands a specific trade area profile, a specific parking ratio, specific access and visibility conditions, and a delivery date that is tied to a distribution and staffing calendar set far in advance. Meet those conditions and the anchor generates the traffic every other tenant in the center depends on.",
      "The firm's centers carry the Paradise Shoppes name across Florida, Georgia and South Carolina — from Navarre and Fort Walton Beach in the Panhandle, through metro Atlanta at Dallas, Ellenwood, Canton and McDonough, into middle Georgia at Warner Robins, and into the Charleston market at Summerville.",
      "Repeat development for a single anchor compounds. Prototype knowledge, delivery standards, and a working relationship with the retailer's real estate and construction teams take years to build and materially reduce execution risk on every subsequent site.",
    ],
    order: 1,
  },
  {
    slug: "walgreens",
    name: "Walgreens",
    category: "Pharmacy",
    delivered: "100+ stores across eight states",
    summary:
      "More than one hundred Walgreens stores completed across eight states as a national build-to-suit developer.",
    body: [
      "Paradise Ventures has completed more than one hundred Walgreens stores across eight states, making it one of the retailer's more prolific development partners nationally.",
      "Drugstore development is a hard-corner business. The prototype is designed around signalized intersections, dual access, and drive-through circulation — which means the site criteria are unusually rigid and the supply of qualifying corners in any given market is small. Sourcing and controlling those corners, then carrying them through entitlement, is the whole job.",
      "Running a rollout of that size means absorbing enormous jurisdictional variability on the retailer's behalf. A hundred stores across eight states is a hundred separate entitlement processes, each with its own review cycle, staff, and local politics — delivered against a single national prototype and a single construction calendar.",
    ],
    order: 2,
  },
  {
    slug: "grocery",
    name: "Grocery",
    category: "Sector",
    summary:
      "Grocery-anchored neighborhood centers — the most durable format in retail real estate.",
    body: [
      "Grocery anchors are the foundation of the Paradise portfolio. The format has proven more resilient than any other in retail real estate, for a structural reason: grocery demand is non-discretionary, weekly, and has resisted e-commerce displacement far better than the categories around it.",
      "A grocery store brings a household to the center fifty-two times a year. Everything else in the center — the dry cleaner, the nail salon, the sandwich shop, the bank branch — is underwriting a share of that trip. Remove the anchor and the arithmetic collapses.",
      "That is why the firm does not start vertical construction on speculative anchor demand. The anchor lease comes first, and the rest of the center follows it.",
    ],
    order: 3,
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    category: "Sector",
    summary:
      "Freestanding drugstore development at signalized hard corners nationwide.",
    body: [
      "Pharmacy has been a core Paradise sector since the 1990s, driven principally by the firm's Walgreens program and the hundred-plus stores delivered under it.",
      "Freestanding drugstore development is defined by site criteria that are close to non-negotiable: a signalized intersection, dual access, sufficient frontage for the prototype and its drive-through, and visibility from both arterials. In most trade areas, only a handful of corners qualify.",
      "The development work is therefore front-loaded into sourcing and control. Once the right corner is under contract, the balance of the project is execution against a prototype the firm has built many times before.",
    ],
    order: 4,
  },
  {
    slug: "restaurant-and-fuel",
    name: "Restaurant & Fuel",
    category: "Sector",
    summary:
      "Outparcel development for quick-service restaurant, convenience and fuel users.",
    body: [
      "Outparcels are where a center's returns are made. Quick-service restaurant, convenience, fuel and banking users pay a premium for pad sites with direct arterial frontage and their own access, and they draw trips that the anchor does not.",
      "Paradise has developed outparcels for users across the fast food, gas and convenience categories, both within its own centers and as standalone single-tenant projects.",
      "The design work is circulation. A pad user with a drive-through needs stacking depth that does not spill into the center's main drive aisle, and an access point that does not fight the anchor's delivery route. Getting that wrong on paper is inexpensive; getting it wrong in concrete is not.",
    ],
    order: 5,
  },
  {
    slug: "banking",
    name: "Banking",
    category: "Sector",
    summary:
      "Branch and outparcel development for retail banking users.",
    body: [
      "Retail banking has been part of the Paradise development mix across the portfolio, principally as outparcel and single-tenant work.",
      "Branch site criteria overlap closely with pharmacy: signalized corners, strong visibility, easy in-and-out access, and drive-through circulation. The overlap is useful — corners that qualify for one user frequently qualify for the other, which widens the field of viable outcomes for a site the firm already controls.",
    ],
    order: 6,
  },
];

export const sortedPartners = [...partners].sort((a, b) => a.order - b.order);

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
