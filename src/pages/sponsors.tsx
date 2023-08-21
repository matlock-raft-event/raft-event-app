import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import SponsorsSection from "~/sections/SponsorsSection";

const Sponsors: React.FC<PageProps> = () => (
    <main>
        <Waves />
        <SponsorsSection />
        <Waves />
        <Footer />
    </main>
);

export default Sponsors;

export const Head: HeadFC = () => <title>Sponsors</title>;
