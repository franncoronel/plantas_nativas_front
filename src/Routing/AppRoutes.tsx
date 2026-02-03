import { Routes, Route } from 'react-router'
import { PATHS } from './paths'
import { AppLayout } from '../Layouts/AppLayout'
import { AuthLayout } from '../Layouts/AuthLayout'
import { Home } from '../Pages/Home'
import { Cart } from '../Pages/Cart'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                {/* <Route path={PATHS.LOGIN} element={<Login />} />
                <Route path={PATHS.SIGNUP} element={<SignUp />} /> */}
            </Route>

            <Route path={PATHS.HOME} element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path={PATHS.CART} element={<Cart />} />
            </Route>
        </Routes>
    )
}