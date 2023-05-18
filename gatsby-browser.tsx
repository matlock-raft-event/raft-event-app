import { GatsbyBrowser } from "gatsby";

import GlobalThemeProvider from "~/theme";

import "@fontsource/rokkitt"; // Defaults to weight 400 with normal variant.

import "@fontsource/montserrat/500.css"; // Weight 500.

// Wraps the whole app
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-browser
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
