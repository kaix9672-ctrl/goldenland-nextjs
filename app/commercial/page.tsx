import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { ConceptImage } from "../components/ConceptImage";
import { commercialServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Construction — Design-Build General Contractor, California",
  description:
    "Golden Land is a commercial and institutional building contractor in California — ground-up construction, tenant improvement, and structural concrete, delivered design-build. NAICS 236220.",
  alternates: { canonical: "/commercial/" },
};

export default function Commercial() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Commercial</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              Commercial building, delivered design-build.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-concrete/80">
              Commercial and institutional construction with a single accountable
              team — engineered for speed, cost certainty, and a finish that holds
              up. Registered and structured for public-agency work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Discuss a project</Link>
              <Link href="/government/" className="btn-ghost">Public agencies</Link>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading eyebrow="What we deliver" title="Commercial capabilities" />
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {commercialServices.map(([t, d]) => (
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
            <ConceptImage tone="graphite" ratio="aspect-[21/9]" caption="Commercial build — replace with project photo" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
