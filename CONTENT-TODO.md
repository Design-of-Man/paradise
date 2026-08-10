# Content to confirm before launch

This site was rebuilt from the content published on paradiseventuresinc.com plus
public records. Everything below is either **awaiting a real asset** or
**deliberately left blank rather than guessed**.

Nothing here blocks deployment — the site is complete and coherent as it stands.
These are the items that would take it from accurate to authoritative.

---

## 1. Photography — partly done

Real photography is now live for Keene Plaza, Sundial, Clearwater Air Park and
East Bay, plus the homepage hero. Everything else still renders the generated
site plan (`src/components/SiteVisual.tsx`), which is unique per project and
looks deliberate — but photography beats it every time.

**To add a photo to any remaining project:**

1. Save it as `public/images/projects/<slug>.jpg`, matching the project's slug.
2. Set `hasPhoto: true` on that project in `src/data/projects.ts`.

That is the whole change — `ProjectImage` swaps the generated plan for the
photo automatically. Extra views go in `gallery: [...]` and render as a grid on
the detail page.

Team headshots would slot into `public/images/team/<slug>.jpg` the same way,
once the profile components are pointed at them.

All supplied photography is now placed. Sector photography under
`public/images/sectors/` is wired into the `/partners/[slug]` pages, and the
Clearwater Beach aerial is the homepage hero.

**Two entries were written from press and trade coverage rather than your own
copy, and are worth checking:**

- **North Beach Parking Plaza** (Clearwater Beach, 2016) — seven storeys, 700+
  spaces, ~12,000 sq ft of retail, joint venture with the City of Clearwater,
  anchored by Another Broken Egg Cafe and Alati.
- **695 Central** (St. Petersburg) — acquired December 2019, ~8,000 sq ft of
  restaurant space over ~8,000 sq ft of office, tenanted by Melting Pot,
  Southern Grounds Coffee and IMAGE Studios on ten-year net leases.

Both are currently filed as **completed**. If either belongs under Active
Development on your own site, that is a one-word change.

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

## 3. The rest of the /projects page

Four active projects — Keene Plaza, Sundial, Clearwater Air Park and East Bay —
were transcribed from screenshots of the live `/projects` page, including their
bullet copy verbatim.

The completed portfolio was subsequently recovered from the firm's own
`/past-projects` page and now stands at 31 centres spanning 1992–2012, with
opening years and tenant rosters.

**Still outstanding:**

- **Verify the completed list against the live page.** It was reconstructed from
  search-engine records of `/past-projects` rather than read directly — this
  container cannot reach paradiseventuresinc.com. Names, cities, years and
  tenants should be spot-checked before launch. Two entries have no opening year
  on record (New Hope, and Perry) and are excluded from the chronology.
- Three of **Clearwater Air Park's** bullets were truncated mid-sentence in the
  screenshot. What is on the site now is accurate but incomplete: the elevation
  figure, the description of the charter operation, and the runway specification
  are all missing. Worth checking against the live page before launch.
- Two further cards sat in East Bay's row on `/projects` and had not loaded when
  the screenshot was taken. Given East Bay's placement those are likely **active**
  projects, and are not yet on the site.

### Tenant rosters are historic

Completed centres list the roster **as published at opening**, which for older
projects includes brands that no longer exist — Blockbuster, Eckerd, Washington
Mutual, Wachovia. The detail page labels this section "Tenants at Opening" for
completed projects (and "Notable Tenants" for active ones) so it reads as a
record rather than a current rent roll. If you would rather show current
tenants, send them and the label logic can go.

## 3a. Positioning — worth a decision

The projects above changed the picture of the business. The site was written
around grocery-anchored retail, but the current pipeline includes a downtown
lifestyle centre (Sundial), an airpark (Clearwater), a redevelopment (Keene
Plaza) and net-leased QSR (East Bay).

The homepage now says "retail and mixed-use property" rather than
"grocery-anchored retail", and the portfolio supports several project types.
But the deeper pages — services, insights, anchor partners — still lean heavily
on the Publix/Walgreens grocery story.

That may be exactly right, if grocery is still how the firm wants to be found.
If the intent is to be known for the broader mix, the service pages and a couple
of the articles should be rebalanced. Your call — tell me which way and I will
rewrite accordingly.

---

## 4. Project details left blank

Project pages support `gla` (square feet), `acreage` and `outparcels`. These are
**omitted rather than estimated** — the page layout handles their absence
cleanly. Supply real figures and they will render in the facts panel.

Two projects have no opening year on record and are therefore excluded from the
chronology sections:

- Paradise Shoppes of New Hope — Dallas, GA
- Paradise Shoppes of Perry — Perry, GA

Two location records are worth confirming. **Sawgrass Center** is recorded as
Sunrise, FL from a source that named only "Broward County". **Paradise Shoppes
of Warner Robins** is recorded as Kathleen, GA — the published list gives
Kathleen even though the centre carries the Warner Robins name.

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
