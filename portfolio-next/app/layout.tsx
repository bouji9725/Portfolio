import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteBackground from "@/components/layout/SiteBackground";

export const metadata: Metadata = {
  title: "Abdelrahman Isler | Frontend Developer",
  description:
    "Portfolio of Abdelrahman Isler, a frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[var(--background)] text-white antialiased">
        {/* Fixed visual background behind the entire site */}
        <SiteBackground />

        {/* Main visible app layer above the background */}
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}