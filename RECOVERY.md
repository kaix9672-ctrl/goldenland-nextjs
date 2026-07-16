# RECOVERY & DEPLOYMENT — goldenland-nextjs

This is the **single canonical** repository for the Golden Land Construction &
Development Inc. website. It is fully self-contained and recoverable from the ZIP
backup (which includes the `.git` history). Never create a duplicate repository.

## 1. Recover the project from the ZIP backup

```bash
mkdir -p ~/dev && cd ~/dev
unzip /path/to/goldenland-nextjs-backup.zip -d goldenland-nextjs
cd goldenland-nextjs
git log --oneline        # confirms full history is intact
npm install
npm run build            # verifies it builds
```

The ZIP contains the complete source **and** the `.git` folder, so the entire
commit history travels with it. As long as you keep the ZIP, the project is
recoverable even if any temporary environment is lost.

## 2. Push to GitHub (creates the permanent remote)

Create an **empty** repo named `goldenland-nextjs` on GitHub (no README, no
license, no .gitignore — the repo already has them). Then:

```bash
cd ~/dev/goldenland-nextjs
git remote add origin https://github.com/<your-username>/goldenland-nextjs.git
git branch -M main
git push -u origin main
```

## 3. Connect to Vercel

Easiest (recommended): Vercel dashboard → **Add New → Project** → import
`goldenland-nextjs` from GitHub. Vercel auto-detects Next.js. Every push to `main`
then deploys automatically.

Or via CLI:

```bash
npm i -g vercel
cd ~/dev/goldenland-nextjs
vercel            # first (preview) deploy — links/creates the project
vercel --prod     # production deploy
```

Build settings (auto-detected): Framework **Next.js**, Build `next build`,
Output `out` (static export). Remove `output: "export"` in `next.config.mjs` if you
later want full SSR/ISR on Vercel.

## 4. All future work happens here

Clone from GitHub, branch, PR, merge to `main`. No new website projects, no
duplicate repos, no temporary-only code.

## Honesty guardrails (do not remove)

SAM.gov shows **Submitted / Processing** (never Active). UEI **R5TREQY8EJ26** is
shown. CAGE, CSLB, DIR, insurance, bonding, and certifications stay pending/hidden
in `lib/credentials.ts` until verified. No fabricated projects, clients, awards,
testimonials, government experience, past performance, or licenses. All imagery is
labeled placeholder/concept until replaced with real photography.
