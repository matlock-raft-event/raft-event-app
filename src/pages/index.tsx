import * as React from "react";
import { useTheme } from "@mui/material/styles";
import type { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";
import PodiumSection from "~/sections/PodiumSection";
import UpdatesSection from "~/sections/UpdatesSection";

const IndexPage: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    return (
        <main>
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={1} />
            <PodiumSection />
            <Waves variant={2} />
            <GetInvolvedSection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={3} />
            <UpdatesSection preview />
            <Waves bottomColor={theme.palette.dark.main} variant={4} />
            <Footer />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Matlock Raft Event</title>;
