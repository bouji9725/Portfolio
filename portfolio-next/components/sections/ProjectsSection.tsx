"use client";

/**
 * PROJECTS SECTION
 *
 * This file controls:
 * - featured project listing on the homepage
 * - reveal animation trigger based on viewport visibility
 * - intro text above the project cards
 * - project card ordering and animation direction
 *
 * Important:
 * - background styling should come from shared theme classes
 * - section ref should use the shared Section API
 * - project content itself comes from data/projects.ts
 */

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { UI } from "@/lib/constants/ui";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionFrame from "@/components/ui/SectionFrame";
import { projects } from "@/data/projects";
import { theme } from "@/lib/theme";

export default function ProjectsSection() {
  /**
   * Section ref used to detect when the section enters the viewport.
   */
  const sectionRef = useRef<HTMLElement | null>(null);

  /**
   * Visibility state used to trigger card entrance animations.
   */
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Only show featured projects on the homepage.
   *
   * Full project detail content still exists in data/projects.ts,
   * but the homepage should stay focused and easy to scan.
   */
  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    /**
     * Checks if the section is visible enough in the viewport
     * to trigger the project card animations.
     *
     * Control here:
     * - triggerPoint: lower value = later trigger
     * - higher value = earlier trigger
     */
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * UI.VIEWPORT_TRIGGER_RATIO;

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
    <Section
      id="projects-section"
      refProp={sectionRef}
      className={`${theme.sectionTints.projects} py-20`}
    >
      <Container>
        <SectionFrame>
          {/* ============================= */}
          {/* SECTION INTRO */}
          {/* ============================= */}
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>Featured Projects</SectionHeading>

            <p className="mt-4 text-lg leading-8 text-white/75">
              Selected projects that show my practical experience with frontend
              development, full-stack foundations, database integration and
              deployment.
            </p>
          </div>

          {/* ============================= */}
          {/* PROJECT CARD LIST */}
          {/* ============================= */}
          <div className="mt-12 grid gap-8">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => {
                /**
                 * Alternate animation direction
                 * to create a more dynamic reveal pattern.
                 */
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
              <p className="text-center text-white/70">
                No projects available.
              </p>
            )}
          </div>
        </SectionFrame>
      </Container>
    </Section>
  );
}