import { createBrowserRouter } from 'react-router-dom'
import { authenRouter } from './authenticate.router'
import { mainRouter } from './main.router'

const rootRouter = createBrowserRouter([...authenRouter, ...mainRouter])

export default rootRouter
