import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './base'
import { TLoginPayload } from '../components/molecules/login/types/types'

export const AuthenticateService = createApi({
  reducerPath: 'authServicePath',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    loginAccount: builder.mutation({
      query: (body: TLoginPayload) => ({
        url: '/auth/login',
        body,
        method: 'POST'
      })
    })
  })
})

export const { useLoginAccountMutation } = AuthenticateService
