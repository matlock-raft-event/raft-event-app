import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import TakePartSection from "~/sections/TakePartSection";

const TakePart: React.FC<PageProps> = () => {
    const theme = useTheme();
    return (
        <main>
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} />
            <TakePartSection />
            <Waves bottomColor={theme.palette.dark.main} variant={2} />
            <Footer />
        </main>
    );
};

export default TakePart;
