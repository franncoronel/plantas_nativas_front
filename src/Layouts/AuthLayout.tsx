import Box from "@mui/material/Box"
import { Outlet } from "react-router"

export const AuthLayout = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}
