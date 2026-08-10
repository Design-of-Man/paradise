"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";
import { cx } from "@/lib/util";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on navigation.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Before the first scroll the header floats over the page's dark hero; once
  // the paper background fades in, everything switches back to ink.
  const onDark = !scrolled && !open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-paper/92 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-18 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className={cx(
              "transition-opacity hover:opacity-70",
              // Every page opens on a dark hero, so the header sits on ink
              // until the first scroll lifts the paper background into place.
              onDark ? "text-white" : "text-ink",
            )}
            aria-label={`${site.name} — home`}
          >
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.children ? item.label : null)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  aria-expanded={item.children ? openGroup === item.label : undefined}
                  className={cx(
                    "flex items-center gap-1.5 px-3.5 py-2 text-[0.8125rem] font-medium transition-colors",
                    isActive(item.href)
                      ? onDark
                        ? "text-accent-pale"
                        : "text-accent"
                      : onDark
                        ? "text-white/75 hover:text-white"
                        : "text-ink-500 hover:text-ink",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className={cx(
                        "size-2 transition-transform duration-300",
                        openGroup === item.label && "rotate-180",
                      )}
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && openGroup === item.label && (
                  <div className="absolute left-0 top-full w-78 pt-2">
                    <div className="border border-line bg-paper p-2 shadow-[0_24px_60px_-24px_rgba(14,20,29,0.28)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group block px-3.5 py-2.5 transition-colors hover:bg-sand"
                        >
                          <span className="block text-[0.8125rem] font-semibold text-ink transition-colors group-hover:text-accent">
                            {child.label}
                          </span>
                          {child.blurb && (
                            <span className="mt-0.5 block text-xs leading-snug text-mute">
                              {child.blurb}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone}`}
              className={cx(
                "hidden text-[0.8125rem] font-semibold transition-colors xl:block nums",
                onDark ? "text-white hover:text-accent-pale" : "text-ink hover:text-accent",
              )}
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className={cx(
                "btn hidden !px-5 !py-2.5 sm:inline-flex",
                onDark ? "btn-accent" : "btn-primary",
              )}
            >
              Start a Conversation
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cx(
                "grid size-10 place-items-center lg:hidden",
                onDark ? "text-white" : "text-ink",
              )}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cx(
                    "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cx(
          "fixed inset-0 z-40 bg-paper transition-all duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="h-18 md:h-20" />
        <nav
          className="shell h-[calc(100dvh-4.5rem)] overflow-y-auto pb-16"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <div key={item.href} className="border-b border-line py-1">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="block py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup(openGroup === item.label ? null : item.label)
                    }
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={openGroup === item.label}
                    className="grid size-10 place-items-center text-mute"
                  >
                    <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                      <line
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={cx(
                          "origin-center transition-transform duration-300",
                          openGroup === item.label && "rotate-90",
                        )}
                      />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && openGroup === item.label && (
                <div className="pb-3 pl-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2.5 text-sm text-ink-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-primary w-full">
              Start a Conversation
            </Link>
            <a href={`tel:${site.phone}`} className="btn btn-ghost w-full nums">
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
