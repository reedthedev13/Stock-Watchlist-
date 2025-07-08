export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
        display: ["Oswald", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        colors: {
          sand: {
            100: "#f9f5f0",
            200: "#f3e9df",
            300: "#ecd7c7",
            400: "#e5c5af",
            500: "#deb198",
            600: "#b88b6e",
            700: "#956b55",
            800: "#734d3f",
            900: "#513328",
          },
          navy: {
            100: "#dbe9f4",
            200: "#a6c5e8",
            300: "#71a1dc",
            400: "#3c7ed0",
            500: "#2f68a8",
            600: "#25507e",
            700: "#1b3954",
            800: "#102129",
            900: "#070d13",
          },
        },
      },
    },
  },
  plugins: [],
};
