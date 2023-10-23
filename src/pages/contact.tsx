import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";
import ContactUsSection from "~/sections/ContactUsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Contact: React.FC<PageProps> = () => {
    const theme = useTheme();

    return (
        <main>
            <InnerHeroSection />
            <ContactUsSection />
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} variant={2} />
            <Footer />
        </main>
    );
};

export default Contact;

const pageTitle = "Contact Us - Matlock Raft Event";
const pageDescription = "Have questions, feedback, or inquiries? Feel free to contact us. " +
    "We're here to assist you and provide the information you need.";
const pageUrl = "/contact";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
