import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteBackground from "@/components/layout/SiteBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a-isler.com"),

  title: {
    default: "Abdelrahman Isler | Frontend Developer",
    template: "%s | Abdelrahman Isler",
  },

  description:
    "Frontend developer portfolio of Abdelrahman Isler, focused on building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",

  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "web developer",
    "Zurich",
    "Abdelrahman Isler",
  ],

  authors: [{ name: "Abdelrahman Isler", url: "https://www.a-isler.com" }],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Abdelrahman Isler | Frontend Developer",
    description:
      "Frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://www.a-isler.com",
    siteName: "Abdelrahman Isler Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Isler | Frontend Developer",
    description:
      "Frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  },

  applicationName: "Abdelrahman Isler Portfolio",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdelrahman Isler",
  url: "https://www.a-isler.com",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  sameAs: [
    "https://github.com/bouji9725",
    "https://linkedin.com/in/abdelrahman-isler-a50823255",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} relative min-h-screen bg-[var(--background)] text-white antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-cyan-300 focus:px-4 focus:py-2 focus:font-medium focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>

        <SiteBackground />

        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}
