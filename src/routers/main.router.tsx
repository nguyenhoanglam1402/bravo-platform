import { RouteObject } from 'react-router-dom'
import MainTemplate from '../components/templates/main-page'
import ClassPage from '../components/pages/class-page'
import { ROUTER_MAP } from '../constants/router-map'
import ComposePage from '../components/pages/compose'

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: ROUTER_MAP.MAIN_SECTOR.HOME.path,
        element: 'Home'
      },
      {
        path: ROUTER_MAP.MAIN_SECTOR.CLASS.path,
        element: <ClassPage />
      },
      {
        path: ROUTER_MAP.MAIN_SECTOR.COMPOSE.path,
        element: <ComposePage />
      }
    ]
  }
]
