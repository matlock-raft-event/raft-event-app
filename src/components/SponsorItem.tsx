import React, { CSSProperties, useEffect, useRef, useState } from "react";
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
    const ref = useRef<HTMLImageElement>(null);

    const [x, setX] = useState<CSSProperties>();

    // Not ideal but was having nightmarish issues keeping various aspect ratio images inside a 1/1 aspect ratio parent
    useEffect(() => { // TODO: We now have height and width from Sanity
        const hasResized = x?.height === "100%";
        if (hasResized) return;

        const height = ref.current?.getBoundingClientRect().height;
        const width = ref.current?.getBoundingClientRect().width;
        const isPortraitImg = height && width && height > width;
        if (isPortraitImg) {
            setX({ height: "90%" }); // 100% - 5% padding
        }
    }, []);

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
                ref={ref}
                alt={altText ?? ""}
                image={img}
                src={img}
                style={{
                    ...x,
                    maxHeight: "100%",
                    maxWidth: "100%"
                }}
            />
        </StyledButton>
    );
};

export default SponsorItem;
