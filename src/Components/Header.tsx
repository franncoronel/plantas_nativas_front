//Components
import AppBar from '@mui/material/AppBar'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

//Icons
import MenuIcon from '@mui/icons-material/Menu'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'


export const HeaderApp = () => {

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/*Nombre de la App*/}
                <Typography align='left'>Plantitas </Typography>

                <Box>
                    {/*Switch para el light/dark mode*/}
                    <IconButton>
                        <WbSunnyOutlinedIcon />
                        <DarkModeIcon />
                    </IconButton>

                    {/*Menu hamburguesa para navegación*/}
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
