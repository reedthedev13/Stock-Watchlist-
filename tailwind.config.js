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
          "sunset-orange": "#F59E0B",
          "sunset-red": "#EF4444",
          "sunset-pink": "#EC4899",
          "sunset-purple": "#8B5CF6",
          "sunset-yellow": "#FCD34D",
          // You can add more shades and tints as needed
        },
      },
    },
  },
  plugins: [],
};
