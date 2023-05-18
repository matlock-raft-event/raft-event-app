import styled from "styled-components";

import { SECONDARY } from "~/theme/palette";
import { IPalettePairing } from "~/theme/types";

import FacebookIcon from "./FacebookIcon";

const StyledSection = styled.section({
    width: "100%"
});

const StyledRow = styled.div(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    flexDirection: "column",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
        flexDirection: "row"
    }
}));

const StyledLink = styled.a({
    padding: "0 8px"
});

const StyledText = styled.p({
    margin: 0,
    padding: "0 16px"
});

type Link = {
    label: string;
    href: string; // NOTE: href must start with http(s)://
};

type FooterProps = {
    bgColor?: IPalettePairing;
};
const Footer = ({ bgColor = SECONDARY.main }: FooterProps) => {
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

    return (
        <StyledSection style={{ backgroundColor: bgColor.color }}>
            <StyledRow>
                {/* FIXME href */}
                <FacebookIcon color={bgColor.contrastText} href="https://www.google.com" />
            </StyledRow>
            <StyledRow>
                {
                    links.map(link =>
                        <StyledLink
                            key={link.label}
                            href={link.href}
                            style={{ color: bgColor.contrastText }}
                        >
                            {link.label}
                        </StyledLink>
                    )
                }
            </StyledRow>
            <StyledRow>
                <StyledText style={{ color: bgColor.contrastText }}>
                    &#169;
                    {" "}
                    {new Date().getFullYear()}
                    {" "}
                    All Rights Reserved
                </StyledText>
                <StyledText style={{ color: bgColor.contrastText }}>
                    DASAC&apos;S Matlock Raft Event
                </StyledText>
            </StyledRow>
        </StyledSection>
    );
};
export default Footer;
