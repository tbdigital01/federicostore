import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Federico Coffee - Kahvenin Ötesinde',
  description: 'Federico, kahve tutkusunu yeni bir ritüele dönüştüren bir marka. Şubelerimizi keşfedin, franchise başvurusu yapın veya kariyer fırsatlarına göz atın.',
  keywords: 'federico coffee, kahve, cafe, franchise, kariyer, barista, özel kahve',
  openGraph: {
    title: 'Federico Coffee - Kahvenin Ötesinde',
    description: 'Kahvenin ötesinde, sıradanın dışında.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

