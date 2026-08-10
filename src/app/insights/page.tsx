import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { sortedInsights } from "@/data/insights";
import { formatDate } from "@/lib/util";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Field notes on retail real estate — site selection, entitlement timelines, outparcel strategy and why grocery-anchored centers have outlasted everything around them.",
  path: "/insights",
  keywords: [
    "retail real estate insights",
    "shopping center development advice",
    "grocery anchored retail analysis",
  ],
});

export default function InsightsPage() {
  const [lead, ...rest] = sortedInsights;

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          itemListSchema(
            sortedInsights.map((i) => ({ name: i.title, path: `/insights/${i.slug}` })),
            "Insights",
          ),
        )}
      />

      <PageHero
        eyebrow="Insights"
        title="What we've learned building five million square feet."
        lede="Not thought leadership. The specific, unglamorous things that decide whether a retail development works — written by the people who had to find them out the expensive way."
        trail={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />

      {/* Lead article */}
      <Section className="!pb-0">
        <div className="shell">
          <Reveal>
            <Link
              href={`/insights/${lead.slug}`}
              className="group grid gap-8 border border-line bg-paper p-8 transition-all duration-500 hover:border-accent/45 hover:shadow-[0_28px_60px_-32px_rgba(14,20,29,0.28)] md:grid-cols-[1fr_1.3fr] md:p-12"
            >
              <div>
                <div className="flex items-center gap-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  <span>Latest</span>
                  <span aria-hidden className="text-mute">·</span>
                  <span className="text-mute">{lead.category}</span>
                </div>
                <h2 className="mt-5 text-(length:--text-display-sm) transition-colors group-hover:text-accent">
                  {lead.title}
                </h2>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-[1.0625rem] leading-relaxed text-ink-500">{lead.excerpt}</p>
                <div className="mt-8 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.14em] text-mute">
                  <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                  <span aria-hidden>·</span>
                  <span className="nums">{lead.readingTime} min read</span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Remaining articles */}
      <Section>
        <div className="shell">
          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col bg-paper p-8 transition-colors duration-400 hover:bg-sand"
                >
                  <div className="flex items-center gap-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    <span>{post.category}</span>
                    <span aria-hidden className="text-mute">·</span>
                    <span className="text-mute nums">{post.readingTime} min</span>
                  </div>
                  <h2 className="mt-4 text-xl transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.date}
                    className="mt-7 text-[0.6875rem] uppercase tracking-[0.14em] text-mute"
                  >
                    {formatDate(post.date)}
                  </time>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Got a question we haven't written about?"
        body="Ask it directly. We would rather answer a specific question about your site than write another general article."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
