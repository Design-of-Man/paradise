/**
 * Coded crane hero.
 *
 * A tower crane in silhouette against a dawn sky, drawn as inline SVG rather
 * than shipped as video. The reason is LCP: the headline is ordinary HTML and
 * paints on the first frame, with no media to download and decode first. That
 * constraint drives the DOM order below — the text block comes first and the
 * artwork is positioned behind it, so the words are parsed before a single
 * lattice member is.
 *
 * Everything animated here is a `transform` on a group. No geometry attributes
 * change between frames, so nothing re-lays-out and the whole cycle stays on
 * the compositor. Timing and easing live in globals.css under "Crane hero".
 */

const VB = { w: 1600, h: 900 };

/** One haze tile. The drift animation translates by exactly this, so it loops. */
const HAZE_TILE = 520;

/* Mast ------------------------------------------------------------------ */
const MAST_X = 1290;
const MAST_HALF = 17;
const MAST_TOP = 148;
const MAST_FOOT = VB.h;

/* Jib (working arm), extending left across the open sky ------------------ */
const JIB_TOP = 176;
const JIB_BOT = 204;
const JIB_TIP = 566;

/* Counter-jib and counterweight ----------------------------------------- */
const CJIB_END = 1478;
const CJIB_TOP = 182;
const CJIB_BOT = 214;

/** Cat head — the A-frame above the slewing point that the pendants hang from. */
const CAT_APEX_Y = 50;

/**
 * The lattice is the entire visual interest, so it is drawn as real repeated
 * bracing rather than a bar with a texture on it. Repetitive markup like this
 * compresses to almost nothing over the wire.
 */
function mastLattice() {
  const left = MAST_X - MAST_HALF;
  const right = MAST_X + MAST_HALF;
  const step = 48;
  const out: React.ReactElement[] = [];
  for (let y = MAST_TOP; y < MAST_FOOT; y += step) {
    const y2 = Math.min(y + step, MAST_FOOT);
    out.push(
      <path key={`m${y}`} d={`M${left} ${y}L${right} ${y2}M${right} ${y}L${left} ${y2}`} />,
      <path key={`mh${y}`} d={`M${left} ${y}H${right}`} />,
    );
  }
  return out;
}

function jibLattice() {
  const step = 44;
  const out: React.ReactElement[] = [];
  let up = true;
  for (let x = JIB_TIP; x < MAST_X - MAST_HALF; x += step) {
    const x2 = Math.min(x + step, MAST_X - MAST_HALF);
    out.push(
      <path
        key={`j${x}`}
        d={up ? `M${x} ${JIB_BOT}L${x2} ${JIB_TOP}` : `M${x} ${JIB_TOP}L${x2} ${JIB_BOT}`}
      />,
      <path key={`jv${x}`} d={`M${x} ${JIB_TOP}V${JIB_BOT}`} />,
    );
    up = !up;
  }
  return out;
}

function counterJibLattice() {
  const step = 38;
  const out: React.ReactElement[] = [];
  let up = true;
  for (let x = MAST_X + MAST_HALF; x < CJIB_END; x += step) {
    const x2 = Math.min(x + step, CJIB_END);
    out.push(
      <path
        key={`c${x}`}
        d={up ? `M${x} ${CJIB_BOT}L${x2} ${CJIB_TOP}` : `M${x} ${CJIB_TOP}L${x2} ${CJIB_BOT}`}
      />,
    );
    up = !up;
  }
  return out;
}

/*
 * A distant second crane was drawn and then cut. The brief left it to
 * judgement, and on screen it clutters: its mast runs two faint verticals
 * straight down through the headline, and its jib occupies the exact band of
 * empty sky the type needs. Depth is already carried by the haze and the sun
 * glow behind the lattice. One crane, a lot of sky.
 */

export function CraneHero({
  eyebrow,
  headline,
  cta,
}: {
  eyebrow: string;
  headline: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="crane-hero">
      {/*
        Text first in the document. The artwork that sits behind it is markup
        too, and putting it above the headline would mean the browser parses a
        few thousand lattice members before reaching the words that are the LCP
        element. Order here is a performance decision, not a stylistic one.
      */}
      <div className="crane-hero__content">
        <p className="crane-hero__eyebrow">{eyebrow}</p>
        <h1 className="crane-hero__headline">{headline}</h1>
        <a className="crane-hero__cta" href={cta.href}>
          {cta.label}
        </a>
      </div>

      <div className="crane-hero__art" aria-hidden="true">
        <svg
          className="crane-hero__svg"
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <defs>
            <linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--sky-0)" />
              <stop offset="34%" stopColor="var(--sky-1)" />
              <stop offset="62%" stopColor="var(--sky-2)" />
              <stop offset="83%" stopColor="var(--sky-3)" />
              <stop offset="100%" stopColor="var(--sky-4)" />
            </linearGradient>
            {/* The low sun sits behind the crane, which is what makes it a silhouette. */}
            <radialGradient id="sun" cx="0.74" cy="0.86" r="0.55">
              <stop offset="0%" stopColor="var(--sky-glow)" stopOpacity="0.85" />
              <stop offset="55%" stopColor="var(--sky-glow)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--sky-glow)" stopOpacity="0" />
            </radialGradient>
            {/*
              Haze as a tiling pattern rather than a single wide rect.
              A rect has ends, and a rect translated far enough to loop brings
              one of those ends into frame as a hard vertical edge — which is
              exactly what it did. A pattern has no ends: translate it by one
              tile width and the result is indistinguishable from not having
              moved, so the drift is both visible and perfectly periodic.
            */}
            <radialGradient id="hazeBlob">
              <stop offset="0%" stopColor="var(--sky-haze)" stopOpacity="0.62" />
              <stop offset="60%" stopColor="var(--sky-haze)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--sky-haze)" stopOpacity="0" />
            </radialGradient>
            <pattern
              id="hazeTile"
              width={HAZE_TILE}
              height="240"
              patternUnits="userSpaceOnUse"
            >
              <ellipse cx={HAZE_TILE / 2} cy="120" rx={HAZE_TILE / 2} ry="104" fill="url(#hazeBlob)" />
            </pattern>

            {/*
              Scrim for the headline. Rising from the bottom rather than a flat
              wash, so the blown-out horizon survives above it — but white type
              over a #e9e2d4 sky is unreadable, and legibility wins.
            */}
            <linearGradient id="scrim" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="var(--sky-scrim)" stopOpacity="0.62" />
              <stop offset="34%" stopColor="var(--sky-scrim)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="var(--sky-scrim)" stopOpacity="0.07" />
              <stop offset="100%" stopColor="var(--sky-scrim)" stopOpacity="0" />
            </linearGradient>
            {/*
              The scrim is pulled left as well as up. The headline needs the
              cover; the horizon glow behind the crane does not, and darkening
              the whole width flattened the dawn into an overcast night.
            */}
            <linearGradient id="scrimX" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="58%" stopColor="#fff" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.12" />
            </linearGradient>
            <mask id="scrimMask">
              <rect width={VB.w} height={VB.h} fill="url(#scrimX)" />
            </mask>
          </defs>

          <rect width={VB.w} height={VB.h} fill="url(#dawn)" />
          <rect width={VB.w} height={VB.h} fill="url(#sun)" />

          {/*
            Haze bands. Each is drawn at double width and translated by exactly
            half its own length, so the loop point is invisible. Three speeds
            give parallax; the slowest takes two and a half minutes.
          */}
          <g className="crane-haze">
            <rect className="haze haze--1" x={-HAZE_TILE} y="430" width={VB.w + HAZE_TILE * 2} height="240" fill="url(#hazeTile)" opacity="0.55" />
            <rect className="haze haze--2" x={-HAZE_TILE} y="580" width={VB.w + HAZE_TILE * 2} height="240" fill="url(#hazeTile)" opacity="0.4" />
            <rect className="haze haze--3" x={-HAZE_TILE} y="690" width={VB.w + HAZE_TILE * 2} height="240" fill="url(#hazeTile)" opacity="0.5" />
          </g>

          <g className="crane-ink" fill="none" stroke="var(--crane)" strokeWidth="2.6">
            <g className="crane-near">
              {/* Mast */}
              <path d={`M${MAST_X - MAST_HALF} ${MAST_TOP}V${MAST_FOOT}`} strokeWidth="3.4" />
              <path d={`M${MAST_X + MAST_HALF} ${MAST_TOP}V${MAST_FOOT}`} strokeWidth="3.4" />
              {mastLattice()}

              {/* Cat head and pendant stays */}
              <path
                d={`M${MAST_X - MAST_HALF} ${MAST_TOP}L${MAST_X} ${CAT_APEX_Y}L${MAST_X + MAST_HALF} ${MAST_TOP}`}
                strokeWidth="3"
              />
              <path d={`M${MAST_X - 9} ${MAST_TOP - 46}H${MAST_X + 9}`} />
              <path d={`M${MAST_X} ${CAT_APEX_Y + 6}L${JIB_TIP + 40} ${JIB_TOP - 2}`} strokeWidth="1.9" />
              <path d={`M${MAST_X} ${CAT_APEX_Y + 6}L${CJIB_END - 26} ${CJIB_TOP}`} strokeWidth="1.9" />

              {/* Working jib */}
              <path d={`M${JIB_TIP} ${JIB_TOP}H${MAST_X - MAST_HALF}`} strokeWidth="3.2" />
              <path d={`M${JIB_TIP} ${JIB_BOT}H${MAST_X - MAST_HALF}`} strokeWidth="3.2" />
              <path d={`M${JIB_TIP} ${JIB_TOP}V${JIB_BOT}`} />
              {jibLattice()}

              {/* Counter-jib and counterweight */}
              <path d={`M${MAST_X + MAST_HALF} ${CJIB_TOP}H${CJIB_END}`} strokeWidth="3.2" />
              <path d={`M${MAST_X + MAST_HALF} ${CJIB_BOT}H${CJIB_END}`} strokeWidth="3.2" />
              {counterJibLattice()}
              <path
                d={`M${CJIB_END - 62} ${CJIB_TOP - 6}h62v58h-62z`}
                fill="var(--crane)"
                stroke="none"
              />

              {/* Operator cab, tucked under the slewing ring */}
              <path d={`M${MAST_X - MAST_HALF - 30} ${JIB_BOT + 4}h30v34h-30z`} />

              {/*
                Trolley, cable and hook. Three nested transforms: the trolley
                translates along the jib, the swing group rotates about the
                trolley's own pivot, and the hoist translates down inside that —
                which is what lets the load trail behind on acceleration and
                settle after the stop.
              */}
              <g className="crane-trolley">
                <path d={`M1160 ${JIB_BOT - 12}h44v22h-44z`} />
                <g className="crane-swing">
                  <rect
                    className="crane-cable"
                    x="1181"
                    y={JIB_BOT + 8}
                    width="1.8"
                    height="1"
                    fill="var(--crane)"
                    stroke="none"
                  />
                  <g className="crane-hoist">
                    <path d={`M1168 ${JIB_BOT + 6}h28v20h-28z`} fill="var(--crane)" stroke="none" />
                    <path d={`M1182 ${JIB_BOT + 26}v14`} strokeWidth="2.2" />
                    <path
                      d={`M1182 ${JIB_BOT + 40}a9 9 0 1 0 9 -9`}
                      strokeWidth="2.6"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>

          {/* Above the crane so the silhouette sinks into the scrim, not over it. */}
          <rect
            y={VB.h * 0.3}
            width={VB.w}
            height={VB.h * 0.7}
            fill="url(#scrim)"
            mask="url(#scrimMask)"
          />
        </svg>

        {/* Static tile, never animated — it exists to break gradient banding. */}
        <div className="crane-hero__grain" />
      </div>
    </section>
  );
}
