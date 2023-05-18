import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import breakpoints from "./breakpoints";
import GlobalStyleBaseline from "./globalStyles";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

type GlobalThemeProviderProps = {
    children: ReactNode;
};
const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
    const theme: DefaultTheme = {
        typography,
        palette,
        shadows,
        breakpoints
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyleBaseline />
            {children}
        </ThemeProvider>
    );
};

export default GlobalThemeProvider;
