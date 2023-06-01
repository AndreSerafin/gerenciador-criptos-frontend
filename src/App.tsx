import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/Themes/DefaultTheme'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Teste</h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
