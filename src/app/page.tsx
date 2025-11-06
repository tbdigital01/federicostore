'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      {/* Hero - Coming Soon Announcement */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=1920&q=80"
            alt="Federico Gürselpaşa"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-federico-black/80 via-federico-black/60 to-federico-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-2 border border-federico-orange/50 bg-federico-orange/10 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-federico-orange">
                  Yakında
                </p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight"
            >
              Yeni Bir Ritüel<br />Başlıyor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl mb-4 text-white/90 font-light"
            >
              Federico Gürselpaşa
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-base md:text-lg mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Şeffaf mutfak, taze pasta üretimi, özel kahve deneyimi.<br />
              Kahvenin ötesinde bir yaşam alanı.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/subelerimiz" 
                className="group px-10 py-4 bg-federico-orange text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-federico-black transition-all duration-300 flex items-center gap-3"
              >
                Mekânı Keşfet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/online-satis" 
                className="px-10 py-4 border border-white text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Online Mağaza
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/50">
            <p className="text-xs uppercase tracking-[0.2em]">Keşfet</p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Gürselpaşa - Main Feature */}
      <section className="relative py-40 bg-white overflow-hidden">
        <div className="container-custom px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-5 py-2 bg-federico-orange text-white text-xs uppercase tracking-[0.3em] mb-10">
                  Yeni Açılıyor
                </div>
                <h2 className="text-6xl md:text-7xl font-serif mb-10 text-federico-black leading-[1.05]">
                  Gürselpaşa
                </h2>
                <div className="w-20 h-px bg-federico-orange mb-10" />
                <p className="text-xl text-federico-gray leading-relaxed mb-8">
                  Şeffaf mutfakta her sabah taze pişen pastalar, özenle hazırlanan 
                  bowl çeşitleri, özel kahve deneyimi.
                </p>
                <p className="text-lg text-federico-gray/70 leading-relaxed mb-12">
                  Federico'nun en yeni mekânı. Sadece kahve değil, tam bir yaşam deneyimi.
                </p>
                <Link 
                  href="/subelerimiz" 
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-federico-black hover:text-federico-orange transition-colors duration-300 group"
                >
                  Detayları Gör
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[550px] lg:h-[700px]">
                  <Image
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80"
                    alt="Federico Gürselpaşa"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-32 bg-federico-lightgray">
        <div className="container-custom px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { num: '2020', label: 'Kuruluş' },
                { num: '4', label: 'Şube' },
                { num: '3', label: 'Ülke Çekirdeği' },
                { num: '∞', label: 'Kahve Sevgisi' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-5xl md:text-6xl font-serif text-federico-orange mb-4">
                    {stat.num}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-federico-gray">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Dark */}
      <section className="relative py-40 bg-federico-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
            alt="Coffee beans"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-12">
                Pandemiyle Başlayan Hikaye
              </p>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1]">
                2020'den Bugüne
              </h2>
              <div className="w-20 h-px bg-federico-orange mx-auto mb-12" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
                Online satışla başladık. Gazipaşa'da ilk şubemizi açtık. 
                Vagoon ile festivallere taşındık. Temsa'da konteyner mağaza kurduk. 
                Bugün Gürselpaşa ile yeni bir ritüel başlatıyoruz.
              </p>
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white hover:text-federico-orange transition-colors duration-300 group"
              >
                Hikayemizi Keşfet
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-40 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="w-20 h-px bg-federico-orange mx-auto mb-16" />
            <blockquote className="text-4xl md:text-6xl font-serif text-federico-black leading-[1.3] mb-16 font-light">
              "Her fincan kahve bir coğrafyanın,<br />
              bir emeğin, bir yolculuğun temsilcisidir."
            </blockquote>
            <div className="w-20 h-px bg-federico-orange mx-auto mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-federico-gray">
              Marka Felsefesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram - Simple Grid */}
      <section className="bg-federico-lightgray py-24">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-federico-gray mb-4">
              Takip Edin
            </p>
            <a
              href="https://instagram.com/federicocoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-serif text-federico-black hover:text-federico-orange transition-colors duration-300"
            >
              @federicocoffee
            </a>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
              'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
              'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
              'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=400&q=80',
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://instagram.com/federicocoffee"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Federico ${index + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-32 bg-federico-black text-white">
        <div className="container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-serif mb-16 leading-tight font-light">
              Federico Ailesine Katılın
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/franchise" 
                className="px-12 py-5 bg-federico-orange text-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Franchise
              </Link>
              <Link 
                href="/kariyer" 
                className="px-12 py-5 border border-white text-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Kariyer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
