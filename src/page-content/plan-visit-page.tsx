import type { ReactNode } from "react";

import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";

const Subheading = ({ children }: { children: string }) => (
  <h3 className="font-display font-bold text-xl md:text-2xl mt-10 first:mt-0">
    {children}
  </h3>
);

const Para = ({ children }: { children: ReactNode }) => (
  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
    {children}
  </p>
);

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Plan your visit" wavesColor="var(--color-cream)" />
    <Section palette="cream">
      <Heading palette="cream" subtitle="Coming to watch?" title="Plan Your Visit" />
      <div className="mx-auto w-full max-w-4xl px-4">
        <Para>
          Boxing Day on the River Derwent is one of the highlights of the Matlock calendar, and
          thousands of people line the banks to cheer the rafts on. Here&apos;s everything you need
          to know to make a day of it.
        </Para>

        <Subheading>Getting here &amp; parking</Subheading>
        <Para>
          The event runs from Matlock down to Cromford, passing through Matlock Bath. Town-centre car
          parks in Matlock and Matlock Bath are the easiest options, but they fill up quickly on
          Boxing Day — arrive early or consider parking a little further out and walking in. Some
          roads close or get very busy around the river, so allow extra time.
        </Para>

        <Subheading>Where to watch</Subheading>
        <Para>
          You can watch from anywhere along the route, but the most popular spots are Hall Leys Park
          in Matlock, the riverside through Matlock Bath, and Masson Weir, where the rafts tackle the
          white water. The finish and prize-giving are at Cromford Meadows. See the
          {" "}
          <a className="text-red hover:underline" href="/info">full route and timings</a>
          {" "}
          to plan where to stand.
        </Para>

        <Subheading>Facilities</Subheading>
        <Para>
          Matlock and Matlock Bath both have public toilets, cafés, pubs and shops, many of which
          open on Boxing Day for the event. There are no facilities directly on the riverbank, so
          plan around the town centres.
        </Para>

        <Subheading>What to bring</Subheading>
        <Para>
          Dress warmly and for the weather — it&apos;s late December by a river! Sturdy footwear is
          wise as the banks can be muddy. Bring cash, too: our volunteer bucket collectors will be
          out along the route, and every coin goes to the RNLI.
        </Para>

        <Subheading>Accessibility</Subheading>
        <Para>
          Much of the route is along paved riverside paths and town centres, but some viewing spots
          involve grass, slopes or steps. Hall Leys Park and the Matlock Bath promenade tend to be
          the most accessible places to watch.
        </Para>

        <Subheading>Dogs</Subheading>
        <Para>
          Well-behaved dogs on leads are welcome along the route — just be mindful of the crowds and
          the cold water.
        </Para>

        <Subheading>Weather &amp; cancellations</Subheading>
        <Para>
          The event goes ahead in most weather, but in rare cases (such as dangerous river levels) it
          may be cancelled on safety grounds. We&apos;ll always post the latest on our
          {" "}
          <a className="text-red hover:underline" href="/updates">updates page</a>
          {" "}
          and our Facebook page, so check before you set off.
        </Para>

        <div className="flex flex-row flex-wrap justify-center gap-4 pt-10">
          <Button color="red" href="/info" size="lg">Route &amp; timings</Button>
          <Button color="dark" href="/updates" size="lg" variant="outline">Latest updates</Button>
        </div>
      </div>
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const PlanVisitPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default PlanVisitPage;
