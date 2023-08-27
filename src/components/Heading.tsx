import { Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

import useResponsive from "~/hooks/useResponsive";

const StyledContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
}));

const Bullet = () => (
    <span>
        <Typography variant="h6">
            &#8226;
        </Typography>
    </span>
);
// TODO: Can we get a better bullet svg?

type HeadingProps = {
    color?: PaletteColor;
    subtitle?: string;
    title: string;
};

const Heading = ({
    color,
    subtitle,
    title
}: HeadingProps) => {
    const theme = useTheme();
    const textColor = color?.contrastText ?? theme.palette.primary.contrastText;

    const isMobile = useResponsive("down", "sm");

    return (
        <StyledContainer style={{ color: textColor }}>
            {
                subtitle &&
                <Stack alignItems="center" direction="row" mb={1} spacing={isMobile ? 1 : 2}>
                    <Bullet />
                    <Typography textAlign="center" textTransform="uppercase" variant="h6">{subtitle}</Typography>
                    <Bullet />
                </Stack>
            }
            <Typography textAlign="center" variant="h2">{title}</Typography>
        </StyledContainer>
    );
};

export default Heading;
