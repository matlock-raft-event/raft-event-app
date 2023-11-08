import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import StepCard from "~/components/StepCard";

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

    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="You asked, we answered!"
                title="Frequently Asked Questions"
            />
            <Stack spacing={2}>
                {
                    faqs.map(faq => (
                        <StepCard
                            key={faq.question}
                            content={<Block value={faq._rawAnswer as never} />}
                            title={faq.question}
                        />
                    ))
                }
            </Stack>

        </Section>
    );
};

export default FaqsSection;
