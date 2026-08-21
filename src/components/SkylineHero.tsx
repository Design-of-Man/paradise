import Image from "next/image";

/**
 * Photographic homepage hero.
 *
 * Downtown St. Petersburg at sunset, shot across the bay from the pier — the
 * firm's own skyline, since the office is at 153 2nd Ave N in the Sundial
 * building a few hundred metres inside this frame.
 *
 * The photograph is the LCP element, so it is marked `priority` — Next emits a
 * preload for it in the head and the decode starts alongside the HTML rather
 * than after it. Nothing else in the hero downloads: the two scrims are
 * gradients and the grain is the 64px tile the site already ships.
 */

const SRC = "/images/brand/st-pete-skyline.webp";
const ALT =
  "The downtown St. Petersburg, Florida skyline at sunset, seen across the bay from the St. Pete Pier approach.";

export function SkylineHero({
  eyebrow,
  headline,
  cta,
  coords,
}: {
  eyebrow: string;
  headline: string;
  cta: { label: string; href: string };
  /** The office's own position, printed as a readout along the bottom rail. */
  coords?: { lat: number; lng: number };
}) {
  return (
    <section className="skyline-hero">
      {/*
        Text first in the document. The headline is the first thing that should
        be parseable, and the layering is done with position, not order.
      */}
      <div className="skyline-hero__content">
        <p className="skyline-hero__eyebrow">{eyebrow}</p>
        <h1 className="skyline-hero__headline">{headline}</h1>

        <div className="skyline-hero__rail">
          <a className="skyline-hero__cta" href={cta.href}>
            {cta.label}
            <svg viewBox="0 0 16 10" className="size-3" fill="none" aria-hidden>
              <path d="M10.5 1L15 5l-4.5 4M15 5H1" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>

          {coords && (
            <p className="skyline-hero__coords" aria-hidden>
              <span>
                {Math.abs(coords.lat).toFixed(4)}
                <sup>º</sup>
                {coords.lat >= 0 ? "N" : "S"}
              </span>
              <span>
                {Math.abs(coords.lng).toFixed(4)}
                <sup>º</sup>
                {coords.lng >= 0 ? "E" : "W"}
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="skyline-hero__art">
        {/*
          The frame is taller than the hero by exactly the distance the
          parallax travels, and it is pinned to the top — so translating it up
          can never expose a gap along the bottom edge. See globals.css.
        */}
        <div className="skyline-hero__frame">
          <Image
            src={SRC}
            alt={ALT}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="skyline-hero__img"
          />
        </div>

        {/*
          Two scrims, aria-hidden with the grain because they are surface
          rather than content.

          The lower one buys the headline its contrast. The upper one exists
          for the header: it floats over this hero in white until the first
          scroll, and white on a lit sunset cloud is not a legible pairing.
        */}
        <div className="skyline-hero__scrim" aria-hidden="true" />
        <div className="skyline-hero__scrim--top" aria-hidden="true" />
        <div className="skyline-hero__grain" aria-hidden="true" />
      </div>
    </section>
  );
}
