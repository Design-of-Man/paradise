import type { Metadata } from "next";

import { VideoHero } from "@/components/VideoHero";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

/**
 * Isolation preview for the video hero. Noindex and absent from the sitemap —
 * the live homepage still runs the coded crane.
 */
export const metadata: Metadata = pageMeta({
  title: "Video hero — preview",
  description: "Isolation preview of the video hero. Not part of the public site.",
  path: "/lab/video-hero",
  noIndex: true,
});

export default function VideoHeroLabPage() {
  return (
    <VideoHero
      eyebrow={`Established ${site.founded} · ${site.address.city}, Florida`}
      headline="We build more than buildings."
      cta={{ label: "Start a conversation", href: "/contact" }}
    />
  );
}
