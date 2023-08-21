import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import FaqsSection from "~/sections/FaqsSection";

const Faqs: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    return (
        <main>
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} />
            <FaqsSection />
            <Waves variant={2} />
            <Footer color={secondaryColor} />
        </main>
    );
};

export default Faqs;
