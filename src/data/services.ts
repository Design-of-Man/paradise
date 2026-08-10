/** Service lines. Each entry generates a full detail page at /services/[slug]. */

export interface Service {
  slug: string;
  name: string;
  /** Used in nav, cards and meta descriptions. */
  tagline: string;
  summary: string;
  /** Long-form body for the detail page. */
  body: string[];
  /** What the client actually receives. */
  deliverables: { title: string; description: string }[];
  /** Ordered phases shown as a numbered list. */
  phases?: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  order: number;
}

export const services: Service[] = [
  {
    slug: "development",
    name: "Development",
    tagline: "Site selection through grand opening.",
    summary:
      "Ground-up retail development, self-managed end to end — site selection, entitlement, capital, construction and delivery.",
    body: [
      "Development is the core of the business and has been since 1988. Paradise Ventures takes retail projects from raw land through grand opening without handing the file to a third party at any point along the way.",
      "That structure exists for a reason. On a typical retail development, the seams between site selection, entitlement, financing and construction are where schedules slip — each handoff introduces a party who was not in the room when the last set of assumptions was made. Holding all four functions in-house removes those seams.",
      "The firm has delivered more than five million square feet of retail across eight states, including fifty-two Publix stores built from the ground up and more than one hundred Walgreens. That volume matters less as a statistic than as a body of pattern recognition: after enough cycles, you know which sites will fight you at stormwater review and which will not.",
      "Paradise develops on its own balance sheet and alongside equity partners, and will structure a project as a build-to-suit, a joint venture, or a fee development assignment depending on what the retailer and the site require.",
    ],
    phases: [
      { title: "Site Identification", description: "Trade-area analysis, household growth modeling, and control of the right corner." },
      { title: "Feasibility & Underwriting", description: "Preliminary engineering, cost modeling and a return analysis before meaningful capital is at risk." },
      { title: "Entitlement & Permitting", description: "Rezoning, site plan approval, jurisdictional permitting and utility coordination." },
      { title: "Anchor Commitment", description: "Lease execution with the grocery or pharmacy anchor before site work begins." },
      { title: "Capital Formation", description: "Construction financing and equity arranged against a committed lease." },
      { title: "Construction", description: "Sitework through vertical delivery under in-house construction management." },
      { title: "Delivery & Opening", description: "Tenant coordination, certificate of occupancy and grand opening." },
    ],
    deliverables: [
      { title: "Controlled site", description: "A corner under contract with the access, visibility and utility capacity the format requires." },
      { title: "Clean entitlements", description: "Zoning, site plan and permits in hand, with conditions the pro forma can actually carry." },
      { title: "Committed capital", description: "Construction debt and equity arranged before mobilization." },
      { title: "A delivered building", description: "Turned over on the date the anchor was given, in the condition the lease specifies." },
    ],
    faqs: [
      { q: "Do you develop outside Florida and Georgia?", a: "Yes. The firm has developed across eight states. Florida and Georgia carry the largest share of the portfolio, but geography follows the retailer's expansion plan rather than the other way around." },
      { q: "Will you develop on land we already control?", a: "Yes. If you hold a site and need a developer to carry it through entitlement, financing and construction, that is a straightforward fee development or joint venture assignment." },
      { q: "How early do you need the anchor committed?", a: "Before site work starts. The firm does not begin vertical construction on speculative anchor demand." },
    ],
    order: 1,
  },
  {
    slug: "construction-management",
    name: "Construction Management",
    tagline: "Self-performed oversight, on schedule.",
    summary:
      "In-house construction management — budget, schedule and quality controlled by the same firm that underwrote the deal.",
    body: [
      "Paradise Ventures manages construction internally rather than delegating oversight to an outside representative. The people accountable for the delivery date are the same people who set it.",
      "This changes how problems surface. When a general contractor reports a conflict in the field, it reaches someone who knows the pro forma, the lease obligations and the entitlement conditions personally — not a project manager reading the file for the first time. Decisions that would otherwise take a week take an afternoon.",
      "Retail construction runs against dates that cannot move. Grocery anchors plan store openings around distribution, staffing and marketing calendars set many months out. A center that delivers late does not simply open late; it can miss a season entirely.",
      "The firm's construction management covers contractor procurement and buyout, budget and change-order control, schedule management, quality and punch, tenant coordination, and closeout through certificate of occupancy.",
    ],
    deliverables: [
      { title: "Competitive buyout", description: "Contractor procurement run against a scope the firm wrote, not one inherited." },
      { title: "Cost control", description: "Change orders reviewed against the original scope, with cost-to-complete reported continuously." },
      { title: "Schedule discipline", description: "Critical-path management against the anchor's committed delivery date." },
      { title: "Tenant coordination", description: "Landlord work, deliveries and inspections sequenced so tenants can open on time." },
    ],
    faqs: [
      { q: "Do you self-perform the construction itself?", a: "The firm manages construction and procures qualified general contractors for the work. Management, budget control and schedule accountability stay in-house." },
      { q: "How are change orders handled?", a: "Reviewed against the original scope documents and priced before authorization. A change order is a decision, not a notification." },
    ],
    order: 2,
  },
  {
    slug: "leasing",
    name: "Leasing",
    tagline: "Shop space beside national anchors.",
    summary:
      "Anchor coordination, shop-space leasing and outparcel disposition across the portfolio.",
    body: [
      "Leasing at Paradise Ventures runs on both sides of a center. Anchor leases are negotiated as part of development, often years before a building exists. Shop space and outparcels are leased into traffic the anchor already generates.",
      "That second conversation is genuinely different from leasing unanchored retail. A tenant taking space beside a Publix is not being asked to create their own traffic — they are being placed into it. The work is assembling a mix that captures that traffic without cannibalizing it: the right service uses, the right food, the right convenience, and a clear-eyed view of what a given trade area will actually support.",
      "The firm would rather tell a prospective tenant their concept is wrong for a center than fill a bay and watch it go dark in eighteen months. A vacancy is a leasing problem; a failed tenant is a center problem.",
      "Availabilities, site plans and lease terms are handled directly — there is no layer between a prospective tenant and the people who own the decision.",
    ],
    deliverables: [
      { title: "Direct terms", description: "Lease negotiation with the ownership decision-maker, not an intermediary." },
      { title: "Site plans and availabilities", description: "Current plans, bay dimensions and delivery conditions on request." },
      { title: "Tenant mix strategy", description: "Placement that complements the anchor and the existing roster." },
      { title: "Outparcel disposition", description: "Ground lease or sale of pad sites to national and regional users." },
    ],
    faqs: [
      { q: "What size spaces are typically available?", a: "Shop bays across the portfolio generally run from roughly 1,000 to 5,000 square feet, with outparcels available at select centers. Current availabilities vary — contact leasing directly." },
      { q: "Do you lease to first-time or local operators?", a: "Yes. Local operators are often the strongest performers in a neighborhood center. The underwriting looks at the concept and the operator, not just the credit." },
      { q: "Who do I contact about space?", a: "Jon Mott handles leasing across the portfolio and can be reached at jmott@paradiseventuresinc.com or (727) 726-1115." },
    ],
    order: 3,
  },
  {
    slug: "property-management",
    name: "Property Management",
    tagline: "Assets held to an owner's standard.",
    summary:
      "Day-to-day management, maintenance, CAM administration and tenant relations across owned and third-party assets.",
    body: [
      "Paradise Ventures manages the centers it develops, and manages assets for third-party owners on the same terms. The distinction matters less than the standard: a center is managed as though the firm intends to hold it, because in most cases it does.",
      "Day-to-day management covers the unglamorous work that determines whether a center holds value — parking lot and lighting condition, landscaping, roof and HVAC maintenance, vendor contracts, and the response time when a tenant calls with a problem.",
      "It also covers the financial side: CAM reconciliation, budgeting, tax and insurance administration, collections, and owner reporting that reflects the actual condition of the asset rather than a summary of it.",
      "Deferred maintenance is the most expensive way to run a shopping center. It shows up first in tenant renewals, then in traffic, then in valuation — usually in that order, and usually years after the decision that caused it.",
    ],
    deliverables: [
      { title: "Site condition", description: "Lot, lighting, landscape and building envelope maintained on a schedule, not on complaint." },
      { title: "CAM administration", description: "Budgeting, billing and annual reconciliation handled accurately and on time." },
      { title: "Tenant relations", description: "A responsive point of contact for the operators paying the rent." },
      { title: "Owner reporting", description: "Financial and operational reporting that reflects real asset condition." },
    ],
    faqs: [
      { q: "Do you manage centers you did not develop?", a: "Yes. The firm manages assets for third-party owners, including centers it did not build." },
      { q: "Do you manage outside Florida?", a: "The firm's management footprint follows its development footprint. Contact the office to discuss a specific asset and location." },
    ],
    order: 4,
  },
  {
    slug: "acquisitions",
    name: "Acquisitions",
    tagline: "Value-add and net-leased retail.",
    summary:
      "Acquisition of grocery-anchored centers, value-add retail and net-leased assets across the Southeast and beyond.",
    body: [
      "Paradise Ventures acquires retail assets alongside its development pipeline. The acquisition criteria follow the same logic as the development criteria — the firm buys the kind of asset it would otherwise build.",
      "The primary targets are grocery-anchored neighborhood centers, value-add retail with a fixable problem, and net-leased single-tenant assets. What the firm brings to a value-add situation is the development capability: a center with an entitlement issue, a vacancy problem or deferred capital needs is a construction and leasing problem, and both functions are in-house.",
      "Sellers working with the firm deal with a principal. There is no acquisitions committee to satisfy after the fact, and the capital structure is arranged by the same person who signs the contract.",
      "Broker relationships are welcome and protected. If you are representing a grocery-anchored or net-leased retail asset in the Southeast, the firm is a direct buyer.",
    ],
    deliverables: [
      { title: "Principal decision-making", description: "Terms negotiated with the person who controls the capital." },
      { title: "Fast, honest diligence", description: "A clear answer early rather than a slow retrade late." },
      { title: "Value-add execution", description: "In-house construction and leasing applied to a fixable asset." },
      { title: "Broker protection", description: "Representation acknowledged and commissions honored." },
    ],
    faqs: [
      { q: "What asset types do you acquire?", a: "Grocery-anchored neighborhood centers, value-add retail, and net-leased single-tenant retail." },
      { q: "What is your target size range?", a: "It varies by opportunity and market. Bring the deal — the firm will give you a straight answer quickly." },
      { q: "Do you honor broker representation?", a: "Yes. Broker relationships are respected and protected." },
    ],
    order: 5,
  },
  {
    slug: "build-to-suit",
    name: "Build-to-Suit",
    tagline: "Single-tenant delivery, nationwide.",
    summary:
      "Turnkey single-tenant development for national retailers — site control, entitlement, construction and delivery to your specification.",
    body: [
      "Paradise Ventures has completed more than one hundred Walgreens stores across eight states, along with single-tenant projects for users in grocery, pharmacy, fuel, quick-service restaurant and banking.",
      "A build-to-suit program is a repeatability problem before it is a real estate problem. A retailer running a multi-site rollout needs each store delivered to the same prototype specification, on a predictable schedule, in markets that may have nothing in common with one another from an entitlement standpoint. The value a developer adds is absorbing that variability so the retailer's construction and operations calendar does not have to.",
      "The firm takes single-tenant assignments on a turnkey basis — site identification, control, entitlement, permitting, construction and delivery — or picks up an assignment mid-stream on a site the retailer already controls.",
      "Prototype drawings, brand standards and delivery conditions are treated as fixed. The site is what flexes.",
    ],
    deliverables: [
      { title: "Site sourcing", description: "Corners identified and controlled against your real estate criteria." },
      { title: "Entitlement risk absorbed", description: "Zoning, permitting and jurisdictional review carried by the developer." },
      { title: "Prototype fidelity", description: "Delivered to your drawings and brand standards, not a local interpretation of them." },
      { title: "Schedule certainty", description: "A delivery date tied to your opening calendar and held." },
    ],
    faqs: [
      { q: "Which retailers have you built for?", a: "Publix and Walgreens most extensively, along with users in grocery, pharmacy, fuel, quick-service restaurant and banking." },
      { q: "Can you take on a multi-market rollout?", a: "Yes. The firm has run multi-site programs across eight states." },
      { q: "We control the site already. Can you still help?", a: "Yes — that is a fee development assignment, and it is a common structure." },
    ],
    order: 6,
  },
];

export const sortedServices = [...services].sort((a, b) => a.order - b.order);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
