import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import EventRouteSection from "~/sections/event-route-section";
import FaqsSection from "~/sections/faqs-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import TimingsSection from "~/sections/timings-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Event information" wavesColor="var(--color-green)" />
    <EventRouteSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-green)" variant={3} />
    <TimingsSection />
    <FaqsSection faqs={faqs} />
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Plan your visit", href: "/plan-your-visit" }}
      text="Now you know what happens and when, get ready for Boxing Day."
      title="Ready to get involved?"
    />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const InfoPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default InfoPage;
