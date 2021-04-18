import { ChakraTheme, theme as chakraTheme } from "@chakra-ui/theme";
import { colors } from "tailwindcss/defaultTheme";

export const theme: ChakraTheme = {
  ...chakraTheme,
  components: {
    ...chakraTheme.components,
    Button: {
      ...chakraTheme.components.Button,
      baseStyle: {
        borderRadius: "4px",
      },
      defaultProps: {
        ...chakraTheme.components.Button.defaultProps,
        size: "sm",
      },
    },
    Input: {
      ...chakraTheme.components.Input,
      sizes: {
        ...chakraTheme.components.Input.sizes,
        sm: {
          ...chakraTheme.components.Input.sizes.sm,
          field: {
            ...chakraTheme.components.Input.sizes.sm.field,
            borderRadius: "5px",
          },
        },
      },
      defaultProps: {
        ...chakraTheme.components.Input.defaultProps,
        size: "sm",
      },
    },
    Select: {
      ...chakraTheme.components.Select,
      defaultProps: {
        ...chakraTheme.components.Input.defaultProps,
        size: "sm",
      },
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  colors: {
    ...colors,
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
  },
};
