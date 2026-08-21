import { Mark } from "./Mark";

/**
 * Lockup: the brand sail mark beside the wordmark.
 *
 * The wordmark is live text in the site's display face rather than an image,
 * so it stays sharp on every display and scales with the surrounding type.
 * Colour is inherited, which lets the same component sit on paper or on ink.
 */
export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Mark className="h-8 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-medium uppercase tracking-[0.06em]">
          Paradise
        </span>
        <span className="label-sm mt-1 tracking-[0.38em] opacity-70">Ventures</span>
        {showTagline && (
          <span className="label-sm mt-2 tracking-[0.16em] opacity-50">
            Retail Development · Est. 1988
          </span>
        )}
      </span>
    </span>
  );
}
