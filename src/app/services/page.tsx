import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { sortedServices } from "@/data/services";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Development, construction management, leasing, property management, acquisitions and build-to-suit — six retail real estate disciplines held under one roof since 1988.",
  path: "/services",
  keywords: [
    "retail development services",
    "commercial construction management Florida",
    "shopping center leasing services",
    "retail property management",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListSchema(
            sortedServices.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
            "Services",
          ),
        )}
      />

      <PageHero
        eyebrow="What We Do"
        title="Six disciplines. One firm. No handoffs."
        lede="Take one service or all of them. Most clients arrive with a single question and end up handing us the whole project — because the seams between firms are where retail developments go wrong."
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section>
        <div className="shell space-y-4">
          {sortedServices.map((service, i) => (
            <Reveal key={service.slug} delay={i < 3 ? i * 70 : 0}>
              <Link
                href={`/services/${service.slug}`}
                className="card card-lift group grid gap-8 p-8 md:grid-cols-[5rem_1.3fr_1fr] md:items-start md:p-11"
              >
                <span className="display-tight text-4xl text-accent/35 nums">
                  {String(service.order).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="text-3xl transition-colors group-hover:text-accent">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-accent/80">{service.tagline}</p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-500">
                    {service.summary}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink">
                    Explore {service.name.toLowerCase()}
                    <svg viewBox="0 0 16 10" className="size-3" fill="none" aria-hidden>
                      <path
                        d="M10.5 1L15 5l-4.5 4M15 5H1"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </svg>
                  </span>
                </div>

                <div className="border-l border-line pl-6 md:pl-8">
                  <h3 className="label-sm text-accent">
                    What you get
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d.title} className="flex gap-2.5 text-sm text-ink-500">
                        <span aria-hidden className="mt-[0.45rem] block size-1.5 shrink-0 rounded-full bg-accent-bright" />
                        {d.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand secondary={{ label: "See our process", href: "/process" }} />
    </>
  );
}
