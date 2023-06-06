import { createContext, ReactNode, useState } from 'react'
import { api } from '../../services/api'

interface User {
  email: string
  password: string
}

interface Token {
  token: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  loading: boolean
  verifyToken: (token: Token) => Promise<boolean>
  changeLoadingState: (state: boolean) => void
  signin: (user: User) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false)

  function changeLoadingState(state: boolean) {
    setLoading(state)
  }

  async function verifyToken(token: Token) {
    try {
      const response = await api.post('/login/validateToken', token)
      const { valid } = await response.data
      console.log(valid)
      return valid
    } catch (e) {}
  }

  async function signin(data: User) {
    setLoading(true)
    try {
      const response = await api.post('/login', data)
      const { email } = data
      setLoading(false)
      const token = response?.data?.token
      localStorage.setItem('cripto', JSON.stringify({ token, email }))
    } catch (e) {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ signin, loading, changeLoadingState, verifyToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
