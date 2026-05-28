import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "fitness-saas",
    title: "Fitness SaaS App",
    description:
      "A fitness tracking web application for planning workouts, saving user data and monitoring progress over time. The project helped me practise full-stack foundations with Next.js, TypeScript, PostgreSQL and Prisma, while building a clean and responsive user interface.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Vercel",
    ],
    githubUrl: "https://github.com/bouji9725/Fitness.git",
    liveUrl: "https://fitness-seven-sage.vercel.app/",
    imageUrl: "/fitness-appp.png",
    featured: true,
    highlights: [
      "Built structured workout, nutrition and progress-tracking flows",
      "Connected frontend forms with API routes and backend logic",
      "Used PostgreSQL and Prisma for database persistence",
      "Practised database models, migrations and environment variables",
      "Designed reusable React components with TypeScript",
      "Deployed the project and handled basic production setup",
    ],
    role:
      "Solo developer responsible for frontend architecture, UI implementation, API routes, database schema, and deployment.",
    summary:
      "A full-stack fitness application combining a clean frontend interface with backend data persistence, API integration and production deployment.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built as a real full-stack application rather than a simple landing page. The goal was to create a multi-section fitness platform where users can manage workouts, log training sessions and track progress with data that persists across sessions.",
          "I treated this project as a scalable product foundation — thinking beyond UI to cover how the app connects frontend interfaces with backend logic, database models and real user data.",
        ],
      },
      {
        title: "Goals",
        paragraphs: [
          "The main goal was to build a frontend experience that feels like a real application, backed by a working database layer. I wanted the project to demonstrate engineering thinking through structure, reusability, and a clear path from user interaction to persisted data.",
          "A second goal was to practise full-stack foundations hands-on — not just reading about PostgreSQL and Prisma, but actually designing database models, writing API routes and connecting them to a working frontend.",
        ],
      },
      {
        title: "Technical Decisions",
        paragraphs: [
          "I used Next.js with the App Router, TypeScript and Tailwind CSS on the frontend, with PostgreSQL and Prisma on the backend. API routes handle data fetching and mutations between the UI and the database, giving me a clear understanding of how full-stack data flow works in practice.",
          "A strong focus was placed on maintainable component architecture. Instead of building everything inline, I separated display logic, shared UI patterns and data-fetching concerns to make the project easier to reason about and extend.",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "One of the main challenges was designing a database schema that reflects real workout tracking needs — handling relationships between users, sessions, exercises and progress logs without over-engineering early.",
          "Another challenge was connecting frontend form state to backend API routes cleanly, with proper validation on both sides and clear error feedback returned to the user.",
        ],
      },
      {
        title: "What This Project Shows",
        paragraphs: [
          "This project demonstrates how I approach full-stack development: not just building UI, but thinking about data models, API design and how frontend components interact with real backend systems.",
          "For recruiters and engineering teams, this project shows that I understand how modern web applications work end-to-end — from React components and user flows to database persistence and production deployment.",
        ],
      },
      {
        title: "Next Improvements",
        paragraphs: [
          "The next logical improvements would be authentication, richer user dashboards, stronger test coverage and more advanced database queries. These additions would move the app closer to a production-ready product.",
          "I would also continue refining UX flows and feature depth while keeping the architecture clean enough to support long-term expansion.",
        ],
      },
    ],
  },
  {
    slug: "teacher-platform",
    title: "Special Needs Teacher Website",
    description:
      "A professional service website for a special needs teacher, designed to present educational support offers clearly and guide parents through a simple booking and contact flow. The project combines responsive frontend development with backend foundations for handling and saving booking requests.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "API Routes",
      "Vercel",
    ],
    githubUrl: "https://github.com/bouji9725/Primary-Teacher.git",
    liveUrl: "https://primary-teacher.vercel.app/",
    imageUrl: "/teacher-app.png",
    featured: true,
    highlights: [
      "Built a clear and trustworthy service website for parents",
      "Created responsive pages and reusable React components",
      "Implemented form handling for booking and contact requests",
      "Connected the frontend with backend API logic",
      "Used PostgreSQL and Prisma to save submitted requests",
      "Focused on readability, accessibility and a simple user journey",
    ],
    role:
      "Solo developer responsible for frontend implementation, layout system, form handling, API routes, database integration and deployment.",
    summary:
      "A service-oriented website combining a clear and trustworthy frontend with backend form handling and database persistence for booking requests.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built as a professional service website with a strong emphasis on clarity, trust and usability. The goal was to present educational services in a way that feels structured and welcoming, while also allowing parents to submit booking and contact requests that are saved and handled on the backend.",
          "Rather than treating it as a simple static page, I used the project to practise cleaner frontend structure, reusable layout patterns and connecting a public-facing website to real backend data persistence.",
        ],
      },
      {
        title: "Goals",
        paragraphs: [
          "The primary goal was to create a site that communicates services clearly and supports a polished professional presence. A second goal was to implement a working contact and booking flow — not just a form that sends an email, but one that saves data to a PostgreSQL database via Prisma.",
          "I also wanted the project to reflect stronger frontend fundamentals such as responsive design, clear hierarchy and consistent component usage across all pages.",
        ],
      },
      {
        title: "Technical Decisions",
        paragraphs: [
          "The site was built with a component-based structure so repeated layout patterns and presentation logic remain reusable. API routes handle incoming form submissions, validate the data and persist it to a PostgreSQL database through Prisma ORM.",
          "Responsive behaviour and content clarity were important priorities. Layout decisions were made to keep the interface readable and consistent across screen sizes while supporting a trustworthy user experience.",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "The main frontend challenge was not technical complexity for its own sake, but creating an interface that feels professional and well-structured rather than generic — requiring careful control of layout, hierarchy, spacing and content presentation.",
          "On the backend side, the challenge was designing a clean API route for form submission, handling validation errors gracefully and returning clear feedback to the user when a request succeeds or fails.",
        ],
      },
      {
        title: "What This Project Shows",
        paragraphs: [
          "This project shows that I can build clean, professional frontend experiences for service-oriented websites where communication and trust matter, while also connecting those interfaces to working backend logic and database persistence.",
          "It reflects a disciplined approach to reusable layout structure, form handling, API integration and maintainable full-stack execution.",
        ],
      },
      {
        title: "Next Improvements",
        paragraphs: [
          "Future improvements could include an admin dashboard for managing booking requests, email notifications on submission, richer content sections and improved analytics to track user engagement.",
          "From an engineering perspective, the next step would be to add authentication for the admin area and stronger input validation and rate limiting on the API routes.",
        ],
      },
    ],
  },
];
