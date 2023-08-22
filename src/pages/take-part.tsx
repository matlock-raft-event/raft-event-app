import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { PageProps } from "gatsby";

import Footer from "~/components/Footer";
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
