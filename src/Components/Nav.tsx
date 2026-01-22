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
import { NavLink } from "react-router"


const Nav = () => {
    return (
        <BottomNavigation>
            <BottomNavigationAction
                component={NavLink}
                to="/"
                label="Inicio"
                icon={<HomeOutlinedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to="/buscar"
                label="Buscar"
                icon={<SearchOutlinedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to="/carrito"
                label="Carrito"
                icon={<ShoppingCartOutlinedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to="/ingresar"
                label="Ingresar"
                icon={<AccountBoxOutlinedIcon />}
            />
        </BottomNavigation>
    )
}

export default Nav