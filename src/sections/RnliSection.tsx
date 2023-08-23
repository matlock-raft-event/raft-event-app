import * as React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import Section from "~/components/Section";

const RnliSection = () => {
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
        <Section>
            <Heading
                color={theme.palette.secondary}
                subtitle="Saving lives at sea with your support"
                title="RNLI"
            />
            <Stack alignItems="center" spacing={2}>
                {
                    about._rawRnliBio &&
                    <div>
                        <PortableText value={about._rawRnliBio as never} />
                    </div>
                }
                {
                    about.rnliLink &&
                    <Button
                        href={about.rnliLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Learn more about the RNLI
                    </Button>
                }
            </Stack>
        </Section>
    );
};

export default RnliSection;
