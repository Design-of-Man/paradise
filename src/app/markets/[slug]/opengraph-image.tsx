import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { markets, getMarket } from "@/data/markets";

export const alt = "Paradise Ventures market";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarket(slug);

  return renderOgImage({
    eyebrow: "Markets",
    title: market?.stateName ?? "Markets",
    meta: market?.headline,
  });
}
