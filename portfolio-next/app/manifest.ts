import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdelrahman Isler | Frontend Developer",
    short_name: "A. Isler",
    description:
      "Frontend developer portfolio — React, Next.js, TypeScript, Tailwind CSS.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#05070b",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
