import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-600">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}