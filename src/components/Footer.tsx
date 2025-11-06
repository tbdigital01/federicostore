import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Music2 } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/subelerimiz', label: 'Şubeler' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/kariyer', label: 'Kariyer' },
    { href: '/iletisim', label: 'İletişim' },
  ]

  const socialLinks = [
    { 
      href: 'https://instagram.com/federicocoffee', 
      icon: Instagram, 
      label: 'Instagram' 
    },
    { 
      href: 'https://youtube.com/@federicocoffee', 
      icon: Youtube, 
      label: 'YouTube' 
    },
    { 
      href: 'https://tiktok.com/@federicocoffee', 
      icon: Music2, 
      label: 'TikTok' 
    },
  ]

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Marka */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Federico Coffee"
                width={140}
                height={40}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-federico-gray leading-relaxed max-w-xs">
              Kahvenin ötesinde, sıradanın dışında.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-federico-gray mb-4">Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-federico-gray hover:text-federico-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-federico-gray mb-4">Takip Edin</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-federico-gray hover:text-federico-black transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-federico-gray">© 2025 Federico Coffee. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
