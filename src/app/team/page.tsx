import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { TeamPortrait } from "@/components/TeamPortrait";
import { sortedTeam } from "@/data/team";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema, personSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Team",
  description:
    "Meet the people behind Paradise Ventures — Michael P. Connor, Chuck Ernst, Brad Karns and Jon Mott. A small team, deliberately, so you deal with the decision-maker.",
  path: "/team",
  keywords: [
    "Paradise Ventures team",
    "Michael Connor Paradise Ventures",
    "commercial real estate leadership Florida",
  ],
});

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
          ...sortedTeam.map((m) =>
            personSchema({
              name: m.name,
              title: m.title,
              path: `/team/${m.slug}`,
              description: m.blurb,
              email: m.email,
              education: m.education,
            }),
          ),
        )}
      />

      <PageHero
        eyebrow="Who You'll Work With"
        title="A small team, deliberately."
        lede="You will not be handed to an account manager, and you will not repeat yourself to a new face every quarter. The people below make the decisions — and they are the same people you will be talking to in five years."
        trail={[
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ]}
      />

      <Section>
        <div className="shell space-y-4">
          {sortedTeam.map((member, i) => (
            <Reveal key={member.slug} delay={i * 70}>
              <article className="card grid gap-8 p-8 md:grid-cols-[1fr_1.6fr] md:p-11">
                <div>
                  <Link
                    href={`/team/${member.slug}`}
                    className="relative mb-7 block aspect-4/5 max-w-[15rem] overflow-hidden rounded-xl border border-line bg-sand"
                  >
                    <TeamPortrait
                      member={member}
                      sizes="(max-width: 768px) 60vw, 240px"
                      priority={i === 0}
                    />
                  </Link>
                  <h2 className="text-3xl">
                    <Link
                      href={`/team/${member.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {member.name}
                    </Link>
                  </h2>
                  <p className="mt-2 label text-accent">
                    {member.title}
                  </p>
                  {member.joined && (
                    <p className="mt-4 text-sm text-mute nums">
                      With the firm since {member.joined}
                    </p>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="link-underline mt-2 block text-sm text-ink-500 hover:text-ink"
                    >
                      {member.email}
                    </a>
                  )}
                </div>

                <div>
                  <p className="text-[1.0625rem] leading-relaxed text-ink">{member.blurb}</p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
                    {member.bio[0]}
                  </p>

                  {member.affiliations && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {member.affiliations.map((a) => (
                        <li
                          key={a}
                          className="rounded-full border border-line bg-sand px-2.5 py-1 text-xs text-ink-500"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/team/${member.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink"
                  >
                    Full profile
                    <svg viewBox="0 0 16 10" className="size-3" fill="none" aria-hidden>
                      <path
                        d="M10.5 1L15 5l-4.5 4M15 5H1"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Why It Stays Small"
              title="Continuity is a service, not a side effect."
              lede="A shopping center is a twenty-year relationship. Institutional knowledge about why a stormwater pond sits where it does, or why a particular tenant took the end bay, only survives if the people who made those decisions are still here."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border border-line-dark p-8 md:p-10">
              <h3 className="text-2xl text-white">Working with us</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/60">
                Call the office and you will reach someone who can answer the
                question. No intake queue, no routing, no account team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${site.phone}`} className="btn btn-accent nums">
                  {site.phoneDisplay}
                </a>
                <Link href="/contact" className="btn btn-on-dark">
                  Send a message
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand secondary={{ label: "About the firm", href: "/about" }} />
    </>
  );
}
