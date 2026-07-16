import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process — Design-Build Delivery",
  description:
    "How Golden Land delivers: a single accountable design-build team from consultation through handoff, with AI-assisted estimating and planning for clearer bids and tighter schedules.",
  alternates: { canonical: "/process/" },
};

export default function Process() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Process</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              One team, drawings to punch list.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-concrete/80">
              Design-build means a single accountable team for design and
              construction — fewer handoffs, fewer surprises, one point of
              responsibility.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading eyebrow="How we work" title="Four phases" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {processSteps.map(([t, d], i) => (
                <div key={t} className="flex gap-5 border-t border-line pt-6">
                  <span className="font-mono text-sm text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate md:text-base">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-graphite">
          <div className="container-gl grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:py-20">
            <SectionHeading
              dark
              eyebrow="Technology-enabled delivery"
              title="AI-assisted where it counts"
              intro="We use AI-assisted estimating and planning to improve accuracy, speed, and communication — a modern approach to project management, not a replacement for skilled construction."
            />
            <ul className="space-y-4 self-center">
              {[
                "AI-assisted estimating for faster, more accurate bids",
                "AI-assisted planning and scheduling for tighter timelines",
                "Transparent, well-documented project communication",
                "Modern documentation from preconstruction through closeout",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-concrete/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-goldsoft" />
                  <span className="text-sm leading-relaxed md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-16 text-center">
            <Link href="/contact/" className="btn-primary">Start your project</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
