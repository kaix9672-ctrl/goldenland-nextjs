import Link from "next/link";
import { Logo } from "./Logo";
import { company } from "@/lib/credentials";
import { nav, kairos } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="container-gl flex h-16 items-center justify-between">
        <Link href="/" aria-label="Golden Land — home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact/" className="btn-primary hidden px-5 py-2.5 text-xs lg:inline-flex">
            Start a project
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-concrete">
      <div className="container-gl grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm text-concrete/70">
            {company.legalName} — premium design-build construction for
            residential, commercial, and public-agency clients across{" "}
            {company.headquarters}.
          </p>
          <a
            href={`mailto:${company.contact.email}`}
            className="mt-4 inline-block font-mono text-sm text-concrete/80 hover:text-white"
          >
            {company.contact.email}
          </a>
        </div>
        <div>
          <p className="eyebrow-dark">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-concrete/80">
            <li><Link href="/residential/" className="hover:text-white">Residential</Link></li>
            <li><Link href="/commercial/" className="hover:text-white">Commercial</Link></li>
            <li><Link href="/projects/" className="hover:text-white">Projects</Link></li>
            <li><Link href="/process/" className="hover:text-white">Process</Link></li>
            <li><Link href="/standards/" className="hover:text-white">Standards</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow-dark">Government</p>
          <ul className="mt-4 space-y-2 text-sm text-concrete/80">
            <li><Link href="/government/" className="hover:text-white">Government contracting</Link></li>
            <li><a href="/documents/golden-land-capability-statement.pdf" className="hover:text-white">Capability Statement</a></li>
            <li><Link href="/contact/" className="hover:text-white">Procurement contact</Link></li>
          </ul>
          <p className="eyebrow-dark mt-6">Registrations</p>
          <ul className="mt-3 space-y-1 font-mono text-xs text-concrete/60">
            <li>UEI: R5TREQY8EJ26</li>
            <li>SAM.gov: submitted / processing</li>
            <li>NAICS 236220 (primary)</li>
          </ul>
        </div>
      </div>
      {/* Technology Partner — KAIROS (additive) */}
      <div className="border-t border-linedark">
        <div className="container-gl flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow-dark">Technology Partner</p>
            <p className="mt-2 text-sm text-concrete/80">
              Powered by{" "}
              <Link href="/technology/" className="text-white hover:text-goldsoft">
                {kairos.name}
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-concrete/60">
            <a href={kairos.site} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              kairosaiagent.com
            </a>
            <a href={kairos.app} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              app.kairosaiagent.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-linedark">
        <div className="container-gl flex flex-col items-start justify-between gap-2 py-5 text-xs text-concrete/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          {/* Add "Licensed · Insured · Bonded" only once CSLB #, insurance, and bonding are verified. */}
          <span className="font-mono">California design-build · Government-ready</span>
        </div>
      </div>
    </footer>
  );
}
