import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/components/ui/CTA'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { featuresData } from '@/data/features'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'
const tagline = import.meta.env.VITE_APP_TAGLINE || 'Sistem Antrian & Pemesanan Real-Time'

export function Home() {
  return (
    <>
      <Helmet>
        <title>{appName} - {tagline}</title>
        <meta name="description" content="Kelola antrean dan pemesanan secara real-time tanpa ribet. Pesan layanan, lacak posisi, dan dapatkan notifikasi saat giliran tiba." />
        <meta property="og:title" content={`${appName} - ${tagline}`} />
        <meta property="og:description" content="Kelola antrean dan pemesanan secara real-time tanpa ribet. Pesan layanan, lacak posisi, dan dapatkan notifikasi saat giliran tiba." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: appName,
            description: tagline,
            applicationCategory: 'BusinessApplication',
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-4 pt-24 pb-32 sm:px-6 sm:pt-32 sm:pb-40 lg:px-8">
        {/* Decorative Grid */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm transition-all hover:bg-primary-100">
            <span>✨ Sekarang Beta: Pembaruan Antrian Real-Time</span>
          </div>
          
            <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl animate-fade-in-up leading-[1.1]">
            Kelola Antrian & Pemesanan <br className="hidden sm:block" />
            <span className="text-primary-600">secara Real-Time, Tanpa Ribet.</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-neutral-500 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Cara terbaik bagi bisnis dan pelanggan untuk mengelola reservasi layanan. 
            Lacak giliran Anda dan terima notifikasi—semua dari browser.
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CTA variant="primary">Mulai Sekarang</CTA>
            <Link
              to="/features"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold text-neutral-600 transition-all border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.97]"
            >
              Pelajari cara kerja
            </Link>
          </div>
        </div>
      </section>

      {/* Brief description */}
      <Section
        title="Kenapa GiliranKu?"
        subtitle="Solusi sederhana namun kuat bagi bisnis dan pelanggan untuk mengelola antrean dan reservasi."
      >
        <p className="mx-auto max-w-2xl text-center text-gray-600">
          Baik Anda menjalankan klinik, salon, restoran, atau usaha layanan lainnya, GiliranKu membantu mengurangi waktu tunggu, meningkatkan pengalaman pelanggan, dan menjaga operasi tetap lancar. Pelanggan dapat memesan lebih awal dan melacak posisi antrean secara real-time.
        </p>
      </Section>

      {/* Key features */}
      <Section
        id="features"
        title="Fitur Utama"
        subtitle="Semua yang Anda butuhkan untuk mengelola antrean dan pemesanan."
        className="bg-gray-50"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.slice(0, 5).map((feature, i) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'forwards' } as React.CSSProperties}
            />
          ))}
          {/* 6th card placeholder to fill grid or use 5 - layout is 3 cols so 5 is fine, 2 rows */}
        </div>
          <div className="mt-12 text-center">
          <Link
            to="/features"
            className="text-primary-600 font-semibold hover:underline"
          >
            Lihat semua fitur →
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        title="Siap Tingkatkan Layanan Anda?" 
        subtitle="Bergabunglah dengan ratusan bisnis yang menggunakan GiliranKu untuk mengelola operasi harian dan pengalaman pelanggan."
        className="bg-neutral-900 border-y border-neutral-800"
        titleClassName="text-white"
        subtitleClassName="text-neutral-400"
      >
        <div className="flex justify-center">
          <CTA variant="secondary" showIcon={true}>
            Unduh GiliranKu
          </CTA>
        </div>
      </Section>
    </>
  )
}
