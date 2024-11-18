import * as React from "react";
import { Button, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { graphql, HeadFC, navigate, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import SponsorItem from "~/components/SponsorItem";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";

interface DataProps {
    sanitySponsor: Queries.SanitySponsor
}

const SingleSponsor: React.FC<PageProps<DataProps>> = ({ data }: PageProps<DataProps>) => {
    const title = data.sanitySponsor.name ?? "Update";

    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;
    // const darkColor = theme.palette.dark;

    return (
        <main>
            <InnerHeroSection />

            <Section bgColor={secondaryColor}>
                <Heading color={secondaryColor} subtitle="2022 Sponsor" title={title} />
                <Grid2 container spacing={5}>
                    <Grid2 sm={4} xs={12}>
                        <SponsorItem img={data?.sanitySponsor.logo?.asset?.gatsbyImageData} readOnly />
                    </Grid2>
                    <Grid2 sm={8} xs={12}>
                        <Stack spacing={2}>
                            {
                                data.sanitySponsor.description &&
                                <div>
                                    <Typography variant="h6">What we do</Typography>
                                    <Typography variant="body1">{data.sanitySponsor.description}</Typography>
                                </div>
                            }
                            {
                                data.sanitySponsor.address &&
                                <div>
                                    <Typography variant="h6">Where to find us</Typography>
                                    <Typography variant="body1">{data.sanitySponsor.address}</Typography>
                                </div>
                            }
                            {
                                data.sanitySponsor.url &&
                                <div>
                                    <Typography variant="h6">Our website</Typography>
                                    <Link
                                        color="red.main"
                                        href={data.sanitySponsor.url}
                                        rel="noopener"
                                        target="_blank"
                                        variant="body1"
                                    >
                                        {data.sanitySponsor.url}
                                    </Link>
                                </div>
                            }
                            {
                                data.sanitySponsor.testimonial &&
                                <div>
                                    <Typography variant="h6">Why we sponsored The Matlock Raft Event</Typography>
                                    <Typography variant="body1">{data.sanitySponsor.testimonial}</Typography>
                                </div>
                            }
                        </Stack>
                    </Grid2>
                </Grid2>
                <Stack direction="row" justifyContent="center" mt={8}>
                    <Button onClick={() => navigate("/sponsors")}>View all sponsors</Button>
                </Stack>
            </Section>

            <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={2} />

            <Footer />
        </main>
    );
};

export default SingleSponsor;

// TODO -- Make these dynamic
const pageTitle = "Sponsor - Matlock Raft Event";
const pageDescription = "A single sponsor of the event.";
const pageUrl = "/";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;

export const query = graphql`
  query ($slug: String) {
    sanitySponsor(slug: {eq: $slug}) {
        name,
        slug,
        logo {
            asset {
                gatsbyImageData(placeholder: BLURRED)
            }
        },
        url,
        address,
        description,
        testimonial
    }
  }
`;
