import { Theme } from "@mui/material/styles";

import Montserrat from "~/static/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import Rokkitt from "~/static/fonts/Rokkitt/Rokkitt-VariableFont_wght.ttf";

const CssBaseline = (theme: Theme) => ({
    MuiCssBaseline: {
        styleOverrides: `
        @font-face {
            font-family: "Montserrat";
            src: local('Montserrat'), local('Montserrat-Regular'), url(${Montserrat}) format('woff2');
            font-weight: 125 950;
            font-stretch: 75% 125%;
            font-style: normal;
        }
        
        @font-face {
            font-family: "Rokkitt";
            src: local('Rokkitt'), local('Rokkitt-Regular'), url(${Rokkitt}) format('woff2');
            font-weight: 125 950;
            font-stretch: 75% 125%;
            font-style: normal;
        }
      `
    }
});

export default CssBaseline;
