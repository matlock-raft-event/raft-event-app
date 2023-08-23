import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";

const ContactUsSection = () => {
    const theme = useTheme();

    const data: Queries.ContactInstructionsQuery = useStaticQuery(graphql`
      query ContactInstructions {
        allSanityContactInstructions {
         edges {
          node {
            _rawGeneral,
            _rawPress,
            _rawSponsors,
          }
         }
      }
    }
    `);

    const contactInstructions = data.allSanityContactInstructions.edges.map(edge => edge.node)[0];

    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading color={theme.palette.secondary} subtitle="Need to get in touch?" title="Contact us" />

            <Typography mb={4} variant="body1">
                We&apos;re all ears for participants and those eager to join the excitement! Connect with us on our
                Facebook page, or become a part of our Facebook group where you can share your event snapshots and
                videos with the community. Got questions or simply want to chat about the event? We&apos;re here to
                fill you in on all the details. We&apos;ll get back to you as soon as we can!
            </Typography>

            <Typography variant="h6">General Enquiries</Typography>
            {
                contactInstructions._rawGeneral &&
                <Block value={contactInstructions._rawGeneral as never} />
            }

            <Typography variant="h6">Sponsors</Typography>
            {
                contactInstructions._rawSponsors &&
                <Block value={contactInstructions._rawSponsors as never} />
            }

            <Typography variant="h6">Press</Typography>
            {
                contactInstructions._rawPress &&
                <Block value={contactInstructions._rawPress as never} />
            }

        </Section>
    );
};

export default ContactUsSection;
