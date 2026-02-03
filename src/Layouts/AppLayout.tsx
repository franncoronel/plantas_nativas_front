import Box from "@mui/material/Box"
import Nav from "../Components/Nav"
import { HeaderApp } from '../Components/Header'
import { Outlet } from "react-router"
import Toolbar from '@mui/material/Toolbar'


export const AppLayout = () => {
    return(
        <Box>
            <HeaderApp />
            <Toolbar/>      {/*Spacer para que el contenido arranque post Header */}
            <Outlet />
            <Nav />
        </Box>
    )
}

/* Habra que handlear el tema del espacio con el footer tambien pero lo dejo para mas adelante cuando
ya haya maquetado mas concreto */