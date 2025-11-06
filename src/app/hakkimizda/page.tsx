'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Pandemiyle Başlayan Hikaye',
      description: 'Tüm dünyanın yavaşladığı dönemde, online satışla başlayan küçük bir serüven. Bir fincan iyi kahvenin sadece içecek değil, bir moral, bir ritüel olduğunu fark ettik.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    },
    {
      year: '2021',
      title: 'İlk Şube: Gazipaşa Toros Caddesi',
      description: 'Adana Gazipaşa Toros Caddesi\'nde ilk fiziksel noktamız açıldı. Modern şehir hayatının içinde sade, sıcak ve minimalist bir kaçış noktası.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    },
    {
      year: '2022',
      title: 'Vagoon ve Etkinlikler',
      description: 'Kahveyi daha fazla insana ulaştırmak için Vagoon Festival\'de yer aldık. Festival alanlarında gezici Federico kioskları, "iyi kahve her yerde mümkün" anlayışını yaydı.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    },
    {
      year: '2024',
      title: 'Temsa Fabrikası Konteyner Mağaza',
      description: 'Temsa fabrikasındaki konteyner mağaza, çalışanlara gün boyu enerji veren bir kahve durağı. Endüstriyel alanda bile sıcak, minimalist bir atmosfer.',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
            alt="Federico Hikaye"
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
              Hakkımızda
            </p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white leading-none">
              Kahvenin Ötesinde,<br />Sakinliğin İçinde
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Federico, 2020'den bugüne uzanan bir kahve hikayesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Quote */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-serif text-federico-black leading-relaxed">
              Federico'nun hikayesi, tüm dünyanın yavaşladığı, insanların evlerinde kendileriyle 
              baş başa kaldığı bir dönemde başladı. Pandemi sürecinde, bir fincan iyi kahvenin 
              yalnızca bir içecek değil; aynı zamanda bir moral, bir ritüel, bir huzur anı 
              olduğunu fark ettik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      {milestones.map((milestone, index) => (
        <section
          key={milestone.year}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-federico-lightgray'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                  {milestone.year}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-federico-black leading-tight">
                  {milestone.title}
                </h2>
                <p className="text-base text-federico-gray leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative h-[500px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Roasting */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                Kendi Kavurduğumuz
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Özel Çekirdekler
              </h2>
              <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                <p>
                  Federico, kahve tedarik zincirinde aracıların ötesine geçerek kendi özel 
                  çekirdeklerini seçer ve kavurur.
                </p>
                <p>
                  Her kavurma işlemi, tazeliği ve lezzeti ön planda tutacak şekilde günlük olarak yapılır.
                </p>
                <p>
                  Yöresel kahveler, özel harmanlar, mevsimlik single-origin çekirdekler; 
                  her biri, kahvenin doğduğu toprağın hikayesini taşır.
                </p>
                <p className="text-white font-serif text-lg">
                  Bizim için her fincan kahve bir coğrafyanın, bir emeğin, bir yolculuğun temsilcisidir.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                alt="Kahve Çekirdekleri"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Store */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                Yeni Dönem
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-federico-black leading-tight">
                Federico'nun Genişleyen Dünyası
              </h2>
              <p className="text-lg text-federico-gray leading-relaxed">
                Artık sadece kahve değil; günün her saatine eşlik edebilecek lezzetli ve sağlıklı 
                seçenekler de sunuyoruz. Taze hazırlanmış atıştırmalıklar, günlük pastalar, 
                dengeli salata ve bowl çeşitleri, özenle seçilmiş kahvaltı alternatifleri.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bakery', desc: 'Günlük taze pastalar' },
              { title: 'Bowl & Salata', desc: 'Dengeli ve sağlıklı' },
              { title: 'Kahvaltı', desc: 'Özenle hazırlanmış' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-serif mb-3 text-federico-black">{item.title}</h3>
                <p className="text-sm text-federico-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
              Marka Felsefemiz
            </p>
            <blockquote className="text-3xl md:text-4xl font-serif text-federico-black leading-tight mb-12">
              Federico'nun özünde sadeleşmek, yavaşlamak ve anı yaşamak vardır.
              <br /><br />
              Minimalizm bizim için bir trend değil, bir yaşam biçimidir.
            </blockquote>
            <div className="space-y-4 text-lg text-federico-gray">
              <p>Federico'da zaman acele etmez,</p>
              <p>kahve soğumaz,</p>
              <p>insanlar birbirine gülümser.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Federico —<br />
              Kahvenin ötesinde,<br />
              sakinliğin içinde.
            </h2>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
