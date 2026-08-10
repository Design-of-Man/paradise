"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cx } from "@/lib/util";

/**
 * Client-side filtering over a server-rendered project list.
 *
 * Every project is present in the initial HTML — the filter only changes what
 * is displayed — so crawlers see the complete portfolio regardless of state.
 */
export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [state, setState] = useState<string>("all");
  const [decade, setDecade] = useState<string>("all");

  const states = useMemo(() => {
    const map = new Map<string, string>();
    projects.forEach((p) => map.set(p.state, p.stateName));
    return [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [projects]);

  const decades = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.year) set.add(`${Math.floor(p.year / 10) * 10}s`);
    });
    return [...set].sort();
  }, [projects]);

  const filtered = projects.filter((p) => {
    const stateOk = state === "all" || p.state === state;
    const decadeOk =
      decade === "all" || (p.year ? `${Math.floor(p.year / 10) * 10}s` === decade : false);
    return stateOk && decadeOk;
  });

  const reset = () => {
    setState("all");
    setDecade("all");
  };

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-line py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <FilterGroup
            label="State"
            value={state}
            onChange={setState}
            options={[
              { value: "all", label: "All" },
              ...states.map(([code, name]) => ({ value: code, label: name })),
            ]}
          />
          <FilterGroup
            label="Decade"
            value={decade}
            onChange={setDecade}
            options={[
              { value: "all", label: "All" },
              ...decades.map((d) => ({ value: d, label: d })),
            ]}
          />
        </div>

        <div className="flex items-center gap-4 text-xs text-mute">
          <span aria-live="polite" className="nums">
            {filtered.length} of {projects.length} projects
          </span>
          {(state !== "all" || decade !== "all") && (
            <button
              type="button"
              onClick={reset}
              className="link-underline font-semibold text-ink"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-500">
          No projects match that combination.{" "}
          <button type="button" onClick={reset} className="link-underline font-semibold text-ink">
            Clear the filters
          </button>{" "}
          to see everything.
        </p>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-mute">
        {label}
      </span>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={cx(
            "border px-3 py-1.5 text-xs font-medium transition-colors",
            value === o.value
              ? "border-ink bg-ink text-paper"
              : "border-line text-ink-500 hover:border-ink hover:text-ink",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
