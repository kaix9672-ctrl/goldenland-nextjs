import type { Config } from "tailwindcss";

/**
 * GOLDEN LAND — design tokens.
 * Palette is drawn from the brand's own world: board-formed concrete (graphite +
 * warm gray), architectural daylight (paper), and a restrained architectural gold.
 * Swap these hex values for the site's exact brand tokens where they differ.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161A", // concrete shadow / primary text on light
        graphite: "#22262C", // dark section base
        slate: "#565C66", // secondary text
        concrete: "#E7E5E0", // warm light gray (raw concrete surface)
        paper: "#F7F6F3", // page background
        gold: "#A9843F", // muted architectural gold (accent, use sparingly)
        goldsoft: "#C6A566", // gold on dark
        line: "#D6D2CA", // hairline dividers on light
        linedark: "#3A3F47", // hairline dividers on dark
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        content: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
