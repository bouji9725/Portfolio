import type { Project } from "@/types/project";

/**
 * PROJECT DATA SOURCE
 *
 * This file controls:
 * - homepage project cards
 * - dynamic project detail pages
 *
 * Update this file when:
 * - adding a new project
 * - changing project descriptions
 * - updating case-study content
 */

export const projects: Project[] = [
  {
    slug: "fitness-saas",
    title: "Fitness SaaS App",
    description:
      "A fitness tracking web app for planning workouts, logging sessions, and monitoring training progress. Built with a scalable frontend architecture using Next.js, React, and TypeScript, with a strong focus on reusable components and maintainable structure.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bouji9725/Fitness.git",
    liveUrl: "https://fitness-seven-sage.vercel.app/",
    imageUrl: "/fitness-app.png",
    featured: true,
    highlights: [
      "Scalable frontend architecture",
      "Reusable component system",
      "Structured app flows and state handling",
    ],
    role:
      "Solo developer responsible for frontend architecture, UI implementation, routing, state structure, and product direction.",
    summary:
      "A product-focused frontend application designed to support structured workout tracking, progress monitoring, and future backend expansion.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built as a real frontend product rather than a single landing page or tutorial-style interface. The goal was to create a multi-section application where users can manage workouts, log training sessions, and track progress in a more structured way.",
          "From the beginning, I treated this project as a scalable product foundation. That meant thinking beyond UI and focusing on how the app should be organized for maintainability, future features, and cleaner long-term development.",
        ],
      },
      {
        title: "Goals",
        paragraphs: [
          "The main goal was to build a frontend experience that feels like a real application, with multiple connected flows instead of isolated screens. I wanted the project to show stronger engineering thinking through structure, reusability, and clear data organization.",
          "A second goal was to prepare the app for future backend integration. Even before adding a full database layer, the frontend needed to be organized in a way that would support APIs, authentication, and more persistent user data later.",
        ],
      },
      {
        title: "Technical Decisions",
        paragraphs: [
          "I used Next.js with the App Router, React, TypeScript, and Tailwind CSS to build the application with a modern production-oriented stack. The project was structured using reusable sections, shared UI components, and organized data flow so that features could grow without the codebase becoming messy.",
          "A strong focus was placed on maintainable component architecture. Instead of building everything inline, I separated display logic, shared UI patterns, and app-specific structures to make the frontend easier to evolve and easier to reason about.",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "One of the main challenges was avoiding a frontend that looks good visually but becomes hard to scale as the app grows. Managing multiple screens, flows, and reusable patterns required discipline in naming, file organization, and state handling.",
          "Another challenge was balancing realism with scope. As a solo developer, I needed the product to feel substantial and credible without overengineering features too early. That meant making deliberate trade-offs about what to build now and what to prepare for later.",
        ],
      },
      {
        title: "What This Project Shows",
        paragraphs: [
          "This project demonstrates how I think about frontend work beyond styling alone. It reflects product thinking, reusable architecture, maintainable UI systems, and an understanding of how to build a stronger foundation for future growth.",
          "For recruiters and engineering teams, this project is the clearest example of how I approach structured frontend development and how I try to build applications in a way that is realistic, scalable, and production-minded.",
        ],
      },
      {
        title: "Next Improvements",
        paragraphs: [
          "The next logical improvements would be authentication, a real database layer, more persistent user data, and stronger testing coverage. These additions would move the app from a strong frontend foundation toward a more complete product system.",
          "I would also continue refining performance, UX flows, and feature depth while keeping the architecture clean enough to support long-term expansion.",
        ],
      },
    ],
  },
  {
    slug: "teacher-platform",
    title: "Special Needs Teacher Website",
    description:
      "A professional website designed to present educational services clearly and create a trustworthy user experience. Built with a clean component structure, responsive layout patterns, and a focus on accessibility, clarity, and maintainability.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bouji9725/Primary-Teacher.git",
    liveUrl: "https://primary-teacher.vercel.app/",
    imageUrl: "/teacher-app.png",
    featured: true,
    highlights: [
      "Responsive layout patterns",
      "Accessible content structure",
      "Clean component-based implementation",
    ],
    role:
      "Solo developer responsible for frontend implementation, layout system, reusable UI structure, and responsive presentation.",
    summary:
      "A service-oriented website built to communicate clearly, present educational offers professionally, and create a reliable digital presence.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built as a professional service website with a strong emphasis on clarity, trust, and usability. The goal was to present educational services in a way that feels structured, welcoming, and easy to navigate.",
          "Rather than treating it as a simple static page, I used the project to practice cleaner frontend structure, reusable layout patterns, and stronger communication through UI.",
        ],
      },
      {
        title: "Goals",
        paragraphs: [
          "The primary goal was to create a site that communicates services clearly and supports a polished professional presence. A second goal was to keep the implementation maintainable, so future content updates and design adjustments remain straightforward.",
          "I also wanted the project to reflect stronger frontend fundamentals such as responsive design, clear hierarchy, and consistent component usage.",
        ],
      },
      {
        title: "Technical Decisions",
        paragraphs: [
          "The site was built with a component-based structure so repeated layout patterns and presentation logic remain reusable. This helps keep the codebase cleaner than if each page section were built independently.",
          "Responsive behavior and content clarity were important priorities. Layout decisions were made to keep the interface readable and consistent across screen sizes while supporting a trustworthy user experience.",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "The main challenge in this project was not technical complexity in the backend sense, but creating a frontend that feels professional and well-structured rather than generic. That requires careful control of layout, hierarchy, spacing, and content presentation.",
          "Another challenge was keeping the UI simple without making it feel plain. The final result needed to balance clarity, friendliness, and professionalism.",
        ],
      },
      {
        title: "What This Project Shows",
        paragraphs: [
          "This project shows that I can build clean, professional frontend experiences not only for app-style products, but also for service-oriented websites where communication and trust matter strongly.",
          "It also reflects a more disciplined approach to reusable layout structure, maintainability, and responsive execution.",
        ],
      },
      {
        title: "Next Improvements",
        paragraphs: [
          "Future improvements could include richer service storytelling, more content depth, analytics integration, and refined conversion-focused sections depending on business goals.",
          "From an engineering perspective, the next step would be to keep evolving the component structure and content system in a way that supports future growth without adding unnecessary complexity.",
        ],
      },
    ],
  },
];