/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // allows next-themes to work
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Your two main colors
        primary: {
          DEFAULT: "#143D60", // deep blue
          foreground: "#ffffff", // text color on blue
        },
        accent: {
          DEFAULT: "#4ade80", // Tailwind green-400
          foreground: "#000000", // text color on green
        },
      },
    },
  },
  plugins: [],
};
