import type { Project } from "@/types/project";

/**
 * Project content source.
 *
 * What to control here:
 * - title / description
 * - GitHub URL
 * - live deployed URL
 * - image preview path
 * - featured visibility
 */
export const projects: Project[] = [
  {
    slug: "fitness-saas",
    title: "Fitness SaaS App",
    description:
      "A workout and progress tracking application focused on structured training sessions, overload tracking, and scalable frontend architecture.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bouji9725/Fitness.git",
    liveUrl: "https://fitness-seven-sage.vercel.app/",
    imageUrl: "/fitness-app.png",
    featured: true,
    highlights: [
      "Workout session state management",
      "Reusable component architecture",
      "Progressive overload logic",
    ],
  },
  {
    slug: "teacher-platform",
    title: "Primary Teacher Website",
    description:
      "A professional educational website designed to present services, improve communication, and support a polished digital presence.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bouji9725/Primary-Teacher.git",
    liveUrl: "https://primary-teacher.vercel.app/",
    imageUrl: "/teacher-app.png",
    featured: true,
    highlights: [
      "Responsive marketing pages",
      "Clear content structure",
      "Clean UI composition",
    ],
  },
];