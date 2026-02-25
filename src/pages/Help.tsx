import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { TableOfContents } from '@/components/ui/TableOfContents'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'

export function Help() {
  const [canonical, setCanonical] = useState('')
  const [ogImage, setOgImage] = useState('/og-image.png')

  useEffect(() => {
    const base = import.meta.env.VITE_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '')
    setCanonical(`${base}/help`)
    setOgImage(`${base}/og-image.png`)
  }, [])

  return (
    <>
      <Helmet>
        <title>Help & FAQ | {appName}</title>
        <meta name="description" content={`Help and frequently asked questions for ${appName}. Guides for Customers and Merchants.`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Help & FAQ | ${appName}`} />
        <meta property="og:description" content={`Help and FAQ for ${appName}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={`Help & FAQ | ${appName}`} />
        <meta name="twitter:description" content={`Help and FAQ for ${appName}.`} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <header className="bg-white px-4 pt-20 pb-8 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Help & Support — FAQ</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">Usage guides for Customers and Merchants / Admins.</p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
          <nav aria-label="Table of contents" className="order-2 md:order-1">
            <TableOfContents containerId="help-main" />
          </nav>

          <article aria-labelledby="help-main" className="order-1 md:order-2">
            <Section containerClassName="max-w-3xl" className="py-8 md:py-12">
              <div id="help-main">
                <section id="general" aria-labelledby="general-heading" className="mb-8">
                  <h2 id="general-heading" className="text-2xl font-bold text-neutral-900 mb-4">General Information</h2>
                  <p className="text-neutral-600">Application: {appName} — Version: {import.meta.env.VITE_APP_VERSION || '1.0.0'}</p>
                </section>

                <section id="customer" aria-labelledby="customer-heading" className="mb-8">
                  <h2 id="customer-heading" className="text-2xl font-bold text-neutral-900 mb-4">Customer Guide</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li><strong>Registration & Sign-in:</strong> choose "Register" to create a new account or "Login" if you already have an account. Select the Customer role during registration.</li>
                    <li><strong>Password reset:</strong> use the "Forgot password" option on the Login screen to receive reset instructions via email.</li>
                    <li><strong>Finding merchants:</strong> use the Home screen to browse nearby merchants; tap a merchant to view services and reviews.</li>
                    <li><strong>Booking a service:</strong> select a service on the Merchant Detail screen and confirm your booking to obtain a queue number.</li>
                    <li><strong>Viewing or cancelling queues:</strong> open My Queue to view your active queues and position. Cancel from the queue details if permitted by the merchant.</li>
                    <li><strong>History & notifications:</strong> view past bookings in History and manage notifications in the Notifications screen.</li>
                    <li><strong>Updating profile:</strong> edit your profile from the Profile or Account Settings screen.</li>
                    <li><strong>Closing an account:</strong> request account deletion from Account Settings — this action is permanent.</li>
                  </ul>
                </section>

                <section id="merchant" aria-labelledby="merchant-heading" className="mb-8">
                  <h2 id="merchant-heading" className="text-2xl font-bold text-neutral-900 mb-4">Merchant / Admin Guide</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li><strong>Registration & Sign-in:</strong> select the Merchant role during registration and provide your business information.</li>
                    <li><strong>Dashboard:</strong> access a summary of queues and shortcuts for queue management.</li>
                    <li><strong>Managing services:</strong> add, edit, or remove services from the Services section.</li>
                    <li><strong>Queue Console:</strong> use Next, Hold, or Complete controls to manage customers in the queue.</li>
                    <li><strong>Reports:</strong> review usage metrics and service performance in the Reports section.</li>
                  </ul>
                </section>

                <section id="technical" aria-labelledby="technical-heading" className="mb-8">
                  <h2 id="technical-heading" className="text-2xl font-bold text-neutral-900 mb-4">Technical Issues</h2>
                  <p className="text-neutral-600">Update the application to the latest version, restart the app, or reinstall if necessary. If the issue persists, attach screenshots and reproduction steps when contacting support.</p>
                </section>

                <section id="other" aria-labelledby="other-heading" className="mb-8">
                  <h2 id="other-heading" className="text-2xl font-bold text-neutral-900 mb-4">Other Questions</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li><strong>Feature requests:</strong> submit a brief description, use case, and benefits.</li>
                    <li><strong>Reporting abuse:</strong> use the Report feature on the Merchant Detail screen or provide full evidence to support when contacting support.</li>
                  </ul>
                </section>

                <section id="contact" aria-labelledby="contact-heading">
                  <h2 id="contact-heading" className="text-2xl font-bold text-neutral-900 mb-4">Support Contact</h2>
                  <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-4">
                    <p className="text-neutral-600 mb-4">If the guides above do not resolve your issue, please contact our support team including full information (role, display name, user/merchant ID, screenshots, and reproduction steps). You can reach support via the in-app Support section or the contact form on our website.</p>
                    <p className="italic text-neutral-400">Support contact is available through the app or website.</p>
                  </div>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
