import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="mx-auto max-w-4xl px-6 py-20 sm:px-8"
      aria-labelledby="about-heading"
    >
      <SectionHeading>
        <span id="about-heading">About</span>
      </SectionHeading>

      <div className="mt-8 space-y-6 text-lg leading-8 text-white/85">
        <p>
          I am a junior frontend developer and IT graduate based in the Zurich
          area, with hands-on project experience in React, Next.js, TypeScript
          and Tailwind CSS.
        </p>

        <p>
          Through my own projects, I have started moving beyond frontend
          development into full-stack foundations. I have worked with PostgreSQL
          databases, Prisma ORM, API routes, form handling, data persistence and
          basic deployment workflows. This helped me understand how frontend
          interfaces connect with backend logic, databases and real application
          data.
        </p>

        <p>
          My focus is building clean, responsive and user-friendly web
          applications with maintainable structure. I enjoy learning how
          different parts of an application work together — from UI components
          and user flows to database models and deployed projects.
        </p>

        <p>
          Before moving fully into IT, I gained strong customer-facing
          experience in gastronomy. This taught me to stay calm under pressure,
          communicate clearly and solve problems with a service-oriented mindset
          — qualities I now bring into technical work and team collaboration.
        </p>

        <p>
          I am currently looking for a junior frontend developer role or IT
          internship in the Zurich area, where I can contribute, learn from
          experienced engineers and continue growing toward full-stack
          development.
        </p>
      </div>
    </section>
  );
}
