import { PaletteColor } from "@mui/material/styles/createPalette";

import palette from "~/theme/palette";

import ColorsGrid from "./ColorsGrid";

const ThemeColorsGrid = () => {
    const colors: Record<string, PaletteColor> = {
        Primary: palette.primary,
        Secondary: palette.secondary,
        Red: palette.red,
        Green: palette.green,
        Yellow: palette.yellow
    };

    return (
        <ColorsGrid colors={colors} />
    );
};
export default ThemeColorsGrid;
