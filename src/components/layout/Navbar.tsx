import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/download', label: 'Download' },
  { to: '/help', label: 'Help' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur-md">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          aria-label={appName}
          className="flex items-center gap-2 border-0 hover:bg-transparent active:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {!imgError ? (
            <img
              src="/logoText.png"
              alt={appName}
              className="h-7 w-auto sm:h-8 border-0 select-none"
              onError={() => setImgError(true)}
              draggable={false}
            />
          ) : (
            <div className="logo-text h-7 text-primary-600 font-extrabold text-lg sm:h-8">
              {appName}
            </div>
          )}
        </NavLink>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                    isActive ? 'text-primary-700 bg-primary-50' : 'text-neutral-600 hover:text-primary-700 hover:bg-primary-50'
                  }`
                }
                end
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <NavLink
            to="/download"
            className="hidden rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-neutral-800 hover:shadow-soft-lg active:scale-95 sm:inline-block"
          >
            Download App
          </NavLink>
          <button
            type="button"
            className="flex items-center justify-center rounded-xl p-2 text-neutral-600 transition-colors hover:bg-neutral-100 md:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute inset-x-4 top-full rounded-xl border border-neutral-100 bg-white p-4 shadow-soft md:hidden animate-fade-in-up">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-700'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <NavLink
                to="/download"
                className="block w-full rounded-lg bg-neutral-900 py-3 text-center text-base font-bold text-white shadow-sm"
                onClick={() => setOpen(false)}
              >
                Download Now
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
