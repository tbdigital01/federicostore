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
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      features: ['WiFi', 'Çalışma Alanı', 'Etkinlik Salonu', 'Outdoor'],
    },
    {
      id: 2,
      name: 'Temsa Konteyner',
      address: 'Temsa Fabrikası Yanı, Organize Sanayi Bölgesi, Adana',
      phone: '+90 (322) 234 56 78',
      hours: 'Hafta İçi: 07:00 - 19:00',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
      features: ['WiFi', 'Hızlı Servis', 'Takeaway', 'Otopark'],
    },
    {
      id: 3,
      name: 'Vagoon - Mobil Şube',
      address: 'Festival ve etkinliklerde gezen mobil kahve aracımız',
      phone: '+90 (555) 123 45 67',
      hours: 'Etkinlik programına göre değişir',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      features: ['Mobil', 'Etkinlik', 'Festival', 'Özel Organizasyon'],
      isMobile: true,
    },
    {
      id: 4,
      name: 'Gürselpaşa Şubesi',
      address: 'Gürselpaşa Mahallesi, İnönü Bulvarı No:128, Adana',
      phone: '+90 (322) 345 67 89',
      hours: 'Her Gün: 08:00 - 23:00',
      image: 'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=800&q=80',
      features: ['WiFi', 'Çalışma Alanı', 'Outdoor', 'Kahvaltı'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80"
            alt="Federico Coffee Şubelerimiz"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">
              Şubelerimiz
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Size en yakın Federico'yu bulun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Branch Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {branch.isMobile && (
                    <div className="absolute top-4 right-4 bg-federico-orange text-white px-4 py-2 rounded-full font-medium text-sm">
                      Mobil Şube
                    </div>
                  )}
                </div>

                {/* Branch Info */}
                <div className="p-8">
                  <h2 className="text-2xl font-serif mb-4 text-federico-black">{branch.name}</h2>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {branch.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-federico-lightgray text-federico-gray px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-federico-orange flex-shrink-0 mt-1" size={18} />
                      <p className="text-sm text-federico-gray">{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-federico-orange flex-shrink-0" size={18} />
                      <a 
                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="text-sm text-federico-gray hover:text-federico-orange transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-federico-orange flex-shrink-0 mt-1" size={18} />
                      <p className="text-sm text-federico-gray">{branch.hours}</p>
                    </div>
                  </div>

                  {/* Map Button */}
                  {!branch.isMobile && (
                    <button className="bg-federico-black text-white px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2">
                      <Navigation size={18} />
                      Yol Tarifi Al
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-federico-black">
              Haritada Bul
            </h2>
            <p className="text-federico-gray">
              Tüm şubelerimizi haritada görüntüleyin
            </p>
          </div>

          <div className="w-full aspect-video bg-white border border-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-federico-orange mx-auto mb-4" />
              <p className="text-federico-gray">Google Maps Entegrasyonu</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BranchesPage
