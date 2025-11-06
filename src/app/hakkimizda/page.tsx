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
      year: '2023',
      title: 'Büyüme',
      description: 'Temsa ve Vagoon şubelerimizle kahve deneyimimizi genişlettik.',
    },
    {
      year: '2024',
      title: 'Gürselpaşa',
      description: 'Yeni Gürselpaşa şubemizle müşterilerimize daha yakınız.',
    },
  ]

  return (
    <>
      {/* Hero with Image */}
      <section className="relative h-[70vh] flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
            alt="Federico Coffee Hakkımızda"
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
              Hikayemiz
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kahve bir içecek değil, bir deneyimdir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story with Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-federico-black">
                Federico'nun<br />Doğuşu
              </h2>
              <div className="space-y-4 text-base text-federico-gray leading-relaxed">
                <p>
                  Federico Coffee, kahve tutkusunu yaşam tarzına dönüştüren bir grup arkadaşın 
                  hayaliyle başladı. Sadece bir kahve içmek değil, her yudumda bir hikaye, 
                  bir an ve bir deneyim yaşatmak istedik.
                </p>
                <p>
                  Kurucularımız, dünya çapında farklı kahve kültürlerini deneyimledikten sonra, 
                  Türkiye'de sıradanın dışında, tutkuyla hazırlanan kahvelere olan ihtiyacı fark ettiler.
                </p>
                <p>
                  Federico, işte bu ihtiyaçtan doğdu. Adımız, kahve dünyasının öncü isimlerinden 
                  ilham alıyor ve markamız, her gün bu mirası yaşatmaya devam ediyor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Federico Coffee Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-federico-black">
              Değerlerimiz
            </h2>
            <p className="text-federico-gray max-w-2xl mx-auto">
              Federico Coffee'yi ayakta tutan temel prensipler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-federico-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-federico-black">
                    {value.title}
                  </h3>
                  <p className="text-sm text-federico-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-federico-black">
              Yolculuğumuz
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12 border-l-2 border-federico-orange last:border-transparent"
              >
                <div className="absolute left-0 top-0 w-6 h-6 bg-federico-orange rounded-full transform -translate-x-[13px] flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="bg-federico-lightgray p-6 rounded-lg">
                  <span className="text-federico-orange font-semibold text-lg mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-serif text-federico-black mb-3">
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

      {/* Quote Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-8">
                "Kahve sadece bir içecek değil, bir ritüeldir. Her fincan, bir duraksamadır."
              </blockquote>
              <p className="text-lg text-gray-400">
                — Federico Coffee Felsefesi
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
