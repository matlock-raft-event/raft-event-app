import PodiumCard from "~/components/podium-card";
import type { WinnersQueryResult } from "~/lib/sanity.types";

type Props = {
  winners: WinnersQueryResult;
  /** Flips the direction of the card tilts so stacked grids (e.g. one per
      year on the hall of fame) don't all lean the same way. */
  tiltSeed?: number;
};

// Slight tilts keep the "photos pinned to a board" feel without breaking the
// podium alignment. Applied to a wrapper so they don't fight the card's own
// hover transition.
const TILTS: [number, number, number] = [-1.5, 2, -1];

/**
 * The three-card podium layout: 1st place centred and raised, 2nd left,
 * 3rd right. Expects the winners of a single year (positions 1–3).
 *
 * Cells are `w-full` so every card fills its grid track — card width must
 * not depend on title length or whether the lazy-loaded image has arrived.
 */
const PodiumGrid = ({ winners, tiltSeed = 0 }: Props) => {
  const firstPlace = winners?.find(item => item.position === 1);
  const secondPlace = winners?.find(item => item.position === 2);
  const thirdPlace = winners?.find(item => item.position === 3);

  const tilt = (position: 1 | 2 | 3) => ({
    transform: `rotate(${TILTS[position - 1] * (tiltSeed % 2 === 0 ? 1 : -1)}deg)`
  });

  return (
    <div className="grid grid-cols-12 gap-8 justify-items-center pt-0 sm:pt-8 px-8 sm:px-0">
      {/* DOM order is 1·2·3 (mobile + screen-reader order); CSS `order` lifts
          2nd to the left and 1st to the centre on sm+ for the podium look. */}
      <div className="w-full col-span-10 sm:col-span-4 order-1 sm:order-2">
        {firstPlace?.img && (
          <div style={tilt(1)}>
            <PodiumCard image={firstPlace.img} podium={1} title={firstPlace.name ?? ""} />
          </div>
        )}
      </div>
      <div className="w-full col-span-6 sm:col-span-4 order-2 sm:order-1 mt-0 sm:mt-16">
        {secondPlace?.img && (
          <div style={tilt(2)}>
            <PodiumCard image={secondPlace.img} podium={2} title={secondPlace.name ?? ""} />
          </div>
        )}
      </div>
      <div className="w-full col-span-6 sm:col-span-4 order-3 mt-0 sm:mt-32">
        {thirdPlace?.img && (
          <div style={tilt(3)}>
            <PodiumCard image={thirdPlace.img} podium={3} title={thirdPlace.name ?? ""} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PodiumGrid;
