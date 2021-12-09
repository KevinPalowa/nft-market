// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const fonts = {
  heading: "Poppins",
  body: "Poppins",
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: "Poppins",
  },
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts,
});

export default theme;
