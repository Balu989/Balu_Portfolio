import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

// Report Web Vitals for performance monitoring
if (typeof window !== 'undefined') {
  // Disable console in production
  if (import.meta.env.PROD) {
    console.log = () => {}
    console.warn = () => {}
    console.debug = () => {}
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
