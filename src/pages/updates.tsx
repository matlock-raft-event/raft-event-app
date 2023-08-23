import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import UpdatesSection from "~/sections/UpdatesSection";

const Updates: React.FC<PageProps> = () => {
    const theme = useTheme();
    const secondaryColor = theme.palette.secondary;
    const darkColor = theme.palette.dark;

    return (
        <main>
            <Waves bottomColor={secondaryColor.main} topColor={theme.palette.primary.main} />
            <UpdatesSection />
            <Waves bottomColor={darkColor.main} topColor={secondaryColor.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Updates;

export const Head: HeadFC = () => <title>Updates</title>;
