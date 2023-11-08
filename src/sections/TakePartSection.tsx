import * as React from "react";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ApplicationFormPdf from "~/assets/documents/Application-Form.pdf";
import SafetyPdf from "~/assets/documents/Pre-Event-Safety.pdf";
import RulesPdf from "~/assets/documents/Raft-Event-Rules.pdf";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import StepCard from "~/components/StepCard";

const STEPS = [
    {
        key: "Step 1",
        description: "Read and make sure you understand the Rules and Guidelines and Safety Brief"
    },
    {
        key: "Step 2",
        description: "Print out and complete your team form with all relevant information"
    },
    {
        key: "Step 3",
        description: "Arrive at Cawdor Quarry (near Sainsbury’s) in Matlock at around 7am on Boxing Day with your " +
            "entry fees (£15 each) and team form signed and in hand. Your mode of transport should be a sturdy DIY " +
            "raft built entirely by the crew"
    }
];

const TakePartSection = () => {
    const theme = useTheme();
    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading color={theme.palette.secondary} subtitle="So you're brave enough?" title="Take Part" />
            <Stack alignItems="center" spacing={2}>
                <Typography variant="body1">
                    The Raft Event is approximately 3 miles long, the water is cold and in places deep and
                    turbulent. There is a weir with a descent totalling around 30 meters of rapid white water.
                    Are you okay with that? Still want to get cold and wet on Boxing Day? Don’t say we didn’t warn you!
                </Typography>
                <Typography variant="body1">
                    Welcome to an elite club of individuals that choose to give something back to a great cause on
                    Boxing Day: the RNLI. Do it once and we promise you will be hooked!
                </Typography>
                <Typography variant="subtitle1">
                    To take part in the raft event, you need to complete the following steps:
                </Typography>

                <Container maxWidth="md">
                    <Stack alignItems="center" divider={<Divider flexItem light />} spacing={2}>
                        {
                            STEPS.map(item => (
                                <StepCard
                                    key={item.key}
                                    content={
                                        <Typography variant="body2">
                                            {item.description}
                                        </Typography>
                                    }
                                    sx={{ backgroundColor: theme.palette.secondary.light }}
                                    title={item.key}
                                />
                            ))
                        }
                    </Stack>
                </Container>

                <Stack direction="row" py={2} spacing={2}>
                    <Button
                        component="a"
                        download="Raft-Event-Rules"
                        href={RulesPdf}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Rules & Guidelines
                    </Button>
                    <Button
                        component="a"
                        download="Pre-Event-Safety"
                        href={SafetyPdf}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Safety Brief
                    </Button>
                    <Button
                        component="a"
                        download="Application-Form"
                        href={ApplicationFormPdf}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Application Form
                    </Button>
                </Stack>

                <Typography>
                    Once ready and your raft has been checked, be prepared to face whatever the Derbyshire Dales,
                    the River Derwent and thousands of excited spectators have to offer on a typical Boxing Day.
                    Best of luck!
                </Typography>
                <Typography>
                    This event is only possible thanks to the brave drivers and guest participants working hard to
                    create some stunning rafts for all of the spectators to enjoy. The more fun and excitement on
                    the day, the deeper people will dig in their pockets and donate to the RNLI. Derwent and
                    thousands of excited spectators have to offer on a typical Boxing Day. Best of luck!
                </Typography>
            </Stack>
        </Section>
    );
};

export default TakePartSection;
