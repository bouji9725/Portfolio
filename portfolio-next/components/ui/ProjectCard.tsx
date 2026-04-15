import Image from "next/image";
import type { Project } from "@/types/project";
import Tag from "@/components/ui/Tag";
import CardShell from "@/components/ui/CardShell";

type ProjectCardProps = {
  project: Project;
  isVisible?: boolean;
  direction?: "left" | "right";
};

/**
 * Reusable project card.
 *
 * What to control here:
 * - image box height -> h-56
 * - card animation -> translate + opacity classes
 * - title / description layout
 * - GitHub / Live buttons
 * - tag styling (via Tag.tsx)
 *
 * Global card background/shadow/radius is controlled in CardShell.tsx
 */
export default function ProjectCard({
  project,
  isVisible = false,
  direction = "left",
}: ProjectCardProps) {
  const hiddenTransform =
    direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : `${hiddenTransform} opacity-0`
      }`}
    >
      <CardShell className="overflow-hidden p-0">
        {/* Project preview image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-200">
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-400">{project.title}</h3>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <Tag label={tech} />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-300">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:opacity-70"
            >
              GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition hover:opacity-70"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </CardShell>
    </div>
  );
}