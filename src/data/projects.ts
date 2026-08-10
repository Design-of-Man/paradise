/**
 * Portfolio dataset.
 *
 * Every entry below was sourced from Paradise Ventures' own published project
 * lists. Fields marked optional (`gla`, `acreage`, `outparcels`) are omitted
 * rather than estimated — the UI degrades gracefully when they are absent, so
 * adding a verified number later is a one-line change with no layout risk.
 *
 * See CONTENT-TODO.md for the fields awaiting confirmation from the client.
 */

export type ProjectStatus =
  | "completed"
  | "under-construction"
  | "in-development"
  | "acquisition";

export type ProjectType =
  | "Publix-Anchored Center"
  | "Grocery-Anchored Center"
  | "Single-Tenant Retail"
  | "Neighborhood Center"
  | "Mixed Retail"
  | "Retail Redevelopment"
  | "Lifestyle Center"
  | "Net-Leased Retail"
  | "Aviation";

export interface Project {
  slug: string;
  name: string;
  city: string;
  state: string;
  stateName: string;
  /** Street address, where published. */
  address?: string;
  /** Year the center opened for business. */
  year?: number;
  status: ProjectStatus;
  type: ProjectType;
  /** Primary anchor tenant. */
  anchor?: string;
  /** Notable co-tenants and outparcel users. */
  tenants?: string[];
  /** Gross leasable area, square feet. */
  gla?: number;
  acreage?: number;
  outparcels?: number;
  /**
   * Set once real photography exists at /public/images/projects/<slug>.jpg.
   * Until then the generated site plan renders instead — see SiteVisual.
   */
  hasPhoto?: boolean;
  /** Additional photography, as paths under /public. Rendered as a gallery. */
  gallery?: string[];
  /** One-line summary used on cards and in meta descriptions. */
  summary: string;
  /** Body paragraphs for the detail page. */
  body: string[];
  /** Published bullet points, shown as a highlights list on the detail page. */
  highlights?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  /* ---------------------------------------------------------------- */
  /* Active development — copy taken from the firm's /projects page.    */
  /* ---------------------------------------------------------------- */
  {
    slug: "keene-plaza",
    name: "Keene Plaza",
    city: "Largo",
    state: "FL",
    stateName: "Florida",
    address: "East Bay Drive & Keene Road, Largo, FL",
    status: "in-development",
    type: "Retail Redevelopment",
    anchor: "Sprouts Farmers Market",
    tenants: ["Sprouts Farmers Market", "Badcock Home Furniture & More"],
    featured: true,
    hasPhoto: true,
    gallery: [
      "/images/projects/keene-plaza-2.jpg",
      "/images/projects/keene-plaza-3.jpg",
    ],
    summary:
      "A Mid-Pinellas redevelopment bringing Sprouts Farmers Market and Badcock Home Furniture to the densest retail corridor in the submarket.",
    highlights: [
      "Development plans include the demolition of approximately 35,500 SF of existing retail space at the northeast leg of the center to make room for two brand-new retailers, Sprouts Farmers Market and Badcock Home Furniture & More.",
      "The property is located along the densest retail corridor within the Mid-Pinellas retail submarket.",
      "The balance of the shopping center will receive a face lift.",
      "Improvements to the site infrastructure are also planned, including parking lot, lighting, and driveway upgrades.",
    ],
    body: [
      "Keene Plaza sits at East Bay Drive and Keene Road in Largo, along the densest retail corridor in the Mid-Pinellas submarket. The redevelopment removes roughly 35,500 square feet of existing retail at the northeast leg of the center to make room for two brand-new retailers: Sprouts Farmers Market and Badcock Home Furniture & More.",
      "Redevelopment is a different discipline to ground-up work. The trade area is already proven — the question is whether the existing improvements are the highest and best use of a corner this good. Here the answer was to take part of the center down rather than lease it as-is.",
      "The balance of the shopping center receives a face lift, and site infrastructure is being upgraded alongside it — parking lot, lighting and driveway improvements that determine how the asset performs long after the new anchors open.",
    ],
  },
  {
    slug: "sundial-st-pete",
    name: "Sundial",
    city: "St. Petersburg",
    state: "FL",
    stateName: "Florida",
    address: "153 2nd Avenue North, St. Petersburg, FL",
    status: "under-construction",
    type: "Lifestyle Center",
    tenants: [
      "Ruth's Chris Steakhouse",
      "Sea Salt",
      "White House Black Market",
      "Jackie Z Style Co.",
      "Forbici Modern Italian",
      "Serotonin Centers",
    ],
    featured: true,
    hasPhoto: true,
    summary:
      "A one-of-a-kind lifestyle center in the heart of downtown St. Petersburg, under active renovation.",
    highlights: [
      "Sundial St. Pete is a one-of-a-kind lifestyle center in the heart of Downtown St. Petersburg.",
      "Tenants include Ruth's Chris Steakhouse, Sea Salt, White House Black Market, and Jackie Z Style Co.",
      "Forbici Modern Italian and Serotonin Centers have signed as new tenants.",
      "Renovations include a new open green space for community gatherings and events.",
    ],
    body: [
      "Sundial St. Pete is a one-of-a-kind lifestyle center in the heart of downtown St. Petersburg — an urban, experience-led format that operates on entirely different principles to a suburban grocery center.",
      "The tenant roster reflects that. Ruth's Chris Steakhouse, Sea Salt, White House Black Market and Jackie Z Style Co. anchor a mix built around dwell time rather than the weekly errand, with Forbici Modern Italian and Serotonin Centers signed as new tenants.",
      "The current renovation adds a new open green space for community gatherings and events. In a downtown lifestyle centre the public realm is the anchor — the reason people come, stay, and come back — so investment in shared space is investment in the rent roll.",
    ],
  },
  {
    slug: "clearwater-air-park",
    name: "Clearwater Air Park",
    city: "Clearwater",
    state: "FL",
    stateName: "Florida",
    address: "1000 North Hercules Ave, Clearwater, FL",
    status: "in-development",
    type: "Aviation",
    tenants: ["FlyUSA-PV"],
    hasPhoto: true,
    summary:
      "A general aviation airpark in Pinellas County, operated by FlyUSA-PV and serving private jet charter.",
    highlights: [
      "Operated by FlyUSA-PV.",
      "Clearwater Airpark (KCLW) serves private jet charters and private aviation in Pinellas County.",
      "The airport's elevation makes it the only airport in Pinellas County that is not in a flood zone.",
    ],
    body: [
      "Clearwater Air Park (KCLW) on North Hercules Avenue is a general aviation facility operated by FlyUSA-PV, serving private jet charter and private aviation across Pinellas County.",
      "Its elevation gives it a genuinely rare characteristic for the Florida Gulf Coast: it is the only airport in Pinellas County that does not sit in a flood zone. In a market where storm exposure increasingly drives insurance and operating cost, that is a durable structural advantage rather than a marketing line.",
      "The asset also demonstrates that the firm's capability is not confined to retail. The underwriting discipline — read the trade area, control an asset others cannot easily replicate, then operate it properly — transfers.",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Completed                                                         */
  /* ---------------------------------------------------------------- */
  {
    slug: "east-bay",
    name: "East Bay",
    city: "Largo",
    state: "FL",
    stateName: "Florida",
    address: "E Bay Dr & US 19, Largo, FL",
    status: "completed",
    type: "Net-Leased Retail",
    acreage: 4.34,
    tenants: ["Raising Cane's", "The Habit Burger Grill", "Fifth Third Bank"],
    featured: true,
    hasPhoto: true,
    gallery: [
      "/images/projects/east-bay-2.jpg",
      "/images/projects/east-bay-3.jpg",
    ],
    summary:
      "A 4.34-acre net-leased development at East Bay Drive and US 19, one of Pinellas County's highest-traffic intersections.",
    highlights: [
      "Tenants include Raising Cane's, The Habit Burger Grill, and Fifth Third Bank.",
      "4.34 acres with excellent visibility on East Bay Dr (54,500 AADT) 0.40 miles from US 19 (87,500 AADT).",
      "Located across from redeveloped Tri-City Plaza.",
      "Excellent access from multiple points on East Bay Dr.",
    ],
    body: [
      "East Bay is a 4.34-acre net-leased development at East Bay Drive and US 19 in Largo, tenanted by Raising Cane's, The Habit Burger Grill and Fifth Third Bank.",
      "The traffic counts explain the tenant mix. East Bay Drive carries 54,500 vehicles a day at the site, and US 19 — four tenths of a mile away — carries 87,500. Quick-service restaurant and banking users pay a premium for exactly this profile: high volume, direct frontage, and their own access.",
      "Access is the other half of it. The site takes traffic from multiple points along East Bay Drive rather than funnelling everything through a single curb cut, which is what makes a drive-through user's stacking work at peak. It sits across from the redeveloped Tri-City Plaza, in a corridor that has drawn sustained reinvestment.",
    ],
  },
  {
    slug: "edgewater-commons",
    name: "Edgewater Commons",
    city: "Edgewater",
    state: "FL",
    stateName: "Florida",
    year: 1992,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "One of the earliest Paradise centers, anchoring a growing stretch of Florida's east coast.",
    body: [
      "Edgewater Commons is among the first neighborhood centers Paradise Ventures brought out of the ground, and it set the template the firm still follows: put a strong grocery anchor at the center of a growing residential trade area, surround it with the everyday services those households need, and hold the asset to a standard that keeps it leased for decades.",
      "The center opened in 1992 on Florida's east coast, during a period of sustained residential growth along the corridor. More than thirty years later it remains a working example of the firm's core thesis — that grocery-anchored retail, sited correctly, is the most durable format in the sector.",
    ],
  },
  {
    slug: "southpointe-commons",
    name: "Southpointe Commons",
    city: "DeLand",
    state: "FL",
    stateName: "Florida",
    year: 1993,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Publix-anchored neighborhood center serving DeLand and western Volusia County.",
    body: [
      "Southpointe Commons opened in 1993 in DeLand, the seat of western Volusia County and home to Stetson University. The center was positioned to capture both the established residential base south of downtown and the daily traffic moving along the corridor.",
      "The project reflects an approach Paradise has repeated across two states: identify the household growth before it arrives, control the corner, and deliver a center the anchor can trade out of profitably from day one.",
    ],
  },
  {
    slug: "sawgrass-center",
    name: "Sawgrass Center",
    city: "Sunrise",
    state: "FL",
    stateName: "Florida",
    year: 1999,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Broward County center built into one of South Florida's densest retail corridors.",
    body: [
      "Sawgrass Center opened in 1999 in Broward County, in a submarket defined by high household density and intense competition for well-located corners. Sites like this one reward developers who can move quickly through entitlement and hold a defensible position on access and visibility.",
      "The project demonstrates Paradise's capacity to deliver in mature, fully built-out South Florida markets — where the work is less about greenfield land and more about assembly, entitlement, and precise site engineering.",
    ],
  },
  {
    slug: "northlake-promenade-shoppes",
    name: "Northlake Promenade Shoppes",
    city: "North Palm Beach",
    state: "FL",
    stateName: "Florida",
    year: 2000,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "Neighborhood shops on the Northlake corridor in northern Palm Beach County.",
    body: [
      "Northlake Promenade Shoppes opened in 2000 along the Northlake Boulevard corridor, one of northern Palm Beach County's primary east–west arteries. The shop space was planned to serve the surrounding residential base with the service and convenience uses that perform beside a grocery anchor.",
      "Palm Beach County remains one of the firm's most active historical markets, with several centers delivered across the county through the late 1990s and early 2000s.",
    ],
  },
  {
    slug: "paradise-crossing",
    name: "Paradise Crossing",
    city: "Douglasville",
    state: "GA",
    stateName: "Georgia",
    year: 2000,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "The firm's expansion into metro Atlanta, west of the city in Douglas County.",
    body: [
      "Paradise Crossing opened in 2000 in Douglasville, marking the firm's move into metro Atlanta. Douglas County sat directly in the path of the region's westward residential growth, and the center was built to serve households arriving ahead of the retail that would follow them.",
      "Georgia has since become the firm's second home market, with centers delivered across the Atlanta metropolitan area and into middle Georgia.",
    ],
  },
  {
    slug: "flamingo-sr-84",
    name: "Flamingo & S.R. 84",
    city: "Plantation",
    state: "FL",
    stateName: "Florida",
    year: 2000,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A hard-corner Broward County center at the intersection of two major arterials.",
    body: [
      "Located where Flamingo Road meets State Road 84 in Plantation, this center occupies the kind of hard corner that defines a trade area. Two arterials, full access, and a dense residential base on every side.",
      "Corner position is not a detail — it is the asset. Paradise has consistently pursued sites where the intersection itself carries the traffic, rather than relying on a neighboring generator.",
    ],
  },
  {
    slug: "publix-at-laguna-isles",
    name: "Publix at Laguna Isles",
    city: "Pembroke Pines",
    state: "FL",
    stateName: "Florida",
    year: 2000,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A neighborhood grocery serving the master-planned communities of southwest Broward.",
    body: [
      "Publix at Laguna Isles opened in 2000 in Pembroke Pines, serving the master-planned residential communities that transformed southwest Broward County through the 1990s. Rooftops came first; this center followed them.",
      "Timing is the discipline that separates a center that leases from one that lingers. The firm underwrites household growth, not current-year counts.",
    ],
  },
  {
    slug: "shoppes-at-paradise-pointe",
    name: "Shoppes at Paradise Pointe",
    city: "Fort Walton Beach",
    state: "FL",
    stateName: "Florida",
    year: 2001,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Panhandle center serving Fort Walton Beach and the Emerald Coast.",
    body: [
      "Shoppes at Paradise Pointe opened in 2001 in Fort Walton Beach, extending the firm's reach into Florida's Panhandle. Emerald Coast markets carry a distinct retail profile — a permanent residential base layered with substantial seasonal and military-adjacent demand.",
      "Underwriting these trade areas requires reading both populations correctly. The center has served the Fort Walton Beach community for more than two decades.",
    ],
  },
  {
    slug: "cooper-city-commons",
    name: "Cooper City Commons",
    city: "Cooper City",
    state: "FL",
    stateName: "Florida",
    year: 2002,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A neighborhood center in one of Broward County's established suburbs.",
    body: [
      "Cooper City Commons opened in 2002, serving one of Broward County's most stable residential communities. Cooper City's household profile — owner-occupied, family-oriented, high median income — is close to an ideal grocery trade area.",
      "Centers in markets like this one tend to hold occupancy through cycles, which is precisely why the firm targets them.",
    ],
  },
  {
    slug: "shoppes-at-lake-dow",
    name: "The Shoppes at Lake Dow",
    city: "McDonough",
    state: "GA",
    stateName: "Georgia",
    year: 2002,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Henry County center built ahead of metro Atlanta's southern growth wave.",
    body: [
      "The Shoppes at Lake Dow opened in 2002 in McDonough, seat of Henry County and one of the fastest-growing counties in the United States through that period. The center was delivered into the leading edge of that growth.",
      "Building ahead of a growth curve carries risk that building behind it does not. The firm manages that risk through anchor commitment — the grocery lease is signed before the site work starts.",
    ],
  },
  {
    slug: "plaza-del-paraiso",
    name: "Plaza del Paraiso",
    city: "Miami",
    state: "FL",
    stateName: "Florida",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "An infill Miami-Dade center serving a dense urban trade area.",
    body: [
      "Plaza del Paraiso opened in 2003 in Miami, an infill development in one of the most competitive retail markets in the country. Miami-Dade sites demand a different playbook: land is constrained, entitlement is intricate, and parking ratios are fought for rather than assumed.",
      "The project stands as evidence that the firm's development capability is not limited to greenfield suburban corners.",
    ],
  },
  {
    slug: "paradise-place",
    name: "Paradise Place",
    city: "West Palm Beach",
    state: "FL",
    stateName: "Florida",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Publix-anchored center in West Palm Beach that later traded to institutional ownership.",
    body: [
      "Paradise Place opened in 2003 in West Palm Beach. The center was subsequently acquired by institutional retail investors — a common outcome for well-located, well-tenanted grocery-anchored assets, and a validation of the underwriting that produced it.",
      "Development is only half the discipline. Building an asset that institutional capital wants to own is the other half, and it is decided years earlier, at site selection.",
    ],
  },
  {
    slug: "shoppes-of-lithia",
    name: "Shoppes of Lithia",
    city: "Brandon",
    state: "FL",
    stateName: "Florida",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Hillsborough County center in the firm's own Tampa Bay backyard.",
    body: [
      "Shoppes of Lithia opened in 2003 in the Brandon–FishHawk corridor of Hillsborough County, one of Tampa Bay's most active residential growth areas through the 2000s.",
      "Tampa Bay is home. The firm has operated from Safety Harbor since 1988, and the local market knowledge that comes from three decades in one place is difficult to replicate from a distance.",
    ],
  },
  {
    slug: "paradise-promenade",
    name: "Paradise Promenade",
    city: "Davie",
    state: "FL",
    stateName: "Florida",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A neighborhood center serving the Town of Davie in central Broward.",
    body: [
      "Paradise Promenade opened in 2003 in Davie, a central Broward community with an unusual mix of established residential neighborhoods, equestrian districts, and a substantial university presence.",
      "The center serves the everyday needs of that trade area with a grocery anchor and a complement of service and convenience tenants.",
    ],
  },
  {
    slug: "paradise-shoppes-of-navarre",
    name: "Paradise Shoppes of Navarre",
    city: "Navarre",
    state: "FL",
    stateName: "Florida",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A Santa Rosa County center on Florida's Emerald Coast.",
    body: [
      "Paradise Shoppes of Navarre opened in 2003 in Santa Rosa County, between Pensacola and Fort Walton Beach. Navarre grew substantially through this period, and the center was positioned to serve that expanding permanent population.",
      "It remains one of several Panhandle centers in the portfolio, a region the firm has worked continuously since the late 1990s.",
    ],
  },
  {
    slug: "paradise-shoppes-of-ellenwood",
    name: "Paradise Shoppes of Ellenwood",
    city: "Ellenwood",
    state: "GA",
    stateName: "Georgia",
    year: 2003,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A southeast metro Atlanta center serving Clayton and Henry counties.",
    body: [
      "Paradise Shoppes of Ellenwood opened in 2003 southeast of Atlanta, near the Clayton and Henry county line. The site served a residential base that had grown well ahead of its retail supply.",
      "Under-retailed trade areas are the firm's preferred hunting ground — the demand is already in place and simply has nowhere to go.",
    ],
  },
  {
    slug: "paradise-shoppes-of-dallas",
    name: "Paradise Shoppes of Dallas",
    city: "Dallas",
    state: "GA",
    stateName: "Georgia",
    year: 2004,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A Paulding County center northwest of Atlanta.",
    body: [
      "Paradise Shoppes of Dallas opened in 2004 in Paulding County, one of metro Atlanta's fastest-growing outer counties through the 2000s. The center brought a full-service grocery to a trade area that had been driving well outside it for daily needs.",
      "That is the clearest signal a market is ready: households are already spending the money, just somewhere else.",
    ],
  },
  {
    slug: "paradise-shoppes-of-prominence-point",
    name: "Paradise Shoppes of Prominence Point",
    city: "Canton",
    state: "GA",
    stateName: "Georgia",
    year: 2004,
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A Cherokee County center serving Canton and the I-575 corridor.",
    body: [
      "Paradise Shoppes of Prominence Point opened in 2004 in Canton, along the I-575 corridor in Cherokee County. The corridor carried substantial residential growth north out of Atlanta through this period.",
      "The center anchors a trade area that has continued to add households in the two decades since it opened.",
    ],
  },
  {
    slug: "paradise-shoppes-of-new-hope",
    name: "Paradise Shoppes of New Hope",
    city: "Dallas",
    state: "GA",
    stateName: "Georgia",
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary: "A second Paulding County center serving the New Hope community.",
    body: [
      "Paradise Shoppes of New Hope serves the New Hope community in Paulding County, Georgia, with a Publix anchor and supporting shop space.",
      "Returning to a county the firm already knows — with entitlement history, relationships with local staff, and proven trade-area performance — materially reduces execution risk on the second project.",
    ],
  },
  {
    slug: "paradise-shoppes-of-warner-robins",
    name: "Paradise Shoppes of Warner Robins",
    city: "Warner Robins",
    state: "GA",
    stateName: "Georgia",
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A middle Georgia center serving Warner Robins and the Robins AFB community.",
    body: [
      "Paradise Shoppes of Warner Robins serves middle Georgia's largest concentration of households outside Macon, in a market shaped substantially by Robins Air Force Base.",
      "Military-adjacent trade areas carry a stable, salaried demand base that performs consistently through economic cycles — a characteristic the firm values highly in underwriting.",
    ],
  },
  {
    slug: "paradise-shoppes-of-summerville",
    name: "Paradise Shoppes of Summerville",
    city: "Summerville",
    state: "SC",
    stateName: "South Carolina",
    status: "completed",
    type: "Publix-Anchored Center",
    anchor: "Publix",
    summary:
      "A Lowcountry center serving Summerville in the greater Charleston market.",
    body: [
      "Paradise Shoppes of Summerville extends the firm's grocery-anchored platform into South Carolina, serving Summerville in the greater Charleston market — one of the Southeast's strongest sustained growth stories.",
      "The project reflects the firm's broader footprint: while Florida and Georgia carry the bulk of the portfolio, Paradise has developed across eight states.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Derived collections and lookups                                     */
/* ------------------------------------------------------------------ */

export const completedProjects = projects.filter((p) => p.status === "completed");

export const activeProjects = projects.filter(
  (p) => p.status === "under-construction" || p.status === "in-development",
);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projects grouped by state, sorted by project count descending. */
export function projectsByState(): { state: string; stateName: string; items: Project[] }[] {
  const map = new Map<string, { state: string; stateName: string; items: Project[] }>();
  for (const p of projects) {
    const entry = map.get(p.state) ?? { state: p.state, stateName: p.stateName, items: [] };
    entry.items.push(p);
    map.set(p.state, entry);
  }
  return [...map.values()].sort((a, b) => b.items.length - a.items.length);
}

/** Chronological grouping for the portfolio timeline. */
export function projectsByDecade(): { decade: string; items: Project[] }[] {
  const dated = projects.filter((p) => p.year).sort((a, b) => a.year! - b.year!);
  const map = new Map<string, Project[]>();
  for (const p of dated) {
    const decade = `${Math.floor(p.year! / 10) * 10}s`;
    map.set(decade, [...(map.get(decade) ?? []), p]);
  }
  return [...map.entries()].map(([decade, items]) => ({ decade, items }));
}

/**
 * Related projects for a detail page: same state first, then same anchor,
 * never the project itself.
 */
export function relatedProjects(project: Project, limit = 3): Project[] {
  const scored = projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score: (p.state === project.state ? 2 : 0) + (p.anchor === project.anchor ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.p);
}
