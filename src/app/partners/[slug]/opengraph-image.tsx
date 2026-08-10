import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { partners, getPartner } from "@/data/partners";

export const alt = "Paradise Ventures anchor partner";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartner(slug);

  return renderOgImage({
    eyebrow: partner?.category ?? "Partners",
    title: partner?.name ?? "Anchor Partners",
    meta: partner?.delivered,
  });
}
