import * as React from "react";
import { Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
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
    const createdOn = new Date(data.sanityUpdate._createdAt ?? "").toDateString();
    const image = data.sanityUpdate.img?.asset?.gatsbyImageData;

    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <InnerHeroSection />

            <Section bgColor={secondaryColor}>
                <Heading color={secondaryColor} subtitle={createdOn ?? undefined} title={title} />

                <Container maxWidth="md">
                    <ImageContainer>
                        {
                            image
                                ? (
                                    <GatsbyImage
                                        alt="Cover Image"
                                        image={image}
                                        style={{
                                            aspectRatio: "3 / 1",
                                            borderRadius: theme.shape.borderRadius
                                        }}
                                    />
                                )
                                : <StaticImage alt="Cover Image" src="../../assets/images/donate-img.jpg" />
                        }
                    </ImageContainer>
                </Container>

                <BlockContainer>
                    <Block value={content} />
                </BlockContainer>

            </Section>

            <Waves bottomColor={darkColor.main} topColor={secondaryColor.main} variant={2} />

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
        }
        _rawContent,
        _createdAt
    }
  }
`;
