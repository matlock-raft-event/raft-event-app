import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import AboutSection from "~/sections/AboutSection";
import DasacSection from "~/sections/DasacSection";
import RnliSection from "~/sections/RnliSection";

const About: React.FC<PageProps> = () => {
    const theme = useTheme();
    return (
        <main>
            <Waves />
            <AboutSection />
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} variant={2} />
            <RnliSection />
            <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.primary.main} variant={3} />
            <DasacSection />
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} variant={4} />
            <Footer />
        </main>
    );
};

export default About;

export const Head: HeadFC = () => <title>About</title>;
