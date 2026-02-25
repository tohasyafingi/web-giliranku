declare module 'aos' {
  interface AOSStatic {
    init?: (options?: any) => void
    refresh?: () => void
  }

  const AOS: AOSStatic
  export default AOS
}
