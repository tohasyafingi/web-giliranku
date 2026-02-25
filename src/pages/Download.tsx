import { Helmet } from 'react-helmet-async'
import { Apple, Monitor } from 'lucide-react'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'
const tagline = import.meta.env.VITE_APP_TAGLINE || 'Real-Time Queue & Booking System'
const androidUrl = import.meta.env.VITE_ANDROID_DOWNLOAD_URL || '#'
const iosUrl = import.meta.env.VITE_IOS_DOWNLOAD_URL || '#'
const appVersion = import.meta.env.VITE_APP_VERSION || '1.0.0'

const minRequirements = [
  'Android 8.0 (API 26) or later',
  'iOS 14.0 or later',
  'Stable internet connection',
  'Push notifications enabled (optional, for queue alerts)',
]

export function Download() {
  return (
    <>
      <Helmet>
        <title>Unduh {appName} | Android & iOS</title>
        <meta name="description" content={`Unduh ${appName} untuk Android dan iOS. ${tagline}.`} />
        <meta property="og:title" content={`Unduh ${appName}`} />
        <meta property="og:description" content={`Unduh ${appName} untuk Android dan iOS. ${tagline}.`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-white px-4 pt-24 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Dapatkan GiliranKu di <br className="hidden sm:block" />
            <span className="text-primary-600">Perangkat Anda.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            Tetap terhubung dan kelola antrean dari mana saja. Unduh aplikasi mobile kami atau gunakan dasbor web.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             {/* Android Card */}
            <a
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center rounded-3xl border border-neutral-200 bg-white p-10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-soft-lg"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-green-50/50 transition-transform group-hover:scale-150" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-sm border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Monitor size={40} />
              </div>
              <h2 className="relative mt-8 text-2xl font-bold text-neutral-900">Android</h2>
              <p className="relative mt-2 text-neutral-500 text-center">Dioptimalkan untuk ponsel dan tablet.</p>
              <span className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800 active:scale-95 group-hover:bg-primary-600">
                Get on Play Store
              </span>
            </a>

            {/* iOS Card */}
            <a
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center rounded-3xl border border-neutral-200 bg-white p-10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-soft-lg"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-neutral-50 transition-transform group-hover:scale-150" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-50 text-neutral-700 shadow-sm border border-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Apple size={40} />
              </div>
              <h2 className="relative mt-8 text-2xl font-bold text-neutral-900">iOS</h2>
              <p className="relative mt-2 text-neutral-500 text-center">Segera hadir di iPhone dan iPad.</p>
              <span className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800 active:scale-95">
                App Store
              </span>
            </a>

            {/* Web Card / Dashboard */}
            <div
              className="group relative flex flex-col items-center rounded-3xl border border-neutral-200 bg-neutral-50 p-10 overflow-hidden transition-all"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-neutral-400 shadow-sm border border-neutral-100">
                <Monitor size={40} />
              </div>
              <h2 className="mt-8 text-2xl font-bold text-neutral-400">Dasbor Web</h2>
              <p className="mt-2 text-neutral-400 text-center">Kelola semuanya dari browser Anda.</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-200 px-8 py-3 text-sm font-bold text-neutral-400 cursor-not-allowed">
                Web Access
              </span>
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
            <div className="border-b border-neutral-100 bg-neutral-50/50 px-8 py-6">
               <h3 className="text-xl font-bold text-neutral-900">App Information</h3>
            </div>
            <div className="grid gap-8 p-8 md:grid-cols-2">
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Rilis Saat Ini</h4>
                  <div className="mt-4 flex items-center gap-4">
                     <span className="text-3xl font-extrabold text-primary-600">{appVersion}</span>
                     <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-100">Stable</span>
                  </div>
                  <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                    Termasuk sinkronisasi real-time, dukungan multi-bisnis, dan notifikasi otomatis.
                  </p>
               </div>
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Persyaratan Sistem</h4>
                  <ul className="mt-4 space-y-3">
                    {minRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                        <div className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                           <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                        </div>
                        {req}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
