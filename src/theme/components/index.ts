import { Theme } from "@mui/material/styles";

import Button from "./Button";
import Link from "./Link";
import TextField from "./TextField";
import ToggleButton from "./ToggleButton";
import Typography from "./Typography";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Button(theme),
        Link(theme),
        TextField(theme),
        ToggleButton(theme),
        Typography(theme)
    );
}
