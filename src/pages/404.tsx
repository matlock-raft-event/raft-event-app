import * as React from "react";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { HeadFC, Link, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";

const StyledCode = styled("code")(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    padding: 4,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: theme.shape.borderRadius
}));

const NotFoundPage: React.FC<PageProps> = () => {
    const theme = useTheme();

    return (
        <main>
            <Section bgColor={theme.palette.secondary}>
                <Heading color={theme.palette.secondary} title="Page Not Found" />
                <Typography my={12} variant="body1">
                    Sorry 😔, we couldn’t find what you were looking for.
                    <br />
                    {
                        process.env.NODE_ENV === "development"
                            ? (
                                <>
                                    <br />
                                    Try creating a page in
                                    {" "}
                                    <StyledCode>src/pages/</StyledCode>
                                    .
                                    <br />
                                </>
                            )
                            : null
                    }
                    <br />
                    <Link to="/">Go home</Link>
                    .
                </Typography>
            </Section>
            <Footer />
        </main>
    );
};

export default NotFoundPage;

const pageTitle = "Page Not Found - Matlock Raft Event";
const pageDescription = "Oops! The page you were looking for does not exist. Feel free to explore other parts" +
    " of our website.";
const pageUrl = "/404";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
