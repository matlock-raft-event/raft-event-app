import { useState } from "react";
import * as React from "react";
import { Button, Drawer, Fab, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import FacebookIcon from "~/components/FacebookIcon";
import Iconify from "~/components/Iconify";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import { GREEN } from "~/theme/palette";
import { SECONDARY_FONT_FAMILY } from "~/theme/typography";

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

export default Header;
