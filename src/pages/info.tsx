import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import EventRouteSection from "~/sections/EventRouteSection";
import FaqsSection from "~/sections/FaqsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import TimingsSection from "~/sections/TimingsSection";

const Info: React.FC<PageProps> = () => {
    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <InnerHeroSection />
            <EventRouteSection />
            <TimingsSection />
            <FaqsSection />
            <Waves bottomColor={darkColor.main} topColor={secondaryColor.main} variant={3} />
            <Footer />
        </main>
    );
};

export default Info;

const pageTitle = "Event Information - Matlock Raft Event";
const pageDescription = "Your Guide to The Matlock Raft Event. Discover all the important details " +
    "about the event.";
const pageUrl = "/info";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
