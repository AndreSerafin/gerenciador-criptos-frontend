import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { UsersProvider } from '../contexts/Users/UsersContext'
import { RequireAuth } from '../contexts/Auth/RequireAuth'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route
        path="/login"
        element={
          <UsersProvider>
            <Login />
          </UsersProvider>
        }
      />
    </Routes>
  )
}
