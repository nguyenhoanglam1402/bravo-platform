/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EUserPermissionCase, EUserRole, TAuthenticationInforData } from '../types/users.type'
import { RootState } from '../store'

const initialState = {
  uid: '',
  firstName: '',
  lastName: '',
  address: '',
  age: '',
  bussinessUnit: '',
  specialPermissionCase: EUserPermissionCase.READ,
  role: EUserRole.USER,
  access_token: '',
  secret_code: ''
} satisfies TAuthenticationInforData as TAuthenticationInforData

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TAuthenticationInforData>) => {
      state = { ...state, ...action }
    },

    logout: (state) => {
      state = {
        ...state,
        firstName: '',
        lastName: '',
        address: '',
        age: '',
        bussinessUnit: '',
        specialPermissionCase: EUserPermissionCase.READ,
        role: EUserRole.USER,
        access_token: '',
        secret_code: ''
      }
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectCount = (state: RootState) => state.user

export default userSlice.reducer
