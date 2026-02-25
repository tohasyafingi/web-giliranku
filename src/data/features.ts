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
    title: 'Pemesanan & Reservasi Layanan',
    description: 'Pesan layanan sebelum tiba dan hindari antrean.',
    longDescription:
      'Pengguna dapat menjelajah layanan tersedia, memilih slot waktu, dan mengonfirmasi reservasi langsung dari aplikasi. Kurangi ketidakhadiran dengan pengingat dan penjadwalan ulang yang mudah.',
    icon: CalendarCheck,
  },
  {
    id: 'queue-tracking',
    title: 'Pelacakan Antrian Real-Time',
    description: 'Lihat posisi antrean Anda secara real-time dari perangkat.',
    longDescription:
      'Lihat posisi Anda di antrean dan perkiraan waktu tunggu. Status antrean diperbarui otomatis sehingga Anda bisa merencanakan waktu dengan lebih baik.',
    icon: Radio,
  },
  {
    id: 'notifications',
    title: 'Notifikasi Saat Giliran Anda',
    description: 'Dapatkan pemberitahuan saat giliran Anda hampir tiba.',
    longDescription:
      'Jangan lewatkan giliran. Terima notifikasi saat nomor Anda dipanggil, sehingga Anda bisa kembali tepat waktu tanpa menunggu di lokasi.',
    icon: Bell,
  },
  {
    id: 'admin-dashboard',
    title: 'Dasbor Admin',
    description: 'Panggil nomor, kelola layanan, dan atur jam operasional.',
    longDescription:
      'Admin dapat memanggil nomor antrean, menambah atau mengedit layanan, mengatur jam buka, dan mengelola staf. Kontrol penuh atas alur antrean dan konfigurasi layanan.',
    icon: LayoutDashboard,
  },
  {
    id: 'analytics',
    title: 'Riwayat & Analitik',
    description: 'Lihat riwayat transaksi dan laporan sederhana.',
    longDescription:
      'Akses riwayat pemesanan dan antrean, lihat analitik dasar, dan ekspor laporan. Pahami jam sibuk dan tingkatkan layanan.',
    icon: BarChart3,
  },
]
