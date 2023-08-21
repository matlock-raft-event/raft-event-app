import { Divider, Typography } from "@mui/material";
import { PortableText } from "@portabletext/react";
import { graphql, useStaticQuery } from "gatsby";

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

    return (
        <Section>
            <Heading subtitle="Got any questions?" title="Frequently Asked Questions" />
            {
                faqs.map((faq, index) => (
                    <>
                        <Typography color="primary.contrastText" variant="h6">
                            {faq.question}
                        </Typography>
                        <PortableText value={faq._rawAnswer as never} />
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
