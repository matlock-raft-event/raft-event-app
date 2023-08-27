import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Heading from "~/components/Heading";
import Section from "~/components/Section";

const EventMap = () => (
    <svg
        fill="none"
        height="100%"
        style={{ borderRadius: 2 }}
        viewBox="0 0 600 412"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect fill="url(#pattern0)" height="411.854" width="600" />
        <defs>
            <pattern height="1" id="pattern0" patternContentUnits="objectBoundingBox" width="1">
                <use transform="scale(0.000282247 0.000411184)" xlinkHref="#image0_470_2098" />
            </pattern>
            <image
                height="2432"
                id="image0_470_2098"
                width="3543"
                // eslint-disable-next-line max-len
            />
        </defs>
    </svg>
);
const EventRouteSection = () => {
    const theme = useTheme();
    return (
        <Section backgroundColor={theme.palette.secondary.main}>
            <Heading
                color={theme.palette.secondary}
                subtitle="Where we're going, we don't need roads..."
                title="Event Route"
            />
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    boxShadow: theme.shadows[5],
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    padding: "2%",
                    paddingBottom: "6%"
                }}
            >
                <EventMap />
            </Container>
        </Section>
    );
};

export default EventRouteSection;