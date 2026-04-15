export const theme = {
  sectionTints: {
    hero: "bg-[#3d557d]",
    about: "bg-transparent",
    projects: "bg-[ #588b9b]",
    contact: "bg-[ #5b2c83]",
    footer: "bg-[ #18181b]",
    header: "bg-gradient-to-b from-[#5b2c83] via-[ #3d557d] to-[ #18181b]",
  },

  surfaces: {
    softOverlay: "bg-black/20 backdrop-blur-[2px]",
    card: "bg-white/10 backdrop-blur-md text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)]",
    frame: "border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
  },

  radii: {
    section: "rounded-none",
    card: "rounded-xl",
    panel: "rounded-3xl",
  },

  spacing: {
    sectionY: "py-20",
    heroY: "py-24",
    container: "px-6",
    cardPadding: "p-6",
  },

  text: {
    heading: "text-white font-bold tracking-tight",
    bodyOnDark: "text-white/85",
    bodyOnLight: "text-slate-600",
  },
} as const;