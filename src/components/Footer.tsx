import Link from 'next/link'
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
    <footer className="bg-federico-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marka */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4">Federico</h3>
            <p className="text-gray-400 leading-relaxed">
              Kahvenin ötesinde, sıradanın dışında. Federico ile her yudum bir deneyim.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-federico-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-federico-gray p-3 rounded-full hover:bg-federico-orange transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Federico Coffee. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

