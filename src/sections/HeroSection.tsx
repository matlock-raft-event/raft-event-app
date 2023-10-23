import * as React from "react";
import { useState } from "react";
import { Button, Container, Drawer, Fab, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import FacebookIcon from "~/components/FacebookIcon";
import Iconify from "~/components/Iconify";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import { GREEN } from "~/theme/palette";
import { PRIMARY_FONT_FAMILY, SECONDARY_FONT_FAMILY, TITLE_FONT_FAMILY } from "~/theme/typography";

import sample from "../assets/video/hero.mp4";

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

const links = [
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Info",
        to: "/info"
    },
    {
        label: "Sponsors",
        to: "/sponsors"
    },
    {
        label: "Contact",
        to: "/contact"
    },
    {
        label: "Get Involved",
        to: "/take-part"
    }
];

const Header = () => {
    const theme = useTheme();

    const isMobile = useResponsive("down", "sm");

    const [open, setOpen] = useState(false);
    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setOpen(!open);
    };

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 20
            }}
        >
            {
                isMobile
                    ? (
                        <>
                            <Stack direction="row" justifyContent="space-between" p={2}>
                                <StaticImage
                                    alt="Event Logo"
                                    imgStyle={{
                                        width: "100%",
                                        height: "auto%"
                                    }}
                                    src="../assets/images/logo.png"
                                    style={{
                                        width: "20%",
                                        height: "auto",
                                        zIndex: 21
                                    }}
                                />
                                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                {/* @ts-ignore */}
                                <Fab aria-label="add" color="green" onClick={toggleDrawer}>
                                    <Iconify icon="ph:list" />
                                </Fab>
                            </Stack>
                            <Drawer
                                anchor="top"
                                onClose={toggleDrawer}
                                open={open}
                                sx={{
                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        backgroundColor: theme.palette.green.main,
                                        height: "100vh",
                                        width: "100vw"
                                    }
                                }}
                            >
                                <Fab
                                    aria-label="close menu"
                                    color="secondary"
                                    onClick={toggleDrawer}
                                    size="large"
                                    sx={{
                                        position: "absolute",
                                        top: theme.spacing(2),
                                        right: theme.spacing(2)
                                    }}
                                >
                                    <Iconify icon="ph:x-bold" />
                                </Fab>

                                <Stack justifyContent="space-between" sx={{ minHeight: "100vh" }}>

                                    <Stack
                                        spacing={2}
                                        sx={{
                                            paddingY: 4,
                                            paddingX: 3
                                        }}
                                    >
                                        {
                                            links.map(link => (
                                                <Typography
                                                    key={link.label}
                                                    color="secondary"
                                                    component={Link}
                                                    sx={{
                                                        fontFamily: SECONDARY_FONT_FAMILY,
                                                        textDecoration: "none",
                                                        textTransform: "uppercase"
                                                    }}
                                                    to={link.to}
                                                    variant="h2"
                                                >
                                                    {link.label}
                                                </Typography>
                                            ))
                                        }
                                        <div>
                                            <Button
                                                component="a"
                                                href="https://www.justgiving.com/page/matlock-raft-event-2023"
                                                rel="noreferrer"
                                                size="large"
                                                target="_blank"
                                            >
                                                Donate
                                            </Button>
                                        </div>
                                    </Stack>

                                    <div>
                                        <Waves
                                            bottomColor={theme.palette.green.dark}
                                            style={{ marginBottom: -1 }}
                                            topColor={theme.palette.green.main}
                                        />
                                        <Stack padding={3} sx={{ backgroundColor: theme.palette.green.dark }}>
                                            <Typography color="secondary" variant="h5">
                                                Find us on Facebook:
                                            </Typography>
                                            <FacebookIcon color={theme.palette.secondary.main} href="www.google.com" />
                                        </Stack>
                                    </div>
                                </Stack>

                            </Drawer>
                        </>
                    )
                    : (
                        <>
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
                                        {
                                            links.slice(0, 3)
                                                .map(link => (
                                                    <Button
                                                        key={link.label}
                                                        color="secondary"
                                                        component={Link}
                                                        to={link.to}
                                                        variant="text"
                                                    >
                                                        {link.label}
                                                    </Button>
                                                ))
                                        }
                                    </Stack>

                                    <StaticImage
                                        alt="Event Logo"
                                        imgStyle={{
                                            width: "100%",
                                            height: "auto%"
                                        }}
                                        src="../assets/images/logo.png"
                                        style={{
                                            width: "30%",
                                            height: "auto",
                                            zIndex: 21,
                                            marginTop: theme.spacing(0.5)
                                        }}
                                    />

                                    <Stack
                                        alignItems="center"
                                        direction="row"
                                        justifyContent="space-around"
                                        style={{ height: "100%" }}
                                        width={1}
                                    >
                                        {
                                            links.slice(3, 5)
                                                .map(link => (
                                                    <Button
                                                        key={link.label}
                                                        color="secondary"
                                                        component={Link}
                                                        to={link.to}
                                                        variant="text"
                                                    >
                                                        {link.label}
                                                    </Button>
                                                ))
                                        }
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
                                    // Issue with waves due to painting a rectangle and one wave
                                    transform: "rotate(180deg)",
                                    zIndex: 15,
                                    marginTop: -1
                                }}
                                topColor="unset"
                                variant={3}
                            />
                        </>
                    )
            }
        </div>
    );
};

const HeroContent = () => {
    const theme = useTheme();

    const isMobile = useResponsive("down", "sm");

    // eslint-disable-next-line react/no-unstable-nested-components
    const Content = () => (
        <Stack
            justifyContent="center"
            px={1}
            py={2}
            spacing={2}
            style={{
                height: "100%",
                zIndex: 12
            }}
        >
            <Typography
                color="yellow.main"
                fontFamily={SECONDARY_FONT_FAMILY}
                textAlign={isMobile ? "center" : undefined}
                variant="h5"
            >
                DERBYSHIRE’S ONLY ANNUAL CHARITY RAFT EVENT
            </Typography>
            <Typography
                color="secondary.main"
                fontFamily={TITLE_FONT_FAMILY}
                textAlign={isMobile ? "center" : undefined}
                variant="h1"
            >
                Boxing Day fun for all the family!
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
                    <Button size="large">
                        Get Involved
                    </Button>
                </div>
                <StaticImage
                    alt="Fundraising for the RNLI"
                    imgStyle={{
                        objectFit: "contain"
                    }}
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
    const isMobile = useResponsive("down", "sm");

    return (
        <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
            <Header />

            <div style={{ position: "relative" }}>
                <StyledVideo autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
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
            <HeroContent />
            {
                isMobile &&
                <Waves topColor={theme.palette.dark.main} variant={3} />
            }
        </div>
    );
};

export default HeroSection;