import React from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import PodiumBadge from "~/components/PodiumBadge";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

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

interface PodiumCardProps {
    img: IGatsbyImageData;
    podium: 1 | 2 | 3;
    title: string;
}

const PodiumCard = ({ img, podium, title }: PodiumCardProps) => (
    <StyledDiv>
        <div
            style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "-10%",
                zIndex: 99,
                left: 0
            }}
        >
            <PodiumBadge height="inherit" podium={podium} width="25%" />
        </div>
        <Stack spacing={1}>
            <GatsbyImage
                alt=""
                image={img}
                style={{
                    height: "100%",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: 2,
                    maxHeight: "100%",
                    maxWidth: "100%"
                }}
            />
            <Typography fontFamily={TITLE_FONT_FAMILY} sx={{ textAlign: "center" }} variant="h4">
                {title}
            </Typography>
        </Stack>
    </StyledDiv>
);

export default PodiumCard;
