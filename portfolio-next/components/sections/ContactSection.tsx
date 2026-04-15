import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionFrame from "@/components/ui/SectionFrame";
import { theme } from "@/lib/theme";

/**
 * Contact section.
 *
 * Control here:
 * - section tint
 * - content width
 * - input mock styling
 *
 * Shared section frame styling is controlled in SectionFrame.
 */
export default function ContactSection() {
  return (
    <Section id="contactme-section">
      <SectionFrame tintClassName={theme.sectionTints.contact}>
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading>Contact me</SectionHeading>

            <p className="mt-4 text-white/85">
              Feel free to reach out if you are looking for a frontend developer,
              want to collaborate, or just want to connect.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-md border border-white/30 px-4 py-3 text-white/70">
                Name
              </div>
              <div className="rounded-md border border-white/30 px-4 py-3 text-white/70">
                Email Address
              </div>
              <div className="rounded-md border border-white/30 px-4 py-3 text-white/70">
                Type your message here
              </div>
              <div className="inline-flex w-fit rounded-md bg-purple-400 px-5 py-3 text-sm font-semibold text-white">
                Submit
              </div>
            </div>
          </div>
        </Container>
      </SectionFrame>
    </Section>
  );
}