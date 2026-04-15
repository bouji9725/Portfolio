"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionFrame from "@/components/ui/SectionFrame";
import { projects } from "@/data/projects";
import { theme } from "@/lib/theme";

/**
 * Projects section modeled after the main branch behavior.
 *
 * What to control here:
 * - section reveal trigger -> triggerPoint
 * - section tint -> theme.sectionTints.projects
 * - grid spacing -> gap-8
 * - animation direction -> based on index parity
 * - animation tempo -> duration class in ProjectCard
 */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.85;

      if (rect.top < triggerPoint && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <Section id="projects-section" refProp={sectionRef}>
      <SectionFrame
        tintClassName={`${theme.sectionTints.projects}/85`}
        className="backdrop-blur-[2px]"
      >
        <Container>
          <SectionHeading>Featured Projects</SectionHeading>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => {
                const direction = index % 2 === 0 ? "left" : "right";

                return (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    isVisible={isVisible}
                    direction={direction}
                  />
                );
              })
            ) : (
              <p className="text-white/80">No projects available.</p>
            )}
          </div>
        </Container>
      </SectionFrame>
    </Section>
  );
}