import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import FaqsSection from "~/sections/FaqsSection";

const Faqs: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <Waves bottomColor={secondaryColor.main} topColor={primaryColor.main} />
            <FaqsSection />
            <Waves bottomColor={darkColor.main} topColor={secondaryColor.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Faqs;

export const Head: HeadFC = () => <title>FAQs</title>;
