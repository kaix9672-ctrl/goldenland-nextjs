import Link from "next/link";
import { Header, Footer } from "./components/Chrome";
import { Eyebrow } from "./components/ui";

/**
 * DEMO HOMEPAGE.
 * The hero below is a PLACEHOLDER standing in for Golden Land's existing premium
 * hero — it is NOT a redesign. The sections to actually port into the live
 * homepage are marked "ADD TO LIVE HOMEPAGE": the capability strip, sectors
 * band, trust signals, and the upgraded closing CTA.
 */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── PLACEHOLDER HERO (keep your existing hero on the live site) ── */}
        <section className="relative overflow-hidden bg-graphite">
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="container-gl relative py-28 md:py-36">
            <Eyebrow dark>Architectural concrete · Design-build</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] text-white md:text-6xl">
              Built like architecture.
              <br />
              Delivered like clockwork.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-concrete/80">
              A premium California builder crafting modern residential and
              commercial spaces — and structured to deliver for public agencies.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Start a project
              </Link>
              <Link href="/government/" className="btn-ghost-dark">
                Government &amp; public agencies
              </Link>
            </div>
          </div>
        </section>

        {/* ── ADD TO LIVE HOMEPAGE #1: government-ready capability strip ── */}
        <section className="border-b border-line bg-paper">
          <div className="container-gl flex flex-col items-center justify-between gap-4 py-5 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate">
              <span className="font-medium text-ink">
                Federally registered and prepared for public work.
              </span>{" "}
              UEI R5TREQY8EJ26 · NAICS 236220 · SAM.gov in process.
            </p>
            <Link
              href="/government/"
              className="shrink-0 font-mono text-xs uppercase tracking-eyebrow text-gold hover:text-ink"
            >
              Government capabilities →
            </Link>
          </div>
        </section>

        {/* ── ADD TO LIVE HOMEPAGE #2: sectors band ── */}
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
                {
                  t: "Residential",
                  d: "Custom modern homes, additions, and architectural concrete for homeowners who want their house to look like the reference image.",
                },
                {
                  t: "Commercial",
                  d: "Ground-up and tenant-improvement work for commercial and institutional buildings, delivered design-build for speed and cost control.",
                },
                {
                  t: "Public Agencies",
                  d: "Registered and structured to support federal, state, county, municipal, education, and utility work — as a prime or as a subcontractor to established primes.",
                },
              ].map((s, i) => (
                <div
                  key={s.t}
                  className="flex flex-col border-t border-line pt-6"
                >
                  <span className="font-mono text-xs text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADD TO LIVE HOMEPAGE #3: trust signals ── */}
        <section className="bg-concrete">
          <div className="container-gl py-16">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["California Corporation", "Established 2021, Los Angeles County"],
                ["Federally registered", "UEI active · SAM.gov in process · CAGE pending"],
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

        {/* ── ADD TO LIVE HOMEPAGE #4: upgraded closing CTA ── */}
        <section className="bg-graphite">
          <div className="container-gl flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-4xl">
                Have a project — or a solicitation?
              </h2>
              <p className="mt-4 text-concrete/75">
                Homeowners and commercial clients start here. Contracting
                officers, primes, and agency buyers can reach our government
                contracts office directly.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Start a project
              </Link>
              <Link href="/government/" className="btn-ghost-dark">
                Procurement contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
