import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'aos/dist/aos.css'

function Root() {
  useEffect(() => {
    void import('aos').then((AOS) => {
      const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      AOS.init({
        once: true,
        duration: 700,
        easing: 'ease-out-cubic',
        offset: 120,
        // disable animations when user prefers reduced motion for accessibility
        disable: prefersReduced,
      })
    })
  }, [])

  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
