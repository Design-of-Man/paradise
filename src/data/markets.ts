/** Geographic markets. Generates /markets and /markets/[slug]. */

export interface Market {
  slug: string;
  state: string;
  stateName: string;
  headline: string;
  summary: string;
  body: string[];
  /** Notable submarkets used as internal-link anchors and long-tail keywords. */
  submarkets: string[];
}

export const markets: Market[] = [
  {
    slug: "florida",
    state: "FL",
    stateName: "Florida",
    headline: "Home market since 1988.",
    summary:
      "Paradise Ventures has developed retail across Florida for more than three decades, from the Panhandle to Miami-Dade.",
    body: [
      "Florida is where the firm started and where the largest share of the portfolio sits. Paradise Ventures has operated from Safety Harbor, in Pinellas County, since 1988 — through multiple growth cycles, two significant downturns, and the transformation of nearly every major trade area in the state.",
      "The Florida portfolio spans the state's full geographic and demographic range. In South Florida, the firm has delivered infill centers in dense, fully built-out markets — Miami, Plantation, Davie, Cooper City, Pembroke Pines and Sunrise — where the work is assembly, entitlement and precise site engineering rather than greenfield development.",
      "Along the Treasure Coast and in Palm Beach County, centers at West Palm Beach and North Palm Beach serve established corridors with strong household income profiles. On the east coast, Edgewater and DeLand represent some of the firm's earliest work, delivered into Volusia County's growth in the early 1990s.",
      "In the Panhandle, centers at Navarre and Fort Walton Beach serve Emerald Coast trade areas with a distinctive mix of permanent residential, military-adjacent and seasonal demand — a profile that requires reading two populations correctly rather than one.",
      "And in Tampa Bay, the firm's own backyard, the Shoppes of Lithia serve the Brandon–FishHawk corridor of Hillsborough County. Local knowledge accumulated over three decades in one market is difficult to replicate from a distance.",
    ],
    submarkets: [
      "Tampa Bay",
      "Miami-Dade",
      "Broward County",
      "Palm Beach County",
      "Volusia County",
      "Emerald Coast",
      "Pinellas County",
      "Hillsborough County",
    ],
  },
  {
    slug: "georgia",
    state: "GA",
    stateName: "Georgia",
    headline: "Metro Atlanta and middle Georgia.",
    summary:
      "The firm's second home market, with centers delivered along metro Atlanta's principal growth corridors.",
    body: [
      "Paradise Ventures entered Georgia in 2000 with Paradise Crossing in Douglasville, and the state has since become the firm's second home market.",
      "Metro Atlanta did not expand evenly. It extended along specific corridors, following highway capacity, school district reputation and developable land. The firm's Georgia portfolio follows those vectors directly — northwest through Paulding County at Dallas and New Hope, north through Cherokee County at Canton along the I-575 corridor, and south through Henry and Clayton counties at McDonough and Ellenwood.",
      "Each of those counties ranked among the fastest-growing in the United States during the period the centers were delivered. Building into that curve required committing to a trade area before its retail supply caught up with its household count — which is only defensible when the anchor lease is signed first.",
      "Beyond the metro, Paradise Shoppes of Warner Robins serves middle Georgia's largest concentration of households outside Macon, in a market shaped substantially by Robins Air Force Base. Military-adjacent trade areas carry a stable, salaried demand base that performs consistently through economic cycles.",
      "Returning repeatedly to counties the firm already knows — with entitlement history, working relationships with local staff, and proven trade-area performance — materially reduces execution risk on each subsequent project.",
    ],
    submarkets: [
      "Metro Atlanta",
      "Paulding County",
      "Cherokee County",
      "Henry County",
      "Clayton County",
      "Douglas County",
      "Middle Georgia",
    ],
  },
  {
    slug: "south-carolina",
    state: "SC",
    stateName: "South Carolina",
    headline: "The Lowcountry and greater Charleston.",
    summary:
      "Grocery-anchored development in one of the Southeast's strongest sustained growth markets.",
    body: [
      "Paradise Shoppes of Summerville extends the firm's grocery-anchored platform into South Carolina, serving Summerville in the greater Charleston market.",
      "Charleston has been one of the Southeast's most consistent growth stories, adding households steadily across the metro's northern and western submarkets. Summerville sits directly in that path, in Dorchester County, and has absorbed a substantial share of the region's residential expansion.",
      "The project reflects the firm's broader footprint. While Florida and Georgia carry the bulk of the portfolio, Paradise has developed across eight states — geography follows the retailer's expansion plan and the quality of the site, not a line on a map.",
    ],
    submarkets: ["Greater Charleston", "Dorchester County", "Lowcountry"],
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}
