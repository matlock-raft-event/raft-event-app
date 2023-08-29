import { Theme } from "@mui/material/styles";

import Button from "./Button";
import Link from "./Link";
import ToggleButton from "./ToggleButton";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Button(theme),
        Link(theme),
        ToggleButton(theme)
    );
}
