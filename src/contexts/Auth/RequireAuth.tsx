import { useContext, useEffect, useState, JSX } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

interface PrivateProps {
  children: JSX.Element
}

export function RequireAuth({ children }: PrivateProps) {
  const { verifyToken } = useContext(AuthContext)
  const session = JSON.parse(localStorage.getItem('cripto') || '{}')

  const [access, setAccess] = useState(false)
  const [hasCheckedAccess, setHasCheckedAccess] = useState(false)

  useEffect(() => {
    const valid = async () => {
      const result = await verifyToken(session)
      setAccess(result)
      setHasCheckedAccess(true)
    }
    valid()
  }, [verifyToken, session])

  if (!hasCheckedAccess) {
    return null
  }

  return access ? children : <Navigate to="/login" />
}
