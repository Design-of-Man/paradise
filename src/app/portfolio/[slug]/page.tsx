import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImage } from "@/components/ProjectImage";
import { JsonLd } from "@/components/JsonLd";
import { projects, getProject, relatedProjects } from "@/data/projects";
import { markets } from "@/data/markets";
import { formatNumber } from "@/lib/util";
import { pageMeta, jsonLdGraph, breadcrumbSchema, placeSchema } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const where = `${project.city}, ${project.stateName}`;
  return pageMeta({
    title: `${project.name} — ${where}`,
    description: `${project.summary} ${project.anchor ? `${project.anchor}-anchored retail` : "Retail development"} in ${where}${project.year ? `, opened ${project.year}` : ""}. Developed by Paradise Ventures.`,
    path: `/portfolio/${project.slug}`,
    keywords: [
      project.name,
      `${project.anchor ?? "retail"} ${project.city}`,
      `shopping center ${project.city} ${project.state}`,
    ],
  });
}

const statusLabel: Record<string, string> = {
  completed: "Completed",
  "under-construction": "Under Construction",
  "in-development": "In Development",
  acquisition: "Acquisition",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = relatedProjects(project);
  const market = markets.find((m) => m.state === project.state);

  const facts: { label: string; value: string }[] = [
    ...(project.address
      ? [{ label: "Address", value: project.address }]
      : [{ label: "Location", value: `${project.city}, ${project.state}` }]),
    { label: "Status", value: statusLabel[project.status] },
    { label: "Type", value: project.type },
    ...(project.anchor ? [{ label: "Anchor", value: project.anchor }] : []),
    ...(project.year ? [{ label: "Opened", value: String(project.year) }] : []),
    ...(project.gla ? [{ label: "GLA", value: `${formatNumber(project.gla)} sq ft` }] : []),
    ...(project.acreage ? [{ label: "Site", value: `${project.acreage} acres` }] : []),
    ...(project.outparcels ? [{ label: "Outparcels", value: String(project.outparcels) }] : []),
  ];

  const trail = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.name, path: `/portfolio/${project.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(trail),
          placeSchema({
            name: project.name,
            path: `/portfolio/${project.slug}`,
            description: project.summary,
            city: project.city,
            region: project.state,
          }),
        )}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-ink pt-28 md:pt-32">
        <div className="shell relative z-10 pb-14 pt-8">
          <div className="text-xs text-white/40">
            <ol className="flex flex-wrap items-center gap-2">
              {trail.map((item, i) => (
                <li key={item.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="opacity-40">/</span>}
                  {i === trail.length - 1 ? (
                    <span aria-current="page" className="text-white/70">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.path} className="link-underline hover:text-white">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <p className="eyebrow mt-8">
            {project.city}, {project.stateName}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="mt-5 max-w-4xl text-(length:--text-display) text-white">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {project.summary}
          </p>
        </div>

        <div className="relative aspect-21/9 w-full overflow-hidden">
          <ProjectImage
            project={project}
            tone="ink"
            priority
            sizes="100vw"
            className="size-full"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-ink/60"
          />
        </div>
      </header>

      {/* Facts + narrative */}
      <Section className="!pt-14">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <aside className="border border-line bg-sand p-8 md:p-9 lg:sticky lg:top-28">
              <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Project Facts
              </h2>
              <dl className="mt-7 space-y-px">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3 pt-3 first:pt-0"
                  >
                    <dt className="text-xs uppercase tracking-[0.1em] text-mute">{f.label}</dt>
                    <dd className="text-right text-[0.9375rem] font-medium text-ink nums">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {project.tenants && project.tenants.length > 0 && (
                <div className="mt-8">
                  {/* Completed centres list the roster as published at opening,
                      which for older projects includes since-departed brands. */}
                  <h3 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.status === "completed" ? "Tenants at Opening" : "Notable Tenants"}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tenants.map((t) => (
                      <li
                        key={t}
                        className="border border-line bg-paper px-2.5 py-1 text-xs text-ink-500"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 border-t border-line pt-7">
                <Link href="/leasing" className="btn btn-primary w-full">
                  Enquire about space
                </Link>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={100}>
            <div>
              {project.highlights && (
                <div className="mb-12 border-l-2 border-accent bg-sand p-7 md:p-8">
                  <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Project Highlights
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                        <span aria-hidden className="mt-2.5 block size-1 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prose-pv">
                {project.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                    {p}
                  </p>
                ))}
              </div>

              {market && (
                <div className="mt-12 border-l-2 border-accent bg-sand p-7">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Market
                  </p>
                  <h2 className="mt-3 text-xl">{market.stateName}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{market.summary}</p>
                  <div className="mt-5">
                    <ArrowLink href={`/markets/${market.slug}`}>
                      More on the {market.stateName} market
                    </ArrowLink>
                  </div>
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <figure
                      key={src}
                      className="relative aspect-4/3 overflow-hidden border border-line bg-sand"
                    >
                      <Image
                        src={src}
                        alt={`${project.name} — view ${i + 2}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </figure>
                  ))}
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-6 border-t border-line pt-8">
                <ArrowLink href="/portfolio">Back to the portfolio</ArrowLink>
                <ArrowLink href="/services/development">How we develop</ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tone="sand">
          <div className="shell">
            <Reveal>
              <SectionHeading eyebrow="Nearby & Related" title="Other projects to look at." />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaBand
        title="Building something similar?"
        body="If you hold a site, need a store built, or want space in a center like this one — start with a conversation."
        secondary={{ label: "View all projects", href: "/portfolio" }}
      />
    </>
  );
}
