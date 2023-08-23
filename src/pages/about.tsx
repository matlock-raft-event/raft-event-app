import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import Waves from "~/components/Waves";

const About = () => {
    const theme = useTheme();

    const data: Queries.AboutQuery = useStaticQuery(graphql`
      query About {
        allSanityAbout {
         edges {
          node {
            _rawContent
          }
         }
      }
    }
    `);

    const about = data.allSanityAbout.edges.map(edge => edge.node)[0];

    return (
        <main>
            <Waves />
            <Section backgroundColor={theme.palette.secondary.main}>
                <Heading
                    color={theme.palette.secondary}
                    subtitle="It all started in 1961"
                    title="What is The Matlock Raft Event?"
                />
                {
                    about._rawContent &&
                    <PortableText value={about._rawContent as never} />
                }
            </Section>
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} />
            <Footer />
        </main>
    );
};

export default About;
