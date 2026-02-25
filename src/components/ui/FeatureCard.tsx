import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  style?: React.CSSProperties
}

export function FeatureCard({ title, description, icon: Icon, className = '', style }: FeatureCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft-lg ${className}`}
      style={style}
    >
      <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-primary-50/50 transition-transform group-hover:scale-150" />
      
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900 shadow-sm border border-neutral-100 transition-colors group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
          <Icon size={24} />
        </div>
        <h3 className="mt-6 text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-neutral-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
