'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram, Youtube, Music2, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/subelerimiz', label: 'Şubeler' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/kariyer', label: 'Kariyer' },
    { href: '/iletisim', label: 'İletişim' },
  ]

  const socialLinks = [
    { href: 'https://instagram.com/federicocoffee', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com/@federicocoffee', icon: Youtube, label: 'YouTube' },
    { href: 'https://tiktok.com/@federicocoffee', icon: Music2, label: 'TikTok' },
  ]

  return (
    <>
      {/* Top Bar with Marquee */}
      <div className={`fixed w-full top-0 z-50 bg-federico-black text-white transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10'}`}>
        <div className="h-full flex items-center justify-between px-6 lg:px-12">
          {/* Marquee */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-xs tracking-wider inline-block px-8">
                ✨ Yeni Gürselpaşa Şubemiz Açıldı
              </span>
              <span className="text-xs tracking-wider inline-block px-8">
                🌟 Özel Çekirdeklerimizi Keşfedin
              </span>
              <span className="text-xs tracking-wider inline-block px-8">
                ☕ Federico Life - Kahvenin Ötesinde Yaşam
              </span>
              <span className="text-xs tracking-wider inline-block px-8">
                ✨ Yeni Gürselpaşa Şubemiz Açıldı
              </span>
              <span className="text-xs tracking-wider inline-block px-8">
                🌟 Özel Çekirdeklerimizi Keşfedin
              </span>
            </div>
          </div>

          {/* Social Icons & Store Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-federico-orange transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={14} />
                </a>
              )
            })}
            <div className="w-px h-4 bg-white/20 mx-2" />
            <Link
              href="/online-satis"
              className="flex items-center space-x-1.5 text-xs tracking-wider hover:text-federico-orange transition-colors duration-200"
            >
              <ShoppingBag size={14} />
              <span>STORE</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm'
            : 'top-10 bg-white'
        }`}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-4' : 'py-6 lg:py-8'
          }`}>
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Federico Coffee"
                width={180}
                height={50}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-9' : 'h-11 lg:h-12'
                }`}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-federico-gray hover:text-federico-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/online-satis"
                className="flex items-center space-x-2 bg-federico-orange text-white px-6 py-2.5 text-sm tracking-wide hover:bg-opacity-90 transition-all duration-200 group"
              >
                <ShoppingBag size={16} className="group-hover:scale-110 transition-transform duration-200" />
                <span>FEDERICO STORE</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-federico-black relative z-10"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
              <div className="flex flex-col py-8 px-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm tracking-wide text-federico-gray hover:text-federico-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Store Button */}
                <Link
                  href="/online-satis"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-federico-orange text-white px-6 py-3.5 text-sm tracking-wide hover:bg-opacity-90 transition-all duration-200"
                >
                  <ShoppingBag size={18} />
                  <span>FEDERICO STORE</span>
                </Link>
                
                {/* Mobile Social */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-6">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-federico-gray hover:text-federico-orange transition-colors duration-200"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-32 lg:h-36'}`} />
    </>
  )
}

export default Navbar
