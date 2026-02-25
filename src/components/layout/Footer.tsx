import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'
  const companyName = import.meta.env.VITE_COMPANY_NAME || ''
  const companyYear = import.meta.env.VITE_COMPANY_YEAR || new Date().getFullYear().toString()
  const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || ''
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || ''
  const instagram = import.meta.env.VITE_INSTAGRAM_URL || ''
  const facebook = import.meta.env.VITE_FACEBOOK_URL || ''
  const twitter = import.meta.env.VITE_TWITTER_URL || ''

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="inline-block" onMouseDown={(e) => (e.currentTarget as HTMLElement).blur()}>
              <img src={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '/logoGelap.png' : '/logoText.png'} alt={appName} className="h-12 w-auto opacity-95 sm:h-10" />
            </Link>
            <div className="space-y-1">
              {companyName && <p className="text-sm font-semibold text-neutral-900">{companyName}</p>}
              {companyAddress && (
                <p className="text-sm leading-relaxed text-neutral-500">{companyAddress}</p>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Platform</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/features" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Fitur
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Unduh
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Dukungan</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/help" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Pusat Bantuan & FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Hubungi</h4>
            <div className="mt-4 space-y-4">
              {supportEmail && (
                <a
                  href={`mailto:${supportEmail}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600"
                >
                  <Mail size={16} />
                  <span>{supportEmail}</span>
                </a>
              )}
              <div className="flex gap-4">
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white p-2 text-neutral-500 shadow-sm border border-neutral-100 transition-all hover:text-primary-600 hover:shadow-md" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                )}
                {facebook && (
                  <a href={facebook} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white p-2 text-neutral-500 shadow-sm border border-neutral-100 transition-all hover:text-primary-600 hover:shadow-md" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                )}
                {twitter && (
                  <a href={twitter} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white p-2 text-neutral-500 shadow-sm border border-neutral-100 transition-all hover:text-primary-600 hover:shadow-md" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-16 border-t border-neutral-200 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {companyYear} {companyName || appName}. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
             <Link to="/privacy-policy" className="text-xs text-neutral-400 hover:text-neutral-600">Privasi</Link>
             <Link to="/terms-of-service" className="text-xs text-neutral-400 hover:text-neutral-600">Syarat</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
