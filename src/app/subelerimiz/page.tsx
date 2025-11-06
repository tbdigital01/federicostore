'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

const BranchesPage = () => {
  const branches = [
    {
      id: 1,
      name: 'Gazipaşa Şubesi',
      address: 'Gazipaşa Mahallesi, Atatürk Caddesi No:45, Adana',
      phone: '+90 (322) 123 45 67',
      hours: 'Hafta İçi: 08:00 - 23:00 | Hafta Sonu: 09:00 - 24:00',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
      mapUrl: 'https://maps.google.com',
      description: 'İlk şubemiz ve en büyük mekânımız. Geniş oturma alanı ve özel etkinlik salonu.',
      features: ['WiFi', 'Çalışma Alanı', 'Etkinlik Salonu', 'Outdoor'],
    },
    {
      id: 2,
      name: 'Temsa Konteyner',
      address: 'Temsa Fabrikası Yanı, Organize Sanayi Bölgesi, Adana',
      phone: '+90 (322) 234 56 78',
      hours: 'Hafta İçi: 07:00 - 19:00 | Hafta Sonu: Kapalı',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
      mapUrl: 'https://maps.google.com',
      description: 'Modern konteyner konseptiyle tasarlanmış, çalışanlar için ideal bir mola noktası.',
      features: ['WiFi', 'Hızlı Servis', 'Takeaway', 'Otopark'],
    },
    {
      id: 3,
      name: 'Vagoon - Mobil Şube',
      address: 'Festival ve etkinliklerde gezen mobil kahve aracımız',
      phone: '+90 (555) 123 45 67',
      hours: 'Etkinlik programına göre değişir',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
      mapUrl: '#',
      description: 'Festivaller, etkinlikler ve özel organizasyonlarda Federico deneyimini sizinle buluşturuyoruz.',
      features: ['Mobil', 'Etkinlik', 'Festival', 'Özel Organizasyon'],
      isMobile: true,
    },
    {
      id: 4,
      name: 'Gürselpaşa Şubesi',
      address: 'Gürselpaşa Mahallesi, İnönü Bulvarı No:128, Adana',
      phone: '+90 (322) 345 67 89',
      hours: 'Her Gün: 08:00 - 23:00',
      image: 'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=800',
      mapUrl: 'https://maps.google.com',
      description: 'Yeni açılan şubemiz. Modern tasarım ve geniş menü seçenekleriyle hizmetinizdeyiz.',
      features: ['WiFi', 'Çalışma Alanı', 'Outdoor', 'Kahvaltı'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920"
            alt="Federico Coffee Şubelerimiz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Şubelerimiz
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Size en yakın Federico'yu bulun ve kahve deneyimini yaşayın
          </p>
        </motion.div>
      </section>

      {/* Branches Grid */}
      <section className="section-padding bg-federico-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Branch Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {branch.isMobile && (
                    <div className="absolute top-4 right-4 bg-federico-orange text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Mobil Şube
                    </div>
                  )}
                </div>

                {/* Branch Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-federico-black mb-3">
                    {branch.name}
                  </h2>
                  <p className="text-federico-gray mb-6 leading-relaxed">
                    {branch.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {branch.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-federico-cream text-federico-gray px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-federico-orange flex-shrink-0 mt-1" size={20} />
                      <p className="text-federico-gray">{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-federico-orange flex-shrink-0" size={20} />
                      <a 
                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="text-federico-gray hover:text-federico-orange transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-federico-orange flex-shrink-0 mt-1" size={20} />
                      <p className="text-federico-gray">{branch.hours}</p>
                    </div>
                  </div>

                  {/* Map Button */}
                  {!branch.isMobile && (
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-federico-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                    >
                      <Navigation size={20} />
                      Yol Tarifi Al
                    </a>
                  )}
                  {branch.isMobile && (
                    <div className="inline-flex items-center gap-2 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                      Konum Değişken
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              Haritada Bul
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Tüm şubelerimizi haritada görüntüleyin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Google Maps iframe buraya eklenecek */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-federico-orange to-federico-black text-white">
              <div className="text-center p-8">
                <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl font-semibold">
                  Google Maps Entegrasyonu
                </p>
                <p className="text-sm mt-2 opacity-75">
                  Gerçek Google Maps embed kodu buraya eklenecek
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Yeni Şubeler Geliyor
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Federico Coffee ailesi büyümeye devam ediyor. Yakında yeni şubelerimizle 
                sizlere daha yakın olacağız. Haberleri kaçırmamak için bizi takip edin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/federicocoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Instagram'da Takip Et
                </a>
                <a
                  href="/franchise"
                  className="btn-outline border-white text-white hover:bg-white hover:text-federico-black"
                >
                  Franchise Başvurusu
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BranchesPage

