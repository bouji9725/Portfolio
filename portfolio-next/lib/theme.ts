/**
 * CENTRAL DESIGN TOKENS
 *
 * This file is the shared style source for the portfolio.
 * Use it to keep colors, spacing, text sizes, surfaces, and button styles centralized.
 */

export const theme = {
  sectionTints: {
    hero: "bg-[#3d557d]",
    about: "bg-transparent",
    projects: "bg-transparent",
    contact: "bg-[#5b2c83]",
    footer: "bg-[#18181b]",
    header: "bg-gradient-to-b from-[#150d1b] via-[#050b16] to-[#18181b]",
  },

  surfaces: {
    softOverlay: "bg-black/20 backdrop-blur-[2px]",
    card: "bg-white/10 backdrop-blur-md text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)]",
    frame: "border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
    headerShell: "border-b border-white/10 backdrop-blur-md",
    heroPanel:
      "border border-white/10 bg-purple-500/5 shadow-2xl backdrop-blur-sm",
  },

  radii: {
    section: "rounded-none",
    card: "rounded-xl",
    panel: "rounded-3xl",
    heroPanel: "rounded-[28px]",
  },

  spacing: {
    sectionY: "py-20",
    heroY: "py-24",
    container: "px-6",
    cardPadding: "p-6",
    headerHeight: "min-h-16",
    headerDesktopGap: "gap-6",
    headerMobileGap: "gap-5",
    heroSectionTop: "pt-16",
    heroInnerMinHeight: "min-h-[calc(82vh-4rem)]",
    heroPanelPadding: "px-5 py-8 sm:px-8 sm:py-10",
    heroPanelMaxWidth: "max-w-3xl",
  },

  text: {
    heading: "text-white font-bold tracking-tight",
    bodyOnDark: "text-white/85",
    bodyOnLight: "text-slate-600",
    headerLink: "text-sm font-medium text-white transition hover:text-cyan-300",
    headerSocial: "text-sm text-white/80 transition hover:text-white",
    heroGreeting: "text-xl sm:text-2xl font-medium text-cyan-300",
    heroHeadline:
      "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white",
    heroBody: "text-white/85",
  },

  sizes: {
    heroImage: "h-36 w-36 sm:h-40 sm:w-40",
  },

  /** Shared focus ring — used by all interactive elements */
  focusRing:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",

  buttons: {
    heroPrimary:
      "rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 font-medium text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    heroSecondary:
      "rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    cardAction:
      "rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  },
} as const;
