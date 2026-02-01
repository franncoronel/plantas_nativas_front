import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { NavLink, useLocation } from "react-router"
import { useState } from 'react'
import { PATHS } from '../Routing/paths'


const Nav = () => {
    //TODO: Usar estado o investigar NavLink para renderizar íconos filled en vez de outlined cuando está activo el botón correspondiente
    const [active, setActive] = useState<Boolean>()

    return (
        <BottomNavigation>
            <BottomNavigationAction
                component={NavLink}
                to={PATHS.HOME}
                label="Inicio"
                icon={<HomeOutlinedIcon />}
            />
            <BottomNavigationAction
                label="Buscar"
                icon={<SearchOutlinedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to={PATHS.CART}
                label="Carrito"
                icon={<ShoppingCartOutlinedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to={PATHS.LOGIN}
                label="Ingresar"
                icon={<AccountBoxOutlinedIcon />}
            />
        </BottomNavigation>
    )
}

export default Nav