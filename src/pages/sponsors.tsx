import { HeadFC } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import SponsorsSection from "~/sections/SponsorsSection";

const Sponsors = () => (
    <>
        <Waves />
        <SponsorsSection />
        <Waves />
        <Footer />
    </>
);

export default Sponsors;

export const Head: HeadFC = () => <title>Sponsors</title>;
