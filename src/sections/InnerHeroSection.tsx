import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";

import Header from "~/components/Header";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";

const StyledOverlay = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.3,
    zIndex: 10
}));

const StyledGradient = styled("div")(({ theme }) => ({
    width: "100%",
    height: "calc(100% + 2px)", // Weird issue with gap at bottom
    position: "absolute",
    top: 0,
    left: 0,
    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(53,58,60,1))",
    zIndex: 10
}));

const StyledWaves = styled(Waves)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    zIndex: 11,
    marginBottom: -1
}));

const InnerHeroSection = () => {
    const theme = useTheme();
    const isMobile = useResponsive("down", "sm");

    return (
        <div style={{ position: "relative" }}>
            <Header />

            <div style={{ position: "relative" }}>
                {
                    isMobile
                        ? (
                            <>
                                <StaticImage
                                    alt="Cover Image"
                                    aspectRatio={24 / 9}
                                    placeholder="blurred"
                                    src="../assets/images/header.jpg"
                                />
                                <StyledGradient />
                            </>
                        )
                        : (
                            <>
                                <StaticImage
                                    alt="Cover Image"
                                    aspectRatio={32 / 9}
                                    placeholder="blurred"
                                    src="../assets/images/header.jpg"
                                />
                                <StyledOverlay />
                                <StyledWaves topColor="unset" variant={3} />
                            </>
                        )
                }
            </div>

            {
                isMobile &&
                <Waves topColor={theme.palette.dark.main} variant={3} />
            }
        </div>
    );
};

export default InnerHeroSection;
