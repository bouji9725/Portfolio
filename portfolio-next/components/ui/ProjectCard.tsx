import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import Tag from "@/components/ui/Tag";
import CardShell from "@/components/ui/CardShell";

/**
 * PROJECT CARD
 *
 * This file controls:
 * - project card layout on the homepage
 * - image preview
 * - short description
 * - tech tags
 * - CTA links
 *
 * Important:
 * - "Case Study" links to the new dynamic project page
 * - GitHub / Live Demo remain available
 * - card shell styling stays centralized in CardShell.tsx
 */

type ProjectCardProps = {
  project: Project;
  isVisible?: boolean;
  direction?: "left" | "right";
};

export default function ProjectCard({
  project,
  isVisible = false,
  direction = "left",
}: ProjectCardProps) {
  const hiddenTransform =
    direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <CardShell
      className={`overflow-hidden transition-all duration-700 ${isVisible
          ? "translate-x-0 opacity-100"
          : `${hiddenTransform} opacity-0`
        }`}
    >
      <div className="grid items-stretch gap-0 md:grid-cols-[1.1fr_1fr]">
        {/* ============================= */}
        {/* PROJECT PREVIEW IMAGE */}
        {/* Control image height here */}
        {/* ============================= */}
        <div className="relative h-64 w-full overflow-hidden md:h-full">
  <Image
    src={project.imageUrl}
    alt={`Preview of ${project.title}`}
    fill
    sizes="(max-width: 767px) 100vw, 55vw"
    className="object-cover"
  />
</div>

        {/* ============================= */}
        {/* CARD CONTENT */}
        {/* ============================= */}
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            {/* Project title */}
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            {/* Project description */}
            <p className="mt-4 leading-7 text-white/75">
              {project.description}
            </p>

            {/* Highlight bullets */}
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech} label={tech} />))}
            </div>
          </div>

          {/* ============================= */}
          {/* ACTION BUTTONS */}
          {/* ============================= */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Case Study
            </Link>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </CardShell>
  );
}