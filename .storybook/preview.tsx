import type { Preview } from "@storybook/react";
import GlobalStyles from "../src/theme/globalStyles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalThemeProvider from "../src/theme";

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
