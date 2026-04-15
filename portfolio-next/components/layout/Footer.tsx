import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] py-6 text-white/80">
      <Container>
        <p className="text-sm">Abdelrahman Isler • © {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}