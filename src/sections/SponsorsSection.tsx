import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, navigate, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SponsorItem from "~/components/SponsorItem";

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
    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading
                color={theme.palette.secondary}
                subtitle="The people we couldn't do this without"
                title="Our Amazing Sponsors"
            />
            <Stack alignItems="center" spacing={2}>
                <Typography style={{ textAlign: "center" }} variant="body1">
                    Every year many local businesses help to keep the raft event going by sponsoring the event. In
                    return
                    for their generosity, each sponsor is advertised on our website, social media channels and the
                    posters
                    and banners displayed in and around Matlock.
                    <br />
                    Thank you to all of the businesses that have helped to sponsor past and present events.
                </Typography>

                <Grid2 container justifyContent="center" spacing={3}>
                    {
                        sponsors.map(sponsor => (
                            <Grid2 key={sponsor.name} xs={2}>
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
