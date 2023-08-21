import { useMemo } from "react";
import { Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, navigate, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import PodiumCard from "~/components/PodiumCard";
import Section from "~/components/Section";
import useResponsive from "~/hooks/useResponsive";

const PodiumSection = () => {
    const data: Queries.WinnersQueryQuery = useStaticQuery(graphql`
      query WinnersQuery {
        allSanityWinner {
         edges {
          node {
           name,
           year,
           position,
           img {
             asset {
               gatsbyImageData(placeholder: BLURRED)
             }
           }
          }
         }
      }
    }
    `);
    const winners = data.allSanityWinner.edges.map(edge => edge.node);
    const firstPlace = winners.find(item => item.position === 1);
    const secondPlace = winners.find(item => item.position === 2);
    const thirdPlace = winners.find(item => item.position === 3);

    const isMobile = useResponsive("down", "sm");

    const firstPlaceGridItem = (
        <Grid2 sm={4} xs={10}>
            {
                firstPlace && firstPlace.img?.asset?.gatsbyImageData &&
                <PodiumCard
                    img={firstPlace.img.asset.gatsbyImageData}
                    podium={1}
                    title={firstPlace.name ?? ""}
                />
            }
        </Grid2>
    );
    const secondPlaceGridItem = (
        <Grid2 mt={isMobile ? 0 : 8} sm={4} xs={6}>
            {
                secondPlace && secondPlace.img?.asset?.gatsbyImageData &&
                <PodiumCard
                    img={secondPlace.img.asset.gatsbyImageData}
                    podium={2}
                    title={secondPlace.name ?? ""}
                />
            }
        </Grid2>
    );
    const thirdPlaceGridItem = (
        <Grid2 mt={isMobile ? 0 : 16} sm={4} xs={6}>
            {
                thirdPlace && thirdPlace.img?.asset?.gatsbyImageData &&
                <PodiumCard
                    img={thirdPlace.img.asset.gatsbyImageData}
                    podium={3}
                    title={thirdPlace.name ?? ""}
                />
            }
        </Grid2>
    );

    const orderedGridItems = useMemo(
        () => (isMobile
            ? [firstPlaceGridItem, secondPlaceGridItem, thirdPlaceGridItem]
            : [secondPlaceGridItem, firstPlaceGridItem, thirdPlaceGridItem]),
        [isMobile]
    );

    return (
        <Section>
            <Heading subtitle="Proud to present 2022's" title="Heroic Winners" />

            <Grid2
                container
                justifyContent="center"
                pt={!isMobile ? 4 : 0}
                spacing={4}
                sx={{ ...(isMobile && { paddingX: 4 }) }}
            >
                {orderedGridItems.map(item => item)}
            </Grid2>

            <Stack direction="row" justifyContent="center" mt={isMobile ? 4 : 0}>
                <Button onClick={() => navigate("/hall-of-fame")} size="large">See our hall of fame</Button>
            </Stack>

        </Section>
    );
};

export default PodiumSection;
