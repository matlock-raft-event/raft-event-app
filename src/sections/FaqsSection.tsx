import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

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
        <Section bgColor={theme.palette.green}>
            <Heading
                color={theme.palette.green}
                subtitle="You asked, we answered!"
                title="Frequently Asked Questions"
            />
            <Stack spacing={2}>
                {
                    faqs.map(faq => (
                        <Stack
                            key={faq.question}
                            spacing={1}
                            sx={{
                                borderRadius: theme.shape.borderRadius,
                                padding: theme.spacing(2),
                                backgroundColor: theme.palette.secondary.main,
                                boxShadow: theme.shadows[5]
                            }}
                        >
                            <Typography
                                color="secondary.contrastText"
                                fontFamily={TITLE_FONT_FAMILY}
                                mb={1}
                                variant="h3"
                            >
                                {faq.question}
                            </Typography>
                            <Block value={faq._rawAnswer as never} />
                        </Stack>
                    ))
                }
            </Stack>

        </Section>
    );
};

export default FaqsSection;
