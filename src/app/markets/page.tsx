import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { markets } from "@/data/markets";
import { projectsByState } from "@/data/projects";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Markets We Build In",
  description:
    "Retail development across Florida, Georgia, South Carolina and the wider Southeast — market by market, submarket by submarket, from Tampa Bay to metro Atlanta.",
  path: "/markets",
  keywords: [
    "Florida retail development markets",
    "metro Atlanta shopping center developer",
    "Southeast commercial real estate developer",
  ],
});

export default function MarketsPage() {
  const counts = projectsByState();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Markets", path: "/markets" },
          ]),
          itemListSchema(
            markets.map((m) => ({ name: m.stateName, path: `/markets/${m.slug}` })),
            "Markets",
          ),
        )}
      />

      <PageHero
        eyebrow="Where We Build"
        title="Eight states. Two home markets. One approach."
        lede="Metro areas do not grow evenly — they extend along corridors, following highway capacity, school districts and developable land. Identifying the corridor matters more than identifying the metro."
        trail={[
          { name: "Home", path: "/" },
          { name: "Markets", path: "/markets" },
        ]}
      />

      <Section>
        <div className="shell space-y-4">
          {markets.map((market, i) => {
            const count = counts.find((c) => c.state === market.state)?.items.length ?? 0;
            return (
              <Reveal key={market.slug} delay={i * 70}>
                <Link
                  href={`/markets/${market.slug}`}
                  className="card card-lift group grid gap-8 p-8 md:grid-cols-[1fr_1.4fr] md:p-11"
                >
                  <div>
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-3xl transition-colors group-hover:text-accent">
                        {market.stateName}
                      </h2>
                      <span className="display-tight text-3xl text-accent/30 nums">
                        {String(count).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent/80">{market.headline}</p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 label text-mute">
                      {market.submarkets.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-ink-500">
                      {market.summary}
                    </p>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
                      {market.body[0]}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink">
                      Explore {market.stateName}
                      <svg viewBox="0 0 16 10" className="size-3" fill="none" aria-hidden>
                        <path
                          d="M10.5 1L15 5l-4.5 4M15 5H1"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Beyond the Core"
              title="The development footprint runs wider than the portfolio pages."
              lede="Paradise Ventures has developed across eight states, principally through its national single-tenant programmes. If your expansion plan takes you somewhere we have not built, that is a conversation worth having rather than a reason to stop."
            />
          </Reveal>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-accent">
              Discuss a market
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "See the portfolio", href: "/portfolio" }} />
    </>
  );
}
