import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { hash } from "@/lib/util";

/**
 * A team member's headshot, or a monogram tile when none has been supplied.
 *
 * Photography is opted into per person with `hasPhoto`, exactly as project
 * photography is — nothing points at a file until the flag is set, so an
 * absent headshot renders as a deliberate tile rather than a broken image.
 *
 * The fallback tint varies by name so a team grid reads as distinct people
 * rather than a row of identical placeholders.
 */
export function TeamPortrait({
  member,
  className,
  sizes = "(max-width: 640px) 100vw, 33vw",
  priority,
}: {
  member: TeamMember;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (member.hasPhoto) {
    return (
      <Image
        src={`/images/team/${member.slug}.jpg`}
        alt={`${member.name}, ${member.title} at Paradise Ventures`}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover object-top ${className ?? ""}`}
      />
    );
  }

  const initials = member.name
    .replace(/\b[A-Z]\.\s*/g, "") // drop middle initials — "Michael P. Connor" → MC
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  // Three restrained tints drawn from the brand palette.
  const tints = ["#eef2e6", "#e9eef2", "#f2eee6"];
  const tint = tints[hash(member.slug) % tints.length];

  return (
    <div
      aria-hidden
      className={`flex size-full items-center justify-center ${className ?? ""}`}
      style={{ backgroundColor: tint }}
    >
      <span className="font-display text-5xl tracking-tight text-ink/25">{initials}</span>
    </div>
  );
}
