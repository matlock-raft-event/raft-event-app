import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import VisitNav from "~/components/visit-nav";
import Waves from "~/components/waves";
import EventRouteSection from "~/sections/event-route-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import TimingsSection from "~/sections/timings-section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Event information" wavesColor="var(--color-cream)" />
    <VisitNav active="race" />
    <EventRouteSection />
    <Waves bottomColor="var(--color-green)" topColor="var(--color-cream)" variant={3} />
    <TimingsSection />
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Got questions? Read the FAQs", href: "/info/faqs" }}
      text="Now you know the route and timings, get ready for Boxing Day."
      title="Ready to get involved?"
    />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const InfoPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default InfoPage;
