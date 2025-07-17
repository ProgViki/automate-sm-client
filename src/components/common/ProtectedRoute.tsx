import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken } from '../../features/auth/authSlice'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector(selectCurrentToken)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute