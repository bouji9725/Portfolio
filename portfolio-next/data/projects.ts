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
      "A full-stack booking platform for a special needs tutoring practice. Parents browse packages and book sessions through a guided 4-step wizard. The teacher manages all appointments and availability through a password-protected admin panel, with automated email notifications sent via Resend on every booking.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI (MUI 7)",
      "Emotion",
      "Zod",
      "PostgreSQL",
      "Prisma",
      "Resend",
      "Upstash Redis",
      "Vercel",
    ],
    githubUrl: "https://github.com/bouji9725/Primary-Teacher.git",
    liveUrl: "https://primary-teacher.vercel.app/",
    imageUrl: "/teacher-app.png",
    featured: true,
    highlights: [
      "Built a 4-step booking wizard — package selection, calendar, time slot and contact details",
      "Implemented server-side conflict detection to prevent double-bookings",
      "Added sliding-window rate limiting (5 req / 10 min per IP) via Upstash Redis",
      "Sent automated email confirmations to parents and alerts to the teacher via Resend",
      "Built a password-protected admin panel for managing appointments and blocking dates",
      "Applied HTTP security headers (X-Frame-Options, HSTS, nosniff) via Next.js config",
    ],
    role:
      "Solo developer responsible for frontend architecture, booking wizard UI, API routes, database schema, email integration, rate limiting and deployment.",
    summary:
      "A production-ready booking platform combining a guided multi-step frontend wizard with server-side validation, conflict detection, rate limiting and automated email notifications.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built as a real production tool for a working tutoring practice. The goal was not just a presentational website, but a complete booking system: parents can select a package, pick an available date and time, submit their details and immediately receive a confirmation email.",
          "On the backend, the teacher has a password-protected admin panel to view upcoming appointments, update their status and block dates or time ranges to prevent unwanted bookings.",
        ],
      },
      {
        title: "Goals",
        paragraphs: [
          "The primary goal was to build something a real client could use — not a portfolio demo. That meant thinking through the full user journey on both sides: the parent booking a session and the teacher managing their availability and appointments.",
          "A second goal was to go beyond basic CRUD and implement real production concerns: email delivery, double-booking prevention, rate limiting on the public endpoint and HTTP security headers.",
        ],
      },
      {
        title: "Technical Decisions",
        paragraphs: [
          "I used Material UI (MUI 7) with Emotion for the component layer, chosen for its accessibility defaults and design consistency across a multi-step flow. Zod handles validation at every API boundary, ensuring invalid payloads never reach the database.",
          "Resend was chosen for transactional email because of its simple Node.js SDK and reliable delivery. Upstash Redis powers the rate limiter with a sliding-window strategy, and is configured to silently skip rate limiting in local development when env vars are absent.",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "The main backend challenge was the booking conflict logic — checking not just for exact duplicate time slots but also for teacher-blocked days and date ranges, all in a single atomic flow before creating the appointment.",
          "On the frontend, the multi-step wizard required careful state management across steps while keeping each step independently validated, so a parent cannot advance with incomplete data and cannot submit a malformed request even if they bypass the UI.",
        ],
      },
      {
        title: "What This Project Shows",
        paragraphs: [
          "This project shows that I can build a complete, production-oriented full-stack feature — not just connecting a form to a database, but handling the real concerns that come with a public-facing endpoint: conflict detection, rate limiting, transactional email and session-based admin authentication.",
          "It reflects an engineering mindset focused on correctness and reliability: the booking succeeds or fails for clear, communicated reasons, and every failure path returns a meaningful response rather than a silent error.",
        ],
      },
      {
        title: "Next Improvements",
        paragraphs: [
          "The next logical step is adding a custom verified email domain so booking confirmations arrive from a branded address rather than the Resend sandbox sender.",
          "Longer term improvements include calendar sync (Google Calendar API), SMS notifications via Twilio and a test suite covering the booking API validation and conflict detection logic.",
        ],
      },
    ],
  },
];
