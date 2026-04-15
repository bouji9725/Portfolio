import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";


export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[var(--hero-bg)]"
    >
      

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
          <div className="overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
            <Image
              src="/profile-image.png"
              alt="Portrait of Abdelrahman Isler"
              width={180}
              height={180}
              className="h-40 w-40 object-cover sm:h-44 sm:w-44"
              priority
            />
          </div>

          <p className="mt-6 text-sm text-white/85 sm:text-base">
            Hi, I am Abdelrahman!
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            A frontend developer specialised in React
          </h1>
        </div>
      </Container>
    </Section>
  );
}