'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag, Briefcase, Users, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      {/* Compact Hero - Split Screen */}
      <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 pt-20">
        {/* Left - Content */}
        <div className="bg-white flex items-center px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-federico-orange mb-6">
              <Sparkles size={14} />
              Yeni Gürselpaşa Şubesi
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-federico-black leading-none">
              Kahvenin<br />Ötesinde
            </h1>
            <p className="text-lg text-federico-gray mb-8 leading-relaxed">
              Artık yaşamın içinde. Şeffaf mutfak, günlük taze üretim, yeni bir ritüel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/subelerimiz" className="bg-federico-orange text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2 justify-center">
                Keşfet
                <ArrowRight size={16} />
              </Link>
              <Link href="/hakkimizda" className="border-2 border-federico-black text-federico-black px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-federico-black hover:text-white transition-all duration-200 inline-flex items-center justify-center">
                Hikayemiz
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=1200&q=80"
            alt="Federico Coffee"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* 3-Column Highlights - Compact */}
      <section className="py-16 bg-federico-black text-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-3">Şeffaf Mutfak</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Gürselpaşa</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-3">Günlük Kavurma</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Taze Çekirdek</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-3">4 Şube</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Adana</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards - Compact Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Store, title: 'Şubeler', href: '/subelerimiz' },
              { icon: ShoppingBag, title: 'Online', href: '/online-satis' },
              { icon: Briefcase, title: 'Franchise', href: '/franchise' },
              { icon: Users, title: 'Kariyer', href: '/kariyer' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="block border border-gray-200 p-8 hover:border-federico-orange hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <Icon className="text-federico-orange mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-lg font-serif text-federico-black">{item.title}</h3>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured - Gürselpaşa */}
      <section className="py-20 bg-federico-orange text-white">
        <div className="container-custom px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles size={40} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                Federico Gürselpaşa
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
                Şeffaf mutfak, günlük pastalar, bowl & salata, özel kahvaltı. 
                Sadece kahve değil, tam bir yaşam deneyimi.
              </p>
              <Link href="/subelerimiz" className="bg-white text-federico-orange px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2">
                Yeni Şubeyi Keşfet
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story - Minimal */}
      <section className="py-20 bg-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-widest text-federico-orange mb-4 block">
                2020–2024
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-federico-black leading-tight">
                Online Satışla Başlayan Hikaye
              </h2>
              <p className="text-base text-federico-gray leading-relaxed mb-6">
                Pandemiyle başladı. Online satışla büyüdü. Bugün 4 şubemiz ve federicostore.com 
                ile Türkiye'nin her yerine ulaşıyoruz.
              </p>
              <Link href="/hakkimizda" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-federico-black hover:text-federico-orange transition-colors">
                Tam Hikaye
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Federico Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products - Dark Section */}
      <section className="py-20 bg-federico-black text-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                alt="Federico Coffee Beans"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs uppercase tracking-widest text-federico-orange mb-4 block">
                Kendi Kavurduğumuz
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Özel Çekirdekler
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Adana'daki tesisimizde günlük kavrulan, özel harmanlar ve single-origin seçenekler.
              </p>
              <Link href="/online-satis" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-federico-orange transition-colors">
                Online Mağaza
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Grid - Compact 6 photos */}
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
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Federico ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center py-8">
          <a
            href="https://instagram.com/federicocoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-federico-gray hover:text-federico-orange transition-colors"
          >
            @federicocoffee
          </a>
        </div>
      </section>

      {/* Quote - Minimal */}
      <section className="py-20 bg-federico-lightgray">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-4xl font-serif text-federico-black leading-tight">
              "Federico'da kahve aceleyle içilmez. Zaman biraz yavaşlar."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-federico-black">
              Federico Ailesine Katılın
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/franchise" className="bg-federico-black text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-200">
                Franchise
              </Link>
              <Link href="/kariyer" className="border-2 border-federico-black text-federico-black px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-federico-black hover:text-white transition-all duration-200">
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
