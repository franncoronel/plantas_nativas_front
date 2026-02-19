import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: "black",
                },
            },
        },
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: "#ff0000",
                },
            },
        },
        light: {
            palette: {
                primary: {
                    main: "#FFFFFF",
                },
            },
        },
    },
})

export default theme
