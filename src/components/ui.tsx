import Link from "next/link";
import { cx } from "@/lib/util";

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "sand" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    sand: "bg-sand text-ink",
    ink: "grain relative overflow-hidden bg-ink text-white",
  };
  return (
    <section id={id} className={cx("py-24 md:py-32", tones[tone], className)}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/**
 * Dark section set inside the page rather than run to the edges.
 *
 * The reference does this constantly: a black panel floating on white with a
 * generous radius, so the section reads as an object on the page instead of a
 * band across it. Used for the capability and insight blocks.
 */
export function Panel({
  children,
  className,
  tone = "ink",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "sand";
  id?: string;
}) {
  return (
    <section id={id} className={cx("bg-paper py-10 md:py-14", className)}>
      <div className="shell">
        <div
          className={cx(
            "grain relative overflow-hidden rounded-2xl px-6 py-16 md:rounded-3xl md:px-12 md:py-24",
            tone === "ink" ? "bg-ink text-white" : "bg-sand text-ink",
          )}
        >
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cx(
            "eyebrow",
            align === "center" && "eyebrow-center",
            tone === "light" && "!text-accent-bright",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "display-tight mt-6 text-(length:--text-display-sm)",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <div
          className={cx(
            "mt-6 text-[1.0625rem] leading-relaxed",
            tone === "light" ? "text-white/60" : "text-ink-500",
          )}
        >
          {lede}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content pieces                                                      */
/* ------------------------------------------------------------------ */

export function Stat({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div>
      <div
        className={cx(
          "display-tight nums text-4xl md:text-5xl",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {value}
      </div>
      <div
        className={cx("label-sm mt-3", tone === "light" ? "text-white/45" : "text-mute")}
      >
        {label}
      </div>
    </div>
  );
}

/** Small mono chip. Used for statuses, anchors, categories and counts. */
export function Pill({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
}) {
  const tones = {
    light: "bg-sand text-ink-500",
    dark: "bg-white/10 text-white/75",
    accent: "bg-accent-bright text-ink",
  };
  return (
    <span
      className={cx(
        "label-sm inline-flex items-center rounded-full px-2.5 py-1",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs text-mute">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="opacity-40">/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-ink-500">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="link-underline hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Standard interior page header.
 *
 * A rounded black panel rather than a full-bleed band — the same object the
 * homepage sections are built from, so an interior page opens in the same
 * language the homepage closes in.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  trail?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-paper pt-24 md:pt-28">
      <div className="shell">
        <div className="grain relative overflow-hidden rounded-2xl bg-ink px-6 pb-14 pt-14 text-white md:rounded-3xl md:px-12 md:pb-20 md:pt-20">
          {/* Faint plan grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="relative z-10">
            {trail && (
              <div className="mb-8 font-mono text-xs text-white/40">
                <ol className="flex flex-wrap items-center gap-2">
                  {trail.map((item, i) => (
                    <li key={item.path} className="flex items-center gap-2">
                      {i > 0 && <span aria-hidden className="opacity-40">/</span>}
                      {i === trail.length - 1 ? (
                        <span aria-current="page" className="text-white/70">
                          {item.name}
                        </span>
                      ) : (
                        <Link href={item.path} className="link-underline hover:text-white">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {eyebrow && <p className="eyebrow !text-accent-bright">{eyebrow}</p>}
            <h1 className="display-tight mt-6 max-w-4xl text-(length:--text-display) text-white">
              {title}
            </h1>
            {lede && (
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60">{lede}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Closing call to action used at the foot of most pages.
 *
 * The reference ends every page on one oversized line and one filled pill,
 * and nothing else. This does the same: the supporting copy is small and the
 * headline is the biggest type on the page below the hero.
 */
export function CtaBand({
  title = "Let's talk about your project.",
  body = "Whether you hold a site, need a store built, or are looking for space in one of our centers — you will get a straight answer from the people who make the decision.",
  primary = { label: "Start a Conversation", href: "/contact" },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Panel className="!pb-16 md:!pb-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="max-w-3xl">
          <p className="eyebrow !text-accent-bright">Get in touch</p>
          <h2 className="display-tight mt-6 text-(length:--text-display) text-white">
            {title}
          </h2>
          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-white/60">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href={primary.href} className="btn btn-accent">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn btn-on-dark">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </Panel>
  );
}

/** Wrapper that fades content in as it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cx("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 text-[0.875rem] font-medium transition-colors",
        tone === "light" ? "text-white hover:text-accent-bright" : "text-ink hover:text-accent",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <span
        aria-hidden
        className={cx(
          "grid size-6 shrink-0 place-items-center rounded-full transition-colors",
          tone === "light"
            ? "bg-white/10 group-hover:bg-accent-bright group-hover:text-ink"
            : "bg-sand group-hover:bg-accent-bright",
        )}
      >
        <svg viewBox="0 0 16 10" className="size-2.5" fill="none">
          <path
            d="M10.5 1L15 5l-4.5 4M15 5H1"
            stroke="currentColor"
            strokeWidth="1.6"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </svg>
      </span>
    </Link>
  );
}
