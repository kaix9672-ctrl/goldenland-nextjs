import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { SocialIcons } from "../components/SocialIcons";
import { kairos } from "@/lib/site";
import { company } from "@/lib/credentials";

export const metadata: Metadata = {
  title: "Technology — Powered by KAIROS Property Intelligence",
  description:
    "Golden Land Construction uses KAIROS Property Intelligence for AI construction planning, property research, permit intelligence, and property due diligence — supporting smarter planning without replacing human expertise.",
  keywords: [
    "AI construction planning",
    "property intelligence",
    "property research",
    "construction technology",
    "AI property analysis",
    "construction innovation",
    "permit intelligence",
    "property due diligence",
    "government construction technology",
  ],
  alternates: { canonical: "/technology/" },
  openGraph: {
    title: "Powered by KAIROS Property Intelligence — Golden Land Construction",
    description:
      "Advanced property intelligence supporting smarter construction planning and decision-making.",
    url: `${company.website}/technology/`,
    type: "website",
  },
};

// WebPage schema + KAIROS as a distinct technology-partner Organization.
// Does NOT duplicate the GeneralContractor (Golden Land) schema in the root layout.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Powered by KAIROS Property Intelligence",
      description:
        "Golden Land Construction uses KAIROS Property Intelligence to support smarter project planning and property research.",
      url: `${company.website}/technology/`,
      isPartOf: { "@type": "WebSite", name: company.legalName, url: company.website },
      about: { "@type": "Organization", name: kairos.name, url: kairos.site },
    },
    {
      "@type": "Organization",
      name: kairos.name,
      url: kairos.site,
      description:
        "Property intelligence platform supporting property research, permit history, and planning. Most advanced coverage in New York, expanding across the United States.",
      sameAs: [kairos.social.instagram, kairos.social.tiktok, kairos.social.x],
      email: kairos.support,
    },
  ],
};

const whyCards: [string, string][] = [
  ["Property Intelligence", "Review available property information to inform planning."],
  ["Permit History", "Understand prior permitting activity relevant to a site."],
  ["Property Research", "Consolidate publicly available research in one place."],
  ["Public Records", "Draw on publicly available records during due diligence."],
  ["Neighborhood Context", "Consider surrounding context that affects a project."],
  ["Investment Analysis", "Support investment thinking with organized data."],
  ["Planning Support", "Bring better inputs to early project planning."],
  ["Construction Decision Support", "Support construction decisions with clearer information."],
];

const advantage = [
  "Professional construction experience",
  "AI-assisted property intelligence",
  "Public data research",
  "Smarter planning",
];

export default function Technology() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-graphite">
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />
          <div className="container-gl relative py-24 md:py-32">
            <Eyebrow dark>Technology</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] text-white md:text-5xl">
              Powered by KAIROS Property Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-concrete/80">
              Golden Land Construction uses KAIROS Property Intelligence to
              support smarter project planning and property research — advanced
              property intelligence in service of premium construction.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={kairos.site} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit KAIROS
              </a>
              <a href={kairos.app} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                Property Intelligence Platform
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.3fr] md:py-24">
            <SectionHeading eyebrow="Introduction" title="Advanced intelligence, applied to construction" />
            <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <p>
                KAIROS helps our team review publicly available property
                information, permitting history, zoning information, neighborhood
                context, and other available intelligence to support better
                project planning and decision-making.
              </p>
              <p>
                KAIROS is continuously expanding its geographic coverage
                throughout the United States.
              </p>
              <p className="border-l-2 border-gold/50 pl-5 text-ink">
                KAIROS currently offers its most advanced intelligence in New York
                while expanding to additional markets across the United States.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Use KAIROS */}
        <section className="bg-concrete">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading eyebrow="Why we use KAIROS" title="Better inputs, better projects" />
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {whyCards.map(([t, d], i) => (
                <div key={t} className="border-t border-line pt-5">
                  <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Advantage */}
        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
            <SectionHeading
              eyebrow="Technology advantage"
              title="Human expertise, amplified — not replaced"
              intro="Golden Land pairs decades-tested construction fundamentals with modern intelligence. The technology sharpens our planning; our people still make the calls."
            />
            <div className="self-center">
              <ul className="space-y-3">
                {advantage.map((t, i) => (
                  <li key={t} className="flex items-center gap-4 border-b border-line py-3 last:border-b-0">
                    <span className="font-mono text-xs text-gold">{i === 0 ? "" : "+"}</span>
                    <span className="font-display text-lg text-ink">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate">
                Together: smarter planning, without replacing human expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Explore KAIROS + social */}
        <section className="bg-graphite">
          <div className="container-gl grid gap-10 py-20 md:grid-cols-2 md:py-24">
            <div>
              <Eyebrow dark>Explore KAIROS</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white md:text-4xl">
                See the platform behind our planning.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={kairos.site} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Main Website
                </a>
                <a href={kairos.app} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                  Property Intelligence Platform
                </a>
              </div>
            </div>
            <div className="self-center">
              <dl className="divide-y divide-linedark border-y border-linedark">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-concrete/70">Support</dt>
                  <dd>
                    <a href={`mailto:${kairos.support}`} className="font-mono text-sm text-white hover:text-goldsoft">
                      {kairos.support}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm text-concrete/70">Follow KAIROS</dt>
                  <dd><SocialIcons dark /></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-paper">
          <div className="container-gl flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Interested in learning more about our technology?
              </h2>
              <p className="mt-2 text-slate">Explore KAIROS Property Intelligence.</p>
            </div>
            <a href={kairos.site} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              Visit KAIROS
            </a>
          </div>
        </section>

        {/* Keep Golden Land primary */}
        <section className="border-t border-line bg-concrete">
          <div className="container-gl flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm text-slate">
              Golden Land remains a premium design-build and construction company.
              KAIROS is the technology that supports smarter planning — not the
              work itself.
            </p>
            <Link href="/contact/" className="btn-ghost shrink-0">Start a project</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
