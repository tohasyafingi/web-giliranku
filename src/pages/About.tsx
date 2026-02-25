import { Helmet } from 'react-helmet-async'
import { Section } from '@/components/ui/Section'
import { Mail, MapPin } from 'lucide-react'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'
  const tagline = import.meta.env.VITE_APP_TAGLINE || 'Sistem Antrian & Pemesanan Real-Time'
const companyName = import.meta.env.VITE_COMPANY_NAME || appName
const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || ''
const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || ''

export function About() {
  return (
    <>
      <Helmet>
        <title>Tentang | {appName}</title>
        <meta name="description" content={`Tentang ${appName} dan ${companyName}. Visi, misi, dan kontak.`} />
        <meta property="og:title" content={`Tentang | ${appName}`} />
        <meta property="og:description" content={`Tentang ${appName} dan ${companyName}.`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-white px-4 pt-24 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Misi Kami <br className="hidden sm:block" />
            <span className="text-primary-600">Mengakhiri Penantian.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            {tagline}. Menghemat waktu Anda dan mengurangi stres dengan mendigitalkan setiap antrean.
          </p>
        </div>
      </section>

      <Section title="Who We Are" containerClassName="max-w-4xl">
        <div className="relative rounded-3xl bg-neutral-50 p-8 sm:p-12 border border-neutral-100 overflow-hidden">
          <div className="absolute top-0 left-0 -ml-12 -mt-12 h-40 w-40 rounded-full bg-primary-100/30 blur-3xl" />
          <div className="relative text-center">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              <strong>{companyName}</strong> adalah tim di balik {appName}.
              Kami membantu bisnis dan pelanggan menghemat waktu dengan mendigitalkan antrean dan pemesanan.
              Tujuan kami sederhana: memastikan setiap orang tahu kapan giliran mereka, sehingga dapat merencanakan hari dengan lebih baik.
            </p>
          </div>
        </div>
      </Section>

      <Section 
        title="Nilai Inti Kami" 
        className="bg-neutral-900" 
        titleClassName="text-white"
        containerClassName="max-w-4xl"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="group rounded-2xl border border-neutral-800 bg-neutral-800/50 p-8 transition-all hover:bg-neutral-800">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Visi</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Membuat menunggu dan memesan layanan menjadi sederhana, transparan, dan adil bagi semua—baik bisnis maupun pelanggan.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-800 bg-neutral-800/50 p-8 transition-all hover:bg-neutral-800">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Misi</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Kami membangun alat yang memberikan visibilitas real-time terhadap antrean dan pemesanan, agar bisnis dapat beroperasi efisien dan pelanggan dapat memanfaatkan waktu mereka lebih baik.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Hubungi Kami" subtitle="Ada pertanyaan atau saran? Kami ingin mendengarnya." containerClassName="max-w-3xl">
        <div className="grid gap-8 sm:grid-cols-2 text-center">
          {companyAddress && (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                 <MapPin size={22} />
              </div>
              <h4 className="font-bold text-neutral-900">Kunjungi Kami</h4>
              <p className="mt-2 text-neutral-500 text-sm leading-relaxed">{companyAddress}</p>
            </div>
          )}
          {supportEmail ? (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                 <Mail size={22} />
              </div>
              <h4 className="font-bold text-neutral-900">Email Kami</h4>
              <a href={`mailto:${supportEmail}`} className="mt-2 text-primary-600 text-sm font-semibold hover:underline">
                {supportEmail}
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
               <p className="text-neutral-400 text-xs italic">Email dukungan belum dikonfigurasi</p>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
