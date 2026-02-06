import { useState } from 'react'
//Components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import DialogActions from '@mui/material/DialogActions'
import { AppThemeSwitch } from './AppThemeSwitch'

//Icons
import MenuIcon from '@mui/icons-material/Menu'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CloseIcon from '@mui/icons-material/Close'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import { GiFlowerPot } from "react-icons/gi"
import { GiPlantRoots } from "react-icons/gi"
import { MdContactSupport } from "react-icons/md"


export const AppHeader = () => {
    {/*Handleo del menu hamburguesa*/ }
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => setOpen(true)

    const handleCloseMenu = () => setOpen(false)

    {/*Handleo del switch dark/light mode*/}
    const handleThemeChange = (isDark : boolean) => {
        //PENDING: LOGICA PARA EL CAMBIO DE THEME
        console.log('PENDING' + isDark)
    }


    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/*Nombre de la App*/}
                <Typography align='left'>Plantitas</Typography>

                <Box>
                    {/*Switch para el light/dark mode*/}
                    <AppThemeSwitch onChange={handleThemeChange}/>

                    {/*Menu hamburguesa con modal full-screen*/}
                    {/*Icono del menu*/}
                    <IconButton
                        aria-label='Menu'
                        aria-haspopup='true'
                        onClick={handleOpenMenu}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/*Dialog fullscreen*/}
                    <Dialog
                        open={open}
                        fullScreen
                        onClose={handleCloseMenu}
                    >
                        {/*Boton para cerrar*/}
                        <DialogActions sx={{ justifyContent: 'flex-start', p: 1, pb: 0 }}>
                            <IconButton onClick={handleCloseMenu} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </DialogActions>

                        <List sx={{ pt: 0, pl: 1 }}>                      {/*Lista con links para navegar*/}
                            <ListItemButton>
                                <ListItemIcon sx={{ fontSize: 24 }}> <LocalFloristIcon /> </ListItemIcon>
                                <ListItemText primary="Plantas" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon sx={{ fontSize: 24 }}> <GiFlowerPot /> </ListItemIcon>
                                <ListItemText primary="Macetas" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon sx={{ fontSize: 24 }}> <GiPlantRoots /> </ListItemIcon>
                                <ListItemText primary="Sustratos" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon sx={{ fontSize: 24 }}> <MdContactSupport /> </ListItemIcon>
                                <ListItemText primary="Contacto" />
                            </ListItemButton>
                        </List>
                    </Dialog>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
