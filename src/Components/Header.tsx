import { useState } from 'react'
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

    {/*Handleo del menu clickeable*/ }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position='fixed'>
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
                    <IconButton
                        aria-label='Menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>Test 1</MenuItem>
                        <MenuItem>Test 2</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
