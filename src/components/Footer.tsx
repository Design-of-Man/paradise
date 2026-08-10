import Link from "next/link";
import { site, addressOneLine, mapsUrl } from "@/data/site";
import { sortedServices } from "@/data/services";
import { markets } from "@/data/markets";
import { sortedPartners } from "@/data/partners";
import { Logo } from "./Logo";

const company = [
  { label: "About the Firm", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="shell relative z-10 py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Identity + contact */}
          <div>
            <Logo showTagline className="text-paper" />

            <p className="mt-7 max-w-sm text-[0.9375rem] leading-relaxed text-white/55">
              {site.tagline}
            </p>

            <address className="mt-8 space-y-3 not-italic text-sm">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline block text-white/70 transition-colors hover:text-white"
              >
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="link-underline block font-semibold text-white nums"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-underline block text-white/70 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </address>

            <div className="mt-8 flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Paradise Ventures on LinkedIn"
                className="grid size-10 place-items-center border border-line-dark text-white/65 transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.65h.05a4.17 4.17 0 0 1 3.75-2.05c4 0 4.75 2.6 4.75 6V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21h-4V9Z" />
                </svg>
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Paradise Ventures on Facebook"
                className="grid size-10 place-items-center border border-line-dark text-white/65 transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M14 9V7.2c0-.9.2-1.3 1.5-1.3H17V3h-2.6C11.2 3 10 4.4 10 7v2H8v3h2v9h4v-9h2.7l.3-3H14Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FooterCol title="Services">
              {sortedServices.map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Company">
              {company.map((c) => (
                <FooterLink key={c.href} href={c.href}>
                  {c.label}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Markets">
              {markets.map((m) => (
                <FooterLink key={m.slug} href={`/markets/${m.slug}`}>
                  {m.stateName}
                </FooterLink>
              ))}
              <FooterLink href="/portfolio/completed">Completed Projects</FooterLink>
              <FooterLink href="/portfolio/active">Active Development</FooterLink>
            </FooterCol>

            <FooterCol title="Sectors">
              {sortedPartners.map((p) => (
                <FooterLink key={p.slug} href={`/partners/${p.slug}`}>
                  {p.name}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* Standing CTA */}
        <div className="mt-16 grid gap-6 border-t border-line-dark pt-10 sm:grid-cols-2 sm:items-center">
          <p className="font-display text-2xl text-white">
            Have a site, a space, or a project in mind?
          </p>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            <Link href="/contact" className="btn btn-accent">
              Start a Conversation
            </Link>
            <Link href="/leasing" className="btn btn-on-dark">
              Leasing Enquiries
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-dark pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="sm:text-right">
            {addressOneLine} · Serving Florida, Georgia and the Southeast since{" "}
            {site.founded}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="link-underline text-[0.8125rem] text-white/60 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
