import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Waves from "~/components/Waves";
import TimingsSection from "~/sections/TimingsSection";

const Info: React.FC<PageProps> = () => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary;
    const secondaryColor = theme.palette.secondary;

    return (
        <main>
            <Waves />
            <TimingsSection />
            <Waves bottomColor={primaryColor.main} topColor={secondaryColor.main} variant={2} />
        </main>
    );
};

export default Info;

export const Head: HeadFC = () => <title>Info</title>;
