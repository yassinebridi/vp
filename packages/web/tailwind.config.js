const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

function half(value) {
  return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

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
          50: "#f9faf9",
          100: "#f0f1f3",
          200: "#dcdee4",
          300: "#b6bcc5",
          400: "#89939d",
          500: "#6b7178",
          600: "#55565b",
          700: "#414044",
          800: "#2c2b2f",
          850: "#26252b",
          900: "#212026",
        },
        primary: "#8b5cf6",
        secondary: "#11F054",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addUtilities, e, theme, variants }) => {
      Object.entries(theme("gap")).forEach(([key, value]) =>
        addUtilities(
          {
            [`.flex-gap-${e(key)}`]: {
              marginTop: `-${half(value)}`,
              marginLeft: `-${half(value)}`,
              "& > *": {
                marginTop: half(value),
                marginLeft: half(value),
              },
            },
          },
          variants("gap")
        )
      );
    }),
  ],
};
