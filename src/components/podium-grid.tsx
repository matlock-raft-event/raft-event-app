import PodiumCard from "~/components/podium-card";
import type { WinnersQueryResult } from "~/lib/sanity.types";

type Props = { winners: WinnersQueryResult };

/**
 * The three-card podium layout: 1st place centred and raised, 2nd left,
 * 3rd right. Expects the winners of a single year (positions 1–3).
 */
const PodiumGrid = ({ winners }: Props) => {
  const firstPlace = winners?.find(item => item.position === 1);
  const secondPlace = winners?.find(item => item.position === 2);
  const thirdPlace = winners?.find(item => item.position === 3);

  return (
    <div className="grid grid-cols-12 gap-8 justify-items-center pt-0 sm:pt-8 px-8 sm:px-0">
      {/* DOM order is 1·2·3 (mobile + screen-reader order); CSS `order` lifts
          2nd to the left and 1st to the centre on sm+ for the podium look. */}
      <div className="col-span-10 sm:col-span-4 order-1 sm:order-2">
        {firstPlace?.img && (
          <PodiumCard image={firstPlace.img} podium={1} title={firstPlace.name ?? ""} />
        )}
      </div>
      <div className="col-span-6 sm:col-span-4 order-2 sm:order-1 mt-0 sm:mt-16">
        {secondPlace?.img && (
          <PodiumCard image={secondPlace.img} podium={2} title={secondPlace.name ?? ""} />
        )}
      </div>
      <div className="col-span-6 sm:col-span-4 order-3 mt-0 sm:mt-32">
        {thirdPlace?.img && (
          <PodiumCard image={thirdPlace.img} podium={3} title={thirdPlace.name ?? ""} />
        )}
      </div>
    </div>
  );
};

export default PodiumGrid;
