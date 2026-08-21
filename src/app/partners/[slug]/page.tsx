import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";
import { partners, getPartner, sortedPartners } from "@/data/partners";
import { projects } from "@/data/projects";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return {};

  return pageMeta({
    title: `${partner.name} Development`,
    description: partner.summary,
    path: `/partners/${partner.slug}`,
    keywords: [
      `${partner.name} developer`,
      `${partner.name} shopping center development`,
      `${partner.category.toLowerCase()} retail development`,
    ],
  });
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) notFound();

  // Anchor pages surface the centers built for that anchor.
  const related = projects.filter(
    (p) => p.anchor && partner.name.toLowerCase().includes(p.anchor.toLowerCase()),
  );
  const others = sortedPartners.filter((p) => p.slug !== partner.slug);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Partners", path: "/partners" },
    { name: partner.name, path: `/partners/${partner.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(trail),
          ...(related.length
            ? [
                itemListSchema(
                  related.map((p) => ({ name: p.name, path: `/portfolio/${p.slug}` })),
                  `${partner.name} Projects`,
                ),
              ]
            : []),
        )}
      />

      <PageHero
        eyebrow={partner.category}
        title={partner.name}
        lede={partner.delivered ?? partner.summary}
        trail={trail}
      />

      {partner.image && (
        <div className="relative aspect-21/9 w-full overflow-hidden bg-sand">
          <Image
            src={partner.image}
            alt={`${partner.imageSubject ?? partner.name} developed by Paradise Ventures`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-ink/45"
          />
        </div>
      )}

      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="prose-pv">
                {partner.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                    {p}
                  </p>
                ))}
              </div>

            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-xl border border-line bg-sand p-8 md:p-9">
              {partner.delivered && (
                <>
                  <h2 className="label-sm text-accent">
                    Track Record
                  </h2>
                  <p className="mt-4 display-tight text-2xl leading-snug text-ink">
                    {partner.delivered}
                  </p>
                </>
              )}

              <h2 className="mt-9 label-sm text-accent">
                Relevant Services
              </h2>
              <ul className="mt-5 space-y-2.5">
                <li>
                  <Link
                    href="/services/development"
                    className="link-underline text-sm text-ink-500 hover:text-ink"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/build-to-suit"
                    className="link-underline text-sm text-ink-500 hover:text-ink"
                  >
                    Build-to-Suit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/construction-management"
                    className="link-underline text-sm text-ink-500 hover:text-ink"
                  >
                    Construction Management
                  </Link>
                </li>
              </ul>

              <div className="mt-9 border-t border-line pt-7">
                <Link href="/contact" className="btn btn-primary w-full">
                  Discuss a programme
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {partner.gallery && partner.gallery.length > 0 && (
        <Section tone="sand">
          <div className="shell">
            <Reveal>
              <SectionHeading
                eyebrow="Delivered"
                title={`${partner.name} projects we have built.`}
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partner.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 70}>
                  <figure className="relative aspect-4/3 overflow-hidden border border-line bg-paper">
                    <Image
                      src={src}
                      alt={`${partner.name} development by Paradise Ventures — view ${i + 2}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="sand">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Selected Work"
                  title={`${partner.name}-anchored centers.`}
                  className="!max-w-2xl"
                />
                <ArrowLink href="/portfolio">Full portfolio</ArrowLink>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 6).map((p, i) => (
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
            <SectionHeading eyebrow="Also" title="Other anchors and sectors." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/partners/${p.slug}`}
                className="card card-lift group p-7"
              >
                <p className="label-sm text-accent">
                  {p.category}
                </p>
                <h3 className="mt-3 text-lg transition-colors group-hover:text-accent">{p.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "All partners", href: "/partners" }} />
    </>
  );
}
