/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      Playfair: ["Playfair Display", "serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },

    screens: {
      xs: "325px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      white: "#FFFFFF",
      // textGreen: "#545454",
      green: "#58805a",
      darkGreen:"#0ca763",
      yellow:"#ebc912",
      // lightGreen: "#58805a",
      black: "#000000",
      blue:"#150d29",
    },
  },
  plugins: [],
};
