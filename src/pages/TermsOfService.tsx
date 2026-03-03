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
          <p className="mx-auto mt-3 text-sm text-neutral-500">Effective Date: 5 March 2026</p>
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

                <section id="introduction" aria-labelledby="intro-heading" className="mb-8">
                  <h2 id="intro-heading" className="text-2xl font-bold text-neutral-900 mb-3">Introduction</h2>
                  <p className="text-neutral-600">Welcome to {appName}. These Terms of Service ("Terms") govern your access to and use of the {appName} mobile application and related services. By downloading, accessing or using the App, you agree to these Terms. If you do not agree, do not use the App.</p>
                </section>

                <section id="definitions" aria-labelledby="definitions-heading" className="mb-8">
                  <h2 id="definitions-heading" className="text-2xl font-bold text-neutral-900 mb-3">Definitions</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li>"User": an individual or entity that registers for or uses the App.</li>
                    <li>"Merchant": a business owner who uses admin features to manage queues or services.</li>
                    <li>"Services": features provided through the App including queue management, booking, push notifications, admin dashboards.</li>
                  </ul>
                </section>

                <section id="scope" aria-labelledby="scope-heading" className="mb-8">
                  <h2 id="scope-heading" className="text-2xl font-bold text-neutral-900 mb-3">Scope of Services</h2>
                  <p className="text-neutral-600">{appName} provides queue and booking management tools for merchants, push notifications for queue reminders, and administrative features. Features may change over time.</p>
                </section>

                <section id="eligibility" aria-labelledby="eligibility-heading" className="mb-8">
                  <h2 id="eligibility-heading" className="text-2xl font-bold text-neutral-900 mb-3">Eligibility</h2>
                  <p className="text-neutral-600">You must meet the minimum age required by law. If using the App on behalf of an entity, you represent you have authority to bind that entity to these Terms.</p>
                </section>

                <section id="accounts" aria-labelledby="accounts-heading" className="mb-8">
                  <h2 id="accounts-heading" className="text-2xl font-bold text-neutral-900 mb-3">Accounts and Security</h2>
                  <p className="text-neutral-600">Some features require an account. You are responsible for keeping credentials confidential and for activity under your account. Notify us promptly of unauthorized use.</p>
                </section>

                <section id="merchant-obligations" aria-labelledby="merchant-obligations-heading" className="mb-8">
                  <h2 id="merchant-obligations-heading" className="text-2xl font-bold text-neutral-900 mb-3">Merchant Obligations</h2>
                  <p className="text-neutral-600">Merchants are responsible for accuracy of business information, operating hours, services offered, and compliance with local laws related to business operations and customer data.</p>
                </section>

                <section id="user-content" aria-labelledby="user-content-heading" className="mb-8">
                  <h2 id="user-content-heading" className="text-2xl font-bold text-neutral-900 mb-3">User Content</h2>
                  <p className="text-neutral-600">You are responsible for content you upload or share (profile names, photos, business details). By submitting content you grant us a limited, non-exclusive, royalty-free license to use it to operate and improve the Services.</p>
                </section>

                <section id="prohibited" aria-labelledby="prohibited-heading" className="mb-8">
                  <h2 id="prohibited-heading" className="text-2xl font-bold text-neutral-900 mb-3">Prohibited Conduct</h2>
                  <p className="text-neutral-600">Do not use the App for unlawful activities, access another user's account without authorization, upload malware or offensive content, or interfere with the Services.</p>
                </section>

                <section id="payments" aria-labelledby="payments-heading" className="mb-8">
                  <h2 id="payments-heading" className="text-2xl font-bold text-neutral-900 mb-3">Payments and Paid Services</h2>
                  <p className="text-neutral-600">The App does not currently process payments directly. If paid features are offered, payments will be processed through third-party providers and terms will be presented at purchase.</p>
                </section>

                <section id="third-party" aria-labelledby="third-party-heading" className="mb-8">
                  <h2 id="third-party-heading" className="text-2xl font-bold text-neutral-900 mb-3">Third-Party Services</h2>
                  <p className="text-neutral-600">The App relies on third-party services (e.g., Firebase, Cloudinary). Your use of those services is subject to their terms and privacy policies.</p>
                </section>

                <section id="ip" aria-labelledby="ip-heading" className="mb-8">
                  <h2 id="ip-heading" className="text-2xl font-bold text-neutral-900 mb-3">Intellectual Property</h2>
                  <p className="text-neutral-600">All content, trademarks, logos and materials are owned by us or licensors. You receive a limited, non-transferable license to use the App in accordance with these Terms.</p>
                </section>

                <section id="disclaimer" aria-labelledby="disclaimer-heading" className="mb-8">
                  <h2 id="disclaimer-heading" className="text-2xl font-bold text-neutral-900 mb-3">Disclaimer of Warranties</h2>
                  <p className="text-neutral-600">The App is provided "as is" and "as available" without warranties. We do not guarantee uninterrupted or error-free operation.</p>
                </section>

                <section id="liability" aria-labelledby="liability-heading" className="mb-8">
                  <h2 id="liability-heading" className="text-2xl font-bold text-neutral-900 mb-3">Limitation of Liability</h2>
                  <p className="text-neutral-600">To the maximum extent permitted by law, we are not liable for indirect, incidental, consequential, or punitive damages arising from your use of the App.</p>
                </section>

                <section id="indemnification" aria-labelledby="indemnification-heading" className="mb-8">
                  <h2 id="indemnification-heading" className="text-2xl font-bold text-neutral-900 mb-3">Indemnification</h2>
                  <p className="text-neutral-600">You agree to indemnify and hold us harmless from claims, liabilities, damages and expenses arising from your breach of these Terms, your use of the App, or violation of third-party rights.</p>
                </section>

                <section id="suspension" aria-labelledby="suspension-heading" className="mb-8">
                  <h2 id="suspension-heading" className="text-2xl font-bold text-neutral-900 mb-3">Suspension and Termination</h2>
                  <p className="text-neutral-600">We may suspend or terminate access if you violate these Terms or to protect security/operations. You may close your account using in-app procedures where available.</p>
                </section>

                <section id="changes" aria-labelledby="changes-heading" className="mb-8">
                  <h2 id="changes-heading" className="text-2xl font-bold text-neutral-900 mb-3">Changes to the Terms</h2>
                  <p className="text-neutral-600">We may update these Terms. Material changes will be notified via the App or email; continued use after notice constitutes acceptance.</p>
                </section>

                <section id="additional" aria-labelledby="additional-heading">
                  <h2 id="additional-heading" className="text-2xl font-bold text-neutral-900 mb-3">Additional Terms</h2>
                  <p className="text-neutral-600">Privacy: our processing of personal data is governed by the Privacy Policy available at PRIVACY_POLICY.md. Governing law: these Terms are governed by the laws of the Republic of Indonesia. Dispute resolution: attempt negotiation; if unresolved, disputes may be submitted to competent Indonesian courts.</p>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
