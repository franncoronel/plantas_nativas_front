import { useState } from 'react'
//Components
import AppBar from '@mui/material/AppBar'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

//Icons
import MenuIcon from '@mui/icons-material/Menu'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CloseIcon from '@mui/icons-material/Close'


export const AppHeader = () => {


    {/*Opcion 2: Handleo del menu clickeable*/ }
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
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

                    {/*Menu hamburguesa con modal full-screen*/}
                    {/*Icono del menu*/}
                    <IconButton
                        aria-label='Menu2'
                        aria-haspopup='true'
                        onClick={handleClickOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/*Dialog fullscreen*/}
                    <Dialog
                        open={open}
                        fullScreen
                        onClose={handleClose}
                    >
                        {/*Boton para cerrar*/}
                        <Box sx={{ position: 'absolute', margin: 1, padding: 1 }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>

                            <List sx={{ position: 'relative' }}>                      {/*Lista con todos los links para navegar*/}
                                <ListItemButton>
                                    <ListItemText primary="Plantas" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary="Macetas" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary="Sustratos" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary="Contacto" />
                                </ListItemButton>
                            </List>
                        </Box>
                    </Dialog>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
