import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    text: {
      light: "#92929d",
      secondary: "#717579",
      base: "#11142d",
      gray: "#171B1E",
      danger: "#FC2E53",
      dark: "#171725",
    },
    brand: {
      primary: "#00A15D",
    },
  },
  fonts: {
    body: "Open-Sans, system-ui",
    heading: "Open-Sans, system-ui",
  },
  fontSizes: {
    xxs: "0.62rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
});

export default theme;
