# Paradise Ventures, Inc. — Website

Marketing site for [Paradise Ventures](https://paradiseventuresinc.com), a retail
real estate developer in Safety Harbor, Florida. Built with Next.js 15 (App
Router), React 19, TypeScript and Tailwind CSS v4. Deploys to Vercel.

117 pages are prerendered at build time — every project, service, market,
partner, team member and article is a real, indexable URL.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

Node 20+ recommended.

---

## Deploying to Vercel

Import the repository at [vercel.com/new](https://vercel.com/new). Everything is
detected automatically — no `vercel.json` and no build configuration needed.

### Environment variables

| Variable               | Required | What it does                                                       |
| ---------------------- | -------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical origin. Defaults to `https://paradiseventuresinc.com`.    |
| `RESEND_API_KEY`       | For mail | Enables enquiry-form delivery. Without it the form falls back (below). |
| `CONTACT_TO`           | No       | Recipient address. Defaults to `info@paradiseventuresinc.com`.      |
| `CONTACT_FROM`         | No       | Verified sender on your Resend domain.                              |

**Set `NEXT_PUBLIC_SITE_URL` on preview deployments** to the preview URL, or the
canonical tags on previews will point at production.

### Turning on the contact form

The form posts to `/api/contact`. Until `RESEND_API_KEY` is set the route
returns a `not_configured` response and the form tells the visitor so, offering
a pre-filled email link and the phone number instead — **an enquiry is never
silently dropped**. To enable real delivery:

1. Create an account at [resend.com](https://resend.com) and verify the sending domain.
2. Add `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM` in Vercel → Settings → Environment Variables.
3. Redeploy.

Swapping in SendGrid, Postmark or SMTP means editing one `fetch` call in
`src/app/api/contact/route.ts`.

---

## Editing content

All copy lives in typed data modules under `src/data/`. No CMS, no database —
edit a file, commit, and Vercel redeploys. Adding an entry automatically creates
its page, its sitemap entry, its social card and its internal links.

| File              | Drives                                                       |
| ----------------- | ------------------------------------------------------------ |
| `site.ts`         | Company name, address, phone, stats, navigation               |
| `projects.ts`     | Portfolio + `/portfolio/[slug]` pages                         |
| `services.ts`     | Service lines + `/services/[slug]` pages                      |
| `team.ts`         | Team grid + `/team/[slug]` profiles                           |
| `markets.ts`      | `/markets` + `/markets/[slug]` pages                          |
| `partners.ts`     | Anchor/sector pages at `/partners/[slug]`                     |
| `insights.ts`     | Articles at `/insights/[slug]`                                |
| `faq.ts`          | `/faq` and its FAQ rich-result markup                         |

### Adding a project

Append to the `projects` array in `src/data/projects.ts`. Only `slug`, `name`,
`city`, `state`, `stateName`, `status`, `type`, `summary` and `body` are
required — optional fields such as `gla`, `acreage` and `outparcels` are simply
omitted from the page when absent, so never invent a number to fill a gap.

Set `featured: true` to surface a project on the homepage.

### Adding an active project

Set `status: "in-development"` or `"under-construction"`. It appears
automatically at the top of `/portfolio/active`, which currently shows site
criteria and target markets while the pipeline array is empty.

---

## Architecture

```
src/
├── app/                      # routes (App Router)
│   ├── api/contact/          # enquiry endpoint
│   ├── [section]/[slug]/     # dynamic pages + per-page OG cards
│   ├── sitemap.ts robots.ts manifest.ts
│   └── opengraph-image.tsx   # root social card, inherited site-wide
├── components/               # Header, Footer, ui kit, ContactForm, SiteVisual
├── data/                     # all content
└── lib/                      # seo.ts (metadata + JSON-LD), og.tsx, util.ts
```

### SEO

Everything routes through `pageMeta()` in `src/lib/seo.ts`, so no page can ship
without a title, description, canonical URL and social card.

- **Structured data** — Organization, RealEstateAgent, WebSite, BreadcrumbList,
  Service, Person, Place, Article, FAQPage and ItemList, emitted per page as a
  single `@graph` document.
- **Social cards** — generated at build time by `next/og`. The root card is
  inherited down the route tree; project, service, team, market, partner and
  article segments each override it with a bespoke card.
- **Sitemap** — `/sitemap.xml`, generated from the same data the pages use.
- **Robots** — `/robots.txt`, explicitly allowing GPTBot, PerplexityBot and
  ClaudeBot alongside conventional crawlers.
- **Legacy URLs** — the old WordPress paths (`/our-team`, `/contact-us`,
  `/past-projects`, `/experience`, `/projects`) 301 to their new homes. See
  `next.config.ts`.

### Design system

Tokens live in the `@theme` block of `src/app/globals.css`.

- **Palette** — ink navy and warm paper, accented with the brand greens and blue
  taken from the logo. `--color-accent` is a darkened green so accent-on-paper
  text clears WCAG AA (4.8:1); `--color-accent-bright` is the logo green, used
  for fills and for text on ink (8.4:1).
- **Type** — Source Serif 4 (display) and Inter (UI), self-hosted by `next/font`
  so there is no third-party font request at runtime.
- **Motion** — a scroll-reveal observer that adds `js-reveal` to `<html>` before
  hiding anything, so content stays visible without JavaScript. Fully suppressed
  under `prefers-reduced-motion`.

### Project artwork

Each project renders a deterministic abstract site plan — anchor box, shop
strip, parking bays, outparcels and arterial — seeded from its slug, so every
project has visual identity before photography arrives. See
`src/components/SiteVisual.tsx`. Replacing it with real photography is described
in `CONTENT-TODO.md`.

### Accessibility

Semantic landmarks, one `<h1>` per page, keyboard access with visible focus
rings, a skip link, `aria-live` on the portfolio filter count, AA contrast, and
reduced-motion support. Statement at `/accessibility`.
