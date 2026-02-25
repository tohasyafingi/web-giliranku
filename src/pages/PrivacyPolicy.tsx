import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { TableOfContents } from '@/components/ui/TableOfContents'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'

export function PrivacyPolicy() {
  const [canonical, setCanonical] = useState('')
  const [ogImage, setOgImage] = useState('/og-image.png')

  useEffect(() => {
    const base = import.meta.env.VITE_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '')
    setCanonical(`${base}/privacy-policy`)
    setOgImage(`${base}/og-image.png`)
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {appName}</title>
        <meta name="description" content={`Privacy Policy for ${appName} — how we collect, use, store, and protect personal data.`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Privacy Policy | ${appName}`} />
        <meta property="og:description" content={`Privacy Policy for ${appName}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={`Privacy Policy | ${appName}`} />
        <meta name="twitter:description" content={`Privacy Policy for ${appName}.`} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <header className="bg-white px-4 pt-20 pb-8 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Privacy Policy — {appName}</h1>
          <p className="mx-auto mt-3 text-sm text-neutral-500">Effective Date: 25 February 2026</p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
          <nav aria-label="Table of contents" className="order-2 md:order-1">
            <TableOfContents containerId="policy-content" />
          </nav>

          <article className="order-1 md:order-2">
            <Section containerClassName="max-w-3xl" className="py-8 md:py-12">
              <div id="policy-content">
                <section id="introduction" aria-labelledby="intro-heading" className="mb-8">
                  <h2 id="intro-heading" className="text-2xl font-bold text-neutral-900 mb-3">1. Introduction</h2>
                  <p className="text-neutral-600">We (the developers of the {appName} application) respect your privacy. This policy explains how we collect, use, store, and protect your personal data.</p>
                </section>

                <section id="data-collected" aria-labelledby="data-heading" className="mb-8">
                  <h2 id="data-heading" className="text-2xl font-bold text-neutral-900 mb-3">2. Data We Collect</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li><strong>Information you provide:</strong> name, email address, phone number, profile photo, and other profile details supplied during registration.</li>
                    <li><strong>Usage data:</strong> activity logs, features used, and session duration.</li>
                    <li><strong>Technical data:</strong> device type, operating system, application version, device identifiers, and aggregated IP addresses.</li>
                    <li><strong>Location data:</strong> only if you grant location permission for certain features.</li>
                    <li><strong>Payment data:</strong> processed by third-party providers; we do not store card details directly except through secure providers.</li>
                  </ul>
                </section>

                <section id="purpose" aria-labelledby="purpose-heading" className="mb-8">
                  <h2 id="purpose-heading" className="text-2xl font-bold text-neutral-900 mb-3">3. Purpose of Processing</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li>To provide and operate the Application services.</li>
                    <li>Account authentication and account-related communications.</li>
                    <li>To deliver important service-related notifications.</li>
                    <li>Analytics for service improvement and personalization.</li>
                    <li>Customer support and issue resolution.</li>
                  </ul>
                </section>

                <section id="legal-basis" aria-labelledby="legal-heading" className="mb-8">
                  <h2 id="legal-heading" className="text-2xl font-bold text-neutral-900 mb-3">4. Legal Basis for Processing</h2>
                  <p className="text-neutral-600">Processing is based on your consent, performance of a contract, compliance with legal obligations, or our legitimate interests (e.g., fraud prevention).</p>
                </section>

                <section id="sharing" aria-labelledby="sharing-heading" className="mb-8">
                  <h2 id="sharing-heading" className="text-2xl font-bold text-neutral-900 mb-3">5. Data Sharing</h2>
                  <p className="text-neutral-600">We may share data with service providers (hosting, analytics, payment, notifications), authorities when required, or in connection with business transactions (e.g., acquisitions). We do not sell personal data to third parties for monetization.</p>
                </section>

                <section id="security" aria-labelledby="security-heading" className="mb-8">
                  <h2 id="security-heading" className="text-2xl font-bold text-neutral-900 mb-3">6. Security and Retention</h2>
                  <p className="text-neutral-600">We implement industry-standard technical and organizational measures to protect data. Data is retained only as necessary for the purposes described or to satisfy legal obligations.</p>
                </section>

                <section id="rights" aria-labelledby="rights-heading" className="mb-8">
                  <h2 id="rights-heading" className="text-2xl font-bold text-neutral-900 mb-3">7. Your Rights</h2>
                  <p className="text-neutral-600">You have the right to request access, correction, deletion, restriction of processing, to object to processing for direct marketing, and data portability in accordance with applicable law. For requests, please contact the address below.</p>
                </section>

                <section id="children" aria-labelledby="children-heading" className="mb-8">
                  <h2 id="children-heading" className="text-2xl font-bold text-neutral-900 mb-3">8. Children</h2>
                  <p className="text-neutral-600">The Application is not directed to children under 13. If you believe we have collected a child's data without parental consent, please contact us to request removal.</p>
                </section>

                <section id="cookies" aria-labelledby="cookies-heading" className="mb-8">
                  <h2 id="cookies-heading" className="text-2xl font-bold text-neutral-900 mb-3">9. Cookies & Similar Technologies</h2>
                  <p className="text-neutral-600">We and our partners may use cookies, local storage, and similar technologies for technical functions and analytics.</p>
                </section>

                <section id="third-party" aria-labelledby="third-party-heading" className="mb-8">
                  <h2 id="third-party-heading" className="text-2xl font-bold text-neutral-900 mb-3">10. Third-Party Integrations</h2>
                  <p className="text-neutral-600">Integrations such as Google Maps, Firebase, or storage/media services are subject to the privacy policies of those providers.</p>
                </section>

                <section id="changes" aria-labelledby="changes-heading" className="mb-8">
                  <h2 id="changes-heading" className="text-2xl font-bold text-neutral-900 mb-3">11. Changes to This Policy</h2>
                  <p className="text-neutral-600">Changes will be published here; material changes will be communicated via the Application or email.</p>
                </section>

                <section id="contact" aria-labelledby="contact-heading">
                  <h2 id="contact-heading" className="text-2xl font-bold text-neutral-900 mb-3">12. Contact</h2>
                  <p className="text-neutral-600">If you have questions or requests regarding personal data, please contact our support team via the in-app Support section or the contact form on our website.</p>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
