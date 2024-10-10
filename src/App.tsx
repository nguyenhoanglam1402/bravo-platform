import './App.css'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './routers'
import CoreThemeProvider from './themes'
import { Provider } from 'react-redux'
import { store } from './store'
import { ModalProvider } from './contexts/modal.context'

function App() {
  return (
    <CoreThemeProvider>
      <Provider store={store}>
        <ModalProvider>
          <RouterProvider router={rootRouter} />
        </ModalProvider>
      </Provider>
    </CoreThemeProvider>
  )
}

export default App
