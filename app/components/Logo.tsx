/**
 * PLACEHOLDER wordmark. Swap for the real Golden Land logo asset (SVG/PNG in
 * /public) before launch. Kept intentionally simple so it reads as a stand-in.
 */
export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-lg font-medium tracking-tight ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
      aria-label="Golden Land Construction & Development"
    >
      Golden Land
      <span className="ml-1 align-super font-mono text-[0.58rem] tracking-normal text-gold">
        &amp; DEV
      </span>
    </span>
  );
}
