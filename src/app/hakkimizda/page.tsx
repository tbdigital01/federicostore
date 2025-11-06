'use client'

import { motion } from 'framer-motion'

const AboutPage = () => {
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
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8">
              Hikayemiz
            </h1>
            <p className="text-lg text-federico-gray max-w-3xl mx-auto leading-relaxed">
              Federico Coffee, kahve tutkusunu yaşam tarzına dönüştüren bir grup arkadaşın 
              hayaliyle başladı. Sadece kahve sunmuyoruz; anlar yaratıyor, hikayeler anlatıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Federico'nun Doğuşu
              </h2>
              <div className="space-y-4 text-base text-federico-gray leading-relaxed">
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-federico-lightgray"
            >
              {/* Placeholder for image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
              Yolculuğumuz
            </h2>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l border-gray-200 pl-8"
                >
                  <div className="text-xs text-federico-gray mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-serif mb-2">{milestone.title}</h3>
                  <p className="text-sm text-federico-gray leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Değerlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Kalite',
                desc: 'Özenle seçilmiş, en kaliteli kahve çekirdekleriyle hazırlanmış her fincan.',
              },
              {
                title: 'Tutku',
                desc: 'Kahve tutkumuz, her detayda ve her ritüelde kendini gösterir.',
              },
              {
                title: 'Sürdürülebilirlik',
                desc: 'Çevreye duyarlı, sürdürülebilir üretim ve tüketim anlayışı.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-sm text-federico-gray leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed text-federico-black italic">
                "Kahve sadece bir içecek değil, bir ritüeldir."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
