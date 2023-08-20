import { HeadFC } from "gatsby";

import Footer from "~/components/Footer";
import Waves from "~/components/Waves";
import SponsorsSection from "~/sections/SponsorsSection";

const Sponsors = () => (
    <main>
        <Waves />
        <SponsorsSection />
        <Waves />
        <Footer />
    </main>
);

export default Sponsors;

export const Head: HeadFC = () => <title>Sponsors</title>;
