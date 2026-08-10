import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { insights, getInsight } from "@/data/insights";

export const alt = "Paradise Ventures insight";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);

  return renderOgImage({
    eyebrow: post?.category ?? "Insights",
    title: post?.title ?? "Insights",
    meta: post ? `${post.readingTime} min read` : undefined,
  });
}
