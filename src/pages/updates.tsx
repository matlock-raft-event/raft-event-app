import { useTheme } from "@mui/material/styles";

import Waves from "~/components/Waves";
import UpdatesSection from "~/sections/UpdatesSection";

const Updates = () => {
    const theme = useTheme();
    return (
        <main>
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} />
            <UpdatesSection />
            <Waves variant={2} />
        </main>
    );
};

export default Updates;
