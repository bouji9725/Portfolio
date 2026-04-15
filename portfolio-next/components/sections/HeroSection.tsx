"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const greeting = "Hello, I am Abdelrahman!";
const bioLine1 = "A frontend developer";
const bioLine2 = "specialised in React";

const binaryUnit = "01010111001010101011100101010101";
const binaryRow = binaryUnit.repeat(40);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleGreeting, setVisibleGreeting] = useState("");

  const binaryRows = useMemo(() => Array.from({ length: 48 }, () => binaryRow), []);

  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.85;

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

        if (index >= greeting.length) {
          clearInterval(interval);
        }
      }, 70);
    } else {
      setVisibleGreeting("");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <Section
      id="hero-section"
      refProp={sectionRef}
      className="relative min-h-screen overflow-hidden  pt-16"
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {binaryRows.map((row, index) => (
          <p
            key={`${row}-${index}`}
            className={`binary-row whitespace-nowrap font-mono text-[10px] leading-[10px] tracking-[0.2em] text-white/30 ${
              index % 2 === 0 ? "binary-row-left" : "binary-row-right"
            }`}
          >
            {row}
          </p>
        ))}
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
          <div className="overflow-hidden rounded-full">
            <Image
              src="/profile-image.png"
              alt="Portrait of Abdelrahman Isler"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover"
              priority
            />
          </div>

          <p className="mt-4 text-2xl font-semibold text-white/95">
            {visibleGreeting || "\u00A0"}
          </p>

          <h1 className="mt-10 text-5xl font-bold leading-tight text-white sm:text-6xl">
            {bioLine1}
          </h1>
          <h2 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl">
            {bioLine2}
          </h2>
        </div>
      </Container>
    </Section>
  );
}