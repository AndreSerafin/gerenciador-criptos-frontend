import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/Themes/DefaultTheme'
import { AuthProvider } from './contexts/Auth/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  )
}
