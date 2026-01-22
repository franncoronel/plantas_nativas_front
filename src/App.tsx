
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Nav from './Components/Nav.tsx'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  )
}

export default App
