import { Theme } from "@mui/material/styles";

const Button = (theme: Theme) => ({
    MuiButton: {
        defaultProps: {
            variant: "contained" as const,
            color: "red",
            disableRipple: true
        },
        styleOverrides: {
            root: {
                fontFamily: "'Rokkitt', serif",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",

                "&.MuiButton-text": {
                    ">.MuiButton-startIcon": {
                        marginRight: theme.spacing(0.5)
                    },
                    ">.MuiButton-endIcon": {
                        marginLeft: theme.spacing(0.5)
                    }
                },
                "&:hover": {
                    transform: "scale(1.01)"
                }
            }
        }
    }
});

export default Button;
