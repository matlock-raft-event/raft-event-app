import { IPalette, IPaletteVariants } from "./theme";

export const PRIMARY: IPaletteVariants = {
    lighter: {
        color: "#d6f7ec",
        contrastText: "#1c5053"
    },
    light: {
        color: "#c9f4e5",
        contrastText: "#1c5053"
    },
    main: {
        color: "#bbf1df",
        contrastText: "#1c5053"
    },
    dark: {
        color: "#96c1b2",
        contrastText: "#003134"
    },
    darker: {
        color: "#709186",
        contrastText: "#232323"
    }
};

export const SECONDARY: IPaletteVariants = {
    lighter: {
        color: "#f8f8ef",
        contrastText: "#353A3C"
    },
    light: {
        color: "#f5f5ea",
        contrastText: "#353A3C"
    },
    main: {
        color: "#f3f3e5",
        contrastText: "#353A3C"
    },
    dark: {
        color: "#dbdbce",
        contrastText: "#353A3C"
    },
    darker: {
        color: "#aaaaa0",
        contrastText: "#1a1f21"
    }
};

export const RED: IPaletteVariants = {
    lighter: {
        color: "#e07f85",
        contrastText: "#0a0a0a"
    },
    light: {
        color: "#d5555c",
        contrastText: "#161616"
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
        contrastText: "#1f1f1f"
    },
    light: {
        color: "#59ad87",
        contrastText: "#101010"
    },
    main: {
        color: "#2f9869",
        contrastText: "#1f1f1f"
    },
    dark: {
        color: "#267a54",
        contrastText: "#efefef"
    },
    darker: {
        color: "#1c5b3f",
        contrastText: "#f2f2f2"
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
        contrastText: "#1d1d1d"
    },
    light: {
        color: "#61F3F3",
        contrastText: "#1d1d1d"
    },
    main: {
        color: "#00B8D9",
        contrastText: "#1d1d1d"
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
        contrastText: "#121212"
    },
    light: {
        color: "#86E8AB",
        contrastText: "#121212"
    },
    main: {
        color: "#36B37E",
        contrastText: "#121212"
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
        contrastText: "#161616"
    },
    darker: {
        color: "#7A4100",
        contrastText: "#ffffff"
    }
};

export const ERROR: IPaletteVariants = {
    lighter: {
        color: "#FFE9D5",
        contrastText: "#2a2a2a"
    },
    light: {
        color: "#FFAC82",
        contrastText: "#2a2a2a"
    },
    main: {
        color: "#FF5630",
        contrastText: "#2a2a2a"
    },
    dark: {
        color: "#B71D18",
        contrastText: "#ffffff"
    },
    darker: {
        color: "#7A0916",
        contrastText: "#FFFFFF"
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
    yellow: YELLOW,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR
};

export default palette;
