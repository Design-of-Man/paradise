import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { sortedPartners } from "@/data/partners";
import { pageMeta, jsonLdGraph, breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Anchor Partners & Sectors",
  description:
    "One of the nation's leading developers of Publix shopping centers and Walgreens stores — plus grocery, pharmacy, restaurant, fuel, banking, fitness and automotive development across the Southeast.",
  path: "/partners",
  keywords: [
    "Publix shopping center developer",
    "Walgreens build to suit developer",
    "grocery anchor development partner",
    "retail anchor tenants",
  ],
});

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Partners", path: "/partners" },
          ]),
          itemListSchema(
            sortedPartners.map((p) => ({ name: p.name, path: `/partners/${p.slug}` })),
            "Anchor Partners and Sectors",
          ),
        )}
      />

      <PageHero
        eyebrow="Anchor Partners"
        title="The retailers we build for keep coming back."
        lede="Fifty-two Publix stores from the ground up. More than one hundred Walgreens across eight states. Repeat development compounds — prototype knowledge and working relationships take years to build and remove risk from every project that follows."
        trail={[
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
        ]}
      />

      <Section>
        <div className="shell space-y-4">
          {sortedPartners.map((partner, i) => (
            <Reveal key={partner.slug} delay={i < 3 ? i * 70 : 0}>
              <Link
                href={`/partners/${partner.slug}`}
                className="card card-lift group grid gap-8 p-8 md:grid-cols-[1fr_1.5fr] md:p-11"
              >
                <div>
                  <p className="label-sm text-accent">
                    {partner.category}
                  </p>
                  <h2 className="mt-3 text-3xl transition-colors group-hover:text-accent">
                    {partner.name}
                  </h2>
                  {partner.delivered && (
                    <p className="mt-3 text-sm font-medium text-ink-500">{partner.delivered}</p>
                  )}
                  {partner.image && (
                    <div className="relative mt-6 aspect-4/3 overflow-hidden rounded-xl border border-line bg-sand">
                      <Image
                        src={partner.image}
                        alt={`${partner.imageSubject ?? partner.name} developed by Paradise Ventures`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-500">
                    {partner.summary}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
                    {partner.body[0]}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink">
                    Read more
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
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="For Retailers"
              title="Running a rollout?"
              lede="If you are expanding across multiple markets and need a developer to absorb site sourcing, entitlement and delivery risk, that is precisely what the build-to-suit practice exists to do."
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services/build-to-suit" className="btn btn-accent">
              Build-to-suit development
            </Link>
            <Link href="/contact" className="btn btn-on-dark">
              Start a conversation
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand secondary={{ label: "See the portfolio", href: "/portfolio" }} />
    </>
  );
}
