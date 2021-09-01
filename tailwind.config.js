module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      0: "0",
      si: "40",
    },
    fontFamily: {
      rela: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
