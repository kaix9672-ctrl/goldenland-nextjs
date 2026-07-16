import type { Metadata } from "next";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow } from "../components/ui";

export const metadata: Metadata = {
  title: "Standards & Compliance — Safety, Quality, Environmental & Ethics",
  description:
    "Golden Land Construction & Development Inc. commitments to safety, quality, environmental responsibility, ethics, code of conduct, and equal opportunity — the standards public agencies and primes expect from a professional contractor.",
  alternates: { canonical: "/standards/" },
};

const standards = [
  {
    id: "safety",
    eyebrow: "Safety",
    title: "Safety is a precondition, not a line item",
    body: "Every Golden Land jobsite runs to a documented safety standard aligned with Cal/OSHA requirements. We plan work to prevent incidents, brief crews and trade partners before they mobilize, and hold subcontractors to the same expectations we hold ourselves.",
    note: "Formal written Safety Manual and any safety certifications: in preparation.",
  },
  {
    id: "quality",
    eyebrow: "Quality",
    title: "Built once, built right",
    body: "We deliver design-build work to a premium finish standard, with structured quality checks at each phase — from concrete and framing through final punch list. Our project management approach keeps specifications, submittals, and inspections documented and traceable.",
    note: "Formal written Quality Management Plan: in preparation.",
  },
  {
    id: "environmental",
    eyebrow: "Environmental Commitment",
    title: "Responsible building practices",
    body: "We are committed to responsible material sourcing, waste reduction, and compliance with applicable environmental regulations on every project. As we take on public work, we will align our practices with agency environmental and sustainability requirements.",
    note: "Formal written Environmental Policy: in preparation.",
  },
  {
    id: "ethics",
    eyebrow: "Ethics",
    title: "Straightforward, every time",
    body: "We compete and communicate honestly. We represent our capabilities and credentials accurately — stating plainly what is in place and what is still in process — and we expect the same integrity from our partners and suppliers.",
    note: "Formal written Ethics Policy: in preparation.",
  },
  {
    id: "conduct",
    eyebrow: "Code of Conduct",
    title: "How we work with everyone",
    body: "Golden Land expects professional, respectful conduct from employees, subcontractors, and suppliers on every jobsite and in every agency interaction. Our code sets expectations for integrity, safety, confidentiality, and fair dealing.",
    note: "Formal written Supplier & Subcontractor Code of Conduct: in preparation.",
  },
  {
    id: "eeo",
    eyebrow: "Equal Opportunity",
    title: "Equal opportunity employer",
    body: "Golden Land is committed to equal employment opportunity and to hiring, developing, and partnering without discrimination. As we pursue public contracts, we will meet applicable equal-opportunity and non-discrimination requirements.",
    note: "Formal written EEO Policy statement: in preparation.",
  },
];

export default function StandardsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Standards &amp; Compliance</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-white md:text-5xl">
              The standards a professional contractor is held to.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-concrete/80">
              These are our commitments. Where a formal written policy or
              certification is still being finalized, we mark it clearly rather
              than overstate it.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl divide-y divide-line py-8">
            {standards.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="grid gap-6 py-14 md:grid-cols-[1fr_1.6fr] md:gap-12"
              >
                <div>
                  <Eyebrow>{s.eyebrow}</Eyebrow>
                  <h2 className="mt-4 font-display text-2xl leading-snug text-ink md:text-3xl">
                    {s.title}
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-slate md:text-lg">
                    {s.body}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 border border-line bg-concrete px-4 py-2 font-mono text-xs text-slate">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
