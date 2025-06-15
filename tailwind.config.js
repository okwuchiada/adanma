/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",

        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "Monaco", "Consolas", "monospace"],
        french: ['"IM Fell French Canon SC"', "serif"],
        mont: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cinzel: ['"Cinzel Decorative"', "cursive"],
        dmSerif: ['"DM Serif Display"', "serif"],
      },
      boxShadow: {
        "white-glow": "0 0 12px rgba(255, 255, 255, 0.15)",
      },
      // borderRadius: {
      //   sm: "calc(var(--radius) - 4px)",
      //   md: "calc(var(--radius) - 2px)",
      //   lg: "var(--radius)",
      //   xl: "calc(var(--radius) + 4px)",
      // },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        "*": {
          borderColor: "var(--border)",
          outlineColor: "hsl(var(--ring) / 0.5)",
        },
        body: {
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        },
      });
      addUtilities(
        {
          ".dark\\:hover\\:shadow-white-glow": {
            "@media (prefers-color-scheme: dark)": {
              "&:hover": {
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.15)",
              },
            },
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
