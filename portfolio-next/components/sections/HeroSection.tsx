"use client";

/**
 * HERO SECTION
 *
 * This file controls:
 * - binary animated background
 * - greeting typing effect
 * - profile image
 * - main value statement
 * - CTA buttons
 *
 * Important rule:
 * Shared visual styling should come from theme.ts.
 * Global animation classes stay in globals.css.
 */

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { theme } from "@/lib/theme";

/**
 * HERO TEXT CONTENT
 *
 * Control here:
 * - greeting
 * - main headline/value statement
 */
const greeting = "Hello, I am Abdelrahman!";
const headline =
  "Frontend developer building modern web applications with React, Next.js, and TypeScript — focused on clean architecture, performance, and real user value.";

/**
 * BINARY BACKGROUND CONTENT
 *
 * Control here:
 * - density of binary strings
 * - horizontal width of each row
 */
const binaryUnit = "01010111001010101011100101010101";
const binaryRow = binaryUnit.repeat(40);

export default function HeroSection() {
  /**
   * Hero section ref
   *
   * Used for viewport visibility detection.
   */
  const sectionRef = useRef<HTMLElement | null>(null);

  /**
   * Visibility state
   *
   * Used to start/reset the typing effect.
   */
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Progressive typing state
   */
  const [visibleGreeting, setVisibleGreeting] = useState("");

  /**
   * Prebuild binary rows for background animation
   *
   * Memoized for performance.
   */
  const binaryRows = useMemo(
    () => Array.from({ length: 48 }, () => binaryRow),
    []
  );

  /**
   * Detect hero visibility in viewport
   *
   * Control here:
   * - triggerPoint = when the typing starts
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
   * Typing animation
   *
   * Control here:
   * - speed (90ms)
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
      }, 90);
    } else {
      setVisibleGreeting("");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  /**
   * Smooth scroll for CTA buttons
   */
  const scrollToSection = (id: string) => () => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Section
      id="hero-section"
      refProp={sectionRef}
      className={`relative overflow-hidden ${theme.spacing.heroSectionTop}`}
    >
      {/* ============================= */}
      {/* BINARY BACKGROUND */}
      {/* ============================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
      >
        {/* Dark overlay above binary rows */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Binary animated rows from globals.css */}
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

      {/* ============================= */}
      {/* HERO CONTENT */}
      {/* ============================= */}
      <Container>
        <div
          className={`relative z-10 mx-auto flex ${theme.spacing.heroInnerMinHeight} items-center justify-center`}
        >
          <div
            className={`mx-auto flex w-full ${theme.spacing.heroPanelMaxWidth} flex-col items-center text-center ${theme.radii.heroPanel} ${theme.surfaces.heroPanel} ${theme.spacing.heroPanelPadding}`}
          >
            {/* Profile image */}
            <div className="mb-5 overflow-hidden rounded-full border border-white/20 shadow-xl">
              <Image
                src="/profile-image.png"
                alt="Portrait of Abdelrahman Isler"
                width={160}
                height={160}
                className={`${theme.sizes.heroImage} object-cover`}
                priority
              />
            </div>

            {/* Typing greeting */}
            <p className={`min-h-[1.75rem] ${theme.text.heroGreeting}`}>
              {visibleGreeting || "\u00A0"}
            </p>

            {/* Main value statement */}
            <h1 className={`mt-4 max-w-2xl ${theme.text.heroHeadline}`}>
              {headline}
            </h1>

            {/* CTA buttons */}
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