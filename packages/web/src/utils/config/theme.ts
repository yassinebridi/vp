import { ChakraTheme, theme as chakraTheme } from "@chakra-ui/theme";

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
    body: "Open Sans, sans-serif",
  },
  colors: {
    ...chakraTheme.colors,
  },
};
