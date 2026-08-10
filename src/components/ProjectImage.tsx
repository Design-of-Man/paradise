import Image from "next/image";
import type { Project } from "@/data/projects";
import { SiteVisual } from "./SiteVisual";

/**
 * Renders a project's photography when it exists, and the generated site plan
 * when it does not.
 *
 * Photography lives at /public/images/projects/<slug>.jpg and is opted into per
 * project with `hasPhoto`. That keeps the two cases explicit — a missing file
 * can never silently render as a broken image, because nothing points at it
 * until the flag is set.
 */
export function ProjectImage({
  project,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority,
  tone = "sand",
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "sand" | "ink";
}) {
  if (!project.hasPhoto) {
    return <SiteVisual seed={project.slug} tone={tone} className={className} />;
  }

  return (
    <Image
      src={`/images/projects/${project.slug}.jpg`}
      alt={`${project.name} — ${project.city}, ${project.stateName}`}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
