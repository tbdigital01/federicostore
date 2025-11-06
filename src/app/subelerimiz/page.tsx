'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

const BranchesPage = () => {
  const branches = [
    {
      id: 1,
      name: 'Gazipaşa',
      address: 'Gazipaşa Mahallesi, Atatürk Caddesi No:45',
      phone: '+90 (322) 123 45 67',
      hours: 'Hafta İçi: 08:00 - 23:00',
    },
    {
      id: 2,
      name: 'Temsa Konteyner',
      address: 'Temsa Fabrikası Yanı, Organize Sanayi Bölgesi',
      phone: '+90 (322) 234 56 78',
      hours: 'Hafta İçi: 07:00 - 19:00',
    },
    {
      id: 3,
      name: 'Vagoon',
      address: 'Festival ve etkinliklerde mobil kahve aracımız',
      phone: '+90 (555) 123 45 67',
      hours: 'Etkinlik programına göre',
    },
    {
      id: 4,
      name: 'Gürselpaşa',
      address: 'Gürselpaşa Mahallesi, İnönü Bulvarı No:128',
      phone: '+90 (322) 345 67 89',
      hours: 'Her Gün: 08:00 - 23:00',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center bg-white pt-20">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8">
              Şubelerimiz
            </h1>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto leading-relaxed">
              Size en yakın Federico'yu bulun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branches List */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-8 hover:border-gray-200 transition-all duration-200"
              >
                <h2 className="text-2xl font-serif mb-6">{branch.name}</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-federico-gray flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-federico-gray">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-federico-gray flex-shrink-0" size={18} />
                    <a 
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="text-sm text-federico-gray hover:text-federico-black transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-federico-gray flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-federico-gray">{branch.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Haritada Görüntüle
            </h2>
          </div>

          <div className="w-full aspect-video bg-white border border-gray-100 flex items-center justify-center">
            <p className="text-sm text-federico-gray">Google Maps</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BranchesPage
