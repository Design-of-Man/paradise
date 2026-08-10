import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Section, SectionHeading, Stat, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";

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
      <section className="grain relative flex min-h-[88vh] items-center overflow-hidden bg-ink pb-16 pt-28 text-paper md:pt-32">
        {/* Full-bleed aerial, held well back so the headline stays legible.
            quality is raised because a hero stretched to 2560px shows
            compression artefacts at the Next.js default of 75. */}
        <Image
          src="/images/brand/hero.jpg"
          alt=""
          aria-hidden
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Plan grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Opaque behind the copy, easing off hard so the aerial reads on the
            right. The vertical pass only anchors the top and bottom edges. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/15"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/30"
        />

        <div className="shell relative z-10">
          <Reveal>
            <p className="eyebrow">Established 1988 · Safety Harbor, Florida</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-5xl text-(length:--text-display-lg) text-white">
              We build more than buildings.
              <span className="block text-accent-pale">
                We build relationships and value.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Paradise Ventures develops, constructs, leases and manages retail
              and mixed-use property across Florida and the Southeast — every
              function held in-house, from the first site visit to the day the
              doors open.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-accent">
                View the Portfolio
              </Link>
              <Link href="/contact" className="btn btn-on-dark">
                Start a Conversation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line-dark pt-9 sm:grid-cols-4">
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
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Positioning                                                 */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">The Firm</p>
              <h2 className="mt-5 text-(length:--text-display-sm)">
                One team. Every phase. No handoffs.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-500">
                Most retail developments pass through four or five organisations
                between raw land and grand opening. Every one of those handoffs is
                a place where a schedule slips and accountability blurs.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-500">
                Paradise Ventures holds development, construction management,
                leasing and property management under one roof. The people who
                commit to a delivery date are the same people responsible for
                holding it — and the same people you will still be talking to
                five years after the center opens.
              </p>
              <div className="mt-9 flex flex-wrap gap-6">
                <ArrowLink href="/about">About the firm</ArrowLink>
                <ArrowLink href="/process">See our process</ArrowLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "Anchor-first underwriting",
                  d: "The grocery lease is signed before site work begins. We do not build on speculative anchor demand.",
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
              ].map((item) => (
                <div key={item.n} className="bg-paper p-7 md:p-8">
                  <span className="font-display text-sm text-accent nums">{item.n}</span>
                  <h3 className="mt-4 text-lg">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Services                                                    */}
      {/* ---------------------------------------------------------- */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Five decades of retail experience, six disciplines under one roof."
              lede="Take one service or all of them. Most clients start with a single question and end up handing us the whole project."
            />
          </Reveal>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {sortedServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-sand p-8 transition-colors duration-400 hover:bg-paper md:p-9"
                >
                  <span className="font-display text-sm text-accent nums">
                    {String(service.order).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl transition-colors group-hover:text-accent">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-accent/80">{service.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                    {service.summary}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink">
                    Learn more
                    <svg viewBox="0 0 16 10" className="size-3" fill="none" aria-hidden>
                      <path
                        d="M10.5 1L15 5l-4.5 4M15 5H1"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Anchors                                                     */}
      {/* ---------------------------------------------------------- */}
      <Section tone="ink">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Anchor Partners"
                title="The retailers we build for keep coming back."
                lede="Fifty-two Publix stores from the ground up. More than one hundred Walgreens across eight states. Repeat development compounds — prototype knowledge, delivery standards and working relationships take years to build and remove risk from every project that follows."
              />
              <div className="mt-9">
                <ArrowLink href="/partners" tone="light">
                  All anchor partners and sectors
                </ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {[
                  { v: "52", l: "Publix Stores", h: "/partners/publix" },
                  { v: "100+", l: "Walgreens", h: "/partners/walgreens" },
                  { v: "8", l: "States", h: "/markets" },
                  { v: `${formatNumber(projects.length)}`, l: "Centers Profiled", h: "/portfolio" },
                ].map((s) => (
                  <Link
                    key={s.l}
                    href={s.h}
                    className="group bg-ink p-8 transition-colors hover:bg-ink-700 md:p-10"
                  >
                    <div className="font-display text-4xl text-white transition-colors group-hover:text-accent-pale md:text-5xl nums">
                      {s.v}
                    </div>
                    <div className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {s.l}
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

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

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
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

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {markets.map((market, i) => {
              const count =
                projectsByState().find((s) => s.state === market.state)?.items.length ?? 0;
              return (
                <Reveal key={market.slug} delay={i * 80}>
                  <Link
                    href={`/markets/${market.slug}`}
                    className="group flex h-full flex-col border border-line bg-paper p-8 transition-all duration-400 hover:border-accent/45 hover:shadow-[0_28px_60px_-32px_rgba(14,20,29,0.28)]"
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-2xl transition-colors group-hover:text-accent">
                        {market.stateName}
                      </h3>
                      <span className="font-display text-3xl text-accent/35 nums">
                        {String(count).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent/80">{market.headline}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                      {market.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-4 text-[0.6875rem] uppercase tracking-[0.1em] text-mute">
                      {market.submarkets.slice(0, 4).map((s) => (
                        <span key={s}>{s}</span>
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

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {sortedTeam.map((member, i) => (
              <Reveal key={member.slug} delay={i * 70}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-sand"
                >
                  <h3 className="text-lg transition-colors group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {member.title}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                    {member.blurb}
                  </p>
                  {member.joined && (
                    <p className="mt-5 text-[0.6875rem] uppercase tracking-[0.14em] text-mute nums">
                      Since {member.joined}
                    </p>
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
      <Section tone="ink">
        <div className="shell">
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

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {sortedInsights.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-ink-700"
                >
                  <div className="flex items-center gap-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    <span>{post.category}</span>
                    <span aria-hidden className="text-white/25">·</span>
                    <span className="text-white/40">{post.readingTime} min read</span>
                  </div>
                  <h3 className="mt-4 text-xl text-white transition-colors group-hover:text-accent-pale">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.date}
                    className="mt-6 text-[0.6875rem] uppercase tracking-[0.14em] text-white/35"
                  >
                    {formatDate(post.date)}
                  </time>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "Leasing enquiries", href: "/leasing" }} />
    </>
  );
}
