import { GatsbySSR } from "gatsby";

import GlobalThemeProvider from "~/theme";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./index.css";
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

// Wraps the whole app for SSR
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-ssr
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
