import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import InnerHeroSection from "~/sections/InnerHeroSection";

const ImageContainer = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "1%",
    paddingBottom: "2%",
    boxShadow: theme.shadows[5]
}));

const BlockContainer = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(4)
}));

interface DataProps {
    sanityUpdate: Queries.SanityUpdate
}

const SingleUpdate: React.FC<PageProps<DataProps>> = ({ data }: PageProps<DataProps>) => {
    const title = data.sanityUpdate.title ?? "Update";
    const content = data.sanityUpdate._rawContent as never;

    const createdOn = new Date(data.sanityUpdate.date ?? "").toDateString();
    const image = data.sanityUpdate.img?.asset?.gatsbyImageData;

    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;

    const isMobile = useResponsive("down", "sm");

    return (
        <main>
            <InnerHeroSection />

            <Section bgColor={secondaryColor}>
                <Heading color={secondaryColor} subtitle={createdOn ?? undefined} title={title} />
                <Grid2
                    container
                    justifyContent="center"
                    pt={!isMobile ? 4 : 0}
                    spacing={4}
                    sx={{ ...(isMobile && { paddingX: 4 }) }}
                >
                    <Grid2 order={{ sm: 1, xs: 2 }} sm={5} xs={9}>
                        <ImageContainer>
                            {
                                image
                                    ? (
                                        <GatsbyImage
                                            alt="Cover Image"
                                            image={image}
                                            objectFit="cover"
                                            objectPosition="center"
                                            style={{
                                                borderRadius: theme.shape.borderRadius
                                            }}
                                        />
                                    )
                                    : <StaticImage alt="Cover Image" src="../../assets/images/donate-img.jpg" />
                            }
                        </ImageContainer>
                    </Grid2>
                    <Grid2 order={{ sm: 2, xs: 1 }} sm={7} xs={12}>
                        <BlockContainer>
                            <Block value={content} />
                        </BlockContainer>
                    </Grid2>
                </Grid2>

            </Section>

            <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={2} />

            <Footer />
        </main>
    );
};

export default SingleUpdate;

// TODO -- Make these dynamic
const pageTitle = "Update - Matlock Raft Event";
const pageDescription = "A single update about the event.";
const pageUrl = "/";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;

export const query = graphql`
  query ($slug: String) {
    sanityUpdate(slug: {eq: $slug}) {
        title,
        slug,
        img {
            asset {
                gatsbyImageData(placeholder: BLURRED)
            }
        },
        date,
        _rawContent,
        _createdAt
    }
  }
`;
