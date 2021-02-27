module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TTNorms"', "sans-serif"],
      },
      spacing: {
        "sidebar-width-desktop": "290px",
        "app-body-desktop": "calc(100% - 290px)",
      },
      colors: {
        "text-primary": "#0D1C2E",
        "text-secondary": "#707C97",
        primary: "#2A8BF2",
        secondary: "#FF3366",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
