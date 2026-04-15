import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="projects">
      <div className="bg-[var(--projects-bg)] py-20">
        <Container>
          <SectionHeading>Featured Projects</SectionHeading>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))
            ) : (
              <p className="text-white/80">No projects available.</p>
            )}
          </div>
        </Container>
      </div>
    </Section>
  );
}