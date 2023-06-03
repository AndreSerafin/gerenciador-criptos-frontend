import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

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
  async function createNewUser(data: CreateNewUser) {
    api.post('/user', data)
  }

  return (
    <UsersContext.Provider value={{ createNewUser }}>
      {children}
    </UsersContext.Provider>
  )
}
