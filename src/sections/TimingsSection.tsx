import { Container, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import useResponsive from "~/hooks/useResponsive";
import { SECONDARY_FONT_FAMILY } from "~/theme/typography";

const TIMINGS = [
    {
        time: "07:00",
        description: "The rafts arrive at Cawdor Quarry"
    },
    {
        time: "10:00",
        description: "The rafts set off on their journey down the Derwent"
    },
    {
        time: "10:30",
        description: "The rafts arrive at Hall Leys Park in Matlock"
    },
    {
        time: "11:30",
        description: "The rafts arrive at Derwent Gardens in Matlock Bath"
    },
    {
        time: "12:00",
        description: "The rafts arrive at the finish line at Cromford Meadows in Cromford"
    },
    {
        time: "14:00",
        description: "The ceremony takes place at The Fishpond in Matlock Bath to " +
            "announce the winner of this years raft event!"
    }
];

const TimingsSection = () => {
    const theme = useTheme();

    const isMobile = useResponsive("down", "md");

    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading color={theme.palette.secondary} subtitle="What time is it?" title="Timings" />

            <Container maxWidth="lg">
                <Typography mb={4} variant="body1">
                    Once the rafts have set off, the timings always vary based on how fast the river is flowing, if
                    there’s any obstacles along the route etc, so we’d recommend getting there slightly earlier just
                    in case, it’s always worth the wait!
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Stack alignItems="center" divider={<Divider flexItem light />} spacing={2}>
                    {
                        TIMINGS.map(item => (
                            <Stack
                                key={item.description}
                                alignItems="center"
                                direction={{
                                    xs: "column",
                                    sm: "row"
                                }}
                                divider={
                                    <Divider
                                        flexItem
                                        orientation="vertical"
                                        sx={{
                                            borderRightWidth: 4,
                                            borderRadius: 1
                                        }}
                                        variant="middle"
                                    />
                                }
                                spacing={{
                                    xs: 0,
                                    sm: 2
                                }}
                                width={1}
                            >
                                <Typography
                                    color="primary.contrastText"
                                    flex={1}
                                    fontFamily={SECONDARY_FONT_FAMILY}
                                    textAlign="right"
                                    variant="h1"
                                >
                                    {item.time}
                                </Typography>
                                <Typography
                                    flex={1.5}
                                    textAlign={isMobile ? "center" : "left"}
                                    variant="body1"
                                >
                                    {item.description}
                                </Typography>
                            </Stack>
                        ))
                    }
                </Stack>
            </Container>
        </Section>
    );
};

export default TimingsSection;
