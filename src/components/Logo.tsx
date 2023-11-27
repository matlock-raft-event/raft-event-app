/* eslint-disable max-len */

import { Box, BoxProps } from "@mui/material";

import LogoSvg from "../assets/images/logo.svg";

const Logo = (props: BoxProps) => (
    <Box {...props}>
        <img alt="Event Logo" src={LogoSvg} />
    </Box>
);

export default Logo;
