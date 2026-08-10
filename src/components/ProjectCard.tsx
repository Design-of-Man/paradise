import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "under-construction": "Under Construction",
  "in-development": "In Development",
  acquisition: "Acquisition",
};

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col border border-line bg-paper transition-all duration-500 hover:border-accent/45 hover:shadow-[0_28px_60px_-32px_rgba(14,20,29,0.3)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-sand">
        <ProjectImage
          project={project}
          priority={priority}
          className="size-full transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]"
        />
        {project.anchor && (
          <span className="absolute left-4 top-4 bg-paper/92 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {project.anchor}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-mute">
          <span>
            {project.city}, {project.state}
          </span>
          {project.year && (
            <>
              <span aria-hidden className="opacity-40">·</span>
              <span className="nums">{project.year}</span>
            </>
          )}
        </div>

        <h3 className="mt-3 text-xl transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{project.summary}</p>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-mute">
            {statusLabel[project.status]}
          </span>
          <svg viewBox="0 0 16 10" className="size-3 text-accent" fill="none" aria-hidden>
            <path
              d="M10.5 1L15 5l-4.5 4M15 5H1"
              stroke="currentColor"
              strokeWidth="1.4"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
