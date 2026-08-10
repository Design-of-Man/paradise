/**
 * Leadership profiles. Bios are drawn from Paradise Ventures' published team
 * page; see CONTENT-TODO.md for the roster entries still awaiting client copy.
 */

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  /** Short line used on the team grid card. */
  blurb: string;
  /** Body paragraphs for the profile page. */
  bio: string[];
  email?: string;
  /**
   * Set once a headshot exists at /public/images/team/<slug>.jpg.
   * Until then `TeamPortrait` renders a monogram tile instead, so a missing
   * file can never surface as a broken image.
   */
  hasPhoto?: boolean;
  education?: string[];
  affiliations?: string[];
  boards?: string[];
  joined?: number;
  order: number;
}

export const team: TeamMember[] = [
  {
    slug: "michael-connor",
    name: "Michael P. Connor",
    title: "President & Chief Executive Officer",
    blurb:
      "Founded the firm in 1988 and leads strategy, capital structure and the national retail relationships behind it.",
    joined: 1988,
    bio: [
      "Michael P. Connor founded Paradise Development Group, Inc. in Safety Harbor, Florida in 1988, and leads all aspects of the firm's strategic planning. What began as a single-market development company has become one of the country's most prolific developers of grocery-anchored retail.",
      "In addition to cultivating and managing the firm's key retail relationships, Mike oversees the financing and capital structures of Paradise's projects nationwide and manages the company's equity partner relationships. Those two responsibilities are deliberately held together: the firm's ability to commit to a retailer's timeline depends directly on capital being arranged before it is needed, not after.",
      "Mike received his Juris Doctorate from Stetson University and a Bachelor of Arts in Finance from the University of Notre Dame. He is a member of the International Council of Shopping Centers and the Florida Bar, and is a licensed Florida Real Estate Broker.",
      "Beyond the firm, Mike has served on the boards of Ruth Eckerd Hall, the Morton Plant Mease Hospitals Foundation, and the Notre Dame Engineering Advisory Council.",
    ],
    education: [
      "Juris Doctorate, Stetson University College of Law",
      "Bachelor of Arts, Finance, University of Notre Dame",
    ],
    affiliations: [
      "International Council of Shopping Centers (ICSC)",
      "The Florida Bar",
      "Licensed Florida Real Estate Broker",
    ],
    boards: [
      "Ruth Eckerd Hall",
      "Morton Plant Mease Hospitals Foundation",
      "Notre Dame Engineering Advisory Council",
    ],
    order: 1,
  },
  {
    slug: "chuck-ernst",
    name: "Chuck Ernst",
    title: "Chief Financial Officer",
    blurb:
      "Joined in 2008 as CFO and oversees the operations of Paradise Ventures, Inc.",
    joined: 2008,
    bio: [
      "Chuck Ernst joined The Paradise Group in 2008 as Chief Financial Officer and now oversees the operations of Paradise Ventures, Inc. — the real estate venture formed from the legacy Paradise Group in July 2009.",
      "Chuck's remit spans the financial and operational spine of the business: project accounting across a multi-state portfolio, lender and equity partner reporting, treasury, and the internal controls that let a development team move quickly without losing track of where a project actually stands.",
      "In a development business, the finance function is not a back office. Draw schedules, cost-to-complete reporting and construction loan administration are the mechanisms by which a project either holds its delivery date or slips it.",
    ],
    order: 2,
  },
  {
    slug: "brad-karns",
    name: "Brad Karns",
    title: "Director of Development",
    blurb:
      "Civil engineer by training. Manages every project from conception through construction commencement.",
    joined: 2017,
    bio: [
      "Brad Karns graduated with a Bachelor of Science in Civil Engineering from the University of South Florida in 2007. He began his career at Foresite Group, Inc. in Tampa in 2008, where he built extensive experience in site planning, civil engineering design, entitlements and jurisdictional permitting, budgeting, and project management for commercial retail projects and national tenants throughout the Southeast.",
      "In 2017, after more than eight years in the civil engineering industry, Brad joined Paradise Ventures. He manages all projects from conception through construction commencement — the phase where a deal is either de-risked or quietly lost.",
      "Having an engineer run entitlement rather than hand it to a consultant changes the economics of a site. Stormwater, access permitting, utility capacity and jurisdictional review are the four items most likely to kill a retail development, and all four are engineering problems before they are legal ones.",
    ],
    education: [
      "Bachelor of Science, Civil Engineering, University of South Florida (2007)",
    ],
    order: 3,
  },
  {
    slug: "jon-mott",
    name: "Jon Mott",
    title: "Leasing",
    blurb:
      "Leads leasing across the portfolio, from anchor coordination to shop-space placement.",
    email: "jmott@paradiseventuresinc.com",
    bio: [
      "Jon Mott leads leasing across the Paradise Ventures portfolio, working with national, regional and local tenants to place shop space and outparcels alongside the firm's grocery and pharmacy anchors.",
      "Leasing a Paradise center is a different conversation than leasing unanchored strip retail. The anchor generates the traffic; the leasing work is about assembling a tenant mix that captures it — and about being straight with a prospective tenant when their concept is not the right fit for a given trade area.",
      "Jon is the direct contact for availabilities, site plans and lease terms across the portfolio.",
    ],
    order: 4,
  },
];

export const sortedTeam = [...team].sort((a, b) => a.order - b.order);

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
