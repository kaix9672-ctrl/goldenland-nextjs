"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink/20 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 z-40 border-b border-line bg-paper shadow-sm"
        >
          <nav aria-label="Mobile" className="container-gl flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-sm text-slate hover:text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
