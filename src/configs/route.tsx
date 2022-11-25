import React, { Suspense } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import MENU from './menu'
// Pages
const Home = React.lazy(() => import('pages/home'))
const Login = React.lazy(() => import('pages/login'))
const Register = React.lazy(() => import('pages/register'))
const Dashboard = React.lazy(() => import('pages/dashboard'))

const LoadingComponent = (
    <p className="site-loading">Loading...</p>
)

const AppRoute = () => (
    <Suspense fallback={LoadingComponent}>
        <BrowserRouter>
            <Routes>
                <Route path={MENU.HOME} element={<Home />} />
                <Route path={MENU.LOGIN} element={<Login />} />
                <Route path={MENU.REGISTER} element={<Register />} />
                <Route path={MENU.DASHBOARD} element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default AppRoute