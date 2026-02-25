import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { TableOfContents } from '@/components/ui/TableOfContents'

const appName = import.meta.env.VITE_APP_NAME || 'GiliranKu'

export function TermsOfService() {
  const [canonical, setCanonical] = useState('')
  const [ogImage, setOgImage] = useState('/og-image.png')

  useEffect(() => {
    const base = import.meta.env.VITE_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '')
    setCanonical(`${base}/terms-of-service`)
    setOgImage(`${base}/og-image.png`)
  }, [])

  return (
    <>
      <Helmet>
        <title>Terms of Service | {appName}</title>
        <meta name="description" content={`Terms of Service for ${appName} — user obligations, limitations, and terms of use.`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Terms of Service | ${appName}`} />
        <meta property="og:description" content={`Terms of Service for ${appName}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={`Terms of Service | ${appName}`} />
        <meta name="twitter:description" content={`Terms of Service for ${appName}.`} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <header className="bg-white px-4 pt-20 pb-8 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Terms of Service — GiliranKu</h1>
          <p className="mx-auto mt-3 text-sm text-neutral-500">Effective Date: 25 February 2026</p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
          <nav aria-label="Table of contents" className="order-2 md:order-1">
            <TableOfContents containerId="terms-content" />
          </nav>

          <article className="order-1 md:order-2">
            <Section containerClassName="max-w-3xl" className="py-8 md:py-12">
              <div id="terms-content">
                <section id="acceptance" aria-labelledby="acceptance-heading" className="mb-8">
                  <h2 id="acceptance-heading" className="text-2xl font-bold text-neutral-900 mb-3">1. Acceptance of Terms</h2>
                  <p className="text-neutral-600">By using the GiliranKu App you agree to these Terms of Service. If you do not agree, please do not use the App.</p>
                </section>

                <section id="definitions" aria-labelledby="definitions-heading" className="mb-8">
                  <h2 id="definitions-heading" className="text-2xl font-bold text-neutral-900 mb-3">2. Definitions</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li><strong>"App":</strong> GiliranKu and related services.</li>
                    <li><strong>"User":</strong> an individual or entity using the App.</li>
                  </ul>
                </section>

                <section id="services" aria-labelledby="services-heading" className="mb-8">
                  <h2 id="services-heading" className="text-2xl font-bold text-neutral-900 mb-3">3. Services</h2>
                  <p className="text-neutral-600">The App provides queue management, service booking, notifications, and other features described in the App.</p>
                </section>

                <section id="account" aria-labelledby="account-heading" className="mb-8">
                  <h2 id="account-heading" className="text-2xl font-bold text-neutral-900 mb-3">4. User Accounts</h2>
                  <p className="text-neutral-600">Some features require an account. You are responsible for keeping credentials confidential and for activity on your account.</p>
                </section>

                <section id="prohibitions" aria-labelledby="prohibitions-heading" className="mb-8">
                  <h2 id="prohibitions-heading" className="text-2xl font-bold text-neutral-900 mb-3">5. User Obligations and Prohibitions</h2>
                  <p className="text-neutral-600">Users must not use the App for illegal activities, distribute harmful content, attempt unauthorized access, or disrupt service operations.</p>
                </section>

                <section id="ip" aria-labelledby="ip-heading" className="mb-8">
                  <h2 id="ip-heading" className="text-2xl font-bold text-neutral-900 mb-3">6. Intellectual Property</h2>
                  <p className="text-neutral-600">All content, trademarks, and materials in the App are owned or licensed to the developer. Users are granted a limited, non-exclusive license to use the App under these Terms.</p>
                </section>

                <section id="payments" aria-labelledby="payments-heading" className="mb-8">
                  <h2 id="payments-heading" className="text-2xl font-bold text-neutral-900 mb-3">7. Payments and Refunds</h2>
                  <p className="text-neutral-600">If paid features exist, payment and refund terms will be provided at purchase and are subject to the payment provider's policies.</p>
                </section>

                <section id="liability" aria-labelledby="liability-heading" className="mb-8">
                  <h2 id="liability-heading" className="text-2xl font-bold text-neutral-900 mb-3">8. Limitation of Liability</h2>
                  <p className="text-neutral-600">To the extent permitted by law, the developer is not liable for indirect, incidental, or consequential damages arising from use of the App.</p>
                </section>

                <section id="indemnity" aria-labelledby="indemnity-heading" className="mb-8">
                  <h2 id="indemnity-heading" className="text-2xl font-bold text-neutral-900 mb-3">9. Indemnification</h2>
                  <p className="text-neutral-600">You agree to indemnify the developer against claims arising from your breach of these Terms or unlawful use of the App.</p>
                </section>

                <section id="termination" aria-labelledby="termination-heading" className="mb-8">
                  <h2 id="termination-heading" className="text-2xl font-bold text-neutral-900 mb-3">10. Termination</h2>
                  <p className="text-neutral-600">The developer may suspend or terminate access if you breach the Terms or for security/operational reasons. You may close your account following the App's procedures.</p>
                </section>

                <section id="changes" aria-labelledby="changes-heading" className="mb-8">
                  <h2 id="changes-heading" className="text-2xl font-bold text-neutral-900 mb-3">11. Changes to Services and Terms</h2>
                  <p className="text-neutral-600">The developer may change services or the Terms at any time. Changes will be published; continuing to use the App after changes means you accept them.</p>
                </section>

                <section id="law" aria-labelledby="law-heading" className="mb-8">
                  <h2 id="law-heading" className="text-2xl font-bold text-neutral-900 mb-3">12. Governing Law</h2>
                  <p className="text-neutral-600">These Terms are governed by the laws of the Republic of Indonesia. Disputes should be resolved through negotiation; if unsuccessful, they may be brought before the competent courts.</p>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
