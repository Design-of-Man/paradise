/**
 * Site-wide FAQ. Powers /faq and its FAQPage JSON-LD, which is eligible for
 * rich results and frequently surfaces in AI-generated answers.
 */

export interface FaqItem {
  q: string;
  a: string;
  group: string;
}

export const faqs: FaqItem[] = [
  {
    group: "The Firm",
    q: "What does Paradise Ventures do?",
    a: "Paradise Ventures is a retail real estate developer. The firm handles development, acquisitions, construction management, leasing and property management in-house — from raw land through grand opening and ongoing operation of the asset.",
  },
  {
    group: "The Firm",
    q: "How long has Paradise Ventures been in business?",
    a: "The firm was founded in 1988 in Safety Harbor, Florida, and has operated from the same market ever since. Paradise Ventures, Inc. was formed from the legacy Paradise Group in July 2009.",
  },
  {
    group: "The Firm",
    q: "How much has Paradise Ventures built?",
    a: "More than five million square feet of retail across eight states, including fifty-two Publix stores built from the ground up and more than one hundred Walgreens.",
  },
  {
    group: "The Firm",
    q: "Where is Paradise Ventures located?",
    a: "The office is at 2901 Rigsby Lane, Safety Harbor, Florida 34695, in the Tampa Bay area. The phone number is (727) 726-1115.",
  },
  {
    group: "Development",
    q: "What types of projects do you develop?",
    a: "Primarily grocery-anchored neighborhood shopping centers, along with single-tenant build-to-suit retail for users in pharmacy, fuel, quick-service restaurant and banking.",
  },
  {
    group: "Development",
    q: "I own land. Will you look at my site?",
    a: "Yes. Send the address or parcel number, approximate acreage, current zoning, and any site plan or survey you have. You will get a straight answer on whether it can host a retail development — including if the answer is no.",
  },
  {
    group: "Development",
    q: "What makes a site work for a grocery anchor?",
    a: "Household growth in the trade area, full-movement access from a major roadway, visibility from the arterial, sufficient acreage after stormwater retention, available sewer capacity, and truck circulation that does not conflict with customer parking. Demographics establish whether a trade area can support a store; the site conditions determine whether a particular parcel can host one.",
  },
  {
    group: "Development",
    q: "How long does a retail development take?",
    a: "For a project requiring rezoning, twelve to twenty-four months from site control to construction commencement is a reasonable planning assumption, with construction following. A by-right site with no rezoning requirement moves considerably faster. Every jurisdiction is different.",
  },
  {
    group: "Development",
    q: "Do you develop outside Florida and Georgia?",
    a: "Yes. The firm has developed across eight states. Florida and Georgia carry the largest share of the portfolio, but geography follows the retailer's expansion plan and the quality of the site.",
  },
  {
    group: "Leasing",
    q: "How do I lease space in one of your centers?",
    a: "Contact Jon Mott at jmott@paradiseventuresinc.com or call (727) 726-1115. You will deal directly with the people who own the leasing decision.",
  },
  {
    group: "Leasing",
    q: "What size spaces are available?",
    a: "Shop bays across the portfolio generally run from roughly 1,000 to 5,000 square feet, with outparcels and pad sites available at select centers. Availability changes — contact leasing for current space.",
  },
  {
    group: "Leasing",
    q: "Do you lease to local operators, or only national tenants?",
    a: "Both. Local operators are frequently the strongest performers in a neighborhood center. The underwriting looks at the concept and the operator, not only the credit.",
  },
  {
    group: "Leasing",
    q: "What does it cost to lease space?",
    a: "Rent varies by center, market, bay size and position. Terms are discussed directly rather than published, because the right number depends on the specific space and use.",
  },
  {
    group: "Acquisitions & Investment",
    q: "What kinds of properties do you acquire?",
    a: "Grocery-anchored neighborhood centers, value-add retail with a fixable problem, and net-leased single-tenant retail. The firm buys the kind of asset it would otherwise build.",
  },
  {
    group: "Acquisitions & Investment",
    q: "Do you work with brokers?",
    a: "Yes. Broker relationships are welcome, respected and protected.",
  },
  {
    group: "Acquisitions & Investment",
    q: "Do you partner with equity investors?",
    a: "Yes. The firm develops on its own balance sheet and alongside equity partners, and structures projects as build-to-suits, joint ventures or fee development assignments depending on what the project requires.",
  },
  {
    group: "Property Management",
    q: "Do you manage properties you did not develop?",
    a: "Yes. The firm manages assets for third-party owners, including centers it did not build, to the same standard it applies to its own.",
  },
  {
    group: "Property Management",
    q: "I am a tenant with a maintenance issue. Who do I call?",
    a: "Call (727) 726-1115 during business hours, or email info@paradiseventuresinc.com. Include the center name and your suite number.",
  },
];

export const faqGroups = [...new Set(faqs.map((f) => f.group))];
