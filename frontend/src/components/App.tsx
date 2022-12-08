import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Routes } from './Routes'
import Header from './header/Header'
import { ThemeProvider } from '@mui/material'
import { theme } from 'utils/mui/theme'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <ToastContainer autoClose={3000} />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
