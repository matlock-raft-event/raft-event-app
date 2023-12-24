import React, { CSSProperties, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { TITLE_FONT_FAMILY } from "~/theme/typography";

const StyledDiv = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 2,
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    display: "block"
}));

const TypographyMaxLine = styled(Typography)(({ theme }) => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1
}));

interface ImageCardProps {
    aspectRatio?: string;
    img: IGatsbyImageData;
    title?: string;
    description?: string;
    onClick?: VoidFunction;
    readOnly?: boolean;
    hideBorders?: boolean;
}

const ImageCard = ({
    aspectRatio,
    description,
    img,
    title,
    onClick = () => null,
    readOnly = false,
    hideBorders = false
}: ImageCardProps) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = readOnly
        ? null
        : ({
            cursor: "pointer",
            boxShadow: theme.shadows[!hideBorders ? 10 : 5],
            transform: "scale(1.01) rotate(-0.5deg)"
        });

    const borderStyles: CSSProperties | null = hideBorders
        ? null
        : ({
            backgroundColor: "#ffffff",
            padding: "3%",
            paddingBottom: "9%",
            boxShadow: theme.shadows[5]
        });

    return (
        <StyledDiv
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                ...(hover && hoverStyles),
                ...(!hideBorders && borderStyles)
            }}
        >
            <Stack spacing={1}>
                <GatsbyImage
                    alt=""
                    image={img}
                    style={{
                        height: "100%",
                        width: "100%",
                        aspectRatio,
                        borderRadius: 2
                    }}
                />
                {
                    title &&
                    <Typography fontFamily={TITLE_FONT_FAMILY} variant="h6">
                        {title}
                    </Typography>
                }
                {
                    description &&
                    <TypographyMaxLine>
                        {description}
                    </TypographyMaxLine>
                }
            </Stack>
        </StyledDiv>
    );
};

export default ImageCard;
