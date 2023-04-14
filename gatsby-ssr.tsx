import { GatsbySSR } from "gatsby";
import GlobalThemeProvider from "./src/theme";
import GlobalStyleBaseline from "./src/theme/globalStyles";

// Wraps the whole app for SSR
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-ssr
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        <GlobalStyleBaseline />
        {element}
    </GlobalThemeProvider>
);
