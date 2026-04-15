"use client";

import Container from "@/components/layout/Container";
import { useScrollHeader } from "@/components/layout/useScrollHeader";

const navLinks = [
  { label: "Projects", href: "projects-section" },
  { label: "Contact Me", href: "contactme-section" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/bouji9725" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdelrahman-isler-a50823255" },
  { label: "Email", href: "mailto:your-email@example.com" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4 text-white">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-white/90 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={handleClick(link.href)}
                    className="text-sm text-white/90 transition hover:text-white"
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