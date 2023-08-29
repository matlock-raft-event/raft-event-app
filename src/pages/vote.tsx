import * as React from "react";
import { useState } from "react";
import { Button, Dialog, DialogActions, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import SEO from "~/components/SEO";
import Waves from "~/components/Waves";

const Vote: React.FC<PageProps> = () => {
    const theme = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <main>
            <Waves />
            <Section backgroundColor={theme.palette.secondary.main}>
                <Heading
                    color={theme.palette.secondary}
                    subtitle="It's time to choose your favourite"
                    title="Vote For Your Boat"
                />
                <Stack alignItems="center" spacing={2}>
                    <Typography>
                        Okay, maybe it&apos;s generous of us to call them boats... But for the first time in
                        2023,
                        {" "}
                        <strong>YOU</strong>
                        {" "}
                        can vote for your winner of The Matlock Raft Event! This is your
                        opportunity to be part of the action and help us to crown this years triumphant raft. Every vote
                        counts!
                    </Typography>
                    <Button onClick={toggleOpen}>
                        Vote Now
                    </Button>
                </Stack>

            </Section>
            <Waves bottomColor={theme.palette.dark.main} topColor={theme.palette.secondary.main} />
            <Footer />

            <Dialog
                fullWidth
                maxWidth="lg"
                onClose={toggleOpen}
                open={isOpen}
                sx={{
                    "& .MuiPaper-root": {
                        background: theme.palette.secondary.main,
                        pt: 1
                    }
                }}
            >
                <div
                    className="strawpoll-embed"
                    id="strawpoll_kjn18NeWjyQ"
                    style={{
                        height: "80vh",
                        maxWidth: "640px",
                        width: "100%",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <iframe
                        allowFullScreen
                        frameBorder="0"
                        id="strawpoll_iframe_kjn18NeWjyQ"
                        src="https://strawpoll.com/embed/kjn18NeWjyQ"
                        style={{
                            position: "static",
                            visibility: "visible",
                            display: "block",
                            width: "100%",
                            flexGrow: 1
                        }}
                        title="StrawPoll Embed"
                    >
                        Loading...
                    </iframe>
                    <script async src="https://cdn.strawpoll.com/dist/widgets.js" />
                </div>
                <DialogActions>
                    <Button onClick={toggleOpen}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    );
};

export default Vote;

const pageTitle = "Vote - Matlock Raft Event";
const pageDescription = "Vote for you winner of the 2023 Matlock Raft Event! This is your opportunity to be" +
    " part of the action and help us to crown this years triumphant raft.";
const pageUrl = "/vote";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
