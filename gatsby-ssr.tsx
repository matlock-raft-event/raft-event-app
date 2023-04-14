import { GatsbySSR } from "gatsby";
import GlobalThemeProvider from "./src/theme";
import GlobalStyleBaseline from "./src/theme/globalStyles";

// Wraps the whole app for SSR
const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
    <GlobalThemeProvider>
        <GlobalStyleBaseline />
        {element}
    </GlobalThemeProvider>
);

export default wrapRootElement;
