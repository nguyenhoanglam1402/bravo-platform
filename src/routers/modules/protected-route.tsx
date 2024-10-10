import { ReactNode } from 'react'
import { useAppSelector } from '../../hooks/redux-hook'
import { EUserRole } from '../../types/users.type'
import { Navigate } from 'react-router-dom'

interface IProps {
  element: ReactNode
  roles: EUserRole[]
}

export default function ProtectedRoute({ element }: IProps) {
  const { uid, access_token, secret_code } = useAppSelector((state) => state.user)
  if (uid !== '' && access_token !== '' && secret_code !== '') {
    return element
  }

  return <Navigate to='/login' replace />
}
