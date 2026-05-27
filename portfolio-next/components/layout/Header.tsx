"use client";

import Container from "@/components/layout/Container";
import { useScrollHeader } from "@/components/layout/useScrollHeader";
import { theme } from "@/lib/theme";
import { navigationLinks } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export default function Header() {
  const { isHidden } = useScrollHeader();

  const handleClick = (id: string) => () => {
    const element = document.getElementById(id);
    if (!element) return;

    // Move keyboard focus into the section after scrolling
    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
    }
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.focus({ preventScroll: true });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${theme.surfaces.headerShell} ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className={theme.sectionTints.header}>
        <Container>
          <div
            className={`flex ${theme.spacing.headerHeight} flex-col justify-center ${theme.spacing.headerMobileGap} py-3 lg:flex-row lg:items-center lg:justify-between lg:py-0`}
          >
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`${theme.text.headerSocial} ${theme.focusRing}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Section navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={handleClick(link.href)}
                      className={`${theme.text.headerLink} ${theme.focusRing}`}
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
