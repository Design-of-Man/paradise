import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, Stat, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { SiteVisual } from "@/components/SiteVisual";
import { site } from "@/data/site";
import { sortedTeam } from "@/data/team";
import { projectsByDecade } from "@/data/projects";
import { pageMeta, jsonLdGraph, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About the Firm",
  description:
    "Founded in Safety Harbor, Florida in 1988, Paradise Ventures has developed more than five million square feet of retail across eight states — including 52 Publix stores and over 100 Walgreens.",
  path: "/about",
  keywords: [
    "Paradise Ventures history",
    "Florida retail developer since 1988",
    "commercial real estate development company St. Petersburg",
  ],
});

const milestones = [
  {
    year: "1988",
    title: "The firm is founded",
    body: "Michael P. Connor founds Paradise Development Group, Inc. in Safety Harbor, Florida — Pinellas County, the same market the firm still operates from today.",
  },
  {
    year: "1992",
    title: "First centers delivered",
    body: "Edgewater Commons opens, followed by Southpointe Commons in DeLand — establishing the grocery-anchored neighborhood center as the firm's core format.",
  },
  {
    year: "1990s",
    title: "The Walgreens program begins",
    body: "The firm builds a national single-tenant practice that will eventually deliver more than one hundred stores across eight states.",
  },
  {
    year: "1999",
    title: "South Florida",
    body: "Sawgrass Center opens in Broward County, proving the firm's capacity to execute in dense, fully built-out infill markets.",
  },
  {
    year: "2000",
    title: "Expansion into Georgia",
    body: "Paradise Crossing opens in Douglasville, beginning two decades of development along metro Atlanta's principal growth corridors.",
  },
  {
    year: "2008",
    title: "Chuck Ernst joins as CFO",
    body: "The finance and operations function is built out to support a multi-state development platform.",
  },
  {
    year: "2009",
    title: "Paradise Ventures, Inc. is formed",
    body: "The real estate venture is formed from the legacy Paradise Group in July 2009, carrying the portfolio and the platform forward.",
  },
  {
    year: "2017",
    title: "Engineering-led development",
    body: "Brad Karns joins from the civil engineering industry, bringing entitlement and site engineering in-house at the front of every project.",
  },
  {
    year: "Today",
    title: "Five million square feet on",
    body: "The firm continues to develop, build, lease and manage grocery-anchored retail across Florida, Georgia and the Southeast.",
  },
];

export default function AboutPage() {
  const decades = projectsByDecade();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />

      <PageHero
        eyebrow="About the Firm"
        title="Thirty-eight years in one business, from one place."
        lede="Paradise Ventures has developed retail from the same Pinellas County market since 1988 — through multiple growth cycles, two significant downturns, and the transformation of nearly every trade area we work in. The office is now in downtown St. Petersburg, in a building the firm owns."
        trail={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Narrative */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <div className="prose-pv">
              <p className="!text-[1.1875rem] !leading-relaxed !text-ink">
                Paradise Ventures specialises in all areas of retail real estate —
                in-house development, construction management, leasing, property
                management, and everything in between.
              </p>
              <p>
                Over the last three and a half decades the firm has earned a
                reputation in commercial real estate in Florida and across the
                nation. The portfolio comprises more than five million square feet
                of retail developed for major corporations across grocery,
                pharmacy, fuel, quick-service restaurant and banking.
              </p>
              <p>
                As one of the leading developers of Publix shopping centers and
                Walgreens stores nationwide, the firm has completed fifty-two
                Publix stores from the ground up and more than one hundred
                Walgreens across eight states.
              </p>
              <h2>Why the structure matters</h2>
              <p>
                A typical retail development passes through four or five separate
                organisations between raw land and grand opening — a land broker,
                an entitlement consultant, a developer, an owner's
                representative, a property manager. Each handoff introduces
                someone who was not in the room when the previous set of
                assumptions was made.
              </p>
              <p>
                Those seams are where schedules slip. Paradise holds all of those
                functions internally, which means a field question during
                construction reaches someone who knows the pro forma, the
                entitlement conditions and the lease obligations personally.
                Decisions that would otherwise take a week take an afternoon.
              </p>
              <h2>What we will not do</h2>
              <p>
                The firm does not begin vertical construction on speculative
                anchor demand. The grocery lease is signed before site work
                starts. That single discipline is the reason the portfolio has
                held its occupancy through every cycle since 1988.
              </p>
              <p>
                We would also rather tell a landowner their site cannot host a
                retail development than spend eighteen months proving it. The
                honest answer early is worth considerably more to both parties
                than the optimistic one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-xl border border-line bg-sand">
              <SiteVisual seed="about-paradise-ventures" className="aspect-4/3 w-full" />
              <div className="grid grid-cols-2 gap-y-8 p-8">
                <Stat value={`${site.stats.yearsOperating}`} label="Years Operating" />
                <Stat value="5M+" label="Sq Ft Developed" />
                <Stat value="52" label="Publix Built" />
                <Stat value="100+" label="Walgreens" />
                <Stat value="8" label="States" />
                <Stat value="4" label="Disciplines In-House" />
              </div>
              <div className="border-t border-line p-8">
                <p className="text-sm leading-relaxed text-ink-500">
                  Headquartered at {site.address.street}, {site.address.city},{" "}
                  {site.address.region} — in the Tampa Bay market, since 1988.
                </p>
                <div className="mt-5">
                  <ArrowLink href="/contact">Visit or call the office</ArrowLink>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="History"
              title="How the firm was built."
              lede="A record of the decisions and hires that shaped the platform."
            />
          </Reveal>

          <ol className="mt-16 grid gap-4 md:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year + m.title} delay={(i % 3) * 70}>
                <li className="rounded-xl flex h-full flex-col bg-ink p-8">
                  <span className="display-tight text-3xl text-accent nums">{m.year}</span>
                  <h3 className="mt-4 text-lg text-white">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{m.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Portfolio by decade */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="The Record"
              title="Delivered, decade by decade."
              lede="A selection of the centers documented in the portfolio."
            />
          </Reveal>

          <div className="mt-14 space-y-4">
            {decades.map((group) => (
              <Reveal key={group.decade}>
                <div className="rounded-xl grid gap-6 bg-sand p-8 md:grid-cols-[8rem_1fr] md:items-start md:p-10">
                  <h3 className="display-tight text-3xl text-accent nums">{group.decade}</h3>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {group.items.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/portfolio/${p.slug}`}
                          className="link-underline text-[0.9375rem] text-ink-500 transition-colors hover:text-ink"
                        >
                          {p.name}
                          <span className="text-mute">
                            {" "}
                            — {p.city}, {p.state}
                          </span>
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

      {/* Leadership */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Leadership"
                title="The people accountable for it."
                className="!max-w-2xl"
              />
              <ArrowLink href="/team">Full team profiles</ArrowLink>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sortedTeam.map((m, i) => (
              <Reveal key={m.slug} delay={i * 70}>
                <Link
                  href={`/team/${m.slug}`}
                  className="card card-lift group flex h-full flex-col p-7"
                >
                  <h3 className="text-lg transition-colors group-hover:text-accent">{m.name}</h3>
                  <p className="mt-1.5 label text-accent">
                    {m.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{m.blurb}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Three decades of retail, available to your project."
        secondary={{ label: "See the portfolio", href: "/portfolio" }}
      />
    </>
  );
}
