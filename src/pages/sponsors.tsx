import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import BecomeSponsorSection from "~/sections/BecomeSponsorSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import SponsorsSection from "~/sections/SponsorsSection";

const Sponsors: React.FC<PageProps> = () => {
    const theme = useTheme();
    return (
        <main>
            <InnerHeroSection />
            <SponsorsSection />
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} variant={2} />
            <BecomeSponsorSection />
            <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.primary.main} variant={3} />
            <Footer />
        </main>
    );
};

export default Sponsors;

const pageTitle = "Our Event Sponsors - Matlock Raft Event";
const pageDescription = "Explore the valued sponsors who have contributed to the success of the" +
    " event. The Matlock Raft Event would not be possible without their support.";
const pageUrl = "/sponsors";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
