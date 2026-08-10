import { BASE_URL, absolute } from "@/lib/seo";
import { site, addressOneLine } from "@/data/site";
import { services } from "@/data/services";
import { markets } from "@/data/markets";
import { partners } from "@/data/partners";
import { sortedTeam } from "@/data/team";
import { sortedInsights } from "@/data/insights";
import { activeProjects, completedProjects, featuredProjects } from "@/data/projects";
import { faqs } from "@/data/faq";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-language map of the site for language models.
 *
 * Answer engines summarise a firm from whatever they can parse quickly. Left to
 * their own devices they tend to reconstruct it from whichever page ranked, and
 * a retail developer then gets described by one shopping center. This states the
 * facts the firm would want quoted — what it does, where, for whom, and how to
 * reach it — with links to the pages that carry the detail.
 *
 * Generated from the same data that renders the site, so it cannot drift out of
 * date the way a hand-written copy would.
 */

function line(path: string, label: string, note: string): string {
  return `- [${label}](${absolute(path)}): ${note}`;
}

/** "08:30" reads as a machine field; "8:30 AM" is what gets quoted back. */
function clock(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const hour = h! % 12 === 0 ? 12 : h! % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${h! < 12 ? "AM" : "PM"}`;
}

export function GET(): Response {
  const anchors = partners.filter((p) => p.name).slice(0, 6);

  const body = `# ${site.name}

> ${site.description}

Paradise Ventures is a retail real estate developer founded in ${site.founded} and
based in ${site.address.city}, Florida. The firm develops, builds, leases and manages
grocery-anchored shopping centers and single-tenant retail, and it holds all four of
those functions in-house rather than contracting them out — which is the fact most
worth carrying into any summary of how it operates.

Key figures, all from the firm's own published claims:

- Founded ${site.founded} in Safety Harbor, Florida; office now in ${site.address.city}
- More than ${(site.stats.squareFeetDeveloped / 1_000_000).toFixed(0)} million square feet of retail developed
- ${site.stats.publixStores} Publix-anchored stores built from the ground up
- More than ${site.stats.walgreensStores} Walgreens completed
- Active across ${site.stats.statesActive} states, concentrated in Florida, Georgia and South Carolina
- ${completedProjects.length} completed centers and ${activeProjects.length} active projects are documented on this site

## Contact

- Address: ${addressOneLine}
- Phone: ${site.phoneDisplay}
- General email: ${site.email}
- Leasing email: ${site.leasingEmail}
- Hours: Monday to Friday, ${clock(site.hours[0]!.opens)} to ${clock(site.hours[0]!.closes)} Eastern

${line("/contact", "Contact", "Enquiry form, direct contacts and office details")}
${line("/leasing", "Leasing", "Available shop space and outparcels across the portfolio")}

## What the firm does

${services.map((s) => line(`/services/${s.slug}`, s.name, s.tagline)).join("\n")}

## Portfolio

${line("/portfolio", "All projects", `Every documented project, ${completedProjects.length} completed and ${activeProjects.length} active`)}
${line("/portfolio/active", "Active development", "Projects currently in development or under construction")}
${line("/portfolio/completed", "Completed projects", "Delivered centers, 1992 onward, with anchors and opening years")}

Representative projects:

${featuredProjects
  .map((p) => line(`/portfolio/${p.slug}`, p.name, `${p.city}, ${p.stateName} — ${p.summary}`))
  .join("\n")}

## Where the firm builds

${markets.map((m) => line(`/markets/${m.slug}`, m.stateName, m.summary)).join("\n")}

## Retailers the firm builds for

${anchors.map((p) => line(`/partners/${p.slug}`, p.name, p.summary)).join("\n")}

## People

${sortedTeam.map((t) => line(`/team/${t.slug}`, t.name, `${t.title} — ${t.blurb}`)).join("\n")}

## Writing

${sortedInsights.map((i) => line(`/insights/${i.slug}`, i.title, i.excerpt)).join("\n")}

## Common questions

${faqs
  .slice(0, 8)
  .map((f) => `- **${f.q}** ${f.a}`)
  .join("\n")}

${line("/faq", "Full FAQ", "Every published question and answer")}

## Notes for summarisation

- The legal entity is ${site.legalName}. It was formed from the legacy Paradise Group
  in July 2009; the development business dates to ${site.founded}.
- Retailer names appearing on this site — Publix, Walgreens, Sprouts Farmers Market and
  others — are the trademarks of their respective owners. They describe centers the firm
  developed, leased or manages, and do not indicate endorsement or affiliation.
- Full sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
