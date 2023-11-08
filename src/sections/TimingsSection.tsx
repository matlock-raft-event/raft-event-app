import { Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Iconify from "~/components/Iconify";
import Section from "~/components/Section";
import StepCard from "~/components/StepCard";

const TIMINGS = [
    {
        time: "07:00am",
        description: "After an evening of festivities, the rafters are up bright and early to arrive at Cawdor " +
            "Quarry, register for the event and make final preparations (all nuts tightened)."
    },
    {
        time: "10:00am",
        description: "The rafts set off on their journey down the Derwent"
    },
    {
        time: "10:30am",
        description: "The rafts arrive at Hall Leys Park in Matlock"
    },
    {
        time: "11:30am",
        description: "The rafts arrive at Derwent Gardens in Matlock Bath"
    },
    {
        time: "12:00pm",
        description: "The rafts arrive at the finish line at Cromford Meadows in Cromford"
    },
    {
        time: "14:00pm",
        description: "The ceremony takes place at The Fishpond in Matlock Bath to " +
            "announce the winner of this years raft event!"
    }
];

const TimingsSection = () => {
    const theme = useTheme();
    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="What time is it?"
                title="What happens and when?"
            />

            <Container maxWidth="lg">
                <Typography mb={4} variant="body1">
                    Once the rafts have set off, the timings always vary based on how fast the river is flowing, if
                    there’s any obstacles along the route etc, so we’d recommend getting there slightly earlier just
                    in case, it’s always worth the wait!
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Stack spacing={2}>
                    {
                        TIMINGS.map(item => (
                            <StepCard
                                key={item.time}
                                content={
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                }
                                icon={<Iconify color="secondary.contrastText" icon="ph:clock" width={40} />}
                                title={item.time}
                            />
                        ))
                    }
                </Stack>
            </Container>
        </Section>
    );
};

export default TimingsSection;
