
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import './App.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ProductCard from './Components/Card.tsx'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <Button variant="contained" size="large">Lorem ipsum</Button>
      </Box>
      <ProductCard />
    </ThemeProvider>
  )
}

export default App
