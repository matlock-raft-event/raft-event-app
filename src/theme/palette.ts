import { IPalette, IPaletteVariants } from "~/theme/theme";

export const PRIMARY: IPaletteVariants = {
    lighter: "#b6ded0",
    light: "#9ed3c1",
    main: "#86C8B1",
    dark: "#6ba08e",
    darker: "#50786a",
    contrastText: "#fff"
};

export const SECONDARY: IPaletteVariants = {
    lighter: "#fdd691",
    light: "#fcc86c",
    main: "#FBBA47",
    dark: "#c99539",
    darker: "#97702b",
    contrastText: "#fff"
};

export const INFO: IPaletteVariants = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#fff"
};

export const SUCCESS: IPaletteVariants = {
    lighter: "#D8FBDE",
    light: "#86E8AB",
    main: "#36B37E",
    dark: "#1B806A",
    darker: "#0A5554",
    contrastText: "#fff"
};

export const WARNING: IPaletteVariants = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: "#212B36"
};

export const ERROR: IPaletteVariants = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#fff"
};

const palette: IPalette = {
    common: {
        black: "#000000",
        white: "#ffffff"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR
};

export default palette;
