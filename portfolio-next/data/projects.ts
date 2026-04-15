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
    githubUrl: "https://github.com/your-username/fitness-app",
    liveUrl: "https://your-vercel-fitness-demo.vercel.app",
    imageUrl: "/projects/fitness-saas.png",
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
    githubUrl: "https://github.com/your-username/teacher-platform",
    liveUrl: "https://your-vercel-teacher-demo.vercel.app",
    imageUrl: "/projects/teacher-platform.png",
    featured: true,
    highlights: [
      "Responsive marketing pages",
      "Clear content structure",
      "Clean UI composition",
    ],
  },
];