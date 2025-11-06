'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, Package, Truck, Gift, Coffee, Heart } from 'lucide-react'

const OnlineSalesPage = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Özel Kahveler',
      description: 'Dünyadan seçilmiş, taze kavrulmuş kahve çekirdekleri',
    },
    {
      icon: Package,
      title: 'Güvenli Paketleme',
      description: 'Tazeliği korumak için özel ambalajlama',
    },
    {
      icon: Truck,
      title: 'Hızlı Kargo',
      description: 'Türkiye geneline ücretsiz kargo (150 TL üzeri)',
    },
    {
      icon: Gift,
      title: 'Hediye Paketleme',
      description: 'Sevdikleriniz için özel hediye seçenekleri',
    },
  ]

  const products = [
    {
      category: 'Kahve Çekirdekleri',
      description: 'Single origin ve blend seçenekleri',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600',
    },
    {
      category: 'Kahve Ekipmanları',
      description: 'Profesyonel barista ekipmanları',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600',
    },
    {
      category: 'Aksesuarlar',
      description: 'Federico markalı bardak ve aksesuarlar',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
    },
    {
      category: 'Hediye Setleri',
      description: 'Özel tasarım hediye paketleri',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=1920"
            alt="Federico Coffee Online Satış"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-federico-orange/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <ShoppingBag size={80} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Online Alışveriş
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
            Federico'nun özel kahveleri, ekipmanları ve hediyelik ürünleri artık online mağazamızda
          </p>
          <a
            href="https://federicostore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-federico-orange text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <ShoppingBag size={28} />
            Alışverişe Başla
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Neden Federico Store?
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Online alışverişinizi kolaylaştıran özel hizmetlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-federico-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-federico-orange hover:text-white transition-all duration-300">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-federico-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-federico-gray">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding bg-federico-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              Ürün Kategorileri
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Size uygun kahve deneyimini keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-federico-black mb-2">
                    {product.category}
                  </h3>
                  <p className="text-federico-gray">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                Evinize Taze Kahve
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-federico-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                    <Heart className="text-federico-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-federico-black mb-2">
                      Taze Kavrulmuş
                    </h3>
                    <p className="text-federico-gray leading-relaxed">
                      Kahvelerimiz siparişinizden sonra kavrulur ve maksimum tazelikte size ulaşır.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-federico-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                    <Coffee className="text-federico-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-federico-black mb-2">
                      Geniş Seçenek
                    </h3>
                    <p className="text-federico-gray leading-relaxed">
                      Single origin'den blend'lere, espresso'dan filtre kahveye kadar geniş ürün yelpazesi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-federico-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                    <Gift className="text-federico-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-federico-black mb-2">
                      Hediye Seçenekleri
                    </h3>
                    <p className="text-federico-gray leading-relaxed">
                      Sevdikleriniz için özel hediye paketleri ve kişiselleştirme seçenekleri.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
                alt="Federico Coffee Products"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-federico-orange to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ShoppingBag size={80} className="mx-auto mb-8 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              İlk Siparişinizde %15 İndirim
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Federico Store'da ilk alışverişinizi yapın ve hoş geldin indiriminizden faydalanın.
              Kampanya kodu: <strong className="font-bold">FEDERICOILK15</strong>
            </p>
            <a
              href="https://federicostore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-federico-orange px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <ShoppingBag size={28} />
              Hemen Alışveriş Yap
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Truck size={48} className="mx-auto mb-4 text-federico-orange" />
              <h3 className="text-xl font-semibold mb-2">Ücretsiz Kargo</h3>
              <p className="text-gray-400">150 TL ve üzeri alışverişlerde</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Package size={48} className="mx-auto mb-4 text-federico-orange" />
              <h3 className="text-xl font-semibold mb-2">Güvenli Paketleme</h3>
              <p className="text-gray-400">Özel ambalajlama ile taze kalır</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Heart size={48} className="mx-auto mb-4 text-federico-orange" />
              <h3 className="text-xl font-semibold mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-400">7/24 müşteri destek hizmeti</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineSalesPage

