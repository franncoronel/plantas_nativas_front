
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import { AppRoutes } from './Routing/AppRoutes.tsx'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
