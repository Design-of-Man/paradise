import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { projects, getProject } from "@/data/projects";

export const alt = "Paradise Ventures project";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return renderOgImage({
    eyebrow: project ? `${project.city}, ${project.stateName}` : "Portfolio",
    title: project?.name ?? "Portfolio",
    meta: project
      ? [project.anchor, project.year ? `Opened ${project.year}` : null]
          .filter(Boolean)
          .join(" · ")
      : undefined,
  });
}
