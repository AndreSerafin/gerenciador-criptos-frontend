import { createContext, ReactNode, useState } from 'react'
import { api } from '../../services/api'

interface User {
  email: string
  password: string
}

interface AuthUser {
  email: string
  token?: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  loading: boolean
  user: AuthUser | null
  changeLoadingState: (state: boolean) => void
  signin: (user: User) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  function changeLoadingState(state: boolean) {
    setLoading(state)
  }

  async function signin(data: User) {
    setLoading(true)
    try {
      const response = await api.post('/login', data)
      setLoading(false)
      const { token } = { token: response?.data?.token }
      localStorage.setItem('cripto', JSON.stringify(token))
      const { email } = data
      setUser({ email, token })
    } catch (e) {
      alert('erro tente novamente')
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signin, loading, changeLoadingState }}>
      {children}
    </AuthContext.Provider>
  )
}
