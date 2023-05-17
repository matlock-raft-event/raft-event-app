import type { Preview } from "@storybook/react";
import GlobalStyles from "../src/theme/globalStyles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalThemeProvider from "../src/theme";
import "@fontsource/montserrat/500.css"; // Weight 500.
import "@fontsource/rokkitt"; // Defaults to weight 400 with normal variant.

export const decorators = [
    withThemeFromJSXProvider({
        Provider: GlobalThemeProvider,
        GlobalStyles // Adds your GlobalStyle component to all stories
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
