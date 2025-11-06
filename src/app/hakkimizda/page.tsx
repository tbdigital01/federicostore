'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Coffee, Heart, Award, Leaf } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Kalite',
      description: 'Özenle seçilmiş, en kaliteli kahve çekirdekleriyle hazırlanmış her fincan.',
    },
    {
      icon: Heart,
      title: 'Tutku',
      description: 'Kahve tutkumuz, her detayda ve her ritüelde kendini gösterir.',
    },
    {
      icon: Award,
      title: 'Mükemmellik',
      description: 'Uzman barista kadromuzla, her fincan kahvede mükemmellik hedefliyoruz.',
    },
    {
      icon: Leaf,
      title: 'Sürdürülebilirlik',
      description: 'Çevreye duyarlı, sürdürülebilir üretim ve tüketim anlayışı.',
    },
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Başlangıç',
      description: 'Federico Coffee, kahve tutkusu olan kurucularımız tarafından hayata geçirildi.',
    },
    {
      year: '2021',
      title: 'İlk Şube',
      description: 'Gazipaşa\'da ilk şubemizi açarak yerel kahve kültürüne yeni bir soluk getirdik.',
    },
    {
      year: '2022',
      title: 'Büyüme',
      description: 'Temsa Konteyner ve Vagoon mobil şubemizle genişledik.',
    },
    {
      year: '2023',
      title: 'Yenilik',
      description: 'Online satış platformumuzu başlattık ve franchise modelimizi geliştirdik.',
    },
    {
      year: '2024',
      title: 'Gürselpaşa',
      description: 'Yeni Gürselpaşa şubemizle müşterilerimize daha yakınız.',
    },
    {
      year: '2025',
      title: 'Gelecek',
      description: 'Yeni şubeler ve yenilikçi projelerle kahve kültürünü yaymaya devam ediyoruz.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920"
            alt="Federico Coffee Hakkımızda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Hikayemiz
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Kahve bir içecek değil, bir deneyimdir.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
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
                Federico'nun Doğuşu
              </h2>
              <div className="space-y-4 text-lg text-federico-gray leading-relaxed">
                <p>
                  Federico Coffee, kahve tutkusunu yaşam tarzına dönüştüren bir grup arkadaşın hayaliyle başladı. 
                  Sadece bir kahve içmek değil, her yudumda bir hikaye, bir an ve bir deneyim yaşatmak istedik.
                </p>
                <p>
                  Kurucularımız, dünya çapında farklı kahve kültürlerini deneyimledikten sonra, 
                  Türkiye'de sıradanın dışında, tutkuyla hazırlanan kahvelere olan ihtiyacı fark ettiler.
                </p>
                <p>
                  Federico, işte bu ihtiyaçtan doğdu. Adımız, kahve dünyasının öncü isimlerinden ilham alıyor 
                  ve markamız, her gün bu mirası yaşatmaya devam ediyor.
                </p>
                <p>
                  Bugün, her şubemizde aynı tutku ve özenle müşterilerimize hizmet vermeye devam ediyoruz.
                </p>
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
                alt="Federico Coffee Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Değerlerimiz
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Federico Coffee'yi ayakta tutan temel prensipler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-federico-orange bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-federico-orange" size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold text-federico-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-federico-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Federico Coffee'nin gelişim hikayesi
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-federico-orange last:border-transparent"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-federico-orange rounded-full transform -translate-x-[9px]" />
                <div className="bg-federico-cream rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <span className="text-federico-orange font-bold text-xl mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-semibold text-federico-black mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-federico-gray leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Felsefemiz
              </h2>
              <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-300 mb-8">
                "Kahve sadece bir içecek değil, bir ritüeldir. Her fincan, bir duraksamadır, 
                bir solukluk anıdır ve kendimizle buluştuğumuz bir fırsattır."
              </blockquote>
              <p className="text-lg text-gray-400 leading-relaxed">
                Federico Coffee olarak, sadece mükemmel kahve sunmakla kalmıyor, 
                müşterilerimize unutulmaz anlar yaşatmayı hedefliyoruz. Her detay, 
                her dokunuş ve her gülümseme, markanın ruhunu yansıtır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
                alt="Sürdürülebilirlik"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                Sürdürülebilirlik
              </h2>
              <div className="space-y-4 text-lg text-federico-gray leading-relaxed">
                <p>
                  Federico Coffee olarak, çevreye ve topluma olan sorumluluğumuzun bilincindeyiz.
                </p>
                <p>
                  Kahve çekirdeklerimizi etik ve sürdürülebilir kaynaklardan temin ediyoruz. 
                  Üreticilerle doğrudan çalışarak, adil ticaret prensiplerine bağlı kalıyoruz.
                </p>
                <p>
                  Şubelerimizde geri dönüştürülebilir malzemeler kullanıyor, 
                  plastik kullanımını minimuma indiriyor ve enerji verimliliğine özen gösteriyoruz.
                </p>
                <p>
                  Kahvenin lezzetini korurken, gezegeni de korumaya devam edeceğiz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

