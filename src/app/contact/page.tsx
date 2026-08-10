import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { site, addressOneLine, mapsUrl } from "@/data/site";
import { sortedTeam } from "@/data/team";
import { pageMeta, jsonLdGraph, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: `Reach Paradise Ventures at ${site.phoneDisplay} or ${addressOneLine}. Development enquiries, leasing, acquisitions and property management — you will reach someone who can answer.`,
  path: "/contact",
  keywords: [
    "contact Paradise Ventures",
    "St. Petersburg commercial developer contact",
    "retail developer Florida phone",
  ],
});

const routes = [
  {
    title: "I have a site or land",
    body: "Send the address or parcel number, approximate acreage, current zoning and any survey. You will get a straight answer on whether it can host a retail development.",
    href: "/portfolio/active",
    cta: "See our site criteria",
  },
  {
    title: "I need a store built",
    body: "Single-site or a multi-market rollout. We absorb site sourcing, entitlement and delivery risk against your prototype and your calendar.",
    href: "/services/build-to-suit",
    cta: "Build-to-suit",
  },
  {
    title: "I want to lease space",
    body: "Shop bays and outparcels beside national grocery and pharmacy anchors. Terms come direct from ownership.",
    href: "/leasing",
    cta: "Leasing",
  },
  {
    title: "I have a property to sell",
    body: "Grocery-anchored centers, value-add retail and net-leased assets. Broker relationships protected.",
    href: "/services/acquisitions",
    cta: "Acquisition criteria",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Get in Touch"
        title="Call the office. Someone who can answer will pick up."
        lede="No intake queue, no routing, no account team. Paradise Ventures is a small firm on purpose — the people who make the decisions are the people you reach."
        trail={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      {/* Form + details */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="Tell us what you are working on."
                lede="The more detail you give us, the more useful the first reply will be."
              />
              <div className="mt-10">
                <ContactForm defaultTopic={topic} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-px bg-line">
              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Office
                </h2>
                <address className="mt-5 space-y-4 not-italic">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline block text-[0.9375rem] leading-relaxed text-ink-500 hover:text-ink"
                  >
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </a>
                  <a
                    href={`tel:${site.phone}`}
                    className="link-underline block font-display text-2xl text-ink nums"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline block text-[0.9375rem] text-ink-500 hover:text-ink"
                  >
                    {site.email}
                  </a>
                </address>
              </div>

              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Hours
                </h2>
                <p className="mt-5 text-[0.9375rem] text-ink-500">
                  Monday – Friday
                  <br />
                  8:30 am – 5:00 pm ET
                </p>
              </div>

              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Direct Contacts
                </h2>
                <ul className="mt-5 space-y-4">
                  {sortedTeam.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/team/${m.slug}`}
                        className="link-underline text-[0.9375rem] font-medium text-ink"
                      >
                        {m.name}
                      </Link>
                      <p className="text-xs text-mute">{m.title}</p>
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          className="link-underline text-sm text-ink-500 hover:text-ink"
                        >
                          {m.email}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Tenants
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ink-500">
                  Maintenance issue in one of our centers? Call{" "}
                  <a href={`tel:${site.phone}`} className="link-underline font-semibold text-ink nums">
                    {site.phoneDisplay}
                  </a>{" "}
                  during business hours, or email {site.email} with your center
                  name and suite number.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Routing */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Not Sure Where to Start?"
              title="Four ways people usually reach us."
            />
          </Reveal>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {routes.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col bg-sand p-8">
                  <h3 className="text-lg">{r.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{r.body}</p>
                  <Link
                    href={r.href}
                    className="group mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-ink"
                  >
                    {r.cta}
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
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section tone="ink" className="!py-0">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-(--spacing-gutter) py-20 md:py-24">
            <div className="ml-auto max-w-lg lg:mr-14">
              <p className="eyebrow">Find Us</p>
              <h2 className="mt-5 text-(length:--text-display-sm) text-white">
                St. Petersburg, Florida.
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/60">
                The firm has worked from the Tampa Bay market since 1988. Three
                decades in one place produces local knowledge that is difficult
                to replicate from a distance.
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-accent mt-9"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="relative min-h-[22rem] bg-ink-700">
            <iframe
              title={`Map showing ${site.name} at ${addressOneLine}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(addressOneLine)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[0.4]"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Prefer to just call?"
        body={`${site.phoneDisplay}, Monday to Friday, 8:30 to 5:00 Eastern.`}
        primary={{ label: "See our services", href: "/services" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
