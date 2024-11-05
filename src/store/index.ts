import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/user.slice'
import { AuthenticateService } from '../services/authenticate.service'
import { UserService } from '../services/user.service'

export const store = configureStore({
  reducer: {
    user: userReducer,

    [AuthenticateService.reducerPath]: AuthenticateService.reducer,
    [UserService.reducerPath]: UserService.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthenticateService.middleware, UserService.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
