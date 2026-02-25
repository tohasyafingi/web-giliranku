import { Helmet } from 'react-helmet-async'
import { Section } from '@/components/ui/Section'
import { Mail, MapPin } from 'lucide-react'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'
  const tagline = import.meta.env.VITE_APP_TAGLINE || 'Real-Time Queue & Booking System'
const companyName = import.meta.env.VITE_COMPANY_NAME || appName
const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || ''
const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || ''

export function About() {
  return (
    <>
      <Helmet>
        <title>About | {appName}</title>
        <meta name="description" content={`About ${appName} and ${companyName}. Vision, mission, and contact information.`} />
        <meta property="og:title" content={`Tentang | ${appName}`} />
        <meta property="og:description" content={`Tentang ${appName} dan ${companyName}.`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-white px-4 pt-24 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Our Mission <br className="hidden sm:block" />
            <span className="text-primary-600">Ending the Wait.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            {tagline}. Save time and reduce stress by digitizing every queue.
          </p>
        </div>
      </section>

      <Section title="Who We Are" containerClassName="max-w-4xl">
        <div className="relative rounded-3xl bg-neutral-50 p-8 sm:p-12 border border-neutral-100 overflow-hidden">
          <div className="absolute top-0 left-0 -ml-12 -mt-12 h-40 w-40 rounded-full bg-primary-100/30 blur-3xl" />
          <div className="relative text-center">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              <strong>{companyName}</strong> is the team behind {appName}.
              We help businesses and customers save time by digitizing queues and bookings.
              Our aim is simple: to ensure everyone knows when their turn is so they can plan their day better.
            </p>
          </div>
        </div>
      </Section>

      <Section 
        title="Our Core Values" 
        className="bg-neutral-900" 
        titleClassName="text-white"
        containerClassName="max-w-4xl"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="group rounded-2xl border border-neutral-800 bg-neutral-800/50 p-8 transition-all hover:bg-neutral-800">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Vision</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Making waiting for and booking services simple, transparent, and fair for everyone—both businesses and customers.
            </p>
          </div>
          <div className="group rounded-2xl border border-neutral-800 bg-neutral-800/50 p-8 transition-all hover:bg-neutral-800">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Mission</h3>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              We build tools that provide real-time visibility into queues and bookings so businesses can operate efficiently and customers can make better use of their time.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Contact Us" subtitle="Have questions or feedback? We'd love to hear from you." containerClassName="max-w-3xl">
        <div className="grid gap-8 sm:grid-cols-2 text-center">
          {companyAddress && (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                 <MapPin size={22} />
              </div>
              <h4 className="font-bold text-neutral-900">Visit Us</h4>
              <p className="mt-2 text-neutral-500 text-sm leading-relaxed">{companyAddress}</p>
            </div>
          )}
          {supportEmail ? (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                 <Mail size={22} />
              </div>
              <h4 className="font-bold text-neutral-900">Email Us</h4>
              <a href={`mailto:${supportEmail}`} className="mt-2 text-primary-600 text-sm font-semibold hover:underline">
                {supportEmail}
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-white shadow-soft">
               <p className="text-neutral-400 text-xs italic">Support email is not configured</p>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
