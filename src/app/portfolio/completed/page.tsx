import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { JsonLd } from "@/components/JsonLd";
import { completedProjects, projectsByDecade } from "@/data/projects";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Completed Projects",
  description:
    "Publix-anchored shopping centers and retail developments completed by Paradise Ventures across Florida, Georgia and South Carolina since 1992.",
  path: "/portfolio/completed",
  keywords: [
    "completed shopping center projects",
    "Paradise Shoppes locations",
    "Publix anchored centers Florida Georgia",
  ],
});

export default function CompletedPage() {
  const decades = projectsByDecade();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Completed", path: "/portfolio/completed" },
          ]),
          itemListSchema(
            completedProjects.map((p) => ({ name: p.name, path: `/portfolio/${p.slug}` })),
            "Completed Projects",
          ),
        )}
      />

      <PageHero
        eyebrow="Delivered"
        title="Centers that opened, leased, and stayed leased."
        lede="Three decades of completed retail development. Many of these centers still hold the same anchor they opened with."
        trail={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Completed", path: "/portfolio/completed" },
        ]}
      />

      <div className="border-b border-line bg-paper">
        <div className="shell flex flex-wrap gap-x-8 gap-y-3 py-5 text-[0.8125rem] font-medium">
          <Link href="/portfolio" className="link-underline text-ink-500 hover:text-ink">
            All Projects
          </Link>
          <span className="text-accent">Completed</span>
          <Link href="/portfolio/active" className="link-underline text-ink-500 hover:text-ink">
            Active Development
          </Link>
        </div>
      </div>

      <Section>
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Chronology" title="In the order they opened." />
          </Reveal>

          <div className="mt-14 space-y-px bg-line">
            {decades.map((group) => (
              <Reveal key={group.decade}>
                <div className="grid gap-6 bg-sand p-8 md:grid-cols-[8rem_1fr] md:items-start md:p-10">
                  <h3 className="font-display text-3xl text-accent nums">{group.decade}</h3>
                  <ul className="space-y-3">
                    {group.items.map((p) => (
                      <li key={p.slug} className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-display text-sm text-mute nums">{p.year}</span>
                        <Link
                          href={`/portfolio/${p.slug}`}
                          className="link-underline text-[0.9375rem] text-ink transition-colors hover:text-accent"
                        >
                          {p.name}
                        </Link>
                        <span className="text-sm text-mute">
                          {p.city}, {p.state}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Space available in our centers."
        primary={{ label: "Leasing enquiries", href: "/leasing" }}
        secondary={{ label: "Active development", href: "/portfolio/active" }}
      />
    </>
  );
}
