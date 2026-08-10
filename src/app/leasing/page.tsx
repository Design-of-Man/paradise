import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { getService } from "@/data/services";
import { getTeamMember } from "@/data/team";
import { site } from "@/data/site";
import { pageMeta, jsonLdGraph, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Leasing — Space in Publix-Anchored Centers",
  description:
    "Lease shop space and outparcels beside national grocery and pharmacy anchors across Florida, Georgia and South Carolina. Deal directly with ownership — no intermediary.",
  path: "/leasing",
  keywords: [
    "shopping center space for lease Florida",
    "retail space for rent Publix center",
    "outparcel for lease",
    "commercial space leasing Georgia",
  ],
});

const leasingFaqs = [
  {
    q: "What size spaces are available?",
    a: "Shop bays across the portfolio generally run from roughly 1,000 to 5,000 square feet, with outparcels and pad sites available at select centers. Availability changes — contact leasing for current space.",
  },
  {
    q: "Do you lease to local operators, or only national tenants?",
    a: "Both. Local operators are frequently the strongest performers in a neighborhood center. The underwriting looks at the concept and the operator, not only the credit.",
  },
  {
    q: "What does it cost?",
    a: "Rent varies by center, market, bay size and position. Terms are discussed directly rather than published, because the right number depends on the specific space and use.",
  },
  {
    q: "How quickly can I get into a space?",
    a: "It depends on the condition of the bay and the scope of your build-out. Vanilla shell spaces move considerably faster than those needing landlord work. Ask about a specific space and you will get a specific answer.",
  },
  {
    q: "Do you pay broker commissions?",
    a: "Yes. Broker relationships are welcome, respected and protected.",
  },
];

export default function LeasingPage() {
  const service = getService("leasing")!;
  const jon = getTeamMember("jon-mott");
  const centers = projects.filter((p) => p.status === "completed");

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Leasing", path: "/leasing" },
          ]),
          serviceSchema({
            name: "Retail Leasing",
            description: service.summary,
            path: "/leasing",
          }),
          faqSchema(leasingFaqs),
        )}
      />

      <PageHero
        eyebrow="Leasing"
        title="Space beside an anchor that already brings the traffic."
        lede="A tenant taking a bay next to a Publix is not being asked to create demand — they are being placed into it. Our job is assembling a mix that captures that traffic without dividing it."
        trail={[
          { name: "Home", path: "/" },
          { name: "Leasing", path: "/leasing" },
        ]}
      />

      {/* Enquiry form + contact */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Enquire"
                title="Tell us what you need."
                lede="The more specific you are about your use, your square footage and your target market, the more useful our first reply will be."
              />
              <div className="mt-10">
                <ContactForm variant="leasing" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-px bg-line">
              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Leasing Contact
                </h2>
                {jon && (
                  <>
                    <p className="mt-5 font-display text-2xl text-ink">{jon.name}</p>
                    <p className="mt-1 text-sm text-mute">{jon.title}</p>
                    {jon.email && (
                      <a
                        href={`mailto:${jon.email}`}
                        className="link-underline mt-5 block text-[0.9375rem] text-ink-500 hover:text-ink"
                      >
                        {jon.email}
                      </a>
                    )}
                  </>
                )}
                <a
                  href={`tel:${site.phone}`}
                  className="link-underline mt-1.5 block text-[0.9375rem] font-semibold text-ink nums"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  What we lease
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Shop bays, roughly 1,000–5,000 sq ft",
                    "End caps with drive-through potential",
                    "Outparcels and pad sites",
                    "Ground lease and build-to-suit pads",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-500">
                      <span aria-hidden className="mt-2 block size-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand p-8">
                <h2 className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Brokers
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ink-500">
                  Broker relationships are welcome, respected and protected.
                  Register your prospect and you will be dealt with straight.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Why lease here */}
      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Why Here"
              title="Four things that matter to an operator."
            />
          </Reveal>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Anchor-driven traffic",
                d: "A grocery store brings a household to the center roughly fifty-two times a year. You are underwriting a share of a trip that already happens.",
              },
              {
                t: "Direct decisions",
                d: "You negotiate with ownership. No committee, no intermediary, no waiting a fortnight for an answer on a term sheet.",
              },
              {
                t: "Managed properly",
                d: "We manage what we build. Lot, lighting, landscape and building envelope are maintained on a schedule, not on complaint.",
              },
              {
                t: "Honest fit assessment",
                d: "If your concept is wrong for a trade area, we will say so. A failed tenant is a center problem, not just a vacancy.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={(i % 4) * 60}>
                <div className="h-full bg-ink p-8">
                  <span className="font-display text-sm text-accent nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg text-white">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Centers */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="The Centers"
                title="Where space comes available."
                lede="Availability changes constantly. Ask about a specific center and you will get current space, dimensions and delivery condition."
                className="!max-w-2xl"
              />
              <ArrowLink href="/portfolio">Full portfolio</ArrowLink>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {centers.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="link-underline text-[0.9375rem] text-ink-500 transition-colors hover:text-ink"
                >
                  {c.name}
                  <span className="text-mute">
                    {" "}
                    — {c.city}, {c.state}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Leasing, answered." />
          </Reveal>
          <div className="mt-12 space-y-px bg-line">
            {leasingFaqs.map((f) => (
              <details key={f.q} className="group bg-paper">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-medium text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="relative mt-2 block size-3 shrink-0 text-accent">
                    <span className="absolute left-0 top-1/2 block h-px w-full bg-current" />
                    <span className="absolute left-1/2 top-0 block h-full w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-500">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ready to talk about a space?"
        body="Call the office or send a note. You will hear back from someone who can quote terms, not just take a message."
        primary={{ label: "Contact the office", href: "/contact" }}
        secondary={{ label: "Leasing services", href: "/services/leasing" }}
      />
    </>
  );
}
