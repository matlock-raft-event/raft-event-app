import { CSSProperties, useState } from "react";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledLink = styled("a")(({ theme }) => ({
    aspectRatio: "3 / 2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#ffffff",
    border: "16px solid white",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
}));

interface ImageLinkProps {
    img: string;
    label: string;
    onClick: VoidFunction;
}

const ImageLink = ({
    img,
    label,
    onClick
}: ImageLinkProps) => {
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
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                backgroundImage: `url("${img}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                ...(hover && hoverStyles)
            }}
        >
            <Typography
                color="white"
                sx={{
                    fontFamily: "'Rokkitt', serif"
                }}
                textTransform="uppercase"
                variant="h3"
            >
                {label}
            </Typography>
        </StyledLink>
    );
};

export default ImageLink;
