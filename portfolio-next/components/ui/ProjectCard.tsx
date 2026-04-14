import type { Project } from "@/types/project";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </ul>

      <div className="mt-6 flex gap-4">
        <a
          href={project.githubUrl}
          className="text-sm font-medium underline"
          target="_blank"
        >
          GitHub
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="text-sm font-medium underline"
            target="_blank"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}