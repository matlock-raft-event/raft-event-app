import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import typography from "~/theme/typography";
import palette from "~/theme/palette";
import shadows from "~/theme/shadows";

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
            {children}
        </ThemeProvider>
    );
};

export default GlobalThemeProvider;
