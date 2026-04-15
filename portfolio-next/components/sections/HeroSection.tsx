"use client";

/**
 * HERO SECTION
 *
 * This component is responsible for:
 * - full-screen landing section
 * - binary animated background
 * - typing greeting effect
 * - main headline (your role)
 *
 * Everything visual in the hero should be controlled here.
 */

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

/**
 * TEXT CONTENT
 *
 * Control here:
 * - greeting text (typing animation)
 * - main headline lines
 */
const greeting = "Hello, I am Abdelrahman!";
const bioLine1 = "A frontend developer";
const bioLine2 = "specialised in React";

/**
 * BINARY BACKGROUND BASE UNIT
 *
 * Control here:
 * - density of binary characters (longer = denser)
 * - pattern randomness (you can randomize later if needed)
 */
const binaryUnit = "01010111001010101011100101010101";

/**
 * ONE FULL ROW OF BINARY TEXT
 *
 * Control here:
 * - repeat count → controls horizontal length
 */
const binaryRow = binaryUnit.repeat(40);

export default function HeroSection() {
  /**
   * SECTION VISIBILITY TRACKING
   *
   * Used to:
   * - trigger typing animation only when section is visible
   *
   * Control:
   * - behavior is handled in useEffect below
   */
  const sectionRef = useRef<HTMLElement | null>(null);

  /**
   * VISIBILITY STATE
   *
   * true → section is visible in viewport
   * false → section is not visible
   */
  const [isVisible, setIsVisible] = useState(false);

  /**
   * TYPING TEXT STATE
   *
   * This holds the progressively revealed greeting text
   */
  const [visibleGreeting, setVisibleGreeting] = useState("");

  /**
   * GENERATE ALL BINARY ROWS
   *
   * Control here:
   * - length (48 rows) → controls vertical density
   * - performance: memoized so it doesn't re-render every time
   */
  const binaryRows = useMemo(
    () => Array.from({ length: 48 }, () => binaryRow),
    []
  );

  /**
   * VISIBILITY DETECTION LOGIC
   *
   * What it does:
   * - checks if hero is in viewport
   * - updates isVisible state
   *
   * Control here:
   * - triggerPoint (0.85 = 85% of viewport height)
   *   lower → triggers earlier
   *   higher → triggers later
   */
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

  /**
   * TYPING ANIMATION LOGIC
   *
   * What it does:
   * - reveals greeting text character by character
   *
   * Control here:
   * - speed → change interval (70ms)
   * - reset behavior when leaving viewport
   */
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
      }, 90); // 🔥 typing speed (lower = faster)
    } else {
      setVisibleGreeting("");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  return (
    /**
     * SECTION WRAPPER
     *
     * Control here:
     * - height → min-h-screen
     * - top spacing → pt-16 (header offset)
     * - positioning → relative (for absolute background)
     */
    <Section
      id="hero-section"
      refProp={sectionRef}
      className="relative min-h-screen overflow-hidden pt-16"
    >
      {/* ============================= */}
      {/* BINARY BACKGROUND LAYER */}
      {/* ============================= */}

      <div className="absolute inset-0 overflow-hidden opacity-30">
        {binaryRows.map((row, index) => (
          <p
            key={`${row}-${index}`}
            className={`binary-row 
              whitespace-nowrap 
              font-mono 
              text-[10px] 
              leading-[10px] 
              tracking-[0.2em] 
              text-white/30 
              ${index % 2 === 0 ? "binary-row-left" : "binary-row-right"}
            `}
          >
            {row}
          </p>
        ))}
      </div>

      {/* 
        Control background here:
        - opacity → opacity-30
        - text size → text-[10px]
        - line spacing → leading-[10px]
        - direction → binary-row-left / right (CSS)
      */}

      <Container>
        {/* ============================= */}
        {/* HERO CONTENT WRAPPER */}
        {/* ============================= */}

        <div
          className="
            relative z-10 
            flex min-h-[calc(100vh-9rem)] 
            flex-col items-center justify-center 
            text-center 
            bg-purple-500/10
          "
        >
          {/* 
            Control here:
            - vertical centering → justify-center
            - overlay color → bg-purple-500/10
            - spacing from header → calc height
          */}

          {/* PROFILE IMAGE */}
          <div className="overflow-hidden rounded-full">
            <Image
              src="/profile-image.png"
              alt="Portrait of Abdelrahman Isler"
              width={96}
              height={96}
              className="h-44 w-44 rounded-full object-cover"
              priority
            />
          </div>

          {/* 
            Control here:
            - size → h-44 w-44
            - shape → rounded-full
          */}

          {/* TYPING GREETING */}
          <h1 className="mt-4 text-2xl font-semibold text-white/95">
            {visibleGreeting || "\u00A0"}
          </h1>

          {/* 
            Control here:
            - font size → text-2xl
            - spacing → mt-4
          */}

          {/* MAIN HEADLINE */}
          <h1 className="mt-10 text-5xl font-bold leading-tight text-white sm:text-6xl">
            {bioLine1}
          </h1>

          <p className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl">
            {bioLine2}
          </p>

          {/* 
            Control here:
            - size → text-5xl / sm:text-6xl
            - spacing between lines → mt-4
            - weight → font-bold
          */}
        </div>
      </Container>
    </Section>
  );
}