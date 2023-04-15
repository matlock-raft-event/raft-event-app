import { IShadows } from "./theme";

const transparent1 = "rgba(145, 158, 171, 0.2)";
const transparent2 = "rgba(145, 158, 171, 0.14)";
const transparent3 = "rgba(145, 158, 171, 0.12)";

const shadows: IShadows = [
    "none",
    `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
    `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
    `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
];

export default shadows;
