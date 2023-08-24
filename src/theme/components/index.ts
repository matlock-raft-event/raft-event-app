import { Theme } from "@mui/material/styles";

import Button from "./Button";
import CssBaseline from "./CssBaseline";
import Link from "./Link";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Button(theme),
        CssBaseline(theme),
        Link(theme)
    );
}
