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
    ink: "grain relative overflow-hidden bg-ink text-paper",
  };
  return (
    <section id={id} className={cx("py-20 md:py-28", tones[tone], className)}>
      <div className="relative z-10">{children}</div>
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
        <p className={cx("eyebrow", align === "center" && "eyebrow-center")}>{eyebrow}</p>
      )}
      <h2
        className={cx(
          "mt-5 text-(length:--text-display-sm)",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <div
          className={cx(
            "mt-5 text-[1.0625rem] leading-relaxed",
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
          "font-display text-4xl leading-none tracking-tight md:text-5xl nums",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {value}
      </div>
      <div
        className={cx(
          "mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]",
          tone === "light" ? "text-white/45" : "text-mute",
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-mute">
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

/** Standard interior page header. */
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
    <header className="grain relative overflow-hidden bg-ink pb-20 pt-32 text-paper md:pb-24 md:pt-40">
      {/* Faint plan grid */}
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
        {trail && (
          <div className="mb-8 text-xs text-white/40">
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
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-5 max-w-4xl text-(length:--text-display) text-white">{title}</h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{lede}</p>
        )}
        {children}
      </div>
    </header>
  );
}

/** Closing call to action used at the foot of most pages. */
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
    <Section tone="sand">
      <div className="shell">
        <div className="grid items-end gap-8 md:grid-cols-[1.6fr_1fr]">
          <div className="max-w-2xl">
            <h2 className="text-(length:--text-display-sm)">{title}</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-500">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href={primary.href} className="btn btn-primary">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Section>
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
        "group inline-flex items-center gap-2 text-[0.8125rem] font-semibold transition-colors",
        tone === "light" ? "text-white hover:text-accent-pale" : "text-ink hover:text-accent",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <svg viewBox="0 0 16 10" className="size-3 shrink-0" fill="none" aria-hidden>
        <path
          d="M10.5 1L15 5l-4.5 4M15 5H1"
          stroke="currentColor"
          strokeWidth="1.4"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </svg>
    </Link>
  );
}
