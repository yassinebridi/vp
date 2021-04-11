const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        log: {
          green: "#059669",
          red: "#DC2626",
          blue: "#2563EB",
          orange: "#f77500",
        },
        gray: {
          850: "#162033",
        },
        primary: "#2563eb",
        secondary: "#11F054",
      },
      fontFamily: {
        sans: ["Open Sans", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
