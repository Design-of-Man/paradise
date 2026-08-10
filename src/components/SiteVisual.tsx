import { hash, seeded } from "@/lib/util";

/**
 * Generated site-plan artwork.
 *
 * Every project gets a distinct abstract aerial plan — anchor box, shop strip,
 * parking bays, outparcel pads and an arterial — derived deterministically from
 * its slug. This gives each project page real visual identity before client
 * photography is supplied, and the same seed always renders the same plan, so
 * the artwork is stable across builds.
 *
 * When a real photo is available, `ProjectFigure` renders it instead.
 */
export function SiteVisual({
  seed,
  className,
  tone = "sand",
}: {
  seed: string;
  className?: string;
  tone?: "sand" | "ink";
}) {
  const rand = seeded(hash(seed));

  const dark = tone === "ink";
  const bg = dark ? "#131b26" : "#efeae0";
  const lot = dark ? "#1b2430" : "#e5dfd2";
  const stroke = dark ? "rgba(255,255,255,0.13)" : "rgba(14,20,29,0.13)";
  const building = dark ? "#f2eee6" : "#0e141d";
  const accent = "#8cc63f";

  // Anchor building sits along the rear of the site, its width varying a little.
  const anchorW = 150 + Math.round(rand() * 60);
  const anchorH = 52 + Math.round(rand() * 14);
  const anchorX = 60 + Math.round(rand() * 30);

  // Shop strip returns down one side; direction flips by seed.
  const flip = rand() > 0.5;
  const stripH = 34 + Math.round(rand() * 12);
  const stripW = 70 + Math.round(rand() * 34);

  // Parking bays between the buildings and the arterial.
  const bayRows = 3 + Math.round(rand() * 2);

  // Outparcel pads along the frontage.
  const pads = 2 + Math.round(rand() * 2);

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="Abstract site plan illustration"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={bg} />

      {/* Parcel boundary */}
      <rect
        x="34"
        y="26"
        width="332"
        height="222"
        fill={lot}
        stroke={stroke}
        strokeWidth="1"
      />

      {/* Parking bays */}
      {Array.from({ length: bayRows }).map((_, r) => {
        const y = 132 + r * 22;
        return (
          <g key={r}>
            <line x1="62" y1={y} x2="338" y2={y} stroke={stroke} strokeWidth="1" />
            {Array.from({ length: 16 }).map((_, c) => (
              <line
                key={c}
                x1={64 + c * 17}
                y1={y}
                x2={64 + c * 17}
                y2={y + 11}
                stroke={stroke}
                strokeWidth="1"
              />
            ))}
          </g>
        );
      })}

      {/* Anchor building */}
      <rect
        x={anchorX}
        y="44"
        width={anchorW}
        height={anchorH}
        fill={building}
        rx="1"
      />
      {/* Loading dock notch */}
      <rect
        x={anchorX + anchorW - 26}
        y="36"
        width="26"
        height="8"
        fill={building}
        opacity="0.45"
      />

      {/* Shop strip returning down one side */}
      <rect
        x={flip ? anchorX + anchorW + 10 : anchorX - stripW - 10}
        y="44"
        width={stripW}
        height={stripH}
        fill={building}
        opacity="0.72"
        rx="1"
      />

      {/* Outparcel pads along the frontage, one highlighted in accent */}
      {Array.from({ length: pads }).map((_, i) => {
        const w = 40 + Math.round(rand() * 18);
        const x = 60 + i * (86 + Math.round(rand() * 10));
        return (
          <rect
            key={i}
            x={x}
            y="212"
            width={w}
            height="26"
            fill={i === 0 ? accent : building}
            opacity={i === 0 ? 0.9 : 0.32}
            rx="1"
          />
        );
      })}

      {/* Arterial roadway across the frontage */}
      <rect x="0" y="262" width="400" height="20" fill={dark ? "#0b111a" : "#ddd6c6"} />
      <line
        x1="0"
        y1="272"
        x2="400"
        y2="272"
        stroke={accent}
        strokeWidth="1.5"
        strokeDasharray="14 12"
        opacity="0.75"
      />

      {/* Site access points */}
      <rect x="118" y="248" width="30" height="14" fill={dark ? "#0b111a" : "#ddd6c6"} />
      <rect x="262" y="248" width="30" height="14" fill={dark ? "#0b111a" : "#ddd6c6"} />
    </svg>
  );
}
