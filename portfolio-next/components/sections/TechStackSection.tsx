import SectionHeading from "@/components/ui/SectionHeading";

const techGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Development",
    items: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "Focus Areas",
    items: [
      "Component architecture",
      "Responsive UI",
      "Accessibility",
      "Form handling & validation",
      "API integration",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="techstack-section"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
      aria-labelledby="techstack-heading"
    >
      <div className="text-center">
        <SectionHeading>
          <span id="techstack-heading">Tech Stack</span>
        </SectionHeading>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {techGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>

            <ul className="mt-4 space-y-3 text-white/80">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}