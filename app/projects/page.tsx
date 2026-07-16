import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow } from "../components/ui";
import { ConceptImage } from "../components/ConceptImage";

export const metadata: Metadata = {
  title: "Projects — Selected Work",
  description:
    "Selected residential and commercial work by Golden Land Construction & Development Inc. Project photography is being added; nothing shown represents a completed project until captioned as such.",
  alternates: { canonical: "/projects/" },
};

const categories = [
  ["Architectural concrete", "Board-formed and polished concrete as a design feature."],
  ["Custom homes", "Modern residential builds and additions."],
  ["Luxury outdoor living", "Pool decks, fire lounges, water features, outdoor kitchens."],
  ["Commercial", "Ground-up commercial and institutional construction."],
  ["Interiors", "Polished floors, feature walls, floating stairs."],
  ["Foundations & structure", "Engineered foundations and structural concrete."],
];

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Projects</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              Selected work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-concrete/80">
              A look at the kind of work we do. We are adding real project
              photography — the tiles below are labeled placeholders, and none of
              them represents a completed project.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map(([t, d], i) => (
                <div key={t}>
                  <ConceptImage
                    ratio="aspect-[4/3]"
                    tone={i % 4 === 0 ? "graphite" : "concrete"}
                    caption={`${t} — replace with project photo`}
                  />
                  <h3 className="mt-4 font-display text-lg text-ink">{t}</h3>
                  <p className="mt-1 text-sm text-slate">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-line pt-8">
              <p className="max-w-2xl text-sm text-slate">
                Have a project in mind? We&rsquo;ll walk you through comparable
                work and references during consultation.
              </p>
              <Link href="/contact/" className="btn-primary mt-5">Start a project</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
