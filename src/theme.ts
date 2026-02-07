import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    components: {
        MuiCssBaseline:{
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            }
        },

        MuiButton: {
            defaultProps: {

            }
        }
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: '#ff0000'
                }
            }
        },
        light: {
            palette: {
                primary: {
                    main: '#FFFFFF'
                }
            }
        }
    }
})

export default theme