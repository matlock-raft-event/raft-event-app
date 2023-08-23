import * as React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import Section from "~/components/Section";

const DasacSection = () => {
    const theme = useTheme();

    const data: Queries.AboutQuery = useStaticQuery(graphql`
      query About {
        allSanityAbout {
         edges {
          node {
            _rawBio,
            _rawRnliBio,
            rnliLink,
            _rawDasacBio,
            dasacLink
          }
         }
      }
    }
    `);

    const about = data.allSanityAbout.edges.map(edge => edge.node)[0];

    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading
                color={theme.palette.secondary}
                subtitle="The organisers"
                title="DASAC"
            />
            <Stack alignItems="center" spacing={2}>
                {
                    about._rawDasacBio &&
                    <div>
                        <PortableText value={about._rawDasacBio as never} />
                    </div>
                }
                {
                    about.dasacLink &&
                    <Button
                        href={about.dasacLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Learn more about DASAC
                    </Button>
                }
            </Stack>
        </Section>
    );
};

export default DasacSection;
