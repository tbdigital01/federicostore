'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

const BranchesPage = () => {
  const branches = [
    {
      id: 1,
      name: 'Gazipaşa Toros Caddesi',
      subtitle: 'İlk Şubemiz — 2021',
      address: 'Gazipaşa Mahallesi, Toros Caddesi, Adana',
      phone: '+90 (322) 123 45 67',
      hours: 'Hafta İçi: 08:00 - 23:00 | Hafta Sonu: 09:00 - 24:00',
      description: 'Modern şehir hayatının içinde sade, sıcak ve minimalist bir kaçış noktası. Federico\'nun ruhunu belirleyen ilk mağaza.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      features: ['WiFi', 'Çalışma Alanı', 'Outdoor', 'Kahvaltı'],
    },
    {
      id: 2,
      name: 'Temsa Fabrikası',
      subtitle: 'Konteyner Mağaza — 2024',
      address: 'Temsa Fabrikası İçi, Organize Sanayi Bölgesi, Adana',
      phone: '+90 (322) 234 56 78',
      hours: 'Hafta İçi: 07:00 - 19:00 | Cumartesi: 08:00 - 15:00',
      description: 'Endüstriyel bir alanda bile sıcak, minimalist bir atmosfer. Çalışanlara gün boyu enerji veren kahve durağı.',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
      features: ['WiFi', 'Hızlı Servis', 'Takeaway', 'Otopark'],
    },
    {
      id: 3,
      name: 'Vagoon',
      subtitle: 'Mobil Şube — 2022',
      address: 'Festival ve etkinliklerde gezen mobil kahve aracımız',
      phone: '+90 (555) 123 45 67',
      hours: 'Etkinlik programına göre değişir',
      description: 'Festival alanlarında ve açık hava etkinliklerinde kurulan gezici Federico. "İyi kahve her yerde mümkün" anlayışı.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      features: ['Mobil', 'Festival', 'Etkinlik', 'Açık Hava'],
      isMobile: true,
    },
    {
      id: 4,
      name: 'Yeni Şube',
      subtitle: 'Yakında',
      address: 'Adana',
      phone: 'Yakında',
      hours: 'Yakında Açılıyor',
      description: 'Federico\'nun genişleyen dünyası. Taze hazırlanmış atıştırmalıklar, günlük pastalar, salata ve bowl çeşitleri ile tam teşekküllü deneyim.',
      image: 'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=800&q=80',
      features: ['Bakery', 'Bowl & Salata', 'Kahvaltı', 'Full Menu'],
      isComingSoon: true,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80"
            alt="Federico Şubelerimiz"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-widest text-federico-orange mb-8">
              Şubelerimiz
            </p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white leading-none">
              Size En Yakın<br />Federico
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Branches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative h-[500px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover"
                    />
                    {(branch.isMobile || branch.isComingSoon) && (
                      <div className="absolute top-6 right-6 bg-federico-orange text-white px-6 py-3 uppercase tracking-wider text-xs font-medium">
                        {branch.isMobile ? 'Mobil' : 'Yakında'}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-xs uppercase tracking-widest text-federico-orange mb-4">
                      {branch.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-federico-black leading-tight">
                      {branch.name}
                    </h2>
                    <p className="text-lg text-federico-gray leading-relaxed mb-8">
                      {branch.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {branch.features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-gray-200 text-federico-gray px-4 py-2 text-xs uppercase tracking-wider"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Contact Info */}
                    {!branch.isComingSoon && (
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4">
                          <MapPin className="text-federico-orange flex-shrink-0 mt-1" size={20} />
                          <p className="text-sm text-federico-gray">{branch.address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Phone className="text-federico-orange flex-shrink-0" size={20} />
                          <p className="text-sm text-federico-gray">{branch.phone}</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Clock className="text-federico-orange flex-shrink-0 mt-1" size={20} />
                          <p className="text-sm text-federico-gray">{branch.hours}</p>
                        </div>
                      </div>
                    )}

                    {/* Button */}
                    {!branch.isMobile && !branch.isComingSoon && (
                      <button className="bg-federico-black text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3">
                        <Navigation size={18} />
                        Yol Tarifi
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapPin size={48} className="text-federico-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-federico-black">
              Haritada Görüntüle
            </h2>
            <p className="text-federico-gray mb-8">
              Tüm şubelerimizi haritada bulabilirsiniz
            </p>
            <button className="bg-federico-black text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300">
              Google Maps'te Aç
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BranchesPage
