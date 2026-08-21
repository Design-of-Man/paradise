import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";
import { activeProjects, completedProjects } from "@/data/projects";
import { markets } from "@/data/markets";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Active Development & Site Criteria",
  description:
    "What Paradise Ventures is actively developing and acquiring — plus the site criteria we underwrite against. Bring us a corner and you will get a straight answer quickly.",
  path: "/portfolio/active",
  keywords: [
    "retail development site criteria",
    "land wanted retail developer Florida",
    "grocery anchored development sites",
    "submit a site to a developer",
  ],
});

const criteria = [
  {
    title: "Trade area",
    body: "Demonstrated household growth, or existing households visibly driving fifteen-plus minutes for a full grocery trip. Leakage is the clearest signal a market is ready.",
  },
  {
    title: "Access",
    body: "Full-movement access from a major roadway, or a median configuration that does not cut the trade area in half. Right-in / right-out only is rarely workable for a grocery anchor.",
  },
  {
    title: "Visibility",
    body: "Frontage and sightlines from the arterial. Corner positions at signalised intersections are strongly preferred.",
  },
  {
    title: "Size",
    body: "Sufficient developable acreage after stormwater retention and setbacks — the pond has to fit before the building does.",
  },
  {
    title: "Utilities",
    body: "Sewer capacity available or extendable at a cost the project can carry. Capacity is the constraint that most often ends an otherwise strong site.",
  },
  {
    title: "Defensibility",
    body: "Limited qualifying corners nearby. A trade area that supports one grocery center rarely supports two — position matters more than raw demand.",
  },
];

const looking = [
  {
    title: "Land for development",
    body: "Sites suited to grocery-anchored neighborhood centers or freestanding single-tenant retail, in Florida, Georgia and the wider Southeast.",
    href: "/services/development",
    cta: "How we develop",
  },
  {
    title: "Build-to-suit assignments",
    body: "National and regional retailers running multi-site rollouts who need a developer to absorb site sourcing and entitlement risk.",
    href: "/services/build-to-suit",
    cta: "Build-to-suit",
  },
  {
    title: "Acquisitions",
    body: "Grocery-anchored centers, value-add retail with a fixable problem, and net-leased single-tenant assets. Broker relationships protected.",
    href: "/services/acquisitions",
    cta: "Acquisition criteria",
  },
];

export default function ActivePage() {
  const recent = completedProjects.slice(-3);

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Active Development", path: "/portfolio/active" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Currently Pursuing"
        title="What we are building, buying, and looking for."
        lede="We are actively pursuing development sites, build-to-suit assignments and acquisitions across Florida, Georgia and the Southeast. Here is exactly what we underwrite against."
        trail={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Active Development", path: "/portfolio/active" },
        ]}
      />

      <div className="border-b border-line bg-paper">
        <div className="shell flex flex-wrap gap-x-8 gap-y-3 py-5 text-[0.8125rem] font-medium">
          <Link href="/portfolio" className="link-underline text-ink-500 hover:text-ink">
            All Projects
          </Link>
          <Link href="/portfolio/completed" className="link-underline text-ink-500 hover:text-ink">
            Completed
          </Link>
          <span className="text-accent">Active Development</span>
        </div>
      </div>

      {/* Live pipeline, when populated */}
      {activeProjects.length > 0 && (
        <Section>
          <div className="shell">
            <Reveal>
              <SectionHeading eyebrow="In Progress" title="Currently under way." />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activeProjects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* What we're looking for */}
      <Section>
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Bring Us"
              title="Three ways to start a project with us."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {looking.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card flex h-full flex-col p-8 md:p-9">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                  <div className="mt-7">
                    <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Site criteria */}
      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Site Criteria"
              title="What we look for before we look at price."
              lede="Demographics establish whether a trade area can support a store. These six conditions determine whether a specific parcel can host one."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {criteria.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <div className="rounded-xl h-full bg-ink p-8">
                  <span className="font-display text-sm text-accent nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-xl border border-line-dark p-8 md:p-10">
              <h3 className="text-2xl text-white">Have a site?</h3>
              <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-white/60">
                Send the address or parcel number, approximate acreage, current
                zoning, and any survey or site plan you have. You will get a
                straight answer on whether it can host a retail development —
                including if the answer is no. We would rather tell you early
                than spend eighteen months proving it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?topic=site" className="btn btn-accent">
                  Submit a site
                </Link>
                <a href={`tel:${site.phone}`} className="btn btn-on-dark nums">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Target markets */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Target Markets"
              title="Where we are actively looking."
              lede="Florida and Georgia are home, but geography follows the retailer's expansion plan and the quality of the site."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {markets.map((m, i) => (
              <Reveal key={m.slug} delay={i * 70}>
                <Link
                  href={`/markets/${m.slug}`}
                  className="card-outline card-lift group flex h-full flex-col p-8"
                >
                  <h3 className="text-2xl transition-colors group-hover:text-accent">
                    {m.stateName}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{m.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-4 label text-mute">
                    {m.submarkets.slice(0, 4).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Recently delivered */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Track Record"
                title="Recently delivered."
                className="!max-w-2xl"
              />
              <ArrowLink href="/portfolio/completed">All completed projects</ArrowLink>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Bring us a corner."
        body="Land, a build-to-suit programme, or an asset for sale — you will deal directly with the people who make the decision, and you will hear back quickly."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Acquisition criteria", href: "/services/acquisitions" }}
      />
    </>
  );
}
