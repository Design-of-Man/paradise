import type { Metadata } from "next";

import { CraneHero } from "@/components/CraneHero";
import { pageMeta } from "@/lib/seo";

/**
 * Isolation harness for the crane hero.
 *
 * Deliberately noindex and absent from the sitemap — it exists to look at the
 * hero on its own before it goes near the homepage, and an indexable duplicate
 * of the front door would undo the canonical work.
 */
export const metadata: Metadata = pageMeta({
  title: "Crane hero — preview",
  description: "Isolation preview of the coded crane hero. Not part of the public site.",
  path: "/lab/crane",
  noIndex: true,
});

export default function CraneLabPage() {
  return (
    <CraneHero
      eyebrow="Paradise Ventures · Since 1988"
      headline="We build more than buildings."
      cta={{ label: "Start a conversation", href: "/contact" }}
    />
  );
}
