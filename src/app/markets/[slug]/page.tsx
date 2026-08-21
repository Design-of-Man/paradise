import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";
import { markets, getMarket } from "@/data/markets";
import { projects } from "@/data/projects";
import { sortedServices } from "@/data/services";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema, placeSchema } from "@/lib/seo";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};

  return pageMeta({
    title: `${market.stateName} Retail Development`,
    description: `${market.summary} Paradise Ventures has developed grocery-anchored retail across ${market.submarkets.slice(0, 3).join(", ")} and beyond.`,
    path: `/markets/${market.slug}`,
    keywords: [
      `${market.stateName} retail developer`,
      `${market.stateName} shopping center development`,
      ...market.submarkets.map((s) => `${s} commercial development`),
    ],
  });
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();

  const local = projects.filter((p) => p.state === market.state);
  const others = markets.filter((m) => m.slug !== market.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
    { name: market.stateName, path: `/markets/${market.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(trail),
          placeSchema({
            name: `${market.stateName} — Paradise Ventures Development`,
            path: `/markets/${market.slug}`,
            description: market.summary,
            city: market.submarkets[0] ?? market.stateName,
            region: market.state,
          }),
          itemListSchema(
            local.map((p) => ({ name: p.name, path: `/portfolio/${p.slug}` })),
            `${market.stateName} Projects`,
          ),
        )}
      />

      <PageHero
        eyebrow={`${market.stateName} · ${local.length} ${local.length === 1 ? "project" : "projects"} profiled`}
        title={`${market.stateName}: ${market.headline}`}
        lede={market.summary}
        trail={trail}
      />

      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <div className="prose-pv">
              {market.body.map((p, i) => (
                <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-xl border border-line bg-sand p-8 md:p-9">
              <h2 className="label-sm text-accent">
                Submarkets
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {market.submarkets.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs text-ink-500"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h2 className="mt-9 label-sm text-accent">
                Services in {market.stateName}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {sortedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="link-underline text-sm text-ink-500 hover:text-ink"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-line pt-7">
                <Link href="/contact" className="btn btn-primary w-full">
                  Discuss a {market.stateName} site
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {local.length > 0 && (
        <Section tone="sand">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Local Work"
                  title={`Projects in ${market.stateName}.`}
                  className="!max-w-2xl"
                />
                <ArrowLink href="/portfolio">Full portfolio</ArrowLink>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {local.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Other Markets" title="Where else we build." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {others.map((m) => (
              <Link
                key={m.slug}
                href={`/markets/${m.slug}`}
                className="card card-lift group p-8 md:p-9"
              >
                <h3 className="text-2xl transition-colors group-hover:text-accent">
                  {m.stateName}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent/80">{m.headline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{m.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title={`Have a site in ${market.stateName}?`}
        body="Send the address, acreage and zoning. You will get a straight answer on whether it can host a retail development — including if the answer is no."
        primary={{ label: "Submit a site", href: "/contact?topic=site" }}
        secondary={{ label: "Site criteria", href: "/portfolio/active" }}
      />
    </>
  );
}
