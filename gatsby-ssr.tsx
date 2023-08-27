import { GatsbySSR } from "gatsby";

import GlobalThemeProvider from "~/theme";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./index.css";

import "@fontsource-variable/montserrat";
import "@fontsource-variable/rokkitt";

// Wraps the whole app for SSR
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-ssr
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
