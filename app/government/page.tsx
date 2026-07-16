import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { CredentialLedger } from "../components/CredentialLedger";
import { company, federal, stateCompliance, naics, psc } from "@/lib/credentials";

export const metadata: Metadata = {
  title: "Government Contracting — Public Agency, Federal & Public Works Capabilities",
  description:
    "Golden Land Construction & Development Inc. is a California design-build contractor prepared for government contracting — federal, state, county, municipal, education, and utility work. UEI R5TREQY8EJ26, NAICS 236220. Government contractor and public works capabilities in California.",
  keywords: [
    "government contractor California",
    "federal construction contractor",
    "public works contractor California",
    "municipal contractor Los Angeles",
    "design-build contractor",
    "emergency contractor California",
  ],
  alternates: { canonical: "/government/" },
};

const competencies = [
  ["Commercial & institutional building", "Ground-up construction of commercial and institutional facilities — NAICS 236220."],
  ["Concrete, foundations & framing", "Structural concrete, foundations, and framing — the core of our craft."],
  ["Design-build delivery", "One accountable team from design through closeout, for speed and cost certainty."],
  ["Tenant improvement & renovation", "Interior build-outs and renovations for occupied and public facilities."],
  ["Site & sitework", "Site preparation and improvements supporting building construction."],
  ["Modern architectural finishes", "Premium concrete and architectural finishes to a design-forward standard."],
];

const delivery = [
  ["Design-Build", "Single-source responsibility for design and construction."],
  ["Design-Bid-Build", "Traditional delivery against agency drawings and specifications."],
  ["Construction Manager at Risk", "Preconstruction support with a guaranteed maximum price."],
  ["Job Order Contracting", "Structured to support IDIQ / JOC task orders as capacity grows."],
];

const extended = [
  [
    "Emergency Response",
    "Structured to mobilize for public-agency emergency and disaster-recovery work, and to enroll in the California SB/DVBE Emergency Registry once certified.",
  ],
  [
    "Facilities Support",
    "Repair, maintenance, and minor construction services for public facilities.",
  ],
  [
    "Construction Materials Supply",
    "Sourcing and supply of construction materials, delivered through our vetted supplier network.",
  ],
  [
    "Logistics & Delivery",
    "Coordinated material logistics and jobsite delivery in support of construction scopes.",
  ],
  [
    "Warehousing",
    "Access to staging and warehousing capacity for materials and equipment through partners.",
  ],
];

export default function GovernmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-graphite">
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="container-gl relative py-24 md:py-32">
            <Eyebrow dark>Government &amp; Public Agencies</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              A premium California builder, prepared for public work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-concrete/80">
              Golden Land Construction &amp; Development Inc. brings the same craft
              we deliver for private clients to federal, state, county, municipal,
              education, and utility projects — as a prime contractor or as a
              reliable subcontractor to established primes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/documents/golden-land-capability-statement.pdf"
                className="btn-primary"
              >
                Download Capability Statement
              </a>
              <a href="#procurement" className="btn-ghost-dark">
                Procurement contact
              </a>
            </div>
          </div>
        </section>

        {/* Credential ledger — the signature title-block */}
        <section className="bg-ink">
          <div className="container-gl grid gap-12 py-16 md:grid-cols-2 md:py-20">
            <CredentialLedger title="Federal Registration" rows={federal} />
            <CredentialLedger title="Licensing & Compliance" rows={stateCompliance} />
          </div>
          {/* Codes */}
          <div className="border-t border-linedark">
            <div className="container-gl grid gap-10 py-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="eyebrow-dark mb-4">Codes</p>
                <p className="font-mono text-sm text-white">
                  {naics.primary.code}
                  <span className="ml-3 text-concrete/50">
                    {naics.primary.label} (primary)
                  </span>
                </p>
                <p className="mt-4 text-xs uppercase tracking-eyebrow text-concrete/50">
                  PSC
                </p>
                <p className="mt-2 font-mono text-sm text-concrete/80">
                  {psc.join("  ·  ")}
                </p>
              </div>
              <div>
                <p className="eyebrow-dark mb-4">Additional NAICS</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-concrete/70">
                  {naics.additional.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company overview */}
        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.3fr] md:py-24">
            <SectionHeading eyebrow="Company Overview" title="Who we are" />
            <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <p>
                Golden Land Construction &amp; Development Inc. is a{" "}
                {company.entityType} headquartered in {company.headquarters},
                established in {company.founded}. We design and build modern
                residential and commercial spaces, with deep craft in
                architectural concrete, foundations, and framing.
              </p>
              <p>
                We are extending that capability to the public sector
                deliberately. The company is federally registered, is completing
                SAM.gov activation, and is preparing the state licensing,
                registration, and small-business certifications that public
                agencies expect. Where a credential is still in process, we say
                so plainly — see the registration ledger above.
              </p>
            </div>
          </div>
        </section>

        {/* Core competencies */}
        <section className="bg-concrete">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading
              eyebrow="Core Competencies"
              title="What we do best"
              intro="Our primary identity is commercial and institutional building construction, anchored by concrete and structural craft."
            />
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {competencies.map(([t, d]) => (
                <div key={t} className="border-t border-line pt-5">
                  <h3 className="font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project delivery */}
        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading
              eyebrow="Project Delivery"
              title="Delivery methods we support"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {delivery.map(([t, d], i) => (
                <div key={t} className="bg-concrete p-6">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology-enabled PM */}
        <section className="bg-graphite">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-24">
            <SectionHeading
              dark
              eyebrow="Technology-Enabled Delivery"
              title="Modern project management, AI-assisted where it counts"
              intro="We use AI-assisted estimating and planning to improve accuracy, speed, and communication — clearer bids, tighter schedules, and fewer surprises for the agencies and primes we work with."
            />
            <ul className="space-y-4 self-center">
              {[
                "AI-assisted estimating for faster, more accurate bids",
                "AI-assisted planning and scheduling for tighter timelines",
                "Structured, transparent project communication and reporting",
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

        {/* Extended capabilities */}
        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading
              eyebrow="Extended Capabilities"
              title="Beyond the build"
              intro="Services we are positioned to provide in support of public-agency work — several delivered through our vetted supplier and subcontractor network."
            />
            <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {extended.map(([t, d]) => (
                <div key={t} className="border-l-2 border-gold/40 pl-5">
                  <h3 className="font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-concrete">
          <div className="container-gl grid gap-8 py-20 md:grid-cols-2 md:py-24">
            <div className="bg-paper p-8 md:p-10">
              <Eyebrow>Supplier Partnerships</Eyebrow>
              <h3 className="mt-4 font-display text-2xl text-ink">
                For suppliers
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                We are building a network of material suppliers and vendors who
                can support public-agency delivery timelines and documentation.
                Introduce your company and the categories you serve.
              </p>
              <a href="/documents/golden-land-supplier-information.pdf" className="btn-ghost mt-6">
                Supplier Information (PDF)
              </a>
            </div>
            <div className="bg-paper p-8 md:p-10">
              <Eyebrow>Subcontractor Partnerships</Eyebrow>
              <h3 className="mt-4 font-display text-2xl text-ink">
                For subcontractors &amp; primes
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                We work both as a prime and as a subcontractor to established
                primes. Trade partners and primes seeking a reliable, modern
                builder can request our teaming package.
              </p>
              <a href="/documents/golden-land-subcontractor-package.pdf" className="btn-ghost mt-6">
                Subcontractor Package (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* Geographic coverage */}
        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.3fr] md:py-24">
            <SectionHeading eyebrow="Geographic Coverage" title="Where we work" />
            <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <p>
                Golden Land is based in {company.headquarters} and primarily
                serves the greater Los Angeles region and Southern California.
              </p>
              <p>
                We consider public-agency work throughout California and will
                confirm service area on a per-solicitation basis. For federal
                opportunities outside the region, reach our government contracts
                office to discuss capacity and teaming.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading
              dark
              eyebrow="Documents"
              title="Download our government package"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Capability Statement", "golden-land-capability-statement.pdf", "One-page overview for buyers and primes"],
                ["Company Profile", "golden-land-company-profile.pdf", "Who we are, how we deliver"],
                ["Government Brochure", "golden-land-government-brochure.pdf", "Public-sector capability brochure"],
                ["Supplier Information", "golden-land-supplier-information.pdf", "For material suppliers and vendors"],
                ["Subcontractor Package", "golden-land-subcontractor-package.pdf", "Teaming information for primes and trades"],
              ].map(([label, file, desc]) => (
                <a
                  key={file}
                  href={`/documents/${file}`}
                  className="group flex items-start justify-between gap-4 border border-linedark bg-ink/40 p-6 transition-colors hover:border-goldsoft"
                >
                  <span>
                    <span className="block font-display text-lg text-white">
                      {label}
                    </span>
                    <span className="mt-1 block text-xs text-concrete/60">
                      {desc}
                    </span>
                  </span>
                  <span className="mt-1 font-mono text-xs text-goldsoft">PDF ↓</span>
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-concrete/45">
              Documents include verified identifiers and clearly marked
              placeholders for credentials still in process.
            </p>
          </div>
        </section>

        {/* Procurement contact */}
        <section id="procurement" className="bg-ink">
          <div className="container-gl grid gap-10 py-20 md:grid-cols-2 md:py-24">
            <SectionHeading
              dark
              eyebrow="Government Procurement Contact"
              title="Talk to our contracts office"
              intro="Contracting officers, primes, and agency buyers — reach us directly. We respond to solicitations, sources-sought notices, and teaming inquiries."
            />
            <div className="self-center">
              <dl className="space-y-4">
                <div className="ledger-row">
                  <dt className="text-sm text-concrete/70">Attn</dt>
                  <dd className="font-mono text-sm text-white">
                    {company.procurement.name}
                  </dd>
                </div>
                <div className="ledger-row">
                  <dt className="text-sm text-concrete/70">Email</dt>
                  <dd className="font-mono text-sm text-white">
                    {company.procurement.email}
                  </dd>
                </div>
                <div className="ledger-row">
                  <dt className="text-sm text-concrete/70">Entity</dt>
                  <dd className="font-mono text-sm text-white">
                    {company.legalName}
                  </dd>
                </div>
                <div className="ledger-row">
                  <dt className="text-sm text-concrete/70">UEI</dt>
                  <dd className="font-mono text-sm text-white">R5TREQY8EJ26</dd>
                </div>
              </dl>
              <Link href="/standards/" className="btn-ghost-dark mt-8">
                View standards &amp; compliance
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
