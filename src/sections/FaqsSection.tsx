import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";

const FaqsSection = () => {
    const data: Queries.FaqsQuery = useStaticQuery(graphql`
      query Faqs {
        allSanityFaq {
         edges {
          node {
           question,
           _rawAnswer
          }
         }
      }
    }
    `);

    const faqs = data.allSanityFaq.edges.map(edge => edge.node);

    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;

    return (
        <Section backgroundColor={secondaryColor.main}>
            <Heading color={secondaryColor} subtitle="Got any questions?" title="Frequently Asked Questions" />
            {
                faqs.map((faq, index) => (
                    <>
                        <Typography color="secondary.contrastText" variant="h6">
                            {faq.question}
                        </Typography>
                        <Block value={faq._rawAnswer as never} />
                        {
                            index !== (faqs.length - 1) &&
                            <Divider sx={{ mb: 2 }} />
                        }
                    </>
                ))
            }
        </Section>
    );
};

export default FaqsSection;
