import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import TakePartSection from "~/sections/TakePartSection";

const TakePart: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <Waves bottomColor={secondaryColor.main} topColor={primaryColor.main} />
            <TakePartSection />
            <Waves bottomColor={darkColor.main} topColor={secondaryColor.main} variant={2} />
            <Footer />
        </main>
    );
};

export default TakePart;

const pageTitle = "Take Part - Matlock Raft Event";
const pageDescription = "Learn how you can participate in the upcoming event and be a part of " +
    "the unforgettable experience. Find all the details you need to take part.";
const pageUrl = "/take-part";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
