import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, Stat, CtaBand, Reveal } from "@/components/ui";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { JsonLd } from "@/components/JsonLd";
import { projects, projectsByState } from "@/data/projects";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Portfolio",
  description:
    "More than five million square feet of retail developed across eight states — Publix-anchored centers, Walgreens stores and single-tenant retail throughout Florida, Georgia and the Southeast.",
  path: "/portfolio",
  keywords: [
    "Publix anchored shopping centers",
    "retail development portfolio Florida",
    "Paradise Shoppes",
    "Georgia shopping center developer projects",
  ],
});

export default function PortfolioPage() {
  const byState = projectsByState();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          itemListSchema(
            projects.map((p) => ({ name: p.name, path: `/portfolio/${p.slug}` })),
            "Paradise Ventures Portfolio",
          ),
        )}
      />

      <PageHero
        eyebrow="The Work"
        title="Five million square feet, and the trade areas to prove it."
        lede="A selection of the centers Paradise Ventures has developed since 1988. Many have held their anchors and their occupancy for more than two decades."
        trail={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]}
      >
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 border-t border-line-dark pt-10 sm:grid-cols-4">
          <div>
            <dt className="sr-only">Square feet developed</dt>
            <dd>
              <Stat tone="light" value="5M+" label="Sq Ft Developed" />
            </dd>
          </div>
          <div>
            <dt className="sr-only">States</dt>
            <dd>
              <Stat tone="light" value={String(site.stats.statesActive)} label="States" />
            </dd>
          </div>
          <div>
            <dt className="sr-only">Publix stores</dt>
            <dd>
              <Stat tone="light" value="52" label="Publix Built" />
            </dd>
          </div>
          <div>
            <dt className="sr-only">Walgreens stores</dt>
            <dd>
              <Stat tone="light" value="100+" label="Walgreens" />
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* Sub-navigation */}
      <div className="border-b border-line bg-paper">
        <div className="shell flex flex-wrap gap-x-8 gap-y-3 py-5 text-[0.8125rem] font-medium">
          <span className="text-accent">All Projects</span>
          <Link href="/portfolio/completed" className="link-underline text-ink-500 hover:text-ink">
            Completed
          </Link>
          <Link href="/portfolio/active" className="link-underline text-ink-500 hover:text-ink">
            Active Development
          </Link>
          <Link href="/markets" className="link-underline text-ink-500 hover:text-ink">
            By Market
          </Link>
          <Link href="/partners" className="link-underline text-ink-500 hover:text-ink">
            By Anchor
          </Link>
        </div>
      </div>

      <Section>
        <div className="shell">
          <PortfolioGrid projects={projects} />
        </div>
      </Section>

      {/* By state */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="By Market"
              title="Where the portfolio sits."
              lede="Florida and Georgia carry the bulk of the work. The full development footprint runs to eight states."
            />
          </Reveal>

          <div className="mt-14 space-y-px bg-line">
            {byState.map((group) => (
              <Reveal key={group.state}>
                <div className="grid gap-6 bg-sand p-8 md:grid-cols-[14rem_1fr] md:items-start md:p-10">
                  <div>
                    <h3 className="text-2xl">{group.stateName}</h3>
                    <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mute nums">
                      {group.items.length}{" "}
                      {group.items.length === 1 ? "project" : "projects"}
                    </p>
                  </div>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {group.items.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/portfolio/${p.slug}`}
                          className="link-underline text-[0.9375rem] text-ink-500 transition-colors hover:text-ink"
                        >
                          {p.name}
                          <span className="text-mute"> — {p.city}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Looking for space in one of these centers?"
        body="Availabilities, site plans and lease terms come straight from the people who own the decision."
        primary={{ label: "Leasing enquiries", href: "/leasing" }}
        secondary={{ label: "Contact the office", href: "/contact" }}
      />
    </>
  );
}
