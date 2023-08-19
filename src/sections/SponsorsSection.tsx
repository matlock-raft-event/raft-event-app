import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, useStaticQuery } from "gatsby";

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
        <Section backgroundColor={theme.palette.primary.main}>
            <Heading subtitle="The people we couldn't do this without" title="Our Amazing Sponsors" />
            <p style={{ textAlign: "center" }}>
                Every year many local businesses help to keep the raft event going by sponsoring the event. In return
                for their generosity, each sponsor is advertised on our website, social media channels and the posters
                and banners displayed in and around Matlock.
                <br />
                Thank you to all of the businesses that have helped to sponsor past and present events.
            </p>

            <Grid2 container justifyContent="center" spacing={2}>
                {
                    sponsors.map((sponsor, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Grid2 key={index} xs={2}>
                            <SponsorItem img={sponsor.logo?.asset?.gatsbyImageData} />
                        </Grid2>
                    ))
                }
            </Grid2>

        </Section>
    );
};

export default SponsorsSection;
