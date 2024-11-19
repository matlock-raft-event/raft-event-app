import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, useStaticQuery } from "gatsby";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Iconify from "~/components/Iconify";
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
        <Section bgColor={theme.palette.secondary}>
            <Heading
                color={theme.palette.secondary}
                subtitle="You asked, we answered!"
                title="Frequently Asked Questions"
            />
            <Container maxWidth="md">
                {
                    faqs.map(faq => (
                        <Accordion
                            key={faq.question}
                            sx={{
                                bgcolor: "transparent",
                                boxShadow: "none"
                            }}
                        >
                            <AccordionSummary
                                aria-controls="panel1-content"
                                expandIcon={<Iconify color="secondary.contrastText" icon="ph:caret-down" />}
                                id="panel1-header"
                            >
                                <Typography
                                    color="secondary.contrastText"
                                    fontFamily={TITLE_FONT_FAMILY}
                                    variant="h4"
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Block value={faq._rawAnswer as never} />
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Container>
        </Section>
    );
};

export default FaqsSection;
