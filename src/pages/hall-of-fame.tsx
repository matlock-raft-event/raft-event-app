import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import SEO from "~/components/SEO";

const HallOfFame: React.FC<PageProps> = () => (
    <main>
        TODO
    </main>
);

export default HallOfFame;

const pageTitle = "Hall of Fame - Matlock Raft Event";
const pageDescription = "Explore the Hall of Fame featuring our past winners. These remarkable individuals " +
    "have excelled in The Matlock Raft Event and left a lasting impact. Join us in celebrating their achievements.";
const pageUrl = "/hall-of-fame";
export const Head: HeadFC = () => <SEO description={pageDescription} pathname={pageUrl} title={pageTitle} />;
