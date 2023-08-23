import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { graphql, PageProps } from "gatsby";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
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

export const query = graphql`
    query CookiesInfo {
      sanityCookiesInfo {
        _rawContent
      }
    }
`;
