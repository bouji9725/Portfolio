import type { Project } from "@/types/project";
import Tag from "@/components/ui/Tag";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 text-[var(--text-dark)] shadow-md">
      <h3 className="text-2xl font-bold">{project.title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Tag label={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4 text-sm font-medium text-slate-900">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="underline">
          GitHub
        </a>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="underline">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}