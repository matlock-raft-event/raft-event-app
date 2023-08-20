import * as React from "react";
import { useTheme } from "@mui/material/styles";
import type { HeadFC, PageProps } from "gatsby";

import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";

const IndexPage: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;
    return (
        <main>
            <Waves />
            <GetInvolvedSection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Matlock Raft Event</title>;
