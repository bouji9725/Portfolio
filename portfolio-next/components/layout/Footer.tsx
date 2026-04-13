export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600">
        © {new Date().getFullYear()} Abdelrahman Isler. Built with Next.js and
        TypeScript.
      </div>
    </footer>
  );
}