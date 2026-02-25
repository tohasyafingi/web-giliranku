import { Helmet } from 'react-helmet-async'
import { Section } from '@/components/ui/Section'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { featuresData } from '@/data/features'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'

export function Features() {
  return (
    <>
      <Helmet>
        <title>Fitur | {appName}</title>
        <meta name="description" content="Jelajahi fitur GiliranKu: pemesanan, pelacakan antrean real-time, notifikasi, dasbor admin, dan analitik." />
        <meta property="og:title" content={`Fitur | ${appName}`} />
        <meta property="og:description" content="Jelajahi fitur GiliranKu: pemesanan, pelacakan antrean, notifikasi, dasbor admin, dan analitik." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-white px-4 pt-24 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Semua yang Anda Butuhkan <br className="hidden sm:block" />
            <span className="text-primary-600">untuk Mengelola Secara Profesional.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            GiliranKu menyediakan rangkaian alat lengkap untuk menyederhanakan operasi dan meningkatkan pengalaman pengguna.
          </p>
        </div>
      </section>

      <Section containerClassName="space-y-32 py-12">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.id}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 shadow-sm border border-primary-100">
                  <Icon size={28} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">{feature.title}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  {feature.longDescription ?? feature.description}
                </p>
                <div className="pt-2">
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Real-time updates', 'Secure data', 'Mobile ready', 'Easy setup'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                          {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-primary-100/30 rounded-3xl blur-2xl transition-all group-hover:bg-primary-100/50" />
                   <div className="relative">
                      <FeatureCard
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        className="!shadow-soft-lg border-neutral-100"
                      />
                   </div>
                </div>
              </div>
            </div>
          )
        })}
      </Section>
    </>
  )
}
