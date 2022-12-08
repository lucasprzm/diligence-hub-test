import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Routes } from './Routes'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Routes />
    </BrowserRouter>
  )
}

export default App
