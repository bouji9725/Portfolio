import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section
      id="contactme-section"
      className="px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading and intro text */}
        <div className="mb-10 max-w-2xl">
          <SectionHeading>Contact</SectionHeading>

          <h3 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s build something strong together.
          </h3>

          <p className="mt-4 text-base leading-7 text-white/75">
            Whether it&apos;s a frontend role, a freelance project, or a product
            idea, send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Transparent/glassy card wrapper for the contact form */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-xl backdrop-blur-md sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}