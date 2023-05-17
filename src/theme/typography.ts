import { ITypography } from "./theme";

export function pxToRem(value: number) {
    return `${value / 16}rem`;
}

// This object contains defaults for the typography components and is passed into the theme to allow components to
// access these values.
// NOTE: When adding/changing properties don't forget to add them to globalStyles too.
const typography: ITypography = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        responsiveFontSizes: {
            sm: 52,
            md: 58,
            lg: 64
        }
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        responsiveFontSizes: {
            sm: 40,
            md: 44,
            lg: 48
        }
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        responsiveFontSizes: {
            sm: 26,
            md: 30,
            lg: 32
        }
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        responsiveFontSizes: {
            sm: 20,
            md: 24,
            lg: 24
        }
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        responsiveFontSizes: {
            sm: 19,
            md: 20,
            lg: 20
        }
    },
    h6: {
        fontFamily: "'Rokkitt', serif",
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        responsiveFontSizes: {
            sm: 18,
            md: 18,
            lg: 18
        }
    },
    p: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};

export default typography;
