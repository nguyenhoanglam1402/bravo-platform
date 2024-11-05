import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import Cookie from 'js-cookie'
import { ECookieKey } from '../constants/storage/cookie-key.const'

export interface IQueryError {
  status: number
  message: string
}

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_SERVICE_HOST,
  headers: {
    Accept: 'application/json'
  },
  prepareHeaders: (headers, { endpoint }) => {
    // Check if the endpoint is "getPublicData" and skip setting Authorization header
    if (endpoint === 'loginAccount') {
      return headers // No token for this request
    }

    // For other endpoints, retrieve and set token from state if available
    const token = Cookie.get(ECookieKey.TOKEN)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})
