import * as React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";

const AboutSection = () => {
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
                subtitle="It all started in 1961"
                title="What is The Matlock Raft Event?"
            />
            {
                about._rawBio &&
                <Container maxWidth="md">
                    <Block value={about._rawBio as never} />
                </Container>
            }
        </Section>
    );
};

export default AboutSection;
