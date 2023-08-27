import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import EventRouteSection from "~/sections/EventRouteSection";
import TimingsSection from "~/sections/TimingsSection";

const Info: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <Waves />
            <EventRouteSection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={2} />
            <TimingsSection />
            <Waves bottomColor={darkColor.main} topColor={primaryColor.main} variant={3} />
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
