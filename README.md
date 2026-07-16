# goldenland-nextjs

Canonical production website for **Golden Land Construction & Development Inc.** —
a premium design-build contractor (residential, commercial, and government-ready).

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.

> This is a canonical rebuild, not a recovered original. It preserves the known
> requirements of the previous site and integrates the verified government-readiness
> package. Swap in the real logo, photography, and copy where marked.

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — premium hero, sectors, selected work, government strip, process, trust, CTA |
| `/residential` | Residential capabilities (architectural concrete, custom homes, outdoor living) |
| `/commercial` | Commercial / institutional building, design-build |
| `/projects` | Selected work (labeled placeholders until real photography is added) |
| `/process` | Design-build process + technology-enabled delivery |
| `/about` | Company, founder, values |
| `/government` | Government contracting — competencies, credential ledger, capabilities, downloads, procurement |
| `/standards` | Safety, Quality, Environmental, Ethics, Code of Conduct, EEO |
| `/contact` | Project inquiry form + government procurement contact |

## Develop / verify

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run build      # production build (static export -> ./out)
```

## Honesty guardrails (do not remove)

- SAM.gov shown as **Submitted / Processing** (not Active).
- **UEI R5TREQY8EJ26** shown; **CAGE, CSLB, DIR, insurance, bonding, certifications** are
  pending/hidden via `lib/credentials.ts` until verified — flip a row's `status` to
  `"active"` and paste the value when it arrives.
- No fabricated projects, clients, testimonials, awards, or completed government work.
- All imagery renders through `ConceptImage` as clearly-labeled placeholders/concepts —
  no AI concept image is presented as a completed project. Replace with real photography.

## Things to replace before launch

- `app/components/Logo.tsx` — placeholder wordmark → real logo asset.
- `ConceptImage` slots → real project photography.
- `app/contact/page.tsx` form `action` → your form handler (Formspree / API route / CRM).
- `lib/credentials.ts` procurement email/phone → real, monitored contact.
- Real street address in the JSON-LD (`app/layout.tsx`).

## Deploy

Static export (`output: "export"` in `next.config.mjs`) builds to `./out` and deploys to
any static host. For full Next SSR on Vercel, remove that line. See push/deploy notes in
the delivery summary.
