/**
 * Editorial content. Each article generates /insights/[slug] with Article
 * JSON-LD. Written to earn organic search on the questions retailers,
 * landowners and brokers actually type.
 */

export interface Insight {
  slug: string;
  title: string;
  /** Meta description and card summary. */
  excerpt: string;
  category: "Development" | "Leasing" | "Market" | "Construction" | "Investment";
  /** ISO date of publication. */
  date: string;
  /**
   * ISO date of a substantive revision, if there has been one. Drives both the
   * visible byline and `dateModified` in the Article schema — answer engines
   * weight recency heavily, and a piece that says it was revised is worth more
   * than one that silently was. Left unset when the article stands as first
   * published; the schema then reports the publication date, which is true.
   */
  updated?: string;
  readingTime: number;
  author: string;
  /** Markdown-lite: strings starting with "## " render as subheadings. */
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "why-grocery-anchored-retail-endures",
    title: "Why Grocery-Anchored Retail Has Outlasted Everything Around It",
    excerpt:
      "Enclosed malls collapsed. Big-box power centers thinned out. The neighborhood grocery center kept leasing. The reason is structural, not sentimental.",
    category: "Investment",
    date: "2026-06-18",
    readingTime: 7,
    author: "Paradise Ventures",
    body: [
      "For twenty-five years, the consensus forecast for physical retail has been decline. Enclosed malls have largely proven that forecast right. Big-box power centers have thinned considerably. Category killers in electronics, office supply and sporting goods have contracted or disappeared entirely.",
      "The grocery-anchored neighborhood center kept leasing.",
      "## The arithmetic of a weekly trip",
      "A full-service grocery store brings a household to a center roughly once a week — call it fifty-two visits a year, at a spend level that has proven remarkably insensitive to economic conditions. Every other tenant in that center is underwriting a share of those trips.",
      "The dry cleaner does not need to generate its own traffic. Neither does the nail salon, the sandwich shop, the urgent care clinic or the bank branch. They are each capturing a fraction of a trip the anchor has already paid to create. That is a fundamentally different business than unanchored strip retail, where every tenant must generate its own demand.",
      "Remove the anchor and the arithmetic collapses immediately. This is why a dark anchor is an emergency rather than a vacancy.",
      "## E-commerce hit the categories around grocery, not grocery",
      "Online retail took share aggressively in categories with high value density, low purchase frequency and no perishability — electronics, books, apparel, media. Those characteristics describe almost everything that anchored a mall.",
      "They describe almost nothing in a grocery store. Perishable goods carry real last-mile cost, and the delivery economics have proven persistently difficult even for well-capitalized operators. Grocery e-commerce has grown, but a substantial share of it routes through the physical store as pickup — which means the store remains the fulfillment point rather than becoming obsolete.",
      "## Trade areas are small and defensible",
      "A neighborhood grocery serves a trade area measured in minutes, not miles. That has two consequences worth understanding.",
      "First, the total addressable demand in any given trade area is finite and reasonably predictable from household data. Second, once a well-located grocery is operating in that trade area, the economic case for a second one nearby is weak. The first mover holds a defensible position for as long as the store performs.",
      "This is why site selection is not one input among many. It is the decision that determines the outcome, made years before anyone can verify it.",
      "## What this means for underwriting",
      "The durability of the format is not an argument that any grocery center is a good asset. It is an argument that the format rewards discipline in a way others do not.",
      "Get the trade area right, secure the anchor commitment before construction, control a corner that competitors cannot easily replicate, and the asset will likely perform through multiple cycles. Get the trade area wrong and no amount of leasing effort will fix it — because the households simply are not there.",
      "That is the whole thesis, and it has not changed since 1988.",
    ],
  },
  {
    slug: "what-publix-looks-for-in-a-site",
    title: "What a Grocery Anchor Actually Looks For in a Site",
    excerpt:
      "Rooftops are the headline. Access, visibility, parking geometry and delivery circulation are what kill deals.",
    category: "Development",
    date: "2026-05-02",
    readingTime: 8,
    author: "Paradise Ventures",
    body: [
      "Landowners frequently approach developers with a site and a demographic report. The report shows household growth, favorable income, and a gap in grocery coverage. All of that can be true and the site can still be undevelopable for a grocery anchor.",
      "Demographics establish whether a trade area can support a store. They say nothing about whether a particular parcel can host one.",
      "## Access is the first filter",
      "A grocery store needs full-movement access — the ability to turn left in and left out, or a median configuration that does not force half the trade area to drive past and make a U-turn. A site with right-in/right-out access only has effectively cut its trade area in half, regardless of what the household data says.",
      "Access is controlled by the jurisdiction with authority over the roadway, and in Florida that is frequently the state rather than the county or municipality. A driveway permit is not a formality; it is often the single most consequential approval in the entire entitlement process.",
      "## Visibility carries real revenue",
      "A store the driver cannot see from the arterial performs measurably worse than one they can. Frontage, setback, sign placement and the position of outparcels relative to the anchor all affect this.",
      "This creates a genuine design tension. Outparcels are the most valuable land in a center per square foot, and they sit between the arterial and the anchor. Place them poorly and you have monetized the pad while damaging the store behind it.",
      "## Parking geometry, not parking count",
      "Meeting a parking ratio is straightforward. Producing parking that works is not.",
      "Grocery shoppers push carts. That makes walking distance, aisle width, cart return placement and the pedestrian route from the lot to the door operationally significant rather than cosmetic. A lot that meets its ratio through a remote field the anchor's customers refuse to use has not solved the problem.",
      "## Delivery circulation is a hard constraint",
      "A grocery store receives tractor-trailer deliveries daily. Those trucks need a turning radius, a dock location, and a route to it that does not conflict with customer circulation or block the drive aisle.",
      "Truck circulation is one of the most common reasons an otherwise promising site fails. It is also one of the easiest to miss on a preliminary site plan, because it requires actually running the turning template rather than eyeballing the aisle.",
      "## Utility capacity and stormwater",
      "Two site conditions kill more retail deals than zoning does.",
      "The first is stormwater. Retention and treatment requirements consume developable land, and in some jurisdictions they consume a great deal of it. A parcel that appears large enough for the prototype can turn out not to be, once the pond is sized correctly.",
      "The second is utility capacity — specifically sewer. A site can be perfectly zoned, perfectly located and perfectly accessible, and still be unbuildable because the nearest lift station has no remaining capacity and the extension cost exceeds what the project can carry.",
      "## Why this is engineering work",
      "Every constraint above is an engineering question before it is a legal or brokerage question. That is a large part of why development capability is not interchangeable with real estate brokerage capability.",
      "The right time to discover a site cannot host the prototype is during feasibility, at modest cost. The wrong time is after entitlement, having spent eighteen months and a substantial budget proving it.",
    ],
  },
  {
    slug: "entitlement-timeline-retail-florida",
    title: "How Long Retail Entitlement Actually Takes in Florida",
    excerpt:
      "A realistic timeline from site control to construction commencement — and the four things most likely to extend it.",
    category: "Development",
    date: "2026-03-27",
    readingTime: 6,
    author: "Paradise Ventures",
    body: [
      "Landowners and retailers both tend to underestimate entitlement. The gap between the optimistic schedule and the real one is where development budgets are lost.",
      "What follows is a general framing rather than a promise. Every jurisdiction is different, and the same jurisdiction can behave differently in different years depending on staffing and political composition.",
      "## The broad shape of the schedule",
      "Site control and feasibility typically run one to three months — enough time for preliminary engineering, a title review, an environmental screen and a first pass at the site plan against the prototype.",
      "Rezoning, where required, is usually the longest single item: commonly six to twelve months, occasionally longer if the application draws organized opposition or the jurisdiction requires a comprehensive plan amendment.",
      "Site plan approval generally runs three to six months and often overlaps with rezoning. Permitting — building, driveway, utility, stormwater, environmental — commonly runs another three to six months, with the driveway permit frequently the long pole when a state roadway is involved.",
      "In aggregate, twelve to twenty-four months from site control to construction commencement is a reasonable planning assumption for a project requiring rezoning. A by-right site with no rezoning requirement can move considerably faster.",
      "## What extends it",
      "Four items account for most of the variance.",
      "Organized neighborhood opposition is the most unpredictable. Retail adjacent to established residential frequently attracts it, and it operates on a political timeline rather than a procedural one. It can add months and occasionally kills projects that were technically approvable.",
      "Comprehensive plan amendments, where the underlying land use designation must change rather than just the zoning, are a materially longer process than rezoning alone and are governed in part by state review timelines.",
      "Environmental conditions — wetlands, protected species, contamination from a prior use — introduce agency review that runs on its own schedule and is largely outside the applicant's control.",
      "Access permitting on a state roadway is the fourth. It is also the one most likely to be discovered late, because it can appear routine until the specific median and turn-lane conditions are analyzed.",
      "## How the schedule is protected",
      "Three practices do most of the work.",
      "Run the technical review early. Stormwater sizing, utility capacity and truck circulation should be tested during feasibility, while the cost of a bad answer is still small.",
      "Sequence approvals in parallel wherever the jurisdiction permits it. Site plan review and permitting can frequently overlap with the back half of a rezoning.",
      "Engage jurisdictional staff before the application is filed. A pre-application meeting that surfaces a problem is worth considerably more than a clean submittal that discovers the same problem in month four.",
      "None of this eliminates entitlement risk. It moves the discovery of that risk earlier, which is the only thing that reliably protects a budget.",
    ],
  },
  {
    slug: "outparcel-strategy",
    title: "Outparcels: The Most Valuable Land in a Shopping Center",
    excerpt:
      "Pad sites generate outsized returns per square foot and can quietly damage the anchor behind them. Both things are true.",
    category: "Development",
    date: "2026-02-11",
    readingTime: 5,
    author: "Paradise Ventures",
    body: [
      "Outparcels — the pad sites between the arterial and the main center — are the highest-value land in a shopping center on a per-square-foot basis, frequently by a wide margin.",
      "They are also the easiest way to damage the asset behind them.",
      "## Why the premium exists",
      "Quick-service restaurants, banks, convenience and fuel users, and pharmacies all want the same things: direct arterial frontage, their own access, their own signage, and drive-through circulation. A pad site delivers all four.",
      "Those users also draw trips the anchor does not. A morning coffee run and a weekly grocery trip are different behaviors from different customers at different times of day. Well-selected pad users broaden a center's demand profile rather than dividing it.",
      "## Where it goes wrong",
      "Three failure modes recur.",
      "The first is visibility. Place a pad building in the wrong position and it screens the anchor from the arterial. The pad rent is immediate and measurable; the damage to the anchor's performance is gradual and shows up in renewal negotiations years later.",
      "The second is circulation. A drive-through with insufficient stacking depth spills into the center's main drive aisle. On a Saturday, that single design decision degrades the entire center's traffic flow.",
      "The third is access conflict. Pad users want their own curb cut. Jurisdictions want fewer curb cuts. The compromise frequently routes pad traffic through the center's primary entrance, which is workable if planned and disruptive if discovered late.",
      "## Sell, ground lease, or hold",
      "Selling a pad returns capital immediately and removes it from the asset permanently. Ground leasing retains the land and the long-term income, at the cost of slower capital recovery.",
      "There is no universally correct answer. It depends on the capital structure of the project, the strength of the user, and whether the center is being built to hold or to sell.",
      "What is universally correct is deciding early. Outparcel strategy determines site plan geometry, and site plan geometry is fixed at entitlement. A decision to add a pad after approval means re-entitling the site — which is expensive, slow, and occasionally impossible.",
    ],
  },
  {
    slug: "florida-georgia-retail-development-markets",
    title: "Reading a Southeastern Trade Area Before the Rooftops Arrive",
    excerpt:
      "Building ahead of household growth is the whole game. Here is how the firm decides a market is ready.",
    category: "Market",
    date: "2026-01-15",
    readingTime: 6,
    author: "Paradise Ventures",
    body: [
      "The Southeast has absorbed extraordinary residential growth over the past three decades. Florida and Georgia in particular have added households at a pace that consistently outran their retail supply.",
      "That gap is the opportunity. Closing it correctly requires reading a trade area before it fully exists.",
      "## Current population is the wrong number",
      "A demographic report showing today's household count within three miles describes a market that no longer exists by the time a center opens. Entitlement and construction consume one to three years. The relevant question is what the trade area looks like at stabilization, not at underwriting.",
      "The more useful indicators are forward-looking: platted but unbuilt residential lots, subdivision approvals in the pipeline, building permit velocity, and school enrollment trends. Those signals lead retail demand by roughly the same interval a development takes to deliver, which is not a coincidence — it is why the approach works.",
      "## Leakage is the clearest signal",
      "The single most reliable indicator that a trade area is under-retailed is that its households are already spending the money somewhere else.",
      "When residents routinely drive fifteen or twenty minutes for a full grocery trip, demand is established, quantified and currently being captured by someone else's asset. That is a materially safer proposition than demand that must be created.",
      "This is what the firm looks for: not an empty market, but a market that is visibly commuting out of itself for daily needs.",
      "## Growth direction is not uniform",
      "Metro areas do not expand evenly. They extend along corridors, following highway capacity, school district reputation and the availability of developable land.",
      "Metro Atlanta's growth ran hard along specific vectors — northwest through Paulding and Cherokee, south through Henry and Clayton — while other directions moved considerably slower. The firm's Georgia portfolio at Dallas, New Hope, Canton, McDonough and Ellenwood follows those vectors directly.",
      "Identifying the vector matters more than identifying the metro.",
      "## Barriers to the next competitor",
      "A trade area that supports one grocery center rarely supports two. So the question after 'will this work' is 'can someone else do this next to me.'",
      "Sites with genuine barriers — limited qualifying corners, constrained access points, difficult topography, scarce remaining developable land — hold their competitive position. Sites in the middle of an open field with three equivalent corners nearby do not.",
      "That assessment is qualitative and does not appear in any demographic report. It is a judgment made by people who have watched the same pattern play out across many markets over many years.",
    ],
  },
  {
    slug: "in-house-construction-management-advantage",
    title: "Why We Keep Construction Management In-House",
    excerpt:
      "Every handoff between development, financing and construction is a place a schedule can slip. We removed the handoffs.",
    category: "Construction",
    date: "2025-11-20",
    readingTime: 5,
    author: "Paradise Ventures",
    body: [
      "Most retail developers outsource construction oversight to a third-party representative. It is a defensible model and it works reasonably well much of the time.",
      "Paradise Ventures does not use it, for one specific reason: retail delivery dates cannot move, and every organizational seam is a place where a date slips.",
      "## The anchor's calendar is not negotiable",
      "A grocery anchor plans a store opening around distribution routing, hiring and training, and a marketing calendar committed months in advance. Those commitments are made by different departments on different timelines, all keyed to a single delivery date.",
      "A center that delivers six weeks late does not open six weeks late. It can miss a seasonal window entirely and wait for the next one.",
      "That is the pressure every decision during construction operates under.",
      "## What a seam costs",
      "Consider a routine field conflict — an underground utility is not where the as-built drawings said it was, and the contractor needs a direction.",
      "Under an outsourced model, that question travels to a third-party representative, who evaluates it against a scope they inherited, then routes it to the developer for a cost decision, who evaluates it against a pro forma and a set of lease obligations the representative has never read. Each step is reasonable. Together they take a week.",
      "When the same question reaches someone who wrote the scope, knows the pro forma, and holds the lease obligations personally, it takes an afternoon.",
      "Over a full project, that difference compounds across dozens of decisions. That compounding is the delivery date.",
      "## Accountability without a gap",
      "The second effect is subtler and more important. When the party who set the delivery date is the same party responsible for holding it, there is no one to point at.",
      "Outsourced structures distribute accountability by design, which is precisely what makes them comfortable. A schedule problem becomes a discussion about whose scope it was. In-house management removes that discussion by removing the gap it lives in.",
      "The date belongs to the firm. So does the outcome.",
    ],
  },
];

export const sortedInsights = [...insights].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export const insightCategories = [...new Set(insights.map((i) => i.category))];
