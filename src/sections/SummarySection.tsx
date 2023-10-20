import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { graphql, navigate, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import Section from "~/components/Section";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

const SummarySection = () => {
    const data: Queries.SummaryQuery = useStaticQuery(graphql`
      query Summary {
        allSanitySummary {
         edges {
          node {
          _id,
           yearsActive,
           bio,
           eventCount,
           moneyRaised
          }
         }
      }
    }
    `);

    const summary = data.allSanitySummary.edges.map(edge => edge.node)[0];

    const theme = useTheme();
    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading
                color={theme.palette.secondary}
                subtitle="Hello daring adventurer"
                title="Ready To Brave The Cold Derwent Waters?"
            />
            <Stack alignItems="center" spacing={2}>

                <Typography textAlign="center" variant="body1">
                    {summary.bio}
                </Typography>

                <Stack direction="row" justifyContent="center" spacing={8}>
                    <Stack alignItems="flex-end" flex={1}>
                        <Stack alignItems="center">
                            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                                {summary.yearsActive}
                            </Typography>
                            <Typography variant="h6">
                                Years
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems="center">
                        <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                            {summary.moneyRaised}
                        </Typography>
                        <Typography variant="h6">
                            Raised
                        </Typography>
                    </Stack>
                    <Stack alignItems="flex-start" flex={1}>
                        <Stack alignItems="center">
                            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h1">
                                {summary.eventCount}
                            </Typography>
                            <Typography variant="h6">
                                Events
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Button onClick={() => navigate("/info")}>Learn more</Button>

            </Stack>
        </Section>
    );
};

export default SummarySection;
