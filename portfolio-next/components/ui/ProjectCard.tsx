"use client";

import Image from "next/image";
import type { Project } from "@/types/project";
import Tag from "@/components/ui/Tag";
import { useInView } from "@/hooks/useInView";
import { theme } from "@/lib/theme";

type ProjectCardProps = {
  project: Project;
  direction?: "left" | "right";
};

export default function ProjectCard({
  project,
  direction = "left",
}: ProjectCardProps) {
  const { ref, isVisible } = useInView({ threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

  const hiddenTransform =
    direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <article
      ref={ref}
      className={`${theme.surfaces.card} ${theme.radii.card} overflow-hidden transition-all duration-700 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : `${hiddenTransform} opacity-0`
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* PROJECT PREVIEW IMAGE */}
        <div className="relative min-h-64 md:min-h-0 md:w-[52%] md:shrink-0 md:self-stretch">
          <Image
            src={project.imageUrl}
            alt={`Preview of ${project.title}`}
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* CARD CONTENT */}
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={theme.buttons.cardAction}
            >
              GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={theme.buttons.cardAction}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
