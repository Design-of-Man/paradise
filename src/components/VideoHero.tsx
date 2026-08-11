/**
 * Video hero.
 *
 * The footage is portrait (784×1168), which is the fact that shapes every
 * decision here. It fills a phone beautifully and has to be cropped hard for a
 * landscape desktop viewport, so `object-position` is set to hold the horizon
 * and the crane rather than letting a centre crop cut both.
 *
 * The poster is frame one of the loop, so there is no flash between the still
 * and the first painted frame. As with the coded hero, the headline is plain
 * HTML placed before the media in the document — it is the LCP element and
 * nothing about the video is allowed to delay it.
 */
export function VideoHero({
  eyebrow,
  headline,
  cta,
}: {
  eyebrow: string;
  headline: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="video-hero">
      {/* Text first: it paints before a byte of video is considered. */}
      <div className="crane-hero__content">
        <p className="crane-hero__eyebrow">{eyebrow}</p>
        <h1 className="crane-hero__headline">{headline}</h1>
        <a className="crane-hero__cta" href={cta.href}>
          {cta.label}
        </a>
      </div>

      <div className="video-hero__media" aria-hidden="true">
        <video
          className="video-hero__video"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
        >
          {/*
            WebM first, and not for weight — VP9 is barely smaller here. It is
            for coverage: Chromium builds without proprietary codecs, which is
            most Linux packaging, cannot decode H.264 and would show nothing but
            the poster. Browsers take the first source they can play, so those
            get VP9 and Safari falls through to H.264.
          */}
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/*
          A scrim rising from the bottom, not a flat wash over the whole frame —
          the sunset is the reason to use this footage and covering it evenly
          would waste it. Weighted left, where the type sits.
        */}
        <div className="video-hero__scrim" />
      </div>
    </section>
  );
}
