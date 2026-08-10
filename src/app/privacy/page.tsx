import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site, addressOneLine } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="What we collect through this website, why, and what we do with it."
        trail={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />

      <Section>
        <div className="shell-narrow prose-pv">
          <p className="!text-[1.1875rem] !text-ink">
            {site.legalName} respects your privacy. This policy explains what
            information this website collects and how it is handled.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect only the information you choose to give us. When you
            submit an enquiry form, that is your name, company, email address,
            telephone number, the topic you selected, and the message you write.
            We do not ask for and do not want financial information, government
            identifiers, or any sensitive personal data through this site.
          </p>
          <p>
            Our hosting provider records standard server and analytics data such
            as IP address, browser type, referring page and pages visited. This
            is used to keep the site running and to understand which pages are
            useful.
          </p>

          <h2>How we use it</h2>
          <p>
            Enquiry information is used to respond to you and to carry on the
            conversation you started. We do not sell it, rent it, or trade it. We
            do not add you to a marketing list because you asked a question.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We share information only with service providers who help operate
            this site and deliver our email — for example our hosting platform
            and our transactional email provider — and only to the extent they
            need it to perform that function. We may also disclose information
            where we are required to by law.
          </p>

          <h2>Cookies</h2>
          <p>
            This site uses only the cookies necessary for it to function and, if
            enabled, privacy-respecting analytics. We do not use advertising
            cookies or cross-site tracking. Your browser settings can block
            cookies; the site will continue to work.
          </p>

          <h2>Retention</h2>
          <p>
            We keep enquiry correspondence for as long as it is commercially
            useful — a land enquiry may become a project years later. You can ask
            us to delete your information at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            Write to us at {site.email} to ask what we hold about you, to correct
            it, or to have it deleted. We will respond within a reasonable
            period.
          </p>

          <h2>Third-party links</h2>
          <p>
            This site links to third-party sites, including an embedded Google
            map on the contact page. Those services have their own privacy
            practices, which we do not control.
          </p>

          <h2>Children</h2>
          <p>
            This is a commercial real estate website and is not directed to
            children. We do not knowingly collect information from anyone under
            thirteen.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. Material changes will be
            reflected on this page.
          </p>

          <h2>Contact</h2>
          <p>
            {site.legalName}, {addressOneLine}. Telephone {site.phoneDisplay}.
            Email {site.email}.
          </p>
        </div>
      </Section>
    </>
  );
}
