import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Download } from '@/pages/Download'
import { Features } from '@/pages/Features'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from '@/pages/TermsOfService'
import { Help } from '@/pages/Help'
import { About } from '@/pages/About'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Force scroll to top on every route change to ensure consistent restoration
    try {
      window.scrollTo({ top: 0, left: 0 })
    } catch {
      window.scrollTo(0, 0)
    }
    // If AOS is loaded, refresh to ensure animations on new content
      (async () => {
        try {
          const mod = await import('aos')
          // support default and named module shapes
          const AOS: any = (mod as any).default ?? mod
          AOS.refresh?.()
        } catch {
          // ignore if AOS not available
        }
      })()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" role="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
