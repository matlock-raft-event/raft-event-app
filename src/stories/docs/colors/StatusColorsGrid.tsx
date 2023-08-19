import { PaletteColor } from "@mui/material/styles/createPalette";

import palette from "~/theme/palette";

import ColorsGrid from "./ColorsGrid";

const StatusColorsGrid = () => {
    const colors: Record<string, PaletteColor> = {
        Success: palette.success,
        Info: palette.info,
        Warning: palette.warning,
        Error: palette.error
    };

    return (
        <ColorsGrid colors={colors} />
    );
};
export default StatusColorsGrid;
