import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { GlobalProvider } from './context/GlobalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
       <GlobalProvider>
         <App />
       </GlobalProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
