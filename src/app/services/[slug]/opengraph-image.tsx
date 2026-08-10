import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { services, getService } from "@/data/services";

export const alt = "Paradise Ventures service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  return renderOgImage({
    eyebrow: "Services",
    title: service?.name ?? "Services",
    meta: service?.tagline,
  });
}
