import { createContext, ReactNode, useContext } from 'react'
import { api } from '../../services/api'
import { AuthContext } from '../Auth/AuthContext'

interface CreateNewUser {
  name: string
  email: string
  password: string
}

interface UsersContextType {
  createNewUser: (data: CreateNewUser) => void
}

export const UsersContext = createContext({} as UsersContextType)

interface UsersProviderProps {
  children: ReactNode
}

export function UsersProvider({ children }: UsersProviderProps) {
  const { changeLoadingState } = useContext(AuthContext)
  async function createNewUser(data: CreateNewUser) {
    changeLoadingState(true)
    try {
      changeLoadingState(false)
      await api.post('/user', data)
    } catch (e) {
      changeLoadingState(false)
    }
  }

  return (
    <UsersContext.Provider value={{ createNewUser }}>
      {children}
    </UsersContext.Provider>
  )
}
