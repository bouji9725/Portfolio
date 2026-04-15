import Container from "@/components/layout/Container";
import { navigationLinks } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-slate-900"
          >
            Abdelrahman Isler
          </a>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}