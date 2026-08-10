import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { services, getService, sortedServices } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import {
  pageMeta,
  jsonLdGraph,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMeta({
    // The tagline used to sit here, which pushed these past 80 characters once
    // the "| Paradise Ventures" template was appended — so the brand and half
    // the tagline were cut off in results. A short qualifier keeps every service
    // title under the truncation limit and still disambiguates the one-word
    // names, since "Leasing" or "Acquisitions" alone says nothing about sector.
    title: `${service.name} — Retail Real Estate`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [
      `retail ${service.name.toLowerCase()}`,
      `${service.name} Florida`,
      `commercial ${service.name.toLowerCase()} Southeast`,
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = sortedServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            description: service.summary,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        )}
      />

      <PageHero
        eyebrow={`Service ${String(service.order).padStart(2, "0")}`}
        title={service.name}
        lede={service.tagline}
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Body + deliverables */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <div className="prose-pv">
              {service.body.map((p, i) => (
                <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="border border-line bg-sand p-8 md:p-10">
              <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                What you get
              </h2>
              <dl className="mt-7 space-y-6">
                {service.deliverables.map((d) => (
                  <div key={d.title}>
                    <dt className="text-[0.9375rem] font-semibold text-ink">{d.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {d.description}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 border-t border-line pt-7">
                <Link href="/contact" className="btn btn-primary w-full">
                  Discuss {service.name.toLowerCase()}
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Phases */}
      {service.phases && (
        <Section tone="ink">
          <div className="shell">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Sequence"
                title={`How a ${service.name.toLowerCase()} assignment runs.`}
              />
            </Reveal>

            <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {service.phases.map((phase, i) => (
                <Reveal key={phase.title} delay={(i % 4) * 60}>
                  <li className="flex h-full flex-col bg-ink p-8">
                    <span className="font-display text-sm text-accent nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg text-white">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {phase.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="mt-12">
              <ArrowLink href="/process" tone="light">
                See the full nine-stage process
              </ArrowLink>
            </div>
          </div>
        </Section>
      )}

      {/* FAQs */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Questions" title={`${service.name}, answered.`} />
          </Reveal>

          <dl className="mt-12 space-y-px bg-line">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="grid gap-4 bg-sand p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
                  <dt className="text-lg">{f.q}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-500">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Related work */}
      <Section>
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Selected Work"
                title="Projects this discipline produced."
                className="!max-w-2xl"
              />
              <ArrowLink href="/portfolio">All projects</ArrowLink>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Other services */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Also Available" title="The rest of what we do." />
          </Reveal>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-sand p-7 transition-colors hover:bg-paper"
              >
                <span className="font-display text-sm text-accent nums">
                  {String(s.order).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg transition-colors group-hover:text-accent">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "All services", href: "/services" }} />
    </>
  );
}
