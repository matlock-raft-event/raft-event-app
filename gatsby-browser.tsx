import "@fontsource/montserrat/500.css" // Weight 500.

import GlobalThemeProvider from "./src/theme";
import GlobalStyleBaseline from "./src/theme/globalStyles";

// Wraps the whole app
export const wrapRootElement = ({ element }) => {
    return (
        <GlobalThemeProvider>
            <GlobalStyleBaseline/>
            {element}
        </GlobalThemeProvider>
    );
};
