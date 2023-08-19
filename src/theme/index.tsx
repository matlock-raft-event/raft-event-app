import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

type GlobalThemeProviderProps = {
    children: ReactNode;
};
const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
    const themeOptions: ThemeOptions = {
        palette,
        typography,
        shape: { borderRadius: 4 }
        // shadows
    };

    const theme = createTheme(themeOptions);

    // theme.components = componentsOverride(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default GlobalThemeProvider;
