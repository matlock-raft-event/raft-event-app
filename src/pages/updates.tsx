import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";
import UpdatesSection from "~/sections/UpdatesSection";

const Updates: React.FC<PageProps> = () => {
    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;

    return (
        <main>
            <InnerHeroSection />
            <UpdatesSection />
            <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Updates;

const pageTitle = "Event Updates - Matlock Raft Event";
const pageDescription = "Get the latest updates and news about The Matlock Raft Event. " +
    "Stay informed about schedules, special announcements, and more.";
const pageUrl = "/updates";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
