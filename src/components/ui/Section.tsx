import { type ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  titleClassName = '',
  subtitleClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-20 lg:py-28 overflow-hidden ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16 space-y-4">
            {title && (
              <h2 className={`text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mx-auto max-w-2xl text-base sm:text-lg text-neutral-500 leading-relaxed ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  )
}
