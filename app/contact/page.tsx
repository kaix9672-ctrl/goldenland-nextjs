import type { Metadata } from "next";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { company } from "@/lib/credentials";

export const metadata: Metadata = {
  title: "Contact — Start a Project or Reach Procurement",
  description:
    "Contact Golden Land Construction & Development Inc. Homeowners and commercial clients start a project here; contracting officers and primes can reach our government procurement contact directly.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>Contact</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              Let&rsquo;s talk about your project.
            </h1>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl grid gap-14 py-20 md:grid-cols-2 md:py-24">
            {/* Project inquiry form */}
            <div>
              <SectionHeading eyebrow="Project inquiry" title="Tell us what you're building" />
              {/*
                Static-export note: wire `action` to your form handler
                (e.g. Formspree, a Next API route, or your CRM endpoint).
              */}
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-slate">Name</span>
                    <input name="name" required className="mt-1 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-gold" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate">Email</span>
                    <input name="email" type="email" required className="mt-1 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-gold" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-medium text-slate">Project type</span>
                  <select name="project_type" className="mt-1 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-gold">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Public agency / government</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate">Details</span>
                  <textarea name="message" rows={5} className="mt-1 w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-gold" />
                </label>
                <button type="submit" className="btn-primary">Send inquiry</button>
              </form>
            </div>

            {/* Procurement contact */}
            <div>
              <SectionHeading eyebrow="Government procurement" title="Contracting officers & primes" />
              <p className="mt-6 text-sm leading-relaxed text-slate md:text-base">
                For solicitations, sources-sought notices, and teaming inquiries,
                reach our government contracts office directly.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {[
                  ["Attn", company.procurement.name],
                  ["Email", company.procurement.email],
                  ["Entity", company.legalName],
                  ["UEI", "R5TREQY8EJ26"],
                  ["SAM.gov", "Submitted / processing"],
                  ["Primary NAICS", "236220"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-slate">{k}</dt>
                    <dd className="font-mono text-sm text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href="/documents/golden-land-capability-statement.pdf" className="btn-ghost mt-8">
                Download Capability Statement
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
