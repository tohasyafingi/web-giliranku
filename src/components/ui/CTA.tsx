import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

interface CTAProps {
  to?: string
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  showIcon?: boolean
}

export function CTA({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  showIcon = true,
}: CTAProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold w-full sm:inline-flex sm:w-auto transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-[0.97]'
  const variants = {
    primary: 'bg-neutral-900 text-white shadow-soft hover:bg-neutral-800 hover:shadow-soft-lg',
    secondary: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    outline: 'border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {showIcon && <Download size={18} />}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to ?? '/download'} className={classes}>
      {content}
    </Link>
  )
}
