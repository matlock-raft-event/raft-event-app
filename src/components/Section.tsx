import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SectionProps {
    backgroundColor?: string;
    children?: ReactNode;
}

const Section = ({ backgroundColor, children }: SectionProps) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: backgroundColor ?? theme.palette.primary.main,
                paddingTop: "2em",
                paddingBottom: "3em"
            }}
        >
            <Container maxWidth="lg">
                {children}
            </Container>
        </Box>
    );
};

export default Section;
