import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import BecomeSponsorSection from "~/sections/BecomeSponsorSection";
import SponsorsSection from "~/sections/SponsorsSection";

const Sponsors: React.FC<PageProps> = () => {
    const theme = useTheme();
    return (
        <main>
            <Waves />
            <SponsorsSection />
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} variant={2} />
            <BecomeSponsorSection />
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.primary.main} variant={3} />
            <Footer />
        </main>
    );
};

export default Sponsors;

export const Head: HeadFC = () => <title>Sponsors</title>;
