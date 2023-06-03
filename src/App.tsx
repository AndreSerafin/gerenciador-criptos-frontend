import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/Themes/DefaultTheme'
import { UsersProvider } from './contexts/UsersContext'

export function App() {
  return (
    <UsersProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </UsersProvider>
  )
}
