import type { Metadata } from "next";

import { PageHero, Section, SectionHeading, CtaBand, Reveal } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, jsonLdGraph, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Development Process",
  description:
    "Nine stages from site identification to grand opening — how Paradise Ventures takes a retail development from raw land to open doors, with every discipline held in-house.",
  path: "/process",
  keywords: [
    "retail development process",
    "shopping center development stages",
    "site selection entitlement construction retail",
  ],
});

const stages = [
  {
    n: "01",
    title: "Site Identification",
    duration: "Ongoing",
    body: "We read trade areas before they finish forming. Platted-but-unbuilt lots, subdivision approvals, permit velocity and school enrolment lead retail demand by roughly the interval a development takes to deliver — which is not a coincidence.",
    outputs: ["Trade-area analysis", "Household growth model", "Competitive position assessment"],
  },
  {
    n: "02",
    title: "Site Control",
    duration: "2–6 weeks",
    body: "A contract with a diligence period long enough to answer the questions that matter, and a price that survives the answers. Control comes before spend, never after.",
    outputs: ["Purchase contract", "Diligence period secured", "Title and survey ordered"],
  },
  {
    n: "03",
    title: "Feasibility & Underwriting",
    duration: "1–3 months",
    body: "The stage that saves projects. Preliminary engineering tests stormwater sizing, sewer capacity, access geometry and truck circulation while the cost of a bad answer is still small. Most sites that fail should fail here.",
    outputs: ["Preliminary site plan", "Engineering constraints report", "Development pro forma"],
  },
  {
    n: "04",
    title: "Anchor Commitment",
    duration: "Parallel",
    body: "The grocery or pharmacy lease is negotiated and executed before site work begins. The firm does not start vertical construction on speculative anchor demand — this is the single discipline the rest of the process depends on.",
    outputs: ["Executed anchor lease", "Prototype requirements fixed", "Delivery date committed"],
  },
  {
    n: "05",
    title: "Entitlement & Permitting",
    duration: "6–18 months",
    body: "Rezoning where required, site plan approval, driveway and utility permits, stormwater and environmental review. We engage jurisdictional staff before filing — a pre-application meeting that surfaces a problem is worth more than a clean submittal that discovers it in month four.",
    outputs: ["Zoning approval", "Approved site plan", "Building and access permits"],
  },
  {
    n: "06",
    title: "Capital Formation",
    duration: "Parallel",
    body: "Construction debt and equity arranged against a committed lease rather than a projection. Capital is in place before mobilisation, which is what allows the firm to hold a retailer's date rather than hope for it.",
    outputs: ["Construction financing", "Equity partnership", "Closed land acquisition"],
  },
  {
    n: "07",
    title: "Construction",
    duration: "9–14 months",
    body: "Contractor procurement against a scope we wrote, then in-house construction management through delivery. Change orders are priced and decided, not merely reported. Cost-to-complete is tracked continuously.",
    outputs: ["Sitework and vertical", "Cost and schedule control", "Quality and punch"],
  },
  {
    n: "08",
    title: "Leasing & Tenant Coordination",
    duration: "Parallel",
    body: "Shop space and outparcels are leased into traffic the anchor already generates. Landlord work, deliveries and inspections are sequenced so every tenant can open on the date they planned around.",
    outputs: ["Executed shop leases", "Tenant improvement coordination", "Outparcel disposition"],
  },
  {
    n: "09",
    title: "Delivery, Opening & Management",
    duration: "Ongoing",
    body: "Certificate of occupancy, grand opening, and then the part most developers hand off — we manage what we build. Deferred maintenance shows up first in renewals, then in traffic, then in valuation, usually years after the decision that caused it.",
    outputs: ["Certificate of occupancy", "Grand opening", "Ongoing asset management"],
  },
];

const processFaqs = [
  {
    q: "How long does a retail development take from start to finish?",
    a: "For a project requiring rezoning, twelve to twenty-four months from site control to construction commencement is a reasonable planning assumption, with nine to fourteen months of construction following. A by-right site with no rezoning requirement moves considerably faster.",
  },
  {
    q: "At what stage do you commit to a delivery date?",
    a: "The delivery date is committed when the anchor lease is executed — stage four. Capital formation and entitlement are then run against that date rather than the other way around.",
  },
  {
    q: "What most commonly delays a retail project?",
    a: "Four items account for most of the variance: organised neighbourhood opposition, comprehensive plan amendments, environmental conditions such as wetlands or contamination, and access permitting on a state roadway. All four are best discovered during feasibility.",
  },
  {
    q: "Can you join a project already in progress?",
    a: "Yes. If you hold a site or have already begun entitlement, the firm can pick up the assignment mid-stream as a fee development or joint venture.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
          faqSchema(processFaqs),
        )}
      />

      <PageHero
        eyebrow="How We Work"
        title="Nine stages. One accountable team."
        lede="Retail development fails in predictable places. This is the sequence we run to make sure it fails early and cheaply — during feasibility — rather than late and expensively."
        trail={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
      />

      <Section>
        <div className="shell">
          <ol className="space-y-4">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i < 4 ? i * 60 : 0}>
                <li className="card grid gap-8 p-8 md:grid-cols-[5rem_1.6fr_1fr] md:items-start md:p-11">
                  <div>
                    <span className="display-tight text-4xl text-accent/35 nums">{stage.n}</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h2 className="text-2xl">{stage.title}</h2>
                      <span className="label text-mute">
                        {stage.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
                      {stage.body}
                    </p>
                  </div>

                  <div className="border-l border-line pl-6 md:pl-8">
                    <h3 className="label-sm text-accent">
                      Outputs
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {stage.outputs.map((o) => (
                        <li key={o} className="flex gap-2.5 text-sm text-ink-500">
                          <span aria-hidden className="mt-[0.45rem] block size-1.5 shrink-0 rounded-full bg-accent-bright" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Common Questions"
              title="What people ask about the timeline."
            />
          </Reveal>

          <dl className="mt-14 grid gap-4 md:grid-cols-2">
            {processFaqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 70}>
                <div className="rounded-xl h-full bg-ink p-8 md:p-9">
                  <dt className="text-lg text-white">{f.q}</dt>
                  <dd className="mt-4 text-sm leading-relaxed text-white/55">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand
        title="Tell us where your project stands."
        body="Whether you are at raw land or halfway through entitlement, we can tell you quickly what it will take to finish — and whether it is worth finishing."
        secondary={{ label: "Read our insights", href: "/insights" }}
      />
    </>
  );
}
