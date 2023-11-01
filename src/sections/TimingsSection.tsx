import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Iconify from "~/components/Iconify";
import Section from "~/components/Section";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

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
        <Section>
            <Heading subtitle="What time is it?" title="What happens and when?" />

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
                            <Stack
                                key={item.description}
                                direction="row"
                                spacing={1}
                                sx={{
                                    borderRadius: theme.shape.borderRadius,
                                    padding: theme.spacing(1),
                                    backgroundColor: theme.palette.secondary.main,
                                    boxShadow: theme.shadows[5]
                                }}
                            >
                                <Box pt={0.5}>
                                    <Iconify color="secondary.contrastText" icon="ph:clock" width={40} />
                                </Box>
                                <Stack>
                                    <Typography
                                        color="secondary.contrastText"
                                        fontFamily={TITLE_FONT_FAMILY}
                                        variant="h3"
                                    >
                                        {item.time}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))
                    }
                </Stack>

                {/* <Stack alignItems="center" divider={<Divider flexItem light />} spacing={2}> */}
                {/*     { */}
                {/*         TIMINGS.map(item => ( */}
                {/*             <Stack */}
                {/*                 key={item.description} */}
                {/*                 alignItems="center" */}
                {/*                 direction={{ */}
                {/*                     xs: "column", */}
                {/*                     sm: "row" */}
                {/*                 }} */}
                {/*                 divider={ */}
                {/*                     <Divider */}
                {/*                         flexItem */}
                {/*                         orientation="vertical" */}
                {/*                         sx={{ */}
                {/*                             borderRightWidth: 4, */}
                {/*                             borderRadius: 1 */}
                {/*                         }} */}
                {/*                         variant="middle" */}
                {/*                     /> */}
                {/*                 } */}
                {/*                 spacing={{ */}
                {/*                     xs: 0, */}
                {/*                     sm: 2 */}
                {/*                 }} */}
                {/*                 width={1} */}
                {/*             > */}
                {/*                 <Typography */}
                {/*                     color="primary.contrastText" */}
                {/*                     flex={1} */}
                {/*                     fontFamily={SECONDARY_FONT_FAMILY} */}
                {/*                     textAlign="right" */}
                {/*                     variant="h1" */}
                {/*                 > */}
                {/*                     {item.time} */}
                {/*                 </Typography> */}
                {/*                 <Typography */}
                {/*                     flex={1.5} */}
                {/*                     textAlign={isMobile ? "center" : "left"} */}
                {/*                     variant="body1" */}
                {/*                 > */}
                {/*                     {item.description} */}
                {/*                 </Typography> */}
                {/*             </Stack> */}
                {/*         )) */}
                {/*     } */}
                {/* </Stack> */}
            </Container>
        </Section>
    );
};

export default TimingsSection;
