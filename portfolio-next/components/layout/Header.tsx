"use client";

/**
 * HEADER
 *
 * This file controls:
 * - top navigation structure
 * - social links
 * - section links
 * - responsive header layout
 * - scroll hide/show behavior
 *
 * Layout rules:
 * - Desktop / laptop:
 *   left side  = social links
 *   right side = section links
 *
 * - Mobile:
 *   first row  = social links
 *   second row = section links
 *
 * Shared visual styles come from theme.ts
 */

import Container from "@/components/layout/Container";
import { useScrollHeader } from "@/components/layout/useScrollHeader";
import { theme } from "@/lib/theme";

/**
 * SECTION NAVIGATION LINKS
 *
 * Control here:
 * - labels shown on the right side (desktop)
 * - labels shown on the second row (mobile)
 */
const navLinks = [
  { label: "View My Work", href: "projects-section" },
  { label: "Get In Touch", href: "contactme-section" },
];

/**
 * SOCIAL LINKS
 *
 * Control here:
 * - left side links
 *
 * Removed:
 * - Medium
 * - Stack Overflow
 *
 * IMPORTANT:
 * Replace the email address with your real one.
 */
const socialLinks = [
  { label: "Email", href: "mailto:your-email@example.com" },
  { label: "GitHub", href: "https://github.com/bouji9725" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdelrahman-isler-a50823255",
  },
];

export default function Header() {
  /**
   * Scroll-based header visibility
   *
   * Controlled by shared hook.
   */
  const { isHidden } = useScrollHeader();

  /**
   * Smooth-scroll handler for section buttons
   */
  const handleClick = (id: string) => () => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        theme.surfaces.headerShell
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Header background gradient from centralized theme */}
      <div className={theme.sectionTints.header}>
        <Container>
          <div
            className={`flex ${theme.spacing.headerHeight} flex-col justify-center ${theme.spacing.headerMobileGap} py-3 lg:flex-row lg:items-center lg:justify-between lg:py-0`}
          >
            {/* ============================= */}
            {/* SOCIAL LINKS */}
            {/* Desktop: left side */}
            {/* Mobile: first row */}
            {/* ============================= */}
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`${theme.text.headerSocial} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ============================= */}
            {/* SECTION NAVIGATION */}
            {/* Desktop: right side */}
            {/* Mobile: second row */}
            {/* ============================= */}
            <nav aria-label="Section navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={handleClick(link.href)}
                      className={`${theme.text.headerLink} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}