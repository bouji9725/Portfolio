import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "fitness-saas",
    title: "Fitness SaaS App",
    description:
      "A workout and progress tracking application focused on structured training sessions, overload tracking, and scalable frontend architecture.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/fitness-app",
    liveUrl: "https://your-demo-link.com",
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
    liveUrl: "https://your-demo-link.com",
    featured: true,
    highlights: [
      "Responsive marketing pages",
      "Clear content structure",
      "Clean UI composition",
    ],
  },
];