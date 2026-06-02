import { BinocularsIcon, CarProfileIcon, FlagCheckeredIcon, QuestionIcon } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";

type InfoCard = {
  title: string;
  description: string;
  href: string;
  icon: Icon;
  bg: string;
  text: string;
};

const CARDS: InfoCard[] = [
  {
    title: "The race",
    description: "The route the rafts take down the Derwent, and what happens when on the day.",
    href: "/info/the-race",
    icon: FlagCheckeredIcon,
    bg: "bg-green",
    text: "text-white"
  },
  {
    title: "Getting here",
    description: "Driving, parking, road closures and public transport.",
    href: "/info/getting-here",
    icon: CarProfileIcon,
    bg: "bg-yellow",
    text: "text-yellow-contrast"
  },
  {
    title: "At the event",
    description: "Best viewing spots, facilities, what to bring and accessibility.",
    href: "/info/at-the-event",
    icon: BinocularsIcon,
    bg: "bg-mint",
    text: "text-mint-contrast"
  },
  {
    title: "FAQs",
    description: "Answers for spectators, racers, volunteers and sponsors.",
    href: "/info/faqs",
    icon: QuestionIcon,
    bg: "bg-red",
    text: "text-white"
  }
];

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Event information" wavesColor="var(--color-cream)" />
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="Everything you need to know"
        title="Event Information"
      />
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2">
        {
          CARDS.map(card => {
            const Icon = card.icon;
            return (
              <a
                key={card.href}
                className={`group flex flex-col gap-3 rounded-[2px] p-6 sm:p-8 shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark ${card.bg} ${card.text}`}
                href={card.href}
              >
                <Icon className="shrink-0" size={44} weight="fill" />
                <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">
                  {card.title}
                </h3>
                <p className="flex-1 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1.5 pt-2 font-serif font-bold uppercase tracking-wide text-sm transition-all group-hover:gap-2.5">
                  Find out more
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            );
          })
        }
      </div>
    </Section>
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Got the info you need? Be part of Matlock's favourite Boxing Day tradition."
      title="Ready to get involved?"
    />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const InfoPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default InfoPage;
