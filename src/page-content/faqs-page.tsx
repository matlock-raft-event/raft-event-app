import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import VisitNav from "~/components/visit-nav";
import Waves from "~/components/waves";
import FaqsSection from "~/sections/faqs-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Frequently asked questions" wavesColor="var(--color-cream)" />
    <VisitNav active="faqs" />
    <FaqsSection faqs={faqs} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const FaqsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default FaqsPage;
