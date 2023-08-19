import { GatsbyBrowser } from "gatsby";

import GlobalThemeProvider from "~/theme";

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

// Wraps the whole app
// eslint-disable-next-line import/prefer-default-export -- Plugins must export known APIs from their gatsby-browser
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        {element}
    </GlobalThemeProvider>
);
