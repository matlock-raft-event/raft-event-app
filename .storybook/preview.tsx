import type { Preview } from "@storybook/react";

import "../index.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/rokkitt/100.css";
import "@fontsource/rokkitt/200.css";
import "@fontsource/rokkitt/300.css";
import "@fontsource/rokkitt/400.css";
import "@fontsource/rokkitt/500.css";
import "@fontsource/rokkitt/600.css";
import "@fontsource/rokkitt/700.css";
import "@fontsource/rokkitt/800.css";
import "@fontsource/rokkitt/900.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import palette from "../src/theme/palette";
import typography from "../src/theme/typography";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
    palette,
    typography,
    shape: { borderRadius: 8 }
    // shadows
});

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme
        },
        defaultTheme: "light",
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline
    })
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
