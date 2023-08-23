import * as React from "react";
import { Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import Waves from "~/components/Waves";

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
    const defaultImage = "../../assets/donate-img.jpg";

    const title = data.sanityUpdate.title ?? "Update";
    const content = data.sanityUpdate._rawContent as never;
    const createdOn = new Date(data.sanityUpdate._createdAt ?? "").toDateString();
    const image = data.sanityUpdate.img?.asset?.gatsbyImageData;

    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <Waves bottomColor={secondaryColor.main} topColor={primaryColor.main} />

            <Section backgroundColor={secondaryColor.main}>
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
                                : <StaticImage alt="Cover Image" src={defaultImage} />
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

export const Head: HeadFC = () => <title>Update</title>;

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
