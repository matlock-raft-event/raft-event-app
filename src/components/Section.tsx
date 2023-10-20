import { ReactNode, useMemo } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";

import Cloud from "~/components/shadows/Cloud";
import Tree from "~/components/shadows/Tree";

interface SectionProps {
    bgColor?: PaletteColor;
    children?: ReactNode;
}

const Section = ({
    bgColor,
    children
}: SectionProps) => {
    const theme = useTheme();

    const ShadowComponent = useMemo(() => {
        switch (bgColor) {
            case theme.palette.green:
                return Tree;
            case theme.palette.secondary:
                return Cloud;
            default:
                return null;
        }
    },
    [bgColor]
    );

    return (
        <Box
            sx={{
                backgroundColor: bgColor?.main ?? theme.palette.primary.main,
                paddingTop: "2em",
                paddingBottom: "3em",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Container
                maxWidth="lg"
                style={{
                    position: "relative",
                    zIndex: 4
                }}
            >
                {children}
            </Container>
            {
                ShadowComponent !== null &&
                <>
                    <ShadowComponent
                        color={bgColor?.dark}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "15%",
                            zIndex: 3
                        }}
                    />
                    <ShadowComponent
                        color={bgColor?.dark}
                        style={{
                            position: "absolute",
                            top: "10%",
                            right: 0,
                            width: "15%",
                            zIndex: 3
                        }}
                    />
                    <ShadowComponent
                        color={bgColor?.dark}
                        style={{
                            position: "absolute",
                            bottom: "12%",
                            left: "-8%",
                            width: "15%",
                            zIndex: 3
                        }}
                    />
                    <ShadowComponent
                        color={bgColor?.dark}
                        style={{
                            position: "absolute",
                            bottom: "16%",
                            right: "-6%",
                            width: "15%",
                            zIndex: 3
                        }}
                    />
                </>
            }
        </Box>
    );
};

export default Section;
