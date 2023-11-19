import type { Preview } from "@storybook/react";

import "../index.css";
import "@fontsource-variable/rokkitt";

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalThemeProvider from "../src/theme";

export const decorators = [
    withThemeFromJSXProvider({
        Provider: GlobalThemeProvider,
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
