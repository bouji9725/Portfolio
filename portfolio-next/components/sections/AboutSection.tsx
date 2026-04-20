import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20" >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>About</SectionHeading>
        <div className="mt-4 max-w-3xl space-y-4 text-slate-100">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-purple-300">•</span>
            <span>Frontend Developer specialised in React and Next.js, with strong foundations in TypeScript and modern web technologies.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-purple-300">•</span>
            <span>I build clean, scalable, and user-focused applications with a strong emphasis on component architecture, performance, and maintainability.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-purple-900">•</span>
            <span>Through hands-on projects, I have developed structured frontend systems, implemented API integrations, and designed intuitive user experiences.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-purple-300">•</span>
            <span>With a background in customer-facing roles, I bring strong problem-solving skills, reliability under pressure, and a clear focus on delivering value to users.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-purple-300">•</span>
            <span>Currently seeking a Junior Frontend Developer role in Zurich where I can contribute to real-world products, grow as an engineer, and build high-quality web applications.</span>
          </div>
        </div>
      </div>
    </section>
  );
}