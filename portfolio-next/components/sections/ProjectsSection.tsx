import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Projects section.
 *
 * What to control here:
 * - section spacing -> py-20
 * - section background tint -> bg-[#123c32]/70
 * - card grid columns -> md:grid-cols-2
 * - gap between cards -> gap-8
 */
export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="projects" className="py-20">
      <div className="bg-[#123c32]/70 py-20 backdrop-blur-[2px]">
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