import { HTMLProps } from "react";

type WaterProps = HTMLProps<HTMLDivElement> & {
    color?: string;
};
const Water = ({ color, ...props }: WaterProps) => (
    <div {...props}>
        <svg fill="none" height="90" viewBox="0 0 380 90" width="380" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1646_3346)" opacity="0.3">
                <path
                    // eslint-disable-next-line max-len
                    d="M0 42.6455C5.9809 40.7247 10.2351 43.2858 14.7395 45.055C30.5301 51.2892 45.3197 50.4973 59.8591 42.8814C81.03 31.7945 99.0227 31.5755 121.67 41.6177C138.537 49.0988 147.846 49.0314 165.138 41.2976C185.183 32.3169 205.728 31.7103 222.72 41.0785C238.886 49.975 254.801 52.1148 272.844 44.3641C274.396 43.6902 276.748 43.8586 279.075 43.6059C270.117 56.0913 244.842 60.253 224.522 52.873C219.417 51.0196 214.737 48.4922 209.407 47.0263C197.795 43.8081 186.859 45.0213 176.399 49.8907C150.298 62.0728 136.109 62.0222 109.433 49.7559C98.0467 44.5158 86.2601 43.6565 74.0981 47.7677C36.6862 60.4384 34.8844 60.3878 0 42.6455Z"
                    fill="#86C8B1"
                />
                <path
                    // eslint-disable-next-line max-len
                    d="M380 78.2816C359.655 89.4864 345.816 90.1436 324.37 81.1292C306.302 73.547 296.343 73.7829 278.575 82.1907C259.131 91.3904 239.862 92.3845 220.643 82.8984C202.85 74.1367 187.31 74.2547 169.242 82.3255C150.874 90.5479 131.855 88.6103 115.539 78.7029C109.934 75.2993 103.602 72.6877 96.7456 70.531C105.554 70.7668 113.187 72.0642 120.394 76.3608C130.529 82.376 151.8 80.7079 165.564 73.2437C178.451 66.2512 192.315 63.4542 208.606 65.8974C214.937 66.8409 220.167 68.964 225.373 71.306C244.617 79.916 252.249 79.9834 270.867 71.7104C291.863 62.3759 311.182 62.5107 330.777 72.8393C344.015 79.8318 357.102 84.5664 373.318 77.1359C375.145 76.2934 377.322 76.7989 380 78.2816Z"
                    fill="#F5F5F5"
                />
                <path
                    // eslint-disable-next-line max-len
                    d="M335.356 16.8994C330.751 15.7368 326.147 14.827 321.768 13.0578C308.78 7.78394 295.492 8.18833 283.029 13.9676C254.151 27.3629 243.791 27.3797 214.136 14.7427C200.848 9.06449 187.585 10.0081 174.422 15.9727C151.399 26.4193 130.879 24.667 113.437 11.2718C115.239 9.78901 117.341 9.40148 119.843 10.4293C138.186 17.9272 148.246 17.5397 166.114 8.60956C188.261 -2.46044 205.303 -2.83113 226.674 7.29531C243.866 15.4335 253.1 15.5515 271.218 7.85134C291.388 -0.674416 312.208 -0.000442408 327.623 9.51942C331.052 11.6424 333.404 14.153 335.381 16.9163L335.356 16.8994Z"
                    fill="#2D5F62"
                />
            </g>
            <defs>
                <clipPath id="clip0_1646_3346">
                    <rect fill="white" height="89.5541" width="380" />
                </clipPath>
            </defs>
        </svg>
    </div>
);

export default Water;
