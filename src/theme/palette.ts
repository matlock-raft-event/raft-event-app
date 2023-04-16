import { IPalette, IPaletteVariants } from "./theme";

export const PRIMARY: IPaletteVariants = {
    lighter: {
        color: "#b6ded0",
        contrastText: "#ffffff"
    },
    light: {
        color: "#9ed3c1",
        contrastText: "#ffffff"
    },
    main: {
        color: "#86C8B1",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#6ba08e",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#50786a",
        contrastText: "#ffffff"
    }
};

export const SECONDARY: IPaletteVariants = {
    lighter: {
        color: "#fdd691",
        contrastText: "#ffffff"
    },
    light: {
        color: "#fcc86c",
        contrastText: "#ffffff"
    },
    main: {
        color: "#FBBA47",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#c99539",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#97702b",
        contrastText: "#ffffff"
    }
};

export const RED: IPaletteVariants = {
    lighter: {
        color: "#e07f85",
        contrastText: "#ffffff"
    },
    light: {
        color: "#d5555c",
        contrastText: "#ffffff"
    },
    main: {
        color: "#cb2a33",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#a22229",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#7a191f",
        contrastText: "#ffffff"
    }
};

export const GREEN: IPaletteVariants = {
    lighter: {
        color: "#82c1a5",
        contrastText: "#ffffff"
    },
    light: {
        color: "#59ad87",
        contrastText: "#ffffff"
    },
    main: {
        color: "#2f9869",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#267a54",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#1c5b3f",
        contrastText: "#ffffff"
    }
};

export const YELLOW: IPaletteVariants = {
    lighter: {
        color: "#fdd691",
        contrastText: "#4b2f00"
    },
    light: {
        color: "#fcc86c",
        contrastText: "#4b2f00"
    },
    main: {
        color: "#FBBA47",
        contrastText: "#4b2f00"
    },
    dark: {
        color: "#c99539",
        contrastText: "#250700"
    },
    darker: {
        color: "#97702b",
        contrastText: "#160000"
    }
};

export const INFO: IPaletteVariants = {
    lighter: {
        color: "#CAFDF5",
        contrastText: "#ffffff"
    },
    light: {
        color: "#61F3F3",
        contrastText: "#ffffff"
    },
    main: {
        color: "#00B8D9",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#006C9C",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#003768",
        contrastText: "#ffffff"
    }
};

export const SUCCESS: IPaletteVariants = {
    lighter: {
        color: "#D8FBDE",
        contrastText: "#ffffff"
    },
    light: {
        color: "#86E8AB",
        contrastText: "#ffffff"
    },
    main: {
        color: "#36B37E",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#1B806A",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#0A5554",
        contrastText: "#ffffff"
    }
};

export const WARNING: IPaletteVariants = {
    lighter: {
        color: "#FFF5CC",
        contrastText: "#212B36"
    },
    light: {
        color: "#FFD666",
        contrastText: "#212B36"
    },
    main: {
        color: "#FFAB00",
        contrastText: "#212B36"
    },
    dark: {
        color: "#B76E00",
        contrastText: "#212B36"
    },
    darker: {
        color: "#7A4100",
        contrastText: "#212B36"
    }
};

export const ERROR: IPaletteVariants = {
    lighter: {
        color: "#FFE9D5",
        contrastText: "#ffffff"
    },
    light: {
        color: "#FFAC82",
        contrastText: "#ffffff"
    },
    main: {
        color: "#FF5630",
        contrastText: "#ffffff"
    },
    dark: {
        color: "#B71D18",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#7A0916",
        contrastText: "#ffffff"
    }
};

const palette: IPalette = {
    common: {
        black: "#000000",
        white: "#ffffff"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    red: RED,
    green: GREEN,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR
};

export default palette;
