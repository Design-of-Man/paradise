import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { Pill } from "./ui";

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
      className="card card-lift group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-sand-deep">
        <ProjectImage
          project={project}
          priority={priority}
          className="size-full transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]"
        />
        {project.anchor && (
          <span className="label-sm absolute left-4 top-4 rounded-full bg-paper/92 px-3 py-1.5 text-ink backdrop-blur-sm">
            {project.anchor}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="label-sm flex items-center gap-2.5 text-mute">
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

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-sand-deep pt-5">
          <Pill className="!bg-paper">{statusLabel[project.status]}</Pill>
          <span
            aria-hidden
            className="grid size-8 shrink-0 place-items-center rounded-full bg-paper text-ink transition-colors group-hover:bg-accent-bright"
          >
            <svg viewBox="0 0 16 10" className="size-2.5" fill="none">
              <path
                d="M10.5 1L15 5l-4.5 4M15 5H1"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
