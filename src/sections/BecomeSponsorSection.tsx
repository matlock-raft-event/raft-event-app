import { Typography } from "@mui/material";

import Heading from "~/components/Heading";
import Section from "~/components/Section";

const BecomeSponsorSection = () => (
    <Section>
        <Heading subtitle="Want to support the event?" title="Become a Sponsor" />
        <Typography>
            The impact of our event and the funds we raise would not be possible without our fantastic sponsors.
            They&apos;re the real MVPs in keeping the event alive.
        </Typography>
        <Typography>
            If you are ready to make a difference and team up with us by sponsoring the event, get in touch using the
            form below. Let&apos;s make waves together and raise more than ever for the RNLI!
        </Typography>
    </Section>
);

export default BecomeSponsorSection;
