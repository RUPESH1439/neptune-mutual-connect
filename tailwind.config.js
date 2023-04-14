/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1fb6ff",
      secondary: "#42485D",
      background: "#080010",
      blue: "#1fb6ff",
      white: "#FFF",
      "blue-light": "#2A2550",
      "blue-dark": "#251D3A",
      gray: "#ccd6f6",
      "gray-light": "#d3dce6",
      error: "#cc0000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
