import {
  CalendarCheck,
  Radio,
  Bell,
  LayoutDashboard,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface FeatureItem {
  id: string
  title: string
  description: string
  longDescription?: string
  icon: LucideIcon
}

export const featuresData: FeatureItem[] = [
  {
    id: 'booking',
    title: 'Service Booking & Reservations',
    description: 'Book services before arrival and avoid queues.',
    longDescription:
      'Users can browse available services, select a time slot, and confirm reservations directly from the app. Reduce no-shows with reminders and easy rescheduling.',
    icon: CalendarCheck,
  },
  {
    id: 'queue-tracking',
    title: 'Real-Time Queue Tracking',
    description: 'See your queue position in real time from your device.',
    longDescription:
      'View your place in line and estimated wait time. Queue status updates automatically so you can plan your time better.',
    icon: Radio,
  },
  {
    id: 'notifications',
    title: 'Turn Notifications',
    description: 'Receive alerts when your turn is about to arrive.',
    longDescription:
      'Never miss your turn. Get notified when your number is called so you can return promptly without waiting on-site.',
    icon: Bell,
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Call numbers, manage services, and set operating hours.',
    longDescription:
      'Admins can call queue numbers, add or edit services, set opening hours, and manage staff. Full control over queue flow and service configuration.',
    icon: LayoutDashboard,
  },
  {
    id: 'analytics',
    title: 'History & Analytics',
    description: 'View transaction history and simple reports.',
    longDescription:
      'Access booking and queue history, view basic analytics, and export reports. Understand peak times and improve service.',
    icon: BarChart3,
  },
]
