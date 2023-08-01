/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jscolor: "#F0DB4F",
        reactcolor: "#61DBFB",
        nextcolor: "#000000",
        nodecolor: "#68A063",
        mongodbcolor: "#4DB33D",
        gitcolor: "#F1502F",
        phpcolor: "#474A8A",
        figmacolor: "#ff00bf",
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
