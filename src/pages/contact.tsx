import * as React from "react";
import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import ContactUsSection from "~/sections/ContactUsSection";

const Contact = () => {
    const theme = useTheme();

    return (
        <main>
            <Waves />
            <ContactUsSection />
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Contact;
