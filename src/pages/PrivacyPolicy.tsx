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
          <p className="mx-auto mt-3 text-sm text-neutral-500">Effective Date: 5 March 2026</p>
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
                  <h2 id="intro-heading" className="text-2xl font-bold text-neutral-900 mb-3">Introduction</h2>
                  <p className="text-neutral-600">We, the operators of the {appName} application ("we" or "GiliranKu"), respect your privacy and are committed to protecting the personal data you provide. This Privacy Policy explains the types of data we collect, how we use it, your rights, and how to make requests related to your data.</p>
                </section>

                {/* <section id="data-controller" aria-labelledby="data-controller-heading" className="mb-8">
                  <h2 id="data-controller-heading" className="text-2xl font-bold text-neutral-900 mb-3">Data Controller and Contact</h2>
                  <p className="text-neutral-600">Data controller: <em>(not specified)</em></p>
                  <p className="text-neutral-600">Contact: <em>(not specified)</em></p>
                </section> */}

                <section id="types" aria-labelledby="types-heading" className="mb-8">
                  <h2 id="types-heading" className="text-2xl font-bold text-neutral-900 mb-3">Types of Data We Collect</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li>Identity data: name, username, profile photo.</li>
                    <li>Contact data: email address, phone number.</li>
                    <li>Account and profile data: information you add to your profile.</li>
                    <li>Usage data: application activity logs, features used, session duration.</li>
                    <li>Technical data: device type, model, OS, app version, device identifiers, aggregated IPs.</li>
                    <li>Location data: only if you grant location permission.</li>
                    <li>Payment data: processed by third-party providers; we do not store card details on our servers except via secure providers.</li>
                  </ul>
                </section>

                <section id="source" aria-labelledby="source-heading" className="mb-8">
                  <h2 id="source-heading" className="text-2xl font-bold text-neutral-900 mb-3">Source of Data</h2>
                  <p className="text-neutral-600">We collect data directly from you (during registration or feature use), automatically through app usage, and sometimes from third-party service providers acting on your behalf.</p>
                </section>

                <section id="purpose" aria-labelledby="purpose-heading" className="mb-8">
                  <h2 id="purpose-heading" className="text-2xl font-bold text-neutral-900 mb-3">Purpose and Legal Basis for Processing</h2>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2">
                    <li>Provide and operate the application services (performance of a contract).</li>
                    <li>Authentication, account verification, and account-related communications (performance of a contract / legitimate interests).</li>
                    <li>Delivery of service-related notifications (consent or legitimate interests).</li>
                    <li>Analytics and service improvement (legitimate interests).</li>
                    <li>Security enforcement, fraud prevention, and legal compliance (compliance with legal obligations / legitimate interests).</li>
                  </ul>
                </section>

                <section id="third-parties" aria-labelledby="third-parties-heading" className="mb-8">
                  <h2 id="third-parties-heading" className="text-2xl font-bold text-neutral-900 mb-3">Third Parties and Data Processors</h2>
                  <p className="text-neutral-600">We use third-party services. Key providers include:</p>
                  <ul className="list-disc list-inside text-neutral-600 ml-5">
                    <li>Firebase (Authentication, Firestore, FCM)</li>
                    <li>Cloudinary (media storage and transformations)</li>
                    <li>Analytics and infrastructure providers referenced in code/config</li>
                  </ul>
                </section>

                <section id="international" aria-labelledby="international-heading" className="mb-8">
                  <h2 id="international-heading" className="text-2xl font-bold text-neutral-900 mb-3">International Transfers</h2>
                  <p className="text-neutral-600">Your data may be stored and processed outside Indonesia (e.g., Google/Firebase servers). We take reasonable technical and organizational measures to protect data during transfers.</p>
                </section>

                <section id="retention" aria-labelledby="retention-heading" className="mb-8">
                  <h2 id="retention-heading" className="text-2xl font-bold text-neutral-900 mb-3">Data Retention</h2>
                  <p className="text-neutral-600">We retain user data as necessary to provide the service. Profile and account data are retained until you request deletion unless longer retention is required by law. Logs/analytics may be retained in aggregated/anonymized form.</p>
                </section>

                <section id="security" aria-labelledby="security-heading" className="mb-8">
                  <h2 id="security-heading" className="text-2xl font-bold text-neutral-900 mb-3">Data Security</h2>
                  <p className="text-neutral-600">We implement industry-standard measures (encryption in transit, access controls, internal policies). No system is risk-free; in case of an incident we will investigate and notify authorities and affected users as required.</p>
                </section>

                <section id="rights" aria-labelledby="rights-heading" className="mb-8">
                  <h2 id="rights-heading" className="text-2xl font-bold text-neutral-900 mb-3">Data Subject Rights</h2>
                  <p className="text-neutral-600">You have the right to access, correct, delete, restrict processing, object to processing, and request data portability. To submit a request, contact us at the provided email and include the registered email and request type. We may ask for identity verification.</p>
                </section>

                <section id="children" aria-labelledby="children-heading" className="mb-8">
                  <h2 id="children-heading" className="text-2xl font-bold text-neutral-900 mb-3">Children</h2>
                  <p className="text-neutral-600">The app is not directed to children under 13. If you believe we've collected a child's data without lawful consent, contact us to report and request removal.</p>
                </section>

                <section id="cookies" aria-labelledby="cookies-heading" className="mb-8">
                  <h2 id="cookies-heading" className="text-2xl font-bold text-neutral-900 mb-3">Cookies &amp; Similar Technologies</h2>
                  <p className="text-neutral-600">We and partners may use cookies, local storage, and similar technologies for technical functions, preferences, and analytics. On mobile this typically appears as local storage and device identifiers.</p>
                </section>

                <section id="profiling" aria-labelledby="profiling-heading" className="mb-8">
                  <h2 id="profiling-heading" className="text-2xl font-bold text-neutral-900 mb-3">Profiling and Automated Decisions</h2>
                  <p className="text-neutral-600">We may use automated analytics for service improvement (recommendations), but we do not use automated decision-making that has a significant legal effect on users.</p>
                </section>

                <section id="breach" aria-labelledby="breach-heading" className="mb-8">
                  <h2 id="breach-heading" className="text-2xl font-bold text-neutral-900 mb-3">Data Breach Handling</h2>
                  <p className="text-neutral-600">If a breach occurs that risks users' rights, we will investigate promptly and notify relevant authorities and affected users as required by law.</p>
                </section>

                <section id="changes" aria-labelledby="changes-heading">
                  <h2 id="changes-heading" className="text-2xl font-bold text-neutral-900 mb-3">Changes to this Policy</h2>
                  <p className="text-neutral-600">We may update this policy from time to time. Material changes will be communicated via the app or email; the latest version and effective date will be available in this document.</p>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
