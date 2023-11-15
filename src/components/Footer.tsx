import { styled, useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";
import { Link } from "gatsby";

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
    to: string; // NOTE: to must start with http(s)://
};

type FooterProps = {
    color?: PaletteColor;
};
const Footer = ({ color }: FooterProps) => {
    const theme = useTheme();

    const links: Url[] = [
        {
            label: "Take Part",
            to: "/take-part"
        },
        {
            label: "Sponsor Us",
            to: "/sponsors"
        },
        {
            label: "FAQs",
            to: "/faqs"
        },
        {
            label: "Cookies Policy",
            to: "/cookies"
        }
    ];

    const bgColor = color?.main ?? theme.palette.secondary.main;
    const textColor = color?.contrastText ?? theme.palette.secondary.contrastText;

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
                            style={{
                                color: textColor,
                                textDecorationColor: textColor
                            }}
                            to={link.to}
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
