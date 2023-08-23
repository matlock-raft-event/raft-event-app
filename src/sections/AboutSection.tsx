import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";

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
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading
                color={theme.palette.secondary}
                subtitle="It all started in 1961"
                title="What is The Matlock Raft Event?"
            />
            {
                about._rawBio &&
                <PortableText value={about._rawBio as never} />
            }
        </Section>
    );
};

export default AboutSection;
