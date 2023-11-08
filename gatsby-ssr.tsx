import { GatsbySSR } from "gatsby";

import GlobalThemeProvider from "~/theme";

import "@fontsource-variable/montserrat";
import "@fontsource-variable/rokkitt";
import "@fontsource-variable/league-spartan";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./index.css";

// Wraps the whole app for SSR
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-ssr
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
