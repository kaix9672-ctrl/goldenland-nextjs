import Link from "next/link";
import { Header, Footer } from "./components/Chrome";
import { Eyebrow } from "./components/ui";
import { ConceptImage } from "./components/ConceptImage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-graphite">
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="container-gl relative py-28 md:py-40">
            <Eyebrow dark>Architectural concrete · Design-build · Los Angeles</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.03] text-white md:text-6xl">
              Built like architecture.
              <br />
              Delivered like clockwork.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-concrete/80">
              Golden Land builds modern residential and commercial spaces in
              board-formed concrete, foundations, and framing — with the
              discipline of a design-build team and the eye of a fine-art studio.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Start a project</Link>
              <Link href="/projects/" className="btn-ghost-dark">See our work</Link>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <div className="max-w-2xl">
              <Eyebrow>Who we build for</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                One standard of craft, three kinds of client.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Residential", "Custom modern homes, additions, and architectural concrete for homeowners who want their house to look like the reference image.", "/residential/"],
                ["Commercial", "Ground-up and tenant-improvement work for commercial and institutional buildings, delivered design-build for speed and cost control.", "/commercial/"],
                ["Public Agencies", "Registered and structured to support federal, state, and local work — as a prime or a subcontractor to established primes.", "/government/"],
              ].map(([t, d, href], i) => (
                <Link key={t} href={href} className="group flex flex-col border-t border-line pt-6 transition-colors">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl text-ink group-hover:text-gold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{d}</p>
                  <span className="mt-4 font-mono text-xs uppercase tracking-eyebrow text-slate group-hover:text-gold">Explore &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Selected work (labeled placeholders) */}
        <section className="bg-concrete">
          <div className="container-gl py-20 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                  Concrete as the finished surface.
                </h2>
              </div>
              <Link href="/projects/" className="btn-ghost">All projects</Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <ConceptImage caption="Board-formed concrete residence — replace with project photo" />
              <ConceptImage caption="Polished concrete interior — replace with project photo" />
              <ConceptImage caption="Luxury outdoor living — replace with project photo" />
            </div>
            <p className="mt-5 font-mono text-xs text-slate">
              Real project photography will replace these placeholders. No image
              here represents a completed project.
            </p>
          </div>
        </section>

        {/* Government capability strip */}
        <section className="border-y border-line bg-paper">
          <div className="container-gl flex flex-col items-center justify-between gap-4 py-5 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate">
              <span className="font-medium text-ink">Federally registered and prepared for public work.</span>{" "}
              UEI R5TREQY8EJ26 &middot; NAICS 236220 &middot; SAM.gov submitted / processing.
            </p>
            <Link href="/government/" className="shrink-0 font-mono text-xs uppercase tracking-eyebrow text-gold hover:text-ink">
              Government capabilities &rarr;
            </Link>
          </div>
        </section>

        {/* Process teaser */}
        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                Design-build, with modern project management.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
                One accountable team from first sketch to final punch list. We use
                AI-assisted estimating and planning to produce clearer bids,
                tighter schedules, and fewer surprises.
              </p>
              <Link href="/process/" className="btn-ghost mt-7">Our process</Link>
            </div>
            <ConceptImage tone="graphite" ratio="aspect-[16/10]" label="concept" caption="Concept visualization — architectural concrete" />
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-concrete">
          <div className="container-gl py-16">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["California Corporation", "Established 2021, Los Angeles County"],
                ["Federally registered", "UEI active · SAM.gov processing · CAGE pending"],
                ["Design-build delivery", "Single accountable team, drawings to punch list"],
                ["Technology-enabled", "AI-assisted estimating and planning on every job"],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="rule-gold mb-4" />
                  <p className="font-display text-lg text-ink">{t}</p>
                  <p className="mt-2 text-sm text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-graphite">
          <div className="container-gl flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl">
                Have a project &mdash; or a solicitation?
              </h2>
              <p className="mt-4 text-concrete/75">
                Homeowners and commercial clients start here. Contracting
                officers, primes, and agency buyers can reach our government
                contracts office directly.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Start a project</Link>
              <Link href="/government/" className="btn-ghost-dark">Procurement contact</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
