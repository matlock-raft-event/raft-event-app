import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "~/components/Heading";
import ImageLink from "~/components/ImageLink";
import Section from "~/components/Section";

const GetInvolvedSection = () => {
    const data: Queries.ImagesQuery = useStaticQuery(graphql`
        query Images {
            allFile(filter: {sourceInstanceName: {eq: "images"}}) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const donateImg = data.allFile.nodes.find(
        item => item.relativePath === "donate-img.jpg"
    )?.childImageSharp?.gatsbyImageData;
    const helpOutImg = data.allFile.nodes.find(
        item => item.relativePath === "help-out-img.jpg"
    )?.childImageSharp?.gatsbyImageData;
    const sponsorUsImg = data.allFile.nodes.find(
        item => item.relativePath === "sponsor-us-img.jpg"
    )?.childImageSharp?.gatsbyImageData;
    const takePartImg = data.allFile.nodes.find(
        item => item.relativePath === "take-part-img.jpg"
    )?.childImageSharp?.gatsbyImageData;

    const theme = useTheme();
    const color = theme.palette.secondary;
    return (
        <Section bgColor={color}>
            <Heading color={color} subtitle="It's for a mighty good cause" title="Get Involved" />

            <Grid2 container px={2} spacing={3}>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink href="/take-part" img={takePartImg} label="Take Part" />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink href="/volunteer" img={helpOutImg} label="Help Out" />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink href="/donate" img={donateImg} label="Donate" />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink href="/sponsors" img={sponsorUsImg} label="Sponsor Us" />
                </Grid2>
            </Grid2>
        </Section>
    );
};

export default GetInvolvedSection;
