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
  search-engine records of `/past-projects` rather than read directly. Still
  outstanding, and it will not be resolved from a build container: the network
  policy blocks paradiseventuresinc.com outright, so the page cannot be fetched
  from here at all. It needs someone with an ordinary browser. Two entries have
  no opening year on record (New Hope, and Perry) and are excluded from the
  chronology.

  Search **did** corroborate a subset — name, city, year and tenant roster all
  matched what the site already says for Prominence Point, Dallas, Navarre,
  Ellenwood, Paradise Promenade, Shoppes of Lithia, Paradise Place, Northlake
  Promenade Shoppes and Sawgrass Center. That is 9 of 31 independently
  confirmed; the remaining 22 are unverified.

  Three centres had no tenant roster at all and now carry one recovered the same
  way — **worth confirming before launch**:

  | Centre              | Tenants added                                  |
  | ------------------- | ---------------------------------------------- |
  | Edgewater Commons   | Publix, Walgreens, Blockbuster, Burger King     |
  | Southpointe Commons | Publix, Walgreens, Checkers                     |
  | Plaza del Paraiso   | Publix, Exxon                                   |

- **Clearwater Air Park's three truncated bullets are now filled**, from public
  aviation and city records rather than from your own page — so they are the same
  class of content as North Beach and 695 Central above, and are worth a read:
  elevation **71 feet** above sea level (the basis of the not-in-a-flood-zone
  claim), a **47-acre** site with a single asphalt runway **16/34, 4,108 ft ×
  75 ft**, and FlyUSA described as a full-service private aviation firm
  specializing in on-demand charter across Florida and the Southeast. If your own
  page words any of these differently, yours wins.

  Note also that Clearwater City Council **renamed the airpark to Clearwater
  Executive Airport in March 2025**. The site still calls it Clearwater Air Park,
  matching your `/projects` page. Say the word and it can be updated.
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

Search surfaced G.L.A. figures for twelve of the completed centres, attributed
to your own `/past-projects` page. They have **deliberately not been written
into the data**: they arrive second-hand, they would render in the facts panel
as hard numbers, and twelve of thirty-one would leave the portfolio looking
inconsistent. Confirm them and they are a one-line change each.

| Centre                                | G.L.A. (sq ft) |
| ------------------------------------- | -------------- |
| Edgewater Commons                     | 75,832         |
| Southpointe Commons                   | 61,779         |
| Sawgrass Center                       | 83,832         |
| Northlake Promenade Shoppes           | 87,735         |
| Plaza del Paraiso                     | 82,441         |
| Paradise Place                        | 72,705         |
| Shoppes of Lithia                     | 71,391         |
| Paradise Promenade                    | 70,271         |
| Paradise Shoppes of Navarre           | 70,040         |
| Paradise Shoppes of Ellenwood         | 67,721         |
| Paradise Shoppes of Dallas            | 70,640         |
| Paradise Shoppes of Prominence Point  | 88,058         |

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

**The roster is very likely incomplete.** A separate developer handoff for this
same client describes a team hub plus **eleven biographies** — seven more than
are on this site. Two of the missing names appear in that document: **Chris
Zimmermann** (the legacy site spelled it both "Zimmerman" and "Zimmermann" on
the same card; that build chose the double-n) and **Carley Melendez**. The other
five are not named there.

Nothing has been added, because a profile needs a title and a biography and
inventing either would be worse than the gap. Send names, titles and bios and
they slot straight into `src/data/team.ts`.

Chuck Ernst's and Jon Mott's biographies are shorter than the others because
less published detail was available. Send education, tenure and any board
service and they will match the depth of the others.

---

## 5a. From the static-build handoff document

A handoff for a parallel static HTML build of this same site was supplied. Its
conventions do not transfer — different stack, different tooling — but its
statements of fact about the business do, and several of them do not match what
this site currently says.

### Assets that already exist elsewhere

- **Three client-supplied headshots are already cropped and installed** in that
  build: Michael Connor, Chuck Ernst and Jon Mott, at 600×750 with WebP
  alongside. Dropping those three files into `public/images/team/` and setting
  `hasPhoto: true` finishes three of the four portraits immediately. That
  document also notes Ernst's source is 754×691 and soft, and recommends
  reshooting all eleven against a single backdrop.
- **A portfolio archive of 200+ completed projects**, each with location, anchor
  tenants, gross leasable area and opening year, is said to be reproduced in that
  package's `docs/01-audit.md`. This site currently carries 31 completed centres.
  **That one file is the highest-value thing outstanding on this project** — it
  would both resolve the verification gap in section 3 and multiply the portfolio
  roughly sixfold.
- **Five "Available Properties" listings** are named: Sundial, Old Cypress Creek,
  Keene Plaza, 7405 Seminole Blvd and 3711 Tampa Rd. Sundial and Keene Plaza are
  already here, which makes **Old Cypress Creek, 7405 Seminole Blvd and 3711
  Tampa Rd** the likely identities of the two active-project cards that had not
  loaded in the original `/projects` screenshot (see section 3). Confirm which
  two, with city and status, and they can be added.
- **Social profiles on YouTube, Instagram and X** are said to exist. This site
  links only LinkedIn and Facebook. Send the URLs and they go in `site.social`.

### Address — resolved

Neither candidate was right. The client confirmed the office as:

**153 2nd Ave N, St. Petersburg, FL 33701**

That is the Sundial building — the firm's own downtown lifestyle center, already
in this portfolio as `sundial-st-pete`. It is applied throughout: `site.address`,
the geo coordinates behind the `RealEstateAgent` schema, the footer, the contact
page, the FAQ, the map link and the map embed (the last four derive from the data
rather than repeating it).

The **founding in Safety Harbor in 1988 is history and still reads that way** in
Michael Connor's biography, the About timeline, the Florida market page and the
FAQ. What changed is the present tense: copy that claimed the firm still works
*from* Safety Harbor — "the same office in Safety Harbor since 1988", "within
reach of the firm's Safety Harbor office" — was false once the address moved, so
it now says Pinellas County or St. Petersburg as appropriate. Both towns are in
Pinellas, so "the same market since 1988" survives intact and is still true.

Please confirm the new address is byte-identical with the Google Business
Profile, including the `2nd Ave N` abbreviation — "2nd Avenue North" and "2nd Ave
N" are a citation mismatch even though they read the same.

### Remaining conflicts — nothing here was applied

Each of these still contradicts data live on this site. Only you can settle them.

| Field | This site | Handoff document |
| --- | --- | --- |
| States active | 8 | 10 |
| Projects delivered | 150 | 200+ |
| Office hours | 8:30 AM – 5:00 PM | 9:00 AM – 5:00 PM ET *(marked "assumed" there)* |
| Years in business | Computed from 1988 | Legacy copy said "over the last 35 years", which does not reconcile with a 1988 founding |

Phone numbers agree exactly: (727) 726-1115.

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

- [ ] Set `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` in Vercel so the enquiry
      form delivers (see README). **This one can only be done by you** — it needs
      a live Resend key pasted into Vercel → Project → Settings → Environment
      Variables (Production, Preview, Development), then a redeploy. Nothing in
      the repository can supply it.
      Until then the form is not broken: `/api/contact` returns `not_configured`
      and the form falls back to a pre-filled mailto link, so an enquiry is never
      silently dropped — it just arrives as an email the sender has to press send
      on, which some won't.
- [ ] Point the domain at Vercel and confirm `NEXT_PUBLIC_SITE_URL` matches it.
- [ ] Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- [ ] Confirm the Google Business Profile address and phone match `src/data/site.ts` byte for byte.
- [ ] Have the client read `/privacy` and `/accessibility` — both are sensible
      defaults, not legal advice, and should be reviewed before publication.
- [ ] Spot-check the 301s from the old WordPress URLs after DNS cuts over.
