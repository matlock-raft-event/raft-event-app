import * as React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Donate = () => {
    const theme = useTheme();
    return (
        <main>
            <InnerHeroSection />
            <Section bgColor={theme.palette.secondary}>
                <Heading color={theme.palette.secondary} subtitle="Help us to raise more than ever" title="Donate" />
                <Container maxWidth="md">
                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="body1">
                            Every year, our volunteer bucket collectors are positioned along the route ready to collect
                            donations from our generous spectators. Can&apos;t make it this year or just can&apos;t wait
                            until Boxing Day to support the RNLI? donations can be made online now via GoFundMe to
                            help us raise money for this amazing cause. Any and all donations are appreciated so
                            greatly. Even the smallest of amounts can help to make a difference. Thank you all for
                            your support.
                        </Typography>
                        <Button
                            component="a"
                            href="https://gofund.me/0444e009"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Donate Online Now
                        </Button>
                    </Stack>
                </Container>
            </Section>
            <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Donate;
