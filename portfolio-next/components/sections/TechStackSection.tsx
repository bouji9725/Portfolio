import SectionHeading from "@/components/ui/SectionHeading";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

export default function TechStackSection() {
  return (
    <section id="stack" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Tech Stack</SectionHeading>
        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 px-4 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}