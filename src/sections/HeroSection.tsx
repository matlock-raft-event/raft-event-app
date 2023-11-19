import * as React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "~/components/Header";
import Iconify from "~/components/Iconify";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import { PRIMARY_FONT_FAMILY, TITLE_FONT_FAMILY } from "~/theme/typography";

import backupVideo from "../assets/video/hero.mp4";

const StyledVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "auto",
    display: "block"
}));

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

type HeroContentProps = {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
};
const HeroContent = ({
    title,
    subtitle,
    buttonText,
    buttonLink
}: HeroContentProps) => {
    const theme = useTheme();

    const isMobile = useResponsive("down", "md");

    // eslint-disable-next-line react/no-unstable-nested-components
    const Content = () => (
        <Stack
            justifyContent="center"
            px={1}
            py={2}
            spacing={2}
            style={{
                height: "100%",
                zIndex: 12,
                ...(!isMobile && { width: "61.8vw" })
            }}
        >
            <Typography
                color="yellow.main"
                fontFamily={PRIMARY_FONT_FAMILY}
                textAlign={isMobile ? "center" : undefined}
                variant="h5"
            >
                {/* Replace spaces with (U+00A0 NON-BREAKING SPACE) */}
                {subtitle?.replace(/ /g, "\u00A0") ?? "MATLOCK'S VERY OWN ANNUAL CHARITY RAFT EVENT"}
            </Typography>
            <Typography
                color="secondary.main"
                fontFamily={TITLE_FONT_FAMILY}
                textAlign={isMobile ? "center" : undefined}
                variant="h1"
            >
                {/* Replace spaces with (U+00A0 NON-BREAKING SPACE) */}
                {title?.replace(/ /g, "\u00A0") ?? "Boxing Day fun for all the family!"}
            </Typography>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent={isMobile ? "center" : undefined}
                spacing={0.5}
            >
                <Iconify color={theme.palette.yellow.main} icon="ph:map-pin-bold" />
                <Typography
                    color="secondary.main"
                    fontFamily={PRIMARY_FONT_FAMILY}
                    variant="subtitle2"
                >
                    Matlock, Derbyshire - 26th December
                    {" "}
                    {new Date().getFullYear()}
                </Typography>
            </Stack>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent={isMobile ? "center" : undefined}
                spacing={2}
            >
                <div>
                    <Button component={Link} size="large" to={buttonLink ?? "https://www.google.com"}>
                        {buttonText ?? "Get Involved"}
                    </Button>
                </div>
                <StaticImage
                    alt="Fundraising for the RNLI"
                    imgStyle={{
                        objectFit: "contain"
                    }}
                    placeholder="blurred"
                    src="../assets/images/rnlifundraise.png"
                    style={{
                        width: 110
                    }}
                />
            </Stack>
        </Stack>
    );

    if (isMobile) {
        return (
            <div
                style={{
                    backgroundColor: theme.palette.dark.main,
                    marginTop: -1
                }}
            >
                <Content />
            </div>
        );
    }
    return (
        <div
            style={{
                width: "100%",
                position: "absolute",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 19
            }}
        >
            <Container
                maxWidth="lg"
                style={{ height: "100%" }}
            >
                <Content />
            </Container>
        </div>
    );
};

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useResponsive("down", "md");

    const data: Queries.HeroQuery = useStaticQuery(graphql`
        query Hero {
          sanityHero {
            title
            subtitle
            buttonLink
            buttonText
            video {
              asset {
                url
              }
            }
          }
        }
    `);

    const title = data.sanityHero?.title ?? undefined;
    const subtitle = data.sanityHero?.subtitle ?? undefined;
    const videoUrl = data.sanityHero?.video?.asset?.url ?? undefined;
    const buttonLink = data.sanityHero?.buttonLink ?? undefined;
    const buttonText = data.sanityHero?.buttonText ?? undefined;

    return (
        <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
            <Header />

            <div style={{ position: "relative" }}>
                <StyledVideo autoPlay loop muted>
                    <source src={videoUrl ?? backupVideo} type="video/mp4" />
                </StyledVideo>
                {
                    isMobile
                        ? <StyledGradient />
                        : <StyledOverlay />
                }
                {
                    !isMobile &&
                    <StyledWaves topColor="unset" variant={3} />
                }
            </div>
            <HeroContent
                buttonLink={buttonLink}
                buttonText={buttonText}
                subtitle={subtitle}
                title={title}
            />
            {
                isMobile &&
                <Waves topColor={theme.palette.dark.main} variant={3} />
            }
        </div>
    );
};

export default HeroSection;
