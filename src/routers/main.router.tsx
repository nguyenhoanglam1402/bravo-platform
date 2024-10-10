import { RouteObject } from 'react-router-dom'
import MainTemplate from '../components/templates/main-page'
import ClassPage from '../components/pages/class-page'

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: '/home',
        element: 'Home'
      },
      {
        path: '/class',
        element: <ClassPage />
      }
    ]
  }
]
