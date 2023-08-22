import React, { CSSProperties, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { SECONDARY_FONT_FAMILY } from "~/theme/typography";

const StyledDiv = styled("div")(({ theme }) => ({
    position: "relative",
    padding: "4%",
    paddingBottom: "8%",
    borderRadius: 2,
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    display: "flex"
}));

interface UpdateCardProps {
    img: IGatsbyImageData;
    title: string;
    description?: string;
    onClick?: VoidFunction;
    readOnly?: boolean;
}

const UpdateCard = ({ description, img, title, onClick = () => null, readOnly = false }: UpdateCardProps) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = readOnly
        ? null
        : ({
            cursor: "pointer",
            boxShadow: theme.shadows[10],
            transform: "scale(1.01)"
        });

    return (
        <StyledDiv
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                ...(hover && hoverStyles)
            }}
        >
            <Stack spacing={1}>
                <GatsbyImage
                    alt=""
                    image={img}
                    style={{
                        height: "100%",
                        width: "100%",
                        aspectRatio: "3 / 2",
                        backgroundImage: `url("${img}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 2,
                        maxHeight: "100%",
                        maxWidth: "100%"
                    }}
                />
                <Typography fontFamily={SECONDARY_FONT_FAMILY} variant="h6">
                    {title}
                </Typography>
                <Typography
                    sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1
                    }}
                >
                    {description}
                </Typography>
            </Stack>
        </StyledDiv>
    );
};

export default UpdateCard;