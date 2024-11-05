import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './base'

export const UserService = createApi({
  reducerPath: 'userServicePath',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => ({
        url: '/users/self/profile'
      })
    })
  })
})

export const { useLazyGetUserDataQuery } = UserService
