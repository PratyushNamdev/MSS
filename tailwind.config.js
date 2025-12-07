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
          DEFAULT: "#101828", // deep blue
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
