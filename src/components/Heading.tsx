import styled from "styled-components";

import { PRIMARY } from "~/theme/palette";
import { IPalettePairing } from "~/theme/types";

const StyledContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});

const StyledTitle = styled("h2")({
    marginTop: 8
});

const StyledSubtitle = styled("h6")({
    display: "flex",
    gap: 16,
    marginBottom: 8
});

const Bullet = () => <span>&#8226;</span>; // TODO: Can we get a better bullet svg?

type HeadingProps = {
    color?: IPalettePairing;
    subtitle?: string;
    title: string;
};

const Heading = ({
    color = PRIMARY.main,
    subtitle,
    title
}: HeadingProps) => (
    <StyledContainer style={{ color: color?.contrastText }}>
        {
            subtitle &&
            <StyledSubtitle>
                <Bullet />
                {subtitle}
                <Bullet />
            </StyledSubtitle>
        }
        <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
);

export default Heading;
