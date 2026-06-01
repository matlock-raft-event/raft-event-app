import { useMemo } from "react";

import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import PodiumCard from "~/components/podium-card";
import Section from "~/components/section";
import Waves from "~/components/waves";
import type { WinnersQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { winners: WinnersQueryResult };

const Content = ({ winners }: Props) => {
  const years = useMemo(
    () => [...new Set((winners ?? []).map(w => w.year).filter((y): y is number => Boolean(y)))]
      .sort((a, b) => b - a),
    [winners]
  );

  const winnersForYear = (year: number) => (winners ?? [])
    .filter(w => w.year === year)
    .sort((a, b) => (a.position ?? 99) - (b.position ?? 99));

  return (
    <main id="main" tabIndex={-1}>
      <InnerHeroSection title="Past results" wavesColor="var(--color-cream)" />
      <Section palette="cream">
        <Heading
          palette="cream"
          subtitle="Our champions through the years"
          title="Past Results"
        />

        {
          years.length === 0
            ? (
              <p className="mx-auto w-full max-w-4xl px-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
                Results from past events will appear here soon.
              </p>
            )
            : years.map(year => (
              <div key={year} className="mb-16 last:mb-0">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-center mb-8">
                  {year}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto px-8 sm:px-0">
                  {
                    winnersForYear(year).map(winner => (
                      winner.img
                        ? (
                          <div key={`${year}-${winner.position}`} className="w-full">
                            <PodiumCard
                              image={winner.img}
                              podium={(winner.position ?? 1) as 1 | 2 | 3}
                              title={winner.name ?? ""}
                            />
                          </div>
                        )
                        : null
                    ))
                  }
                </div>
              </div>
            ))
        }
      </Section>
      <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
      <Footer />
    </main>
  );
};

const ResultsPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default ResultsPage;
