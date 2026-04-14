import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <p className="text-slate-500">
              No projects available.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}