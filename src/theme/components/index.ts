import { Theme } from "@mui/material/styles";

import Button from "./Button";
import Link from "./Link";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Button(theme),
        Link(theme)
    );
}
