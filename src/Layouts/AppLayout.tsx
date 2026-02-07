import Box from "@mui/material/Box"
import Nav from "../Components/Nav"
import { Outlet } from "react-router"

export const AppLayout = () => {
    return (
        <Box>
            <Outlet />
            <Nav />
        </Box>
    )
}
