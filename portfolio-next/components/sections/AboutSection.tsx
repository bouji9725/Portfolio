import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * HOMEPAGE ABOUT SECTION
 *
 * This is the short homepage version.
 * The dedicated /about page contains the longer version.
 */

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
          I’m a frontend developer specialized in React, Next.js, and
          TypeScript, with a strong focus on clean architecture, reusable
          components, and maintainable UI systems.
        </p>

        <p>
          I build web applications that are not only visually polished, but also
          structured for scalability, performance, and real-world use.
        </p>

        <p>
          Through hands-on projects, I’ve worked on frontend architecture, API
          integration, form validation, accessibility, and production
          deployment.
        </p>

        <p>
          I’m currently looking for a frontend role in Zurich where I can
          contribute to real products, grow as an engineer, and deliver
          high-quality user experiences.
        </p>
      </div>

      {/* Link to the longer dedicated About page */}
      {/* <div className="mt-8">
        <Link
          href="/about"
          className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 font-medium text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Read More About Me
        </Link>
      </div> */ }
    </section>
  );
}