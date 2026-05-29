"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionFrame from "@/components/ui/SectionFrame";
import { projects } from "@/data/projects";
import { theme } from "@/lib/theme";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section className={`${theme.sectionTints.projects} py-20`}>
      <Container>
        <SectionFrame>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>Featured Projects</SectionHeading>

            <p className="mt-4 text-lg leading-8 text-white/75">
              Selected projects that show my practical experience with frontend
              development, full-stack foundations, database integration and
              deployment.
            </p>
          </div>

          <div className="mt-12 grid gap-8">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              ))
            ) : (
              <p className="text-center text-white/70">No projects available.</p>
            )}
          </div>
        </SectionFrame>
      </Container>
    </Section>
  );
}
