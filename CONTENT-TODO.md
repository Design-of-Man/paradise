# Content to confirm before launch

This site was rebuilt from the content published on paradiseventuresinc.com plus
public records. Everything below is either **awaiting a real asset** or
**deliberately left blank rather than guessed**.

Nothing here blocks deployment — the site is complete and coherent as it stands.
These are the items that would take it from accurate to authoritative.

---

## 1. Photography — the remaining gap

Photography is live for six projects (Keene Plaza, Sundial, Clearwater Air Park,
East Bay, North Beach Parking Plaza, 695 Central) plus the homepage hero and the
eight sector pages. **31 projects and all four team members are still on
generated placeholders.**

Both systems are already built and waiting. Adding an image is a two-step change
with no layout risk, because nothing points at a file until you say it exists.

### Team headshots — 4 needed

Save each as `public/images/team/<slug>.jpg`, then set `hasPhoto: true` on that
person in `src/data/team.ts`. Portrait crop, 4:5 ratio, 800x1000 or larger.

| File | Person |
| --- | --- |
| `michael-connor.jpg` | Michael P. Connor — President & CEO |
| `chuck-ernst.jpg` | Chuck Ernst — Chief Financial Officer |
| `brad-karns.jpg` | Brad Karns — Director of Development |
| `jon-mott.jpg` | Jon Mott — Leasing |

Until then each renders a monogram tile in a brand tint — deliberate-looking,
and distinct per person, but no substitute for a face.

### Project photography — 31 needed

Save as `public/images/projects/<slug>.jpg` and set `hasPhoto: true` on that
project in `src/data/projects.ts`. Landscape, 1600x1000 or larger — the six
already in place are 1024-1920px wide and the larger ones look markedly better
in the page heroes. Extra views go in `gallery: [...]`.

```
edgewater-commons.jpg                       Edgewater Commons — Edgewater, FL (1992)
southpointe-commons.jpg                     Southpointe Commons — DeLand, FL (1993)
sawgrass-center.jpg                         Sawgrass Center — Sunrise, FL (1999)
northlake-promenade-shoppes.jpg             Northlake Promenade Shoppes — North Palm Beach, FL (2000)
paradise-crossing.jpg                       Paradise Crossing — Douglasville, GA (2000)
flamingo-sr-84.jpg                          Flamingo & S.R. 84 — Plantation, FL (2000)
publix-at-laguna-isles.jpg                  Publix at Laguna Isles — Pembroke Pines, FL (2000)
shoppes-at-paradise-pointe.jpg              Shoppes at Paradise Pointe — Fort Walton Beach, FL (2001)
cooper-city-commons.jpg                     Cooper City Commons — Cooper City, FL (2002)
shoppes-at-lake-dow.jpg                     The Shoppes at Lake Dow — McDonough, GA (2002)
plaza-del-paraiso.jpg                       Plaza del Paraiso — Miami, FL (2003)
paradise-place.jpg                          Paradise Place — West Palm Beach, FL (2003)
shoppes-of-lithia.jpg                       Shoppes of Lithia — Brandon, FL (2003)
paradise-promenade.jpg                      Paradise Promenade — Davie, FL (2003)
paradise-shoppes-of-navarre.jpg             Paradise Shoppes of Navarre — Navarre, FL (2003)
paradise-shoppes-of-ellenwood.jpg           Paradise Shoppes of Ellenwood — Ellenwood, GA (2003)
paradise-shoppes-of-dallas.jpg              Paradise Shoppes of Dallas — Dallas, GA (2004)
paradise-shoppes-of-prominence-point.jpg    Paradise Shoppes of Prominence Point — Canton, GA (2004)
paradise-shoppes-of-new-hope.jpg            Paradise Shoppes of New Hope — Dallas, GA
paradise-shoppes-of-warner-robins.jpg       Paradise Shoppes of Warner Robins — Kathleen, GA (2004)
paradise-shoppes-of-summerville.jpg         Paradise Shoppes of Summerville — Summerville, SC (2006)
shoppes-of-del-prado.jpg                    Shoppes of Del Prado — North Fort Myers, FL (2012)
shoppes-of-price-crossing.jpg               Shoppes of Price Crossing — North Port, FL (2008)
shoppes-at-glen-lakes.jpg                   Shoppes at Glen Lakes — Weeki Wachee, FL (2008)
shoppes-of-sugarmill-woods.jpg              Shoppes of Sugarmill Woods — Homosassa, FL (2008)
corsica-square.jpg                          Corsica Square — Miami, FL (2007)
shoppes-of-paradise-key.jpg                 Shoppes of Paradise Key — Destin, FL (1999)
publix-at-st-andrews.jpg                    Publix at St. Andrews — Port St. Lucie, FL (2003)
publix-las-olas.jpg                         Publix Las Olas — Fort Lauderdale, FL (2003)
publix-at-surfside.jpg                      Publix at Surfside — Surfside, FL (2003)
paradise-shoppes-of-perry.jpg               Paradise Shoppes of Perry — Perry, GA
```

Anything absent keeps rendering its generated site plan, which is unique per
project and looks intentional — so a partial delivery is fine. Send five and
five will light up.

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
