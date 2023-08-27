import React, { CSSProperties, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const StyledButton = styled("a")(({ theme }) => ({
    aspectRatio: "1 / 1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
}));

type SponsorItemProps = {
    img: IGatsbyImageData;
    altText?: string;
    onClick?: VoidFunction;
    readOnly?: boolean;
};

const SponsorItem = ({
    img,
    altText,
    onClick,
    readOnly = false
}: SponsorItemProps) => {
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
        <StyledButton
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                ...(hover && hoverStyles)
            }}
        >
            <GatsbyImage
                alt={altText ?? ""}
                image={img}
                style={{
                    maxHeight: "100%",
                    maxWidth: "100%"
                }}
            />
        </StyledButton>
    );
};

export default SponsorItem;
