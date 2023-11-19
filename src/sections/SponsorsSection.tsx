import * as React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, navigate, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SponsorItem from "~/components/SponsorItem";
import useResponsive from "~/hooks/useResponsive";

const SponsorsSection = () => {
    const data: Queries.SponsorsQueryQuery = useStaticQuery(graphql`
      query SponsorsQuery {
        allSanitySponsor {
         edges {
          node {
           name,
           slug,
           logo {
             asset {
               gatsbyImageData(placeholder: BLURRED)
             }
           }
          }
         }
      }
    }
    `);

    const sponsors = data.allSanitySponsor.edges.map(edge => edge.node);

    const theme = useTheme();

    const isMobile = useResponsive("down", "sm");

    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="The people we couldn't do this without"
                title="Our Amazing Sponsors"
            />
            <Stack alignItems="center" spacing={2}>
                <Container maxWidth="md">
                    <Typography variant="body1">
                        Every year many local businesses help to keep the raft event going by sponsoring the event. In
                        return for their generosity, each sponsor is advertised on our website, social media channels
                        and the posters and banners displayed in and around Matlock.
                    </Typography>
                    <Typography variant="body1">
                        Thank you to all of the businesses that have helped to sponsor past and present events.
                    </Typography>
                </Container>

                <Grid2 container justifyContent="center" spacing={3}>
                    {
                        sponsors.map(sponsor => (
                            <Grid2 key={sponsor.name} xs={isMobile ? 4 : 2}>
                                <SponsorItem
                                    img={sponsor.logo?.asset?.gatsbyImageData}
                                    onClick={() => navigate(`/sponsors/${sponsor.slug}`)}
                                />
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Stack>

        </Section>
    );
};

export default SponsorsSection;
