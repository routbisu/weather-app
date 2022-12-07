import { ThemeProvider } from 'styled-components'
import { light } from '@/themes'
import Weather from '@/screens/Weather'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Weather />
    </ThemeProvider>
  )
}

export default App
