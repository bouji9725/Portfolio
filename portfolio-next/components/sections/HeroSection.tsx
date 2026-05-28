"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { theme } from "@/lib/theme";
import { UI } from "@/lib/constants/ui";

const greeting = "Hello, I am Abdelrahman!";
const headline =
  "IT graduate based in the Zurich area. I build modern web applications with React, Next.js and TypeScript, and I am expanding into full-stack development with PostgreSQL, Prisma, API routes and deployment workflows.";

const binaryUnit = "01010111001010101011100101010101";
const binaryRow = binaryUnit.repeat(UI.BINARY_REPEAT_COUNT);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleGreeting, setVisibleGreeting] = useState("");

  const binaryRows = useMemo(
    () => Array.from({ length: UI.BINARY_ROW_COUNT }, () => binaryRow),
    []
  );

  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * UI.VIEWPORT_TRIGGER_RATIO;
      if (rect.top < triggerPoint && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isVisible) {
      let index = 0;
      setVisibleGreeting("");

      interval = setInterval(() => {
        index += 1;
        setVisibleGreeting(greeting.slice(0, index));
        if (index >= greeting.length) clearInterval(interval);
      }, UI.TYPING_SPEED_MS);
    } else {
      setVisibleGreeting("");
    }

    return () => { if (interval) clearInterval(interval); };
  }, [isVisible]);

  const scrollToSection = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section
      id="hero-section"
      refProp={sectionRef}
      className={`relative overflow-hidden ${theme.spacing.heroSectionTop}`}
    >
      {/* Binary background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] leading-[10px] text-cyan-300">
          {binaryRows.map((row, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "binary-row-left" : "binary-row-right"}
            >
              {row}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div
          className={`relative z-10 mx-auto flex ${theme.spacing.heroInnerMinHeight} items-center justify-center`}
        >
          <div
            className={`mx-auto flex w-full ${theme.spacing.heroPanelMaxWidth} flex-col items-center text-center ${theme.radii.heroPanel} ${theme.surfaces.heroPanel} ${theme.spacing.heroPanelPadding}`}
          >
            <div className="mb-5 overflow-hidden rounded-full border border-white/20 shadow-xl">
              <Image
                src="/profile-image.jpg"
                alt="Portrait of Abdelrahman Isler"
                width={160}
                height={160}
                className={`${theme.sizes.heroImage} object-cover`}
                priority
              />
            </div>

            <p className={`min-h-[1.75rem] ${theme.text.heroGreeting}`}>
              {visibleGreeting || " "}
            </p>

            <h1 className={`mt-4 max-w-2xl ${theme.text.heroHeadline}`}>
              {headline}
            </h1>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToSection("projects-section")}
                className={theme.buttons.heroPrimary}
              >
                View My Work
              </button>

              <button
                type="button"
                onClick={scrollToSection("contactme-section")}
                className={theme.buttons.heroSecondary}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
