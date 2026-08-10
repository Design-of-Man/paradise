import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { TeamPortrait } from "@/components/TeamPortrait";
import { team, getTeamMember, sortedTeam } from "@/data/team";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema, personSchema } from "@/lib/seo";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  return pageMeta({
    title: `${member.name} — ${member.title}`,
    description: `${member.name}, ${member.title} at Paradise Ventures. ${member.blurb}`,
    path: `/team/${member.slug}`,
    type: "profile",
    keywords: [member.name, `${member.name} Paradise Ventures`, member.title],
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const others = sortedTeam.filter((m) => m.slug !== member.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: member.name, path: `/team/${member.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(trail),
          personSchema({
            name: member.name,
            title: member.title,
            path: `/team/${member.slug}`,
            description: member.blurb,
            email: member.email,
            education: member.education,
          }),
        )}
      />

      <PageHero
        eyebrow={member.title}
        title={member.name}
        lede={member.blurb}
        trail={trail}
      />

      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <div className="prose-pv">
              {member.bio.map((p, i) => (
                <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="border border-line bg-sand">
              <div className="relative aspect-4/5 w-full overflow-hidden border-b border-line">
                <TeamPortrait
                  member={member}
                  sizes="(max-width: 1024px) 100vw, 380px"
                  priority
                />
              </div>
              <div className="p-8 md:p-9">
              <dl className="space-y-6">
                <div>
                  <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Role
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] text-ink">{member.title}</dd>
                </div>

                {member.joined && (
                  <div>
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      With the firm since
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] text-ink nums">{member.joined}</dd>
                  </div>
                )}

                {member.education && (
                  <div>
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      Education
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {member.education.map((e) => (
                        <p key={e} className="text-[0.9375rem] leading-snug text-ink-500">
                          {e}
                        </p>
                      ))}
                    </dd>
                  </div>
                )}

                {member.affiliations && (
                  <div>
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      Affiliations
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {member.affiliations.map((a) => (
                        <p key={a} className="text-[0.9375rem] leading-snug text-ink-500">
                          {a}
                        </p>
                      ))}
                    </dd>
                  </div>
                )}

                {member.boards && (
                  <div>
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      Board service
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {member.boards.map((b) => (
                        <p key={b} className="text-[0.9375rem] leading-snug text-ink-500">
                          {b}
                        </p>
                      ))}
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Contact
                  </dt>
                  <dd className="mt-2 space-y-1.5">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="link-underline block text-[0.9375rem] text-ink-500 hover:text-ink"
                      >
                        {member.email}
                      </a>
                    )}
                    <a
                      href={`tel:${site.phone}`}
                      className="link-underline block text-[0.9375rem] text-ink-500 hover:text-ink nums"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-9 border-t border-line pt-7">
                <Link href="/contact" className="btn btn-primary w-full">
                  Get in touch
                </Link>
              </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="The Team" title="Who else you'll work with." />
          </Reveal>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">
            {others.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group bg-sand p-8 transition-colors hover:bg-paper"
              >
                <h3 className="text-xl transition-colors group-hover:text-accent">{m.name}</h3>
                <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  {m.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{m.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "Meet the whole team", href: "/team" }} />
    </>
  );
}
