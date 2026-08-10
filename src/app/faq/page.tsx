import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { faqs, faqGroups } from "@/data/faq";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Straight answers about retail development, leasing, acquisitions and property management with Paradise Ventures — timelines, site criteria, space availability and how to reach us.",
  path: "/faq",
  keywords: [
    "retail development questions",
    "how to lease shopping center space",
    "retail developer FAQ",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        )}
      />

      <PageHero
        eyebrow="Questions"
        title="Straight answers, no runaround."
        lede="The questions landowners, retailers, tenants and brokers actually ask. If yours is not here, call the office — you will reach someone who can answer it."
        trail={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1fr_2.4fr] lg:gap-20">
          {/* Group index */}
          <Reveal>
            <nav aria-label="FAQ sections" className="lg:sticky lg:top-28">
              <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Sections
              </h2>
              <ul className="mt-5 space-y-2.5">
                {faqGroups.map((g) => (
                  <li key={g}>
                    <a
                      href={`#${g.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="link-underline text-sm text-ink-500 hover:text-ink"
                    >
                      {g}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-line pt-7">
                <p className="text-sm leading-relaxed text-ink-500">
                  Still stuck? Call {site.phoneDisplay} during business hours.
                </p>
                <Link href="/contact" className="btn btn-primary mt-5 w-full">
                  Ask a question
                </Link>
              </div>
            </nav>
          </Reveal>

          {/* Questions */}
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <section
                key={group}
                id={group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                aria-labelledby={`${group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
              >
                <h2
                  id={`${group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
                  className="text-2xl"
                >
                  {group}
                </h2>

                <div className="mt-7 space-y-px bg-line">
                  {faqs
                    .filter((f) => f.group === group)
                    .map((f) => (
                      <details key={f.q} className="group bg-paper">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-medium text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                          {f.q}
                          <span
                            aria-hidden
                            className="relative mt-2 block size-3 shrink-0 text-accent"
                          >
                            <span className="absolute left-0 top-1/2 block h-px w-full bg-current" />
                            <span className="absolute left-1/2 top-0 block h-full w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                          </span>
                        </summary>
                        <p className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-500">
                          {f.a}
                        </p>
                      </details>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ask us something specific."
        body="General answers only get you so far. Tell us about your site, your space requirement or your expansion plan and you will get a specific one."
        secondary={{ label: "Read our insights", href: "/insights" }}
      />
    </>
  );
}
