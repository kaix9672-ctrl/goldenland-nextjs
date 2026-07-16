import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { ConceptImage } from "../components/ConceptImage";
import { residentialServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Construction — Architectural Concrete & Custom Homes",
  description:
    "Golden Land builds modern custom homes, additions, and architectural concrete in Los Angeles — board-formed and polished concrete, foundations, framing, and luxury outdoor living.",
  alternates: { canonical: "/residential/" },
};

export default function Residential() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Residential</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              Homes where the concrete is the finish.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-concrete/80">
              Modern custom homes, additions, and outdoor living built to a
              premium, design-forward standard — with architectural concrete as a
              signature, not a substrate.
            </p>
            <Link href="/contact/" className="btn-primary mt-8">Start a project</Link>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading eyebrow="What we build" title="Residential capabilities" />
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {residentialServices.map(([t, d]) => (
                <div key={t} className="border-t border-line pt-5">
                  <h3 className="font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-concrete">
          <div className="container-gl py-16 md:py-20">
            <div className="grid gap-5 md:grid-cols-2">
              <ConceptImage ratio="aspect-[4/3]" caption="Floating concrete entry — replace with project photo" />
              <ConceptImage ratio="aspect-[4/3]" caption="Modern backyard oasis — replace with project photo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
