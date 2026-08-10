import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Accessibility Statement",
  description: `${site.name}'s commitment to keeping this website usable for everyone, and how to report a barrier.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
        lede="This site is built to be usable by everyone. If something gets in your way, tell us and we will fix it."
        trail={[
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ]}
      />

      <Section>
        <div className="shell-narrow prose-pv">
          <p className="!text-[1.1875rem] !text-ink">
            {site.legalName} is committed to making this website accessible to
            the widest possible audience, regardless of technology or ability.
          </p>

          <h2>What we have done</h2>
          <p>
            This site was built against the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA as a target. In practice that means semantic HTML
            structure with a single logical heading order per page, keyboard
            access to every interactive control with a visible focus indicator, a
            skip-to-content link, text alternatives for meaningful imagery,
            colour contrast tested against AA thresholds, and support for the
            reduced-motion preference so animation is suppressed for visitors who
            ask for it.
          </p>
          <p>
            Content is also legible without JavaScript: scroll animations only
            hide content once the browser confirms it can reveal it again.
          </p>

          <h2>Known limitations</h2>
          <p>
            The contact page embeds a Google map. That component is provided by a
            third party and its accessibility is outside our control — the same
            address, telephone number and a plain link to directions are
            available as text on the same page, and throughout the site footer.
          </p>

          <h2>Ongoing work</h2>
          <p>
            Accessibility is not a one-time audit. We test as the site changes
            and treat reported barriers as defects rather than suggestions.
          </p>

          <h2>Tell us about a problem</h2>
          <p>
            If you encounter something on this site you cannot use, please
            contact us at {site.email} or call {site.phoneDisplay}. Describe the
            page and what happened, and we will respond and work with you to get
            you the information you were looking for.
          </p>
        </div>
      </Section>
    </>
  );
}
