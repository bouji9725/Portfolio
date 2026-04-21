import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section
      id="contactme-section"
      className="mx-auto max-w-4xl px-6 py-20 sm:px-8"
      aria-labelledby="contact-heading"
    >
      {/* Section heading and intro text */}
      <div className="text-center">
        <SectionHeading>
          <span id="contact-heading">Contact</span>
        </SectionHeading>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          Let’s build something strong together.
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
          Interested in working together? Whether you're hiring for a frontend
          role, need help building a product, or want to discuss an idea — feel
          free to reach out.
        </p>
      </div>

      {/* Transparent/glassy card wrapper for the contact form */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}