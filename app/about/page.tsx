import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../components/Chrome";
import { Eyebrow, SectionHeading } from "../components/ui";
import { company } from "@/lib/credentials";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Golden Land Construction & Development Inc.",
  description:
    "Golden Land Construction & Development Inc. is a California design-build contractor in Los Angeles County, founded in 2021, specializing in architectural concrete, foundations, and framing for residential and commercial clients.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-graphite">
          <div className="container-gl py-20 md:py-28">
            <Eyebrow dark>About</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] text-white md:text-5xl">
              A builder with a studio&rsquo;s eye.
            </h1>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl grid gap-12 py-20 md:grid-cols-[1fr_1.3fr] md:py-24">
            <SectionHeading eyebrow="Company" title="Who we are" />
            <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <p>
                {company.legalName} is a {company.entityType} headquartered in{" "}
                {company.headquarters}, established in {company.founded}. We design
                and build modern residential and commercial spaces, with deep craft
                in architectural concrete, foundations, and framing.
              </p>
              <p>
                We bring a fine-art sensibility to construction: the line of a
                board-formed wall, the finish of a polished floor, the geometry of
                a floating stair. And we back that craft with modern, technology-
                enabled project management.
              </p>
              <p>
                We are extending our capability to the public sector deliberately
                and transparently — federally registered, with state licensing and
                certifications in process. Where a credential is still pending, we
                say so plainly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-concrete">
          <div className="container-gl grid gap-12 py-16 md:grid-cols-[1fr_1.3fr] md:py-20">
            <SectionHeading eyebrow="Leadership" title="Founder" />
            <div>
              <p className="font-display text-xl text-ink">Kfir Hayat</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-eyebrow text-gold">
                Founder &amp; Chief Executive Officer
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate md:text-base">
                Kfir leads Golden Land&rsquo;s design-build practice and its move
                into public-sector work, pairing hands-on construction with a
                modern, technology-forward approach to delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="container-gl py-20 md:py-24">
            <SectionHeading eyebrow="What we stand for" title="Values" />
            <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {values.map(([t, d]) => (
                <div key={t}>
                  <div className="rule-gold mb-4" />
                  <h3 className="font-display text-lg text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/contact/" className="btn-primary">Work with us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
