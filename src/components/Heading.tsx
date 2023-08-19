import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

const StyledContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});

const StyledSubtitle = styled("div")({
    alignItems: "center",
    display: "flex",
    gap: 16,
    marginBottom: 8
});

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

    return (
        <StyledContainer style={{ color: textColor }}>
            {
                subtitle &&
                <StyledSubtitle>
                    <Bullet />
                    <Typography textTransform="uppercase" variant="h6">{subtitle}</Typography>
                    <Bullet />
                </StyledSubtitle>
            }
            <Typography variant="h2">{title}</Typography>
        </StyledContainer>
    );
};

export default Heading;
