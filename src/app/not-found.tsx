import Link from "next/link";
import { Section } from "@/components/ui";
import { sortedServices } from "@/data/services";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <>
      <header className="grain relative overflow-hidden bg-ink pb-24 pt-40 text-paper">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="shell relative z-10">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 max-w-3xl text-(length:--text-display) text-white">
            That page is not here.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            The link may be out of date, or the page may have moved when the site
            was rebuilt. Here is where most people were heading.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-accent">
              Back to home
            </Link>
            <Link href="/portfolio" className="btn btn-on-dark">
              View the portfolio
            </Link>
          </div>
        </div>
      </header>

      <Section>
        <div className="shell grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="label-sm text-accent">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {sortedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="link-underline text-sm text-ink-500 hover:text-ink"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-sm text-accent">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              {[
                { l: "About", h: "/about" },
                { l: "Our Team", h: "/team" },
                { l: "Our Process", h: "/process" },
                { l: "Markets", h: "/markets" },
                { l: "Insights", h: "/insights" },
                { l: "FAQ", h: "/faq" },
              ].map((i) => (
                <li key={i.h}>
                  <Link
                    href={i.h}
                    className="link-underline text-sm text-ink-500 hover:text-ink"
                  >
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-sm text-accent">
              Talk to someone
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              Call the office and you will reach someone who can answer the
              question directly.
            </p>
            <a
              href={`tel:${site.phone}`}
              className="link-underline mt-4 block display-tight text-2xl text-ink nums"
            >
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-primary mt-6">
              Contact us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
