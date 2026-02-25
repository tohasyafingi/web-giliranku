/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_TAGLINE: string
  readonly VITE_ANDROID_DOWNLOAD_URL: string
  readonly VITE_IOS_DOWNLOAD_URL: string
  readonly VITE_APP_VERSION: string
  readonly VITE_SUPPORT_EMAIL: string
  readonly VITE_COMPANY_NAME: string
  readonly VITE_COMPANY_YEAR: string
  readonly VITE_COMPANY_ADDRESS: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_TWITTER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
