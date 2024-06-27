import DefaultLayout from '@/layouts/default-layout'
import LoginLayout from '@/layouts/login-layout'
import Home from '@/pages/home'
import Login from '@/pages/login'
import NotFound from '@/pages/not-found'
import Profile from '@/pages/profile'
import { AUTHORITIES } from '@/constants'
import WatchList from '@/pages/product-mng/watch-list'
import BrandList from '@/pages/brand-mng/brand-list'
import AccountList from '@/pages/account-mng/account-list'
import Register from '@/pages/register'
import ProductDetail from '@/pages/product-detail'
import CustomerLayout from '@/layouts/customer-layout'

export const ROUTE_PATHS = {
  ROOT: '/',
  HOME: '/home',
  REGISTER: '/register',
  LOGIN: '/login',
  WATCH: '/watch',
  MEMBER: '/member',
  PROFILE: '/profile',
  M_WATCH: '/watches',
  M_BRAND: '/brands',
  M_MEMBER: '/members'
}

export const routes = [
  {
    path: ROUTE_PATHS.LOGIN,
    name: 'Login',
    component: Login,
    layout: LoginLayout
  },
  {
    path: ROUTE_PATHS.REGISTER,
    name: 'Register',
    component: Register,
    layout: LoginLayout
  },
  {
    path: ROUTE_PATHS.ROOT,
    name: 'Homepage',
    component: Home,
    layout: CustomerLayout,
    conditional: true
  },
  {
    path: `${ROUTE_PATHS.WATCH}/:id`,
    name: 'Watch detail sign out',
    component: ProductDetail,
    layout: CustomerLayout,
    conditional: true
  },
  {
    path: `${ROUTE_PATHS.PROFILE}`,
    name: 'User Profile',
    component: Profile,
    layout: CustomerLayout,
    private: true
  },
  // MANAGER ROUTE
  {
    path: `${ROUTE_PATHS.M_WATCH}`,
    name: 'Watches Management',
    component: WatchList,
    layout: DefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN]
  },
  {
    path: `${ROUTE_PATHS.M_BRAND}`,
    name: 'Brands Management',
    component: BrandList,
    layout: DefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN]
  },
  {
    path: `${ROUTE_PATHS.M_MEMBER}`,
    name: 'Members Management',
    component: AccountList,
    layout: DefaultLayout,
    private: true,
    roles: [AUTHORITIES.ADMIN]
  },

  // NOT FOUND
  {
    path: `*`,
    name: 'Not found',
    component: NotFound,
    private: false,
    roles: [AUTHORITIES.ADMIN, AUTHORITIES.CUSTOMER]
  }
]
