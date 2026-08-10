import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { team, getTeamMember } from "@/data/team";

export const alt = "Paradise Ventures team member";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  return renderOgImage({
    eyebrow: "Our Team",
    title: member?.name ?? "Our Team",
    meta: member?.title,
  });
}
