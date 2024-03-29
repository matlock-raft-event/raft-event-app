import * as React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
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
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="The organisers"
                title="DASAC"
            />
            <Stack alignItems="center" spacing={2}>
                {
                    about._rawDasacBio &&
                    <div>
                        <Block value={about._rawDasacBio as never} />
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
