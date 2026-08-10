/**
 * The Paradise Ventures sail mark — three overlapping sail forms in the brand
 * blue and greens.
 *
 * Reproduced as vector from the supplied logo artwork so it stays crisp at any
 * size and can be recoloured for dark backgrounds. If you have the original
 * vector file, drop it in at /public/images/logo.svg and point `Logo` at it —
 * the surrounding layout reserves the same footprint either way.
 */
export function Mark({
  className,
  monochrome = false,
}: {
  className?: string;
  /** Renders the mark in a single inherited colour, for tight//small contexts. */
  monochrome?: boolean;
}) {
  const blue = monochrome ? "currentColor" : "var(--color-sky)";
  const green = monochrome ? "currentColor" : "var(--color-leaf)";
  const lime = monochrome ? "currentColor" : "var(--color-leaf-light)";

  return (
    <svg
      viewBox="0 0 200 96"
      className={className}
      fill="none"
      role="img"
      aria-label="Paradise Ventures"
    >
      {/* Rear sail — light green, leaning right */}
      <path
        d="M118 88 L150 14 L192 88 Z"
        fill={lime}
        opacity={monochrome ? 0.45 : 1}
      />
      {/* Main sail — brand green */}
      <path
        d="M56 88 L104 6 L163 88 Z"
        fill={green}
        opacity={monochrome ? 0.75 : 1}
      />
      {/* Fore sail — brand blue, overlapping at the base */}
      <path
        d="M14 88 L62 30 L96 88 Z"
        fill={blue}
      />
    </svg>
  );
}
