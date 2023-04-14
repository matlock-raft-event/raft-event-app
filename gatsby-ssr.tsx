// Wraps the whole app
import GlobalThemeProvider from "./src/theme";
import GlobalStyleBaseline from "./src/theme/globalStyles";

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalThemeProvider>
            <GlobalStyleBaseline/>
            {element}
        </GlobalThemeProvider>
    );
};


