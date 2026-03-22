import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
  }, [isVisible]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="transparent"
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <style>
        {`
          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <Box ref={sectionRef} width="100%">
        <Heading as="h1" id="projects-section" color="white" mb={8}>
          Featured Projects
        </Heading>

        <Box
          width="100%"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          gap={8}
        >
          {projects.map((project, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <Box
                key={project.title}
                backgroundColor="rgba(255, 255, 255, 0.08)"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                opacity={isVisible ? 1 : 0}
                transform={
                  isVisible
                    ? "translateX(0)"
                    : isLeftColumn
                    ? "translateX(-120px)"
                    : "translateX(120px)"
                }
                animation={
                  isVisible
                    ? isLeftColumn
                      ? "slideInFromLeft 1.8s ease-out forwards"
                      : "slideInFromRight 1.8s ease-out forwards"
                    : "none"
                }
              >
                <Card
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc()}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;