import { Link } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

import FacebookIcon from "./FacebookIcon";

const StyledSection = styled("section")(({ theme }) => ({
    width: "100%",
    paddingBottom: theme.spacing(4)
}));

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

const StyledLink = styled(Link)(({ theme }) => ({
    padding: theme.spacing(1)
}));

const StyledText = styled("p")({
    margin: 0,
    padding: "0 16px"
});

type Url = {
    label: string;
    href: string; // NOTE: href must start with http(s)://
};

type FooterProps = {
    color?: PaletteColor;
};
const Footer = ({ color }: FooterProps) => {
    const theme = useTheme();

    const links: Url[] = [
        {
            label: "Take Part",
            href: "/take-part"
        },
        {
            label: "Sponsor Us",
            href: "/sponsors"
        },
        {
            label: "FAQs",
            href: "/faqs"
        },
        {
            label: "Cookies Policy",
            href: "/cookies"
        }
    ];

    const bgColor = color?.main ?? theme.palette.dark.main;
    const textColor = color?.contrastText ?? theme.palette.dark.contrastText;

    return (
        <StyledSection style={{ backgroundColor: bgColor }}>
            <StyledRow>
                <FacebookIcon color={textColor} href="https://www.facebook.com/matlockraftevent/" />
            </StyledRow>
            <StyledRow>
                {
                    links.map(link =>
                        <StyledLink
                            key={link.label}
                            href={link.href}
                            style={{
                                color: textColor,
                                textDecorationColor: textColor
                            }}
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
