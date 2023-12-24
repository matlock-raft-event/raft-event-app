import { useMemo } from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { toPlainText } from "@portabletext/react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import logo from "~/assets/images/logo.svg";
import Heading from "~/components/Heading";
import ImageCard from "~/components/ImageCard";
import Section from "~/components/Section";

const FALLBACK_IMG: IGatsbyImageData = {
    layout: "constrained",
    width: 350,
    height: 300,
    images: {
        fallback: {
            sizes: "(min-width: 1198px) 1198px, 100vw",
            src: logo,
            srcSet: logo
        }
    }
};

interface UpdatesSectionProps {
    preview?: boolean;
}

const UpdatesSection = ({ preview = false }: UpdatesSectionProps) => {
    const data: Queries.UpdatesQuery = useStaticQuery(graphql`
      query Updates {
        allSanityUpdate {
         edges {
          node {
           title,
           slug,
           date,
           img {
             asset {
               gatsbyImageData(placeholder: BLURRED)
             }
           }
           _rawContent
          }
         }
      }
    }
    `);

    const updates = useMemo(
        () => {
            const updateData = data.allSanityUpdate.edges.map(edge => edge.node)
                .sort(
                    (a, b) =>
                        Date.parse(b.date ?? "") - Date.parse(a.date ?? "")
                );
            return preview
                ? updateData.slice(0, 3)
                : updateData;
        },
        [preview]
    );

    const theme = useTheme();

    return (
        <Section bgColor={preview ? theme.palette.primary : theme.palette.secondary}>
            <Heading
                color={preview ? theme.palette.primary : theme.palette.secondary}
                subtitle="Keep ahead of the tide"
                title="Latest Updates"
            />
            <Grid2 container spacing={3}>
                {
                    updates.map(update => (
                        <Grid2 key={update.title} sm={4} xs={12}>
                            <ImageCard
                                aspectRatio="3 / 2"
                                description={toPlainText(update._rawContent as never)}
                                img={update.img?.asset?.gatsbyImageData ?? FALLBACK_IMG}
                                onClick={() => navigate(`/updates/${update.slug}`)}
                                title={update.title ?? ""}
                            />
                        </Grid2>
                    ))
                }
            </Grid2>
            {
                preview &&
                <Stack direction="row" justifyContent="center" mt={4}>
                    <Button onClick={() => navigate("/updates")}>View all updates</Button>
                </Stack>
            }
        </Section>
    );
};

export default UpdatesSection;
