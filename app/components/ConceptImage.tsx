/**
 * ConceptImage — a deliberately labeled placeholder.
 *
 * The real site has no photography loaded yet. Rather than present AI concept
 * imagery as completed projects, every image slot renders as a clearly marked
 * placeholder. Swap these for real project photography before launch; for any
 * AI-generated concept art you do use, keep the "Concept" label.
 *
 * label:
 *   "concept"     -> AI/concept art (must stay labeled)
 *   "placeholder" -> awaiting real photography
 */
export function ConceptImage({
  caption,
  label = "placeholder",
  ratio = "aspect-[4/3]",
  tone = "concrete",
}: {
  caption?: string;
  label?: "concept" | "placeholder";
  ratio?: string;
  tone?: "concrete" | "graphite";
}) {
  const bg = tone === "graphite" ? "bg-graphite" : "bg-concrete";
  const grid =
    tone === "graphite"
      ? "[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
      : "[background-image:linear-gradient(rgba(20,22,26,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,22,26,0.05)_1px,transparent_1px)]";
  const text = tone === "graphite" ? "text-concrete/70" : "text-slate";
  return (
    <figure
      className={`relative flex ${ratio} w-full items-end overflow-hidden ${bg} ${grid} [background-size:40px_40px]`}
    >
      <span
        className={`absolute left-3 top-3 rounded-sm border px-2 py-1 font-mono text-[0.6rem] uppercase tracking-eyebrow ${
          tone === "graphite"
            ? "border-white/20 text-goldsoft"
            : "border-ink/15 text-gold"
        }`}
      >
        {label === "concept" ? "Concept image" : "Photo placeholder"}
      </span>
      {caption ? (
        <figcaption className={`relative m-4 text-sm ${text}`}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
