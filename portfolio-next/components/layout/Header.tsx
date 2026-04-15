"use client";

import Container from "@/components/layout/Container";
import { useScrollHeader } from "@/components/layout/useScrollHeader";
import { theme } from "@/lib/theme";

/**
 
 * What to control here:
 * - top bar height -> h-16
 * - left social links
 * - right nav links
 * - header background color -> theme.sectionTints.header
 * - scroll hide/show behavior -> useScrollHeader hook
 */
const navLinks = [
  { label: "Projects", href: "projects-section" },
  { label: "Contact Me", href: "contactme-section" },
];

const socialLinks = [
  { label: "Email", href: "mailto:your-email@example.com" },
  { label: "GitHub", href: "https://github.com/bouji9725" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdelrahman-isler-a50823255" },
  { label: "Medium", href: "https://medium.com" },
  { label: "Stack Overflow", href: "https://stackoverflow.com" },
];

export default function Header() {
  const { isHidden } = useScrollHeader();

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
      className={`fixed left-0 right-0 top-0 z-50 ${theme.sectionTints.header} transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left side: socials like main */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4 text-sm text-white/90">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: section anchors like main */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-sm text-white/90">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={handleClick(link.href)}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}