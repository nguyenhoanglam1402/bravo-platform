import { RouteObject } from 'react-router-dom'
import LoginPage from '../components/pages/login'

export const authenRouter: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <LoginPage />
  }
]
