import * as React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Iconify from "~/components/Iconify";
import Waves from "~/components/Waves";
import { GREEN } from "~/theme/palette";
import { PRIMARY_FONT_FAMILY, SECONDARY_FONT_FAMILY, TITLE_FONT_FAMILY } from "~/theme/typography";

import sample from "../assets/video/hero.mp4";

const StyledVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "auto"
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

const StyledWaves = styled(Waves)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    zIndex: 11
    // height: "auto"
}));

const HeroSection = () => {
    const theme = useTheme();
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 20
                }}
            >
                <div
                    style={{
                        backgroundColor: GREEN.main,
                        height: 60
                    }}
                >
                    <Stack
                        alignItems="flex-start"
                        direction="row"
                        justifyContent="space-around"
                        spacing={2}
                        style={{ height: "100%" }}
                    >

                        <Stack
                            alignItems="center"
                            direction="row"
                            justifyContent="space-around"
                            style={{ height: "100%" }}
                            width={1}
                        >
                            <Button color="secondary" component={Link} to="/about" variant="text">
                                About
                            </Button>

                            <Button color="secondary" component={Link} to="/info" variant="text">
                                Info
                            </Button>

                            <Button color="secondary" component={Link} to="/sponsors" variant="text">
                                Sponsors
                            </Button>
                        </Stack>

                        <div style={{ paddingTop: theme.spacing(0.5) }}>
                            <StaticImage
                                alt="Event Logo"
                                imgStyle={{
                                    width: 200,
                                    height: "auto%"
                                }}
                                src="../assets/images/logo.png"
                                style={{
                                    width: 200,
                                    height: "auto",
                                    zIndex: 21
                                }}
                            />
                        </div>

                        <Stack
                            alignItems="center"
                            direction="row"
                            justifyContent="space-around"
                            style={{ height: "100%" }}
                            width={1}
                        >
                            <Button color="secondary" component={Link} to="/contact" variant="text">
                                Contact
                            </Button>

                            <Button color="secondary" component={Link} to="/take-part" variant="text">
                                Get Involved
                            </Button>

                            <Button>
                                Donate
                            </Button>
                        </Stack>

                    </Stack>

                </div>
                <Waves
                    bottomColor={GREEN.main}
                    style={{
                        height: 20,
                        transform: "rotate(180deg)", // Issue with waves due to painting a rectangle and one wave
                        zIndex: 15
                    }}
                    topColor="unset"
                    variant={3}
                />
            </div>

            <div style={{ position: "relative" }}>
                <StyledVideo autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                </StyledVideo>
                <StyledOverlay />
                <StyledWaves topColor="unset" variant={3} />
            </div>
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
                    <Stack
                        justifyContent="center"
                        spacing={2}
                        style={{
                            height: "100%",
                            zIndex: 12
                        }}
                    >
                        <Typography
                            color="yellow.main"
                            fontFamily={SECONDARY_FONT_FAMILY}
                            variant="h5"
                        >
                            DERBYSHIRE’S ONLY ANNUAL CHARITY RAFT EVENT
                        </Typography>
                        <Typography
                            color="secondary.main"
                            fontFamily={TITLE_FONT_FAMILY}
                            variant="h1"
                        >
                            Boxing Day fun for all the family!
                        </Typography>
                        <Stack alignItems="center" direction="row" spacing={0.5}>
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
                        <Stack alignItems="center" direction="row" spacing={2}>
                            <div>
                                <Button size="large">
                                    Get Involved
                                </Button>
                            </div>
                            <StaticImage
                                alt="Cover Image"
                                imgStyle={{
                                    height: 56,
                                    objectFit: "contain",
                                    width: "auto"
                                }}
                                src="../assets/images/rnlifundraise.png"
                                style={{
                                    height: 56,
                                    width: "auto"
                                }}
                            />
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    );
};

export default HeroSection;
