import { useMemo } from "react";
import { Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { toPlainText } from "@portabletext/react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import squareLogo from "~/assets/images/amex.png";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import UpdateCard from "~/components/UpdateCard";

// TODO
const TEST_SQUARE_IMG: IGatsbyImageData = {
    layout: "constrained",
    width: 1198,
    height: 1198,
    images: {
        fallback: {
            sizes: "(min-width: 1198px) 1198px, 100vw",
            src: squareLogo,
            srcSet: squareLogo
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
            const updateData = data.allSanityUpdate.edges.map(edge => edge.node);
            return preview
                ? updateData.slice(0, 3)
                : updateData;
        },
        [preview]
    );

    return (
        <Section>
            <Heading subtitle="Keep ahead of the tide" title="Latest Updates" />
            <Grid2 container spacing={3}>
                {
                    updates.map(update => (
                        <Grid2 key={update.title} sm={4} xs={12}>
                            <UpdateCard
                                description={toPlainText(update._rawContent as never)}
                                img={update.img?.asset?.gatsbyImageData ?? TEST_SQUARE_IMG}
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
