import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { graphql, HeadFC, PageProps } from "gatsby";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";

interface DataProps {
    sanityCookiesInfo: Queries.SanityCookiesInfo
}

const Cookies: React.FC<PageProps<DataProps>> = ({ data }: PageProps<DataProps>) => {
    const theme = useTheme();
    const cookiesInfo = data.sanityCookiesInfo._rawContent;
    return (
        <main>
            <Waves />
            <Section backgroundColor={theme.palette.secondary.main}>
                <Heading color={theme.palette.secondary} title="Cookies Policy" />
                <Block value={cookiesInfo as never} />
            </Section>
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} />
            <Footer />
        </main>
    );
};

export default Cookies;

const pageTitle = "Cookies Policy - Matlock Raft Event";
const pageDescription = "Learn how we use cookies on our website to enhance your browsing experience, " +
    "analyze site traffic, and personalize content. Your privacy is important to us.";
const pageUrl = "/cookies";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;

export const query = graphql`
    query CookiesInfo {
      sanityCookiesInfo {
        _rawContent
      }
    }
`;
