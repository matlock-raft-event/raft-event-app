import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import typography from "./typography";
import palette from "./palette";
import shadows from "./shadows";
import GlobalStyleBaseline from "./globalStyles";

type GlobalThemeProviderProps = {
    children: ReactNode;
};
const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
    const theme: DefaultTheme = {
        typography,
        palette,
        shadows
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyleBaseline />
            {children}
        </ThemeProvider>
    );
};

export default GlobalThemeProvider;
