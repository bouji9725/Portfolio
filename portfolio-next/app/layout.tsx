import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteBackground from "@/components/layout/SiteBackground";

// Root metadata for the whole portfolio site.
// This controls the default title, description, social sharing,
// robots behavior, and the base URL used for absolute metadata links.
export const metadata: Metadata = {
  // metadataBase helps Next.js build full absolute URLs for metadata
  // like canonical URLs and social image references.
  metadataBase: new URL("https://www.a-isler.com"),

  // Default title and reusable title template for future pages.
  title: {
    default: "Abdelrahman Isler | Frontend Developer",
    template: "%s | Abdelrahman Isler",
  },

  // Main SEO description for the site.
  description:
    "Frontend developer portfolio of Abdelrahman Isler, focused on building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",

  // Search engine indexing behavior.
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph metadata for rich sharing previews on platforms
  // like LinkedIn, WhatsApp, Facebook, and many messaging apps.
  openGraph: {
    title: "Abdelrahman Isler | Frontend Developer",
    description:
      "Frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://www.a-isler.com",
    siteName: "Abdelrahman Isler Portfolio",
    locale: "en_US",
    type: "website",
  },

  // Twitter/X sharing metadata.
  // The large summary card gives a stronger preview if supported.
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Isler | Frontend Developer",
    description:
      "Frontend developer building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  },

  // Basic application identity.
  applicationName: "Abdelrahman Isler Portfolio",

  // Optional category helps classify the site.
  category: "technology",
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