import { CSSProperties, useState } from "react";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { SECONDARY_FONT_FAMILY } from "~/theme/typography";

const StyledLink = styled("a")(({ theme }) => ({
    aspectRatio: "3 / 2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#ffffff",
    border: "8px solid white",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
}));

interface ImageLinkProps {
    img: IGatsbyImageData;
    label: string;
    href: string;
}

const ImageLink = ({ img, label, href }: ImageLinkProps) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = {
        cursor: "pointer",
        boxShadow: theme.shadows[10],
        transform: "scale(1.01)"
    };

    return (
        <StyledLink
            href={href}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ ...(hover && hoverStyles) }}
        >
            <GatsbyImage alt="LLL" image={img} />
            <Typography
                color="white"
                position="absolute"
                sx={{ fontFamily: SECONDARY_FONT_FAMILY }}
                textTransform="uppercase"
                variant="h3"
            >
                {label}
            </Typography>
        </StyledLink>
    );
};

export default ImageLink;
