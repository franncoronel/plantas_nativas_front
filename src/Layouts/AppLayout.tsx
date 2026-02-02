import Box from "@mui/material/Box"
import Nav from "../Components/Nav"
import { HeaderApp } from '../Components/Header'
import { Outlet } from "react-router"

export const AppLayout = () => {
    return(
        <Box>
            <Outlet />
            <HeaderApp />
            <Nav />
        </Box>
    )
}