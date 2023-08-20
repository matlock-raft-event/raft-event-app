import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { navigate } from "gatsby";

import Heading from "~/components/Heading";
import ImageLink from "~/components/ImageLink";
import Section from "~/components/Section";

import donateImg from "../assets/donate-img.jpg";
import helpOutImg from "../assets/help-out-img.jpg";
import sponsorUsImg from "../assets/sponsor-us-img.jpg";
import takePartImg from "../assets/take-part-img.jpg";

const GetInvolvedSection = () => {
    const theme = useTheme();
    const color = theme.palette.secondary;
    return (
        <Section backgroundColor={color.main}>
            <Heading color={color} subtitle="It's for a mighty good cause" title="Get Involved" />

            <Grid2 container px={2} spacing={3}>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink img={takePartImg} label="Take Part" onClick={() => navigate("/")} />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink img={helpOutImg} label="Help Out" onClick={() => navigate("/")} />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink img={donateImg} label="Donate" onClick={() => navigate("/")} />
                </Grid2>
                <Grid2 md={3} sm={6} xs={12}>
                    <ImageLink img={sponsorUsImg} label="Sponsor Us" onClick={() => navigate("/sponsors")} />
                </Grid2>
            </Grid2>
        </Section>
    );
};

export default GetInvolvedSection;
