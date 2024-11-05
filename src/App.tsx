import './App.css'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './routers'
import CoreThemeProvider from './themes'
import { Provider } from 'react-redux'
import { store } from './store'
import { ModalProvider } from './contexts/modal.context'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <CoreThemeProvider>
      <Provider store={store}>
        <ModalProvider>
          <RouterProvider router={rootRouter} />
          <ToastContainer bodyClassName='font-nunito text-sm' />
        </ModalProvider>
      </Provider>
    </CoreThemeProvider>
  )
}

export default App
