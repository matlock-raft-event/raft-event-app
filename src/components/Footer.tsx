import { styled, useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

import FacebookIcon from "./FacebookIcon";

const StyledSection = styled("section")({
    width: "100%"
});

const StyledRow = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
    }
}));

const StyledLink = styled("a")({
    padding: "0 8px"
});

const StyledText = styled("p")({
    margin: 0,
    padding: "0 16px"
});

type Link = {
    label: string;
    href: string; // NOTE: href must start with http(s)://
};

type FooterProps = {
    color?: PaletteColor;
};
const Footer = ({ color }: FooterProps) => {
    const theme = useTheme();

    const links: Link[] = [ // FIXME: Give these objects correct URLs
        {
            label: "Take Part",
            href: "https://www.google.com"
        },
        {
            label: "Sponsor Us",
            href: "https://www.google.com"
        },
        {
            label: "FAQs",
            href: "https://www.google.com"
        },
        {
            label: "Cookies Policy",
            href: "https://www.google.com"
        }
    ];

    const bgColor = color?.main ?? theme.palette.primary.main;
    const textColor = color?.contrastText ?? theme.palette.primary.contrastText;

    return (
        <StyledSection style={{ backgroundColor: bgColor }}>
            <StyledRow>
                {/* FIXME href */}
                <FacebookIcon color={textColor} href="https://www.google.com" />
            </StyledRow>
            <StyledRow>
                {
                    links.map(link =>
                        <StyledLink
                            key={link.label}
                            href={link.href}
                            style={{ color: textColor }}
                        >
                            {link.label}
                        </StyledLink>
                    )
                }
            </StyledRow>
            <StyledRow>
                <StyledText style={{ color: textColor }}>
                    &#169;
                    {" "}
                    {new Date().getFullYear()}
                    {" "}
                    All Rights Reserved
                </StyledText>
                <StyledText style={{ color: textColor }}>
                    DASAC&apos;S Matlock Raft Event
                </StyledText>
            </StyledRow>
        </StyledSection>
    );
};
export default Footer;
