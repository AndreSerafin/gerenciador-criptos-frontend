import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { UsersProvider } from '../contexts/Users/UsersContext'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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
