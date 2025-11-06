'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package, Truck } from 'lucide-react'

const OnlineSalesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8">
              Online Mağaza
            </h1>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Federico'nun özel kahveleri ve ürünleri artık online mağazamızda.
            </p>
            <a
              href="https://federicostore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-federico-orange text-white px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2"
            >
              Alışverişe Başla
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <Package size={24} className="text-federico-gray" />
              </div>
              <h3 className="text-lg font-serif mb-2">Güvenli Paketleme</h3>
              <p className="text-sm text-federico-gray">
                Tazeliği korumak için özel ambalajlama
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <Truck size={24} className="text-federico-gray" />
              </div>
              <h3 className="text-lg font-serif mb-2">Hızlı Kargo</h3>
              <p className="text-sm text-federico-gray">
                Ücretsiz kargo (150 TL üzeri)
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineSalesPage
