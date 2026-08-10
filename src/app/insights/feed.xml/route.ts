import { BASE_URL, absolute } from "@/lib/seo";
import { site } from "@/data/site";
import { sortedInsights } from "@/data/insights";

export const dynamic = "force-static";

/**
 * RSS 2.0 feed for /insights.
 *
 * Feeds remain one of the few machine-readable routes into a site that every
 * aggregator, reader and answer engine already understands, and Bing in
 * particular still treats a feed as a discovery signal for new content. The
 * `atom:link` self-reference is required for a valid feed and is what stops
 * readers guessing at the canonical feed URL.
 */

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Body paragraphs, with the markdown-lite subheadings promoted to real ones. */
function toHtml(body: string[]): string {
  return body
    .map((p) =>
      p.startsWith("## ") ? `<h2>${escapeXml(p.slice(3))}</h2>` : `<p>${escapeXml(p)}</p>`,
    )
    .join("");
}

export function GET(): Response {
  const items = sortedInsights
    .map((i) => {
      const url = absolute(`/insights/${i.slug}`);
      return `    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${i.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(i.category)}</category>
      <dc:creator>${escapeXml(i.author)}</dc:creator>
      <description>${escapeXml(i.excerpt)}</description>
      <content:encoded><![CDATA[${toHtml(i.body)}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const latest = sortedInsights[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(site.name)} — Insights</title>
    <link>${absolute("/insights")}</link>
    <atom:link href="${absolute("/insights/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>Field notes on retail real estate development, leasing and construction from ${escapeXml(site.shortName)}.</description>
    <language>en-US</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(site.legalName)}</copyright>
    <managingEditor>${site.email} (${escapeXml(site.shortName)})</managingEditor>
${latest ? `    <lastBuildDate>${new Date(`${latest.date}T12:00:00Z`).toUTCString()}</lastBuildDate>` : ""}
    <generator>${BASE_URL}</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
