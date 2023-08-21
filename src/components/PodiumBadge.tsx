import { memo, useMemo } from "react";
import { Box, BoxProps } from "@mui/material";

const FIRST = (
    <svg
        fill="none"
        height="100%"
        preserveAspectRatio="xMinYMax meet"
        viewBox="0 0 78 80"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_i_826_53)">
            <ellipse cx="39.0123" cy="40" fill="#FFB611" rx="38.4615" ry="40" />
        </g>
        <g filter="url(#filter1_i_826_53)">
            <ellipse cx="39.509" cy="36" fill="#FFB611" rx="26.9231" ry="28" />
        </g>
        <path
            d="M32.1416 49V45.04H35.9216V32.224L32.3216 32.656L32.1416 29.128L42.9416 28.012V45.04H46.7216V49H32.1416Z"
            fill="#8B6819"
        />
        <defs>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="80"
                id="filter0_i_826_53"
                width="76.9229"
                x="0.550781"
                y="0"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="-8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_826_53" />
            </filter>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="56"
                id="filter1_i_826_53"
                width="53.8462"
                x="12.5859"
                y="8"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_826_53" />
            </filter>
        </defs>
    </svg>
);

const SECOND = (
    <svg
        fill="none"
        height="100%"
        preserveAspectRatio="xMinYMax meet"
        viewBox="0 0 78 80"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_i_881_240)">
            <ellipse cx="39.0123" cy="40" fill="#C9C9C9" rx="38.4615" ry="40" />
        </g>
        <g filter="url(#filter1_i_881_240)">
            <ellipse cx="39.509" cy="36" fill="#C9C9C9" rx="26.9231" ry="28" />
        </g>
        <path
            // eslint-disable-next-line max-len
            d="M30.6426 49L30.6786 45.148L37.2306 39.136C37.9506 38.488 38.5506 37.9 39.0306 37.372C39.5346 36.82 39.9186 36.304 40.1826 35.824C40.4466 35.344 40.5786 34.852 40.5786 34.348C40.5786 33.7 40.4106 33.184 40.0746 32.8C39.7626 32.392 39.2586 32.188 38.5626 32.188C37.7466 32.188 37.1226 32.488 36.6906 33.088C36.2826 33.664 36.0786 34.336 36.0786 35.104C36.0786 35.392 36.0906 35.692 36.1146 36.004C36.1626 36.316 36.2226 36.64 36.2946 36.976H30.8226C30.7266 36.592 30.6426 36.196 30.5706 35.788C30.4986 35.38 30.4626 34.96 30.4626 34.528C30.4626 33.304 30.7626 32.176 31.3626 31.144C31.9626 30.088 32.8866 29.248 34.1346 28.624C35.3826 27.976 36.9786 27.652 38.9226 27.652C41.4426 27.652 43.3986 28.192 44.7906 29.272C46.2066 30.352 46.9146 31.804 46.9146 33.628C46.9146 34.588 46.7106 35.5 46.3026 36.364C45.8946 37.228 45.2466 38.14 44.3586 39.1C43.4706 40.036 42.3066 41.116 40.8666 42.34L36.5106 46.336L35.6106 44.932H43.3146V41.98H47.1306V49H30.6426Z"
            fill="#535353"
        />
        <defs>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="80"
                id="filter0_i_881_240"
                width="76.9229"
                x="0.550781"
                y="0"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="-8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_881_240" />
            </filter>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="56"
                id="filter1_i_881_240"
                width="53.8462"
                x="12.5859"
                y="8"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_881_240" />
            </filter>
        </defs>
    </svg>
);

const THIRD = (
    <svg
        fill="none"
        height="100%"
        preserveAspectRatio="xMinYMax meet"
        viewBox="0 0 78 80"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_i_881_698)">
            <ellipse cx="39.0123" cy="40" fill="#C96933" rx="38.4615" ry="40" />
        </g>
        <g filter="url(#filter1_i_881_698)">
            <ellipse cx="39.509" cy="36" fill="#C96933" rx="26.9231" ry="28" />
        </g>
        <path
            // eslint-disable-next-line max-len
            d="M39.0557 49.396C36.4637 49.396 34.4117 48.868 32.8997 47.812C31.3877 46.732 30.3557 45.244 29.8037 43.348L34.9517 41.368C35.2157 42.544 35.6837 43.408 36.3557 43.96C37.0517 44.488 37.7837 44.752 38.5517 44.752C39.2477 44.752 39.8237 44.572 40.2797 44.212C40.7597 43.828 40.9997 43.3 40.9997 42.628C40.9997 41.836 40.7237 41.224 40.1717 40.792C39.6197 40.336 38.7557 40.108 37.5797 40.108V36.76C38.5877 36.76 39.3677 36.532 39.9197 36.076C40.4957 35.62 40.7837 34.996 40.7837 34.204C40.7837 33.58 40.6037 33.076 40.2437 32.692C39.9077 32.308 39.4037 32.116 38.7317 32.116C37.9157 32.116 37.2677 32.404 36.7877 32.98C36.3077 33.532 36.0077 34.3 35.8877 35.284L30.5237 33.556C30.7637 32.188 31.2917 31.072 32.1077 30.208C32.9237 29.344 33.9557 28.708 35.2037 28.3C36.4757 27.868 37.8677 27.652 39.3797 27.652C41.9477 27.652 43.8797 28.204 45.1757 29.308C46.4717 30.412 47.1197 31.78 47.1197 33.412C47.1197 34.372 46.9157 35.212 46.5077 35.932C46.0997 36.628 45.5237 37.204 44.7797 37.66C44.0597 38.116 43.2317 38.44 42.2957 38.632V37.84C43.7837 38.08 45.0437 38.632 46.0757 39.496C47.1077 40.336 47.6237 41.572 47.6237 43.204C47.6237 44.5 47.2517 45.616 46.5077 46.552C45.7877 47.464 44.7797 48.172 43.4837 48.676C42.2117 49.156 40.7357 49.396 39.0557 49.396Z"
            fill="#6F311D"
        />
        <defs>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="80"
                id="filter0_i_881_698"
                width="76.9229"
                x="0.550781"
                y="0"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="-8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_881_698" />
            </filter>
            <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="56"
                id="filter1_i_881_698"
                width="53.8462"
                x="12.5859"
                y="8"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_881_698" />
            </filter>
        </defs>
    </svg>
);

interface PodiumBadgeProps extends BoxProps {
    podium: 1 | 2 | 3;
}

const PodiumBadge = ({ podium, ...rest }: PodiumBadgeProps) => {
    const badges = [FIRST, SECOND, THIRD];
    const badge = useMemo(
        () => badges[podium - 1],
        [podium]
    );

    return (
        <Box {...rest} sx={{ display: "flex" }}>
            {badge}
        </Box>
    );
};

export default memo(PodiumBadge);
