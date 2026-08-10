# Content to confirm before launch

This site was rebuilt from the content published on paradiseventuresinc.com plus
public records. Everything below is either **awaiting a real asset** or
**deliberately left blank rather than guessed**.

Nothing here blocks deployment — the site is complete and coherent as it stands.
These are the items that would take it from accurate to authoritative.

---

## 1. Photography — highest impact

The site currently renders a generated abstract site plan for every project
(`src/components/SiteVisual.tsx`). It looks intentional and is unique per
project, but real photography of the centers would materially raise the site.

**What to supply:** aerial or ground photography of the centers, ideally
1600×1000 or larger, plus one wide image for the homepage hero.

**How to add it:**

1. Drop files in `public/images/projects/<slug>.jpg` matching the project slug.
2. Add `hasPhoto: true` to that project in `src/data/projects.ts`.
3. In `src/components/ProjectCard.tsx` and `src/app/portfolio/[slug]/page.tsx`,
   render `next/image` when `hasPhoto` is set and fall back to `SiteVisual`
   otherwise.

Team headshots would slot into `public/images/team/<slug>.jpg` the same way.

---

## 2. Logo vector

The sail mark is reproduced as vector in `src/components/Mark.tsx` from the
supplied logo artwork, and the wordmark is set live in the site's display face
so it stays sharp at any size.

If you have the **original vector file (.ai / .eps / .svg)**, send it — the
brand green, blue and letterforms can then be matched exactly rather than
closely. A standalone copy also lives at `public/images/logo.svg` for use in
email signatures and documents.

---

## 3. Active project pipeline

`/portfolio/active` currently presents site criteria, what the firm is looking
for, and target markets. It is a strong page, but it does not list live
projects because we had no verified pipeline data.

To add them, append entries to `src/data/projects.ts` with
`status: "in-development"` or `"under-construction"`. They will appear at the
top of that page automatically.

---

## 4. Project details left blank

Project pages support `gla` (square feet), `acreage` and `outparcels`. These are
**omitted rather than estimated** — the page layout handles their absence
cleanly. Supply real figures and they will render in the facts panel.

Two projects also have no opening year on record and are therefore excluded from
the chronology sections:

- Paradise Shoppes of New Hope — Dallas, GA
- Paradise Shoppes of Warner Robins — Warner Robins, GA
- Paradise Shoppes of Summerville — Summerville, SC

Also worth confirming: **Edgewater Commons** is listed as Edgewater, FL and
**Sawgrass Center** as Sunrise, FL (Broward County). Both were recorded from
published project lists that named the county rather than the municipality.

---

## 5. Team roster

Four profiles are live: Michael P. Connor, Chuck Ernst, Brad Karns and Jon Mott.

Chuck Ernst's and Jon Mott's biographies are shorter than the others because
less published detail was available. Send education, tenure and any board
service and they will match the depth of the others.

If anyone is missing from the roster, add them to `src/data/team.ts`.

---

## 6. Statistics to verify

These appear throughout the site and in structured data, and are drawn from the
firm's own published claims:

| Figure                | Used as        |
| --------------------- | -------------- |
| Founded               | 1988           |
| Square feet developed | 5,000,000+     |
| Publix stores built   | 52             |
| Walgreens completed   | 100+           |
| States                | 8              |

The "years building" figure is computed from the founding year, so it will never
go stale.

---

## 7. Before going live

- [ ] Set `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` in Vercel so the enquiry form delivers (see README).
- [ ] Point the domain at Vercel and confirm `NEXT_PUBLIC_SITE_URL` matches it.
- [ ] Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- [ ] Confirm the Google Business Profile address and phone match `src/data/site.ts` byte for byte.
- [ ] Have the client read `/privacy` and `/accessibility` — both are sensible
      defaults, not legal advice, and should be reviewed before publication.
- [ ] Spot-check the 301s from the old WordPress URLs after DNS cuts over.
