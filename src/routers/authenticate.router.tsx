import { RouteObject } from 'react-router-dom'
import LoginPage from '../components/pages/login'
import { ROUTER_MAP } from '../constants/router-map'

export const authenRouter: RouteObject[] = [
  {
    path: ROUTER_MAP.LOGIN.path,
    element: <LoginPage />
  },
  {
    path: ROUTER_MAP.SIGNUP.path,
    element: <LoginPage />
  }
]
