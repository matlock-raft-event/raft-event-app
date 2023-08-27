import * as React from "react";
import { useTheme } from "@mui/material/styles";
import type { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";
import PodiumSection from "~/sections/PodiumSection";
import SummarySection from "~/sections/SummarySection";
import UpdatesSection from "~/sections/UpdatesSection";

const IndexPage: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    return (
        <main>
            <Waves variant={1} />
            <SummarySection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={2} />
            <PodiumSection />
            <Waves variant={3} />
            <GetInvolvedSection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={4} />
            <UpdatesSection preview />
            <Waves bottomColor={theme.palette.dark.main} />
            <Footer />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="The Matlock Raft Event" />;
