import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function HeroSection() {
  return (
    <Section id="hero">
      <div className="bg-[var(--hero-bg)]">
        <Container>
          <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
            <div className="overflow-hidden rounded-full border-4 border-white/20 shadow-lg">
              <Image
                src="/profile-image.png"
                alt="Portrait of Abdelrahman Isler"
                width={160}
                height={160}
                className="h-40 w-40 object-cover"
                priority
              />
            </div>

            <p className="mt-8 text-base text-[var(--text-main)]">
              Hi, I am Abdelrahman!
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--text-main)] sm:text-5xl md:text-6xl">
              A frontend developer specialised in React
            </h1>
          </div>
        </Container>
      </div>
    </Section>
  );
}