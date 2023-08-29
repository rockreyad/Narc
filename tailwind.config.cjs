/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        netural: {
          0: "#FFFFFF",
          100: "#000000",
          200: "#2D2D2D",
          300: "#9A9A9A",
          400: "#BABABA",
          500: "#D5D5D5",
        },
        yellow: {
          100: "#BD9616",
          200: "#DFB631",
          300: "#F6D055",
          400: "#EDDBA2",
          500: "#F4E6B6",
        },
        brown: {
          100: "#38080F",
          200: "#45181E",
          300: "#854B53",
          400: "#A86F77",
          500: "#D6A8AE",
        },
        pink: {
          100: "#D45263",
          200: "#F2697B",
          300: "#FA7B8C",
          400: "#F99BA8",
          500: "#FDD1D6",
        },
        orange: {
          100: "#C85831",
          200: "#DF6E47",
          300: "#ED835E",
          400: "#FFCBB9",
          500: "#FFDEC0",
        },
        purple: {
          100: "#59268B",
          200: "#B182E0",
          300: "#CBACEA",
          400: "#E8CDF8",
          500: "#F2DCFF",
        },
        green: {
          100: "#276B1A",
          200: "#569849",
          300: "#7EC570",
          400: "#ABD8A2",
          500: "#D0F1C9",
        },
        blue: {
          100: "#3468AC",
          200: "#4283D0",
          300: "#6FA7EA",
          400: "#8DB6E7",
          500: "#ACCBEF",
        },
      },
    },
  },
  plugins: [],
};
