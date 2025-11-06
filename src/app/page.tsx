'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      {/* Hero - Ultra Minimal */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-12">
            Federico Coffee — Adana
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 text-federico-black leading-[0.95] tracking-tight">
            Kahvenin<br />Ötesinde
          </h1>
          <p className="text-lg md:text-xl text-federico-gray mb-16 max-w-2xl mx-auto leading-relaxed">
            Artık yaşamın içinde. Gürselpaşa'daki yeni mekânımızda,<br />şeffaf mutfak ve günlük taze üretim.
          </p>
          <Link 
            href="/subelerimiz" 
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-federico-black hover:text-federico-orange transition-colors duration-300 border-b border-federico-black hover:border-federico-orange pb-2"
          >
            Keşfet
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Image Break - Full Width */}
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=1920&q=80"
          alt="Federico Gürselpaşa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Statement */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-3xl md:text-5xl font-serif text-federico-black leading-[1.4] mb-16">
              "Her fincan kahve bir coğrafyanın,<br />
              bir emeğin, bir yolculuğun temsilcisidir."
            </blockquote>
            <p className="text-xs uppercase tracking-[0.3em] text-federico-gray">
              Marka Felsefesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features - Grid */}
      <section className="py-24 bg-federico-lightgray">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { num: '01', title: 'Şeffaf Mutfak', desc: 'Gürselpaşa' },
              { num: '02', title: 'Günlük Kavurma', desc: 'Adana Tesisi' },
              { num: '03', title: '4 Şube', desc: 'Gazipaşa, Gürselpaşa, Temsa, Vagoon' },
              { num: '04', title: 'Online Mağaza', desc: 'Tüm Türkiye' },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-6xl font-serif text-federico-orange mb-6 opacity-20">{item.num}</p>
                <h3 className="text-xl font-serif mb-3 text-federico-black">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-federico-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gürselpaşa - Featured */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-8">
                Yeni Ritüel
              </p>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 text-federico-black leading-[1.1]">
                Federico<br />Gürselpaşa
              </h2>
              <p className="text-lg text-federico-gray leading-relaxed mb-12">
                Şeffaf mutfakta her sabah taze pişen pastalar, dengeyle hazırlanmış 
                bowl çeşitleri, özenle seçilmiş kahvaltılar. Sadece kahve değil, 
                tam bir yaşam deneyimi.
              </p>
              <Link 
                href="/subelerimiz" 
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-federico-black hover:text-federico-orange transition-colors duration-300"
              >
                Mekânı Keşfet
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Federico Gürselpaşa"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story - Minimal */}
      <section className="py-32 bg-federico-black text-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                alt="Federico Coffee"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-8">
                2020 – 2024
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-[1.2]">
                Pandemiyle<br />Başlayan<br />Hikaye
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                Online satışla başladı. Gazipaşa'da ilk şube. Vagoon ile festivallere. 
                Temsa'da konteyner mağaza. Bugün Gürselpaşa ile yeni bir ritüel.
              </p>
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white hover:text-federico-orange transition-colors duration-300"
              >
                Tam Hikaye
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram - Minimal Grid */}
      <section className="bg-white">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {[
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
            'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
            'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=400&q=80',
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Federico ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
        <div className="py-12 text-center">
          <a
            href="https://instagram.com/federicocoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.3em] text-federico-gray hover:text-federico-orange transition-colors duration-300"
          >
            @federicocoffee
          </a>
        </div>
      </section>

      {/* Shop Links - Minimal */}
      <section className="py-32 bg-federico-lightgray">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-12 border border-gray-200 hover:border-federico-orange transition-colors duration-300"
            >
              <h3 className="text-3xl font-serif mb-4 text-federico-black">Şubelerimiz</h3>
              <p className="text-sm text-federico-gray mb-6">4 Farklı Nokta</p>
              <Link 
                href="/subelerimiz" 
                className="text-xs uppercase tracking-[0.2em] text-federico-black hover:text-federico-orange transition-colors duration-300"
              >
                Keşfet
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center py-12 border border-gray-200 hover:border-federico-orange transition-colors duration-300"
            >
              <h3 className="text-3xl font-serif mb-4 text-federico-black">Online Mağaza</h3>
              <p className="text-sm text-federico-gray mb-6">Tüm Türkiye'ye</p>
              <Link 
                href="/online-satis" 
                className="text-xs uppercase tracking-[0.2em] text-federico-black hover:text-federico-orange transition-colors duration-300"
              >
                Alışveriş
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-4xl font-serif text-federico-black leading-relaxed">
              "Federico'da kahve aceleyle içilmez.<br />
              Zaman biraz yavaşlar."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA - Ultra Minimal */}
      <section className="py-24 bg-federico-black text-white">
        <div className="container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">
              Federico Ailesine Katılın
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/franchise" 
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] border border-white hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Franchise
              </Link>
              <Link 
                href="/kariyer" 
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] border border-white hover:bg-white hover:text-federico-black transition-all duration-300"
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
