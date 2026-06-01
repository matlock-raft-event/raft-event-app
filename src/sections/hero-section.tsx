import { Fragment } from "react";
import { MapPinIcon } from "@phosphor-icons/react";

import HeaderImg from "~/assets/images/header.jpg";
import RnliFundraiseImg from "~/assets/images/rnlifundraise.png";
import HeroCountdown from "~/components/hero-countdown";
import { Button } from "~/components/ui/button";
import type { HeroQueryResult } from "~/lib/sanity.types";

const resolveSrc = (asset: unknown): string =>
  (asset as { src?: string }).src ?? (asset as unknown as string);

type Props = {
  hero: HeroQueryResult;
  imgSrc?: string;
  imgSrcset?: string;
  eventDate?: string;
};

// Replace the "&nbsp;" token with a real non-breaking space (keeps words together).
const withNbsp = (s: string) => s.replace(/&nbsp;/g, " ");

// Render a string with line breaks: each newline becomes a <br>.
const renderLines = (s: string) =>
  withNbsp(s).split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

const headerImgMeta = HeaderImg as unknown as { width?: number; height?: number };

const HeroSection = ({ hero, imgSrc, imgSrcset, eventDate }: Props) => {
  const title = hero?.title ?? "Ready To Brave The Cold Derwent Waters?";
  const subtitle = withNbsp(hero?.subtitle ?? "MATLOCK'S VERY OWN ANNUAL CHARITY RAFT EVENT");
  const buttonLink = hero?.buttonLink ?? "/take-part";
  const buttonText = hero?.buttonText ?? "Get involved";

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex flex-col flex-1">
        <div className="relative md:absolute md:inset-0">
          <img
            alt="Rafts on the River Derwent during the Matlock Raft Event"
            className="block w-full h-auto md:h-full md:object-cover object-center"
            decoding="async"
            fetchPriority="high"
            height={headerImgMeta.height}
            sizes="100vw"
            src={imgSrc ?? resolveSrc(HeaderImg)}
            srcSet={imgSrcset}
            width={headerImgMeta.width}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2),rgba(53,58,60,1))] md:bg-none md:bg-black/30" />
        </div>

        <div className="bg-dark flex-1 md:bg-transparent md:flex-none md:absolute md:inset-0 md:z-10 flex items-center">
          <div className="mx-auto w-full container px-4">
            <div className="flex flex-col gap-4 py-4 text-center md:text-left md:w-[61.8vw] md:py-0">
              <h5 className="font-sans font-bold text-lg md:text-xl text-yellow">
                {subtitle}
              </h5>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary">
                {renderLines(title)}
              </h1>
              <div className="flex flex-row items-center gap-1 justify-center md:justify-start">
                <MapPinIcon className="text-yellow" weight="bold" />
                <p className="font-semibold text-sm text-secondary">
                  Matlock, Derbyshire - 26th December {new Date().getFullYear()}
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
                <Button href={buttonLink} size="lg">
                  {buttonText}
                </Button>
                <img
                  alt="Fundraising for the RNLI"
                  className="w-[110px] object-contain"
                  src={resolveSrc(RnliFundraiseImg)}
                />
              </div>
              <HeroCountdown date={eventDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
