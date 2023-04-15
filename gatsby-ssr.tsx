import { GatsbySSR } from "gatsby";
import GlobalThemeProvider from "./src/theme";

// Wraps the whole app for SSR
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-ssr
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
