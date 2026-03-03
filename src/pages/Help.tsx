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
                  <h2 id="general-heading" className="text-2xl font-bold text-neutral-900 mb-3">General Information</h2>
                  <ul className="list-disc list-inside text-neutral-600">
                    <li>App: {appName}</li>
                    <li>Version: {import.meta.env.VITE_APP_VERSION || '1.0.2'}</li>
                  </ul>
                </section>

                <section id="creating-account" aria-labelledby="creating-account-heading" className="mb-8">
                  <h2 id="creating-account-heading" className="text-2xl font-bold text-neutral-900 mb-3">Creating an Account</h2>
                  <ol className="list-decimal list-inside text-neutral-600 space-y-2">
                    <li>Open the Login screen and tap "Register" to create a new account.</li>
                    <li>Enter your full name, a valid email address, and a password. Ensure you can access the email for verification.</li>
                    <li>The app generates a username automatically.</li>
                    <li>Registration creates a Customer account. Merchants should use the "Open Merchant" flow after signing in.</li>
                  </ol>
                </section>

                <section id="email-verification" aria-labelledby="email-verification-heading" className="mb-8">
                  <h2 id="email-verification-heading" className="text-2xl font-bold text-neutral-900 mb-3">Email Verification (Required)</h2>
                  <p className="text-neutral-600">After registration we send a verification email. You must verify your email before using most features.</p>
                  <p className="text-neutral-600">If you do not receive the email, open Login and attempt sign-in — the app will show your email as unverified and offer a resend option. Resending requires your password for security. Check Spam/Promotions if the link appears missing or expired.</p>
                </section>

                <section id="sign-in" aria-labelledby="sign-in-heading" className="mb-8">
                  <h2 id="sign-in-heading" className="text-2xl font-bold text-neutral-900 mb-3">Sign In</h2>
                  <p className="text-neutral-600">Sign in using your email or username and password. If your email isn't verified, sign-in will be blocked. Use "Forgot Password" to receive reset instructions via email.</p>
                </section>

                <section id="forgot-password" aria-labelledby="forgot-password-heading" className="mb-8">
                  <h2 id="forgot-password-heading" className="text-2xl font-bold text-neutral-900 mb-3">Forgot Password</h2>
                  <p className="text-neutral-600">From Login choose "Forgot Password", enter your registered email, and follow the email instructions. If you do not receive the reset email, check your Spam folder and ensure the email entered is correct.</p>
                </section>

                <section id="becoming-merchant" aria-labelledby="becoming-merchant-heading" className="mb-8">
                  <h2 id="becoming-merchant-heading" className="text-2xl font-bold text-neutral-900 mb-3">Becoming a Merchant (Account Promotion)</h2>
                  <p className="text-neutral-600">Flow: register and sign in as a Customer first. From Profile choose "Open Merchant" and complete business details (name, address, opening hours, services). The app creates a business document and updates your profile locally. Additional verification or activation may be required by admins.</p>
                </section>

                <section id="managing-queues" aria-labelledby="managing-queues-heading" className="mb-8">
                  <h2 id="managing-queues-heading" className="text-2xl font-bold text-neutral-900 mb-3">Managing Queues (for Merchant/Admin)</h2>
                  <p className="text-neutral-600">Open the Dashboard or Queue Console to view customer queues, numbers, and statuses. Use Next, Hold, or Complete controls to update customer statuses. Manage services via the Services page — add or edit duration, capacity, and pricing as needed.</p>
                </section>

                <section id="delete-account" aria-labelledby="delete-account-heading" className="mb-8">
                  <h2 id="delete-account-heading" className="text-2xl font-bold text-neutral-900 mb-3">Delete Account (Permanent)</h2>
                  <p className="text-neutral-600">Location: Profile → Account → Delete Account. You will be prompted to re-authenticate (email and password) to confirm identity. The app attempts to remove your user record and delete your account from the authentication service.</p>
                  <p className="text-neutral-600">Limitations: some server-side data (files in remote storage, admin-owned entities, or data created by others referencing yours) may not be removable by the client. For additional removal requests, contact support with account details and items to remove. This action is permanent.</p>
                </section>

                <section id="technical" aria-labelledby="technical-heading">
                  <h2 id="technical-heading" className="text-2xl font-bold text-neutral-900 mb-3">Technical Issues &amp; Support</h2>
                  <p className="text-neutral-600">Start with basic troubleshooting: update the app, fully close it, then reopen. If the issue persists, try reinstalling.</p>
                  <p className="text-neutral-600">Collect helpful information: reproduction steps, affected screen/feature, error messages, and screenshots. Use the in-app contact feature or support channels listed in the app to reach support.</p>
                </section>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  )
}
