import * as React from "react";
import { Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { PortableText } from "@portabletext/react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import Waves from "~/components/Waves";

const ImageContainer = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "1%",
    boxShadow: theme.shadows[5]
}));

const PortableTextContainer = styled("div")(({ theme }) => ({
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

    const theme = useTheme();
    return (
        <main>
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} />

            <Section>
                <Heading subtitle={createdOn ?? undefined} title={title} />

                <Container maxWidth="md">
                    <ImageContainer>
                        {
                            data.sanityUpdate.img?.asset?.gatsbyImageData
                                ? (
                                    <GatsbyImage
                                        alt="Cover Image"
                                        image={data.sanityUpdate.img?.asset?.gatsbyImageData}
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

                <PortableTextContainer>
                    <PortableText value={content} />
                </PortableTextContainer>

            </Section>

            <Waves variant={2} />

            <Footer color={theme.palette.secondary} />
        </main>
    );
};

export default SingleUpdate;

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
