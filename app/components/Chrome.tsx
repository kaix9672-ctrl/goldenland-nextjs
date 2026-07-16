import Link from "next/link";
import { company } from "@/lib/credentials";

/**
 * Minimal header/footer used only so the demo pages render in realistic context.
 * On the live site you keep your existing header/footer — the only additions to
 * carry over are (1) the "Government" nav link and (2) the footer credentials row.
 */

export function Header() {
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-gl flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-ink">
          Golden Land
          <span className="ml-1 align-super font-mono text-[0.6rem] text-gold">
            &amp; DEV
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Residential", "/"],
            ["Commercial", "/"],
            ["Public Agencies", "/government/"],
            ["Standards", "/standards/"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/government/" className="btn-ghost hidden px-4 py-2 text-xs md:inline-flex">
          Government Contracting
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-concrete">
      <div className="container-gl grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-white">{company.legalName}</p>
          <p className="mt-3 max-w-xs text-sm text-concrete/70">
            Premium design-build construction for residential, commercial, and
            public-agency clients across {company.headquarters}.
          </p>
        </div>
        <div>
          <p className="eyebrow-dark">Government</p>
          <ul className="mt-4 space-y-2 text-sm text-concrete/80">
            <li>
              <Link href="/government/" className="hover:text-white">
                Government Contracting
              </Link>
            </li>
            <li>
              <Link href="/standards/" className="hover:text-white">
                Standards &amp; Compliance
              </Link>
            </li>
            <li>
              <a href="/documents/golden-land-capability-statement.pdf" className="hover:text-white">
                Capability Statement (PDF)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow-dark">Registrations</p>
          <ul className="mt-4 space-y-1.5 font-mono text-xs text-concrete/70">
            <li>UEI: R5TREQY8EJ26</li>
            <li>CAGE: pending</li>
            <li>SAM.gov: in process</li>
            <li>NAICS 236220 (primary)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linedark">
        <div className="container-gl flex flex-col items-start justify-between gap-2 py-5 text-xs text-concrete/50 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </span>
          {/* Add "Licensed · Insured · Bonded" here ONLY once CSLB #, insurance, and bonding are confirmed. */}
          <span className="font-mono">California design-build · Government-ready</span>
        </div>
      </div>
    </footer>
  );
}
