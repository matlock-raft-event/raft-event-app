type IconProps = {
    color?: string;
    height?: number;
    href: string;
    width?: number;
};
const FacebookIcon = ({
    color,
    height = 48,
    width = 48,
    href
}: IconProps) => (
    <a href={href} style={{ color, height, width }}>
        <svg fill="#000000" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path
                // eslint-disable-next-line max-len
                d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                fill={color}
            />
        </svg>
    </a>
);

export default FacebookIcon;

// MIT License https://www.svgrepo.com/svg/503338/facebook