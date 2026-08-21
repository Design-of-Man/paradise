import Link from "next/link";
import type { Metadata } from "next";

import {
  Section,
  Panel,
  SectionHeading,
  Stat,
  Pill,
  CtaBand,
  Reveal,
  ArrowLink,
} from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";
import { SkylineHero } from "@/components/SkylineHero";

import { site } from "@/data/site";
import { sortedServices } from "@/data/services";
import { featuredProjects, projects, projectsByState } from "@/data/projects";
import { markets } from "@/data/markets";
import { sortedTeam } from "@/data/team";
import { sortedInsights } from "@/data/insights";
import { faqs } from "@/data/faq";
import { formatNumber, formatDate } from "@/lib/util";
import { pageMeta, jsonLdGraph, faqSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Retail Real Estate Development in Florida & the Southeast`,
  description:
    "Paradise Ventures develops, builds, leases and manages retail and mixed-use property across Florida and the Southeast. 5,000,000+ square feet delivered since 1988 — including 52 Publix stores and 100+ Walgreens.",
  path: "/",
  keywords: [
    "retail real estate developer Florida",
    "Publix shopping center developer",
    "Walgreens build to suit",
    "grocery anchored shopping center development",
    "Tampa Bay commercial developer",
  ],
});

/**
 * The four things holding every function in one firm actually buys a client.
 * Framed as outcomes rather than as capabilities — the capabilities are the
 * services list further down the page.
 */
const outcomes = [
  {
    n: "01",
    t: "Anchor-first underwriting",
    d: "The grocery lease is signed before site work begins. We do not build on speculative anchor demand, and we do not ask a lender to.",
  },
  {
    n: "02",
    t: "Engineering-led entitlement",
    d: "Stormwater, access, utility capacity and circulation are tested during feasibility — not discovered after approval.",
  },
  {
    n: "03",
    t: "In-house construction",
    d: "Field decisions reach someone who knows the pro forma and the lease obligations personally. Days, not weeks.",
  },
  {
    n: "04",
    t: "We stay after opening",
    d: "We manage what we build, to the standard of an owner who intends to hold it — because usually we do.",
  },
];

export default function HomePage() {
  const stats = site.stats;

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          faqSchema(faqs.slice(0, 6)),
          itemListSchema(
            featuredProjects.map((p) => ({ name: p.name, path: `/portfolio/${p.slug}` })),
            "Featured Projects",
          ),
        )}
      />

      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <SkylineHero
        eyebrow={`Established ${site.founded} · ${site.address.city}, Florida`}
        headline="We build more than buildings."
        cta={{ label: "Start a conversation", href: "/contact" }}
        coords={site.geo}
      />

      {/* ---------------------------------------------------------- */}
      {/* What we do                                                  */}
      {/*                                                             */}
      {/* Ink-toned and full-bleed so it reads as a continuation of    */}
      {/* the sunset rather than an abrupt return to white. Carries    */}
      {/* the lede and the headline figures the hero no longer holds.  */}
      {/* ---------------------------------------------------------- */}
      <Section tone="ink" className="!py-20 md:!py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_1.4fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow !text-accent-bright">What we do</p>
            <p className="mt-6 text-xl leading-relaxed text-white/75 md:text-2xl md:leading-[1.45]">
              Paradise Ventures develops, constructs, leases and manages retail
              and mixed-use property across Florida and the Southeast — every
              function held in-house, from the first site visit to the day the
              doors open.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/portfolio" tone="light">
                View the portfolio
              </ArrowLink>
              <ArrowLink href="/leasing" tone="light">
                Space available now
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-dark pt-10 sm:grid-cols-4">
              <div>
                <dt className="sr-only">Square feet developed</dt>
                <dd>
                  <Stat
                    tone="light"
                    value={`${(stats.squareFeetDeveloped / 1_000_000).toFixed(0)}M+`}
                    label="Sq Ft Developed"
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Publix stores built</dt>
                <dd>
                  <Stat tone="light" value={String(stats.publixStores)} label="Publix Stores Built" />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Walgreens stores completed</dt>
                <dd>
                  <Stat tone="light" value={`${stats.walgreensStores}+`} label="Walgreens Completed" />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Years in business</dt>
                <dd>
                  <Stat tone="light" value={String(stats.yearsOperating)} label="Years Building" />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Outcomes — four tinted cards                                */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
              <SectionHeading
                eyebrow="The Firm"
                title="One team. Every phase. No handoffs."
              />
              <p className="text-[1.0625rem] leading-relaxed text-ink-500">
                Most retail developments pass through four or five organisations
                between raw land and grand opening. Every one of those handoffs
                is a place where a schedule slips and accountability blurs.
                Paradise Ventures holds development, construction management,
                leasing and property management under one roof — so the people
                who commit to a delivery date are the same people responsible
                for holding it.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, i) => (
              <Reveal key={item.n} delay={i * 70} className="h-full">
                <div className="card card-lift flex h-full flex-col p-8">
                  <span className="label-sm text-accent nums">{item.n}</span>
                  <h3 className="mt-8 text-xl">{item.t}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/about">About the firm</ArrowLink>
              <ArrowLink href="/process">See our process</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Services — a numbered index                                 */}
      {/* ---------------------------------------------------------- */}
      <Section tone="sand" className="!py-20 md:!py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Services</p>
              <h2 className="display-tight mt-6 text-(length:--text-display-sm)">
                Six disciplines,<br />one roof.
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-500">
                Take one service or all of them. Most clients start with a single
                question and end up handing us the whole project.
              </p>
              <Link href="/services" className="btn btn-primary mt-8">
                See all services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="border-t border-sand-deep">
              {sortedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-6 border-b border-sand-deep py-7 transition-colors hover:border-ink md:gap-10"
                  >
                    <span className="label-sm w-6 shrink-0 text-mute nums transition-colors group-hover:text-accent">
                      {String(service.order).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="display-tight block text-2xl transition-transform duration-400 ease-(--ease-out-soft) group-hover:translate-x-1 md:text-3xl">
                        {service.name}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-ink-500">
                        {service.tagline}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-full bg-paper text-ink transition-colors group-hover:bg-accent-bright"
                    >
                      <svg viewBox="0 0 16 10" className="size-3" fill="none">
                        <path
                          d="M10.5 1L15 5l-4.5 4M15 5H1"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Anchors — dark panel                                        */}
      {/* ---------------------------------------------------------- */}
      <Panel>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Anchor Partners"
              title="The retailers we build for keep coming back."
              lede="Fifty-two Publix stores from the ground up. More than one hundred Walgreens across eight states. Repeat development compounds — prototype knowledge, delivery standards and working relationships take years to build and remove risk from every project that follows."
            />
            <div className="mt-10">
              <ArrowLink href="/partners" tone="light">
                All anchor partners and sectors
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "52", l: "Publix Stores", h: "/partners/publix" },
                { v: "100+", l: "Walgreens", h: "/partners/walgreens" },
                { v: "8", l: "States", h: "/markets" },
                { v: `${formatNumber(projects.length)}`, l: "Centers Profiled", h: "/portfolio" },
              ].map((s) => (
                <Link
                  key={s.l}
                  href={s.h}
                  className="card-dark card-lift group p-8 md:p-10"
                >
                  <div className="display-tight nums text-4xl text-white transition-colors group-hover:text-accent-bright md:text-5xl">
                    {s.v}
                  </div>
                  <div className="label-sm mt-3 text-white/45">{s.l}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Panel>

      {/* ---------------------------------------------------------- */}
      {/* Featured projects                                           */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Selected Work"
                title="Centers that have held their trade areas for decades."
                className="!max-w-2xl"
              />
              <ArrowLink href="/portfolio">View all projects</ArrowLink>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <ProjectCard project={project} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Markets                                                     */}
      {/* ---------------------------------------------------------- */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Build"
              title="Florida and Georgia are home. The footprint runs to eight states."
              lede="Geography follows the retailer's expansion plan and the quality of the site — never the other way around."
            />
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {markets.map((market, i) => {
              const count =
                projectsByState().find((s) => s.state === market.state)?.items.length ?? 0;
              return (
                <Reveal key={market.slug} delay={i * 80} className="h-full">
                  <Link
                    href={`/markets/${market.slug}`}
                    className="card-outline card-lift group flex h-full flex-col p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl transition-colors group-hover:text-accent">
                        {market.stateName}
                      </h3>
                      <Pill className="nums">
                        {count} {count === 1 ? "project" : "projects"}
                      </Pill>
                    </div>
                    <p className="mt-3 text-sm font-medium text-accent">{market.headline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                      {market.summary}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-5">
                      {market.submarkets.slice(0, 4).map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Team                                                        */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Who You'll Work With"
                title="A small team, deliberately."
                lede="You will not be handed to an account manager. The people below make the decisions."
                className="!max-w-2xl"
              />
              <ArrowLink href="/team">Meet the team</ArrowLink>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sortedTeam.map((member, i) => (
              <Reveal key={member.slug} delay={i * 70} className="h-full">
                <Link
                  href={`/team/${member.slug}`}
                  className="card card-lift group flex h-full flex-col p-8"
                >
                  <h3 className="text-lg transition-colors group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="label-sm mt-2 text-accent">{member.title}</p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-500">
                    {member.blurb}
                  </p>
                  {member.joined && (
                    <p className="label-sm mt-6 text-mute nums">Since {member.joined}</p>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Insights                                                    */}
      {/* ---------------------------------------------------------- */}
      <Panel>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              tone="light"
              eyebrow="Insights"
              title="What we've learned building five million square feet."
              className="!max-w-2xl"
            />
            <ArrowLink href="/insights" tone="light">
              All insights
            </ArrowLink>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {sortedInsights.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 80} className="h-full">
              <Link
                href={`/insights/${post.slug}`}
                className="card-dark card-lift group flex h-full flex-col p-8"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Pill tone="accent">{post.category}</Pill>
                  <Pill tone="dark" className="nums">
                    {post.readingTime} min read
                  </Pill>
                </div>
                <h3 className="mt-6 text-xl text-white transition-colors group-hover:text-accent-bright">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                  {post.excerpt}
                </p>
                <time
                  dateTime={post.date}
                  className="label-sm mt-7 text-white/35"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      </Panel>

      <CtaBand secondary={{ label: "Leasing enquiries", href: "/leasing" }} />
    </>
  );
}
