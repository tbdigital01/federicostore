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

      {/* Features - What Makes Us Special */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-4">
              Neden Federico?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-federico-black">
              Kahvenin Ötesinde Deneyim
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Şeffaf Mutfak',
                desc: 'Her sabah taze pişen pastalar, özenle hazırlanan yemekler. Üretim sürecimiz tamamen görünür.',
                icon: '🍰'
              },
              {
                title: 'Özel Çekirdekler',
                desc: 'Guatemala, Etiyopya, Kolombiya\'dan özel olarak seçilmiş, günlük kavrulan kahveler.',
                icon: '☕'
              },
              {
                title: 'Federico Life',
                desc: 'Sadece kahve değil; organik çaylar, smoothie\'ler, sağlıklı atıştırmalıklar ile tam bir yaşam.',
                icon: '🌿'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-federico-black">
                  {item.title}
                </h3>
                <p className="text-sm text-federico-gray leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gürselpaşa Featured Section */}
      <section className="relative py-32 bg-federico-lightgray overflow-hidden">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1.5 bg-federico-orange text-white text-xs uppercase tracking-[0.2em] mb-6">
                Yeni Açılıyor
              </div>
              <h2 className="text-5xl md:text-6xl font-serif mb-6 text-federico-black leading-[1.1]">
                Gürselpaşa'da<br />Yeni Ritüel
              </h2>
              <p className="text-lg text-federico-gray leading-relaxed mb-8">
                Federico'nun en yeni ve en kapsamlı mekânı. Şeffaf mutfak konsepti, 
                taze pasta atölyesi, sağlıklı bowl menüsü ve özel kahve deneyimi bir arada.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-federico-orange rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-federico-black mb-1">Şeffaf Mutfak</h4>
                    <p className="text-sm text-federico-gray">Her şey gözünüzün önünde hazırlanıyor</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-federico-orange rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-federico-black mb-1">Taze Pasta Atölyesi</h4>
                    <p className="text-sm text-federico-gray">Günlük üretim, katkısız malzemeler</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-federico-orange rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium text-federico-black mb-1">Geniş Menü</h4>
                    <p className="text-sm text-federico-gray">Kahvaltı, bowl, salata, sandwich ve daha fazlası</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/subelerimiz" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-federico-orange text-white text-sm uppercase tracking-[0.2em] hover:bg-federico-black transition-all duration-300 group"
              >
                Detayları Gör
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[500px] lg:h-[650px]">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                  alt="Federico Gürselpaşa"
                  fill
                  className="object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Branches - Quick Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-federico-black mb-4">
              Diğer Şubelerimiz
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Adana'nın farklı noktalarında sizinle buluşuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Gazipaşa',
                desc: 'İlk şubemiz. Şehrin kalbinde.',
                image: 'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=600&q=80'
              },
              {
                name: 'Vagoon',
                desc: 'Mobil kahve. Festivallerde.',
                image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'
              },
              {
                name: 'Temsa',
                desc: 'Konteyner konsept mağaza.',
                image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80'
              },
            ].map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-federico-black/20 group-hover:bg-federico-black/40 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-federico-black group-hover:text-federico-orange transition-colors duration-300">
                  {branch.name}
                </h3>
                <p className="text-sm text-federico-gray">
                  {branch.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/subelerimiz" 
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-federico-black hover:text-federico-orange transition-colors duration-300 border-b border-federico-black hover:border-federico-orange pb-1"
            >
              Tüm Şubeleri Gör
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Story - Dark Section */}
      <section className="relative py-32 bg-federico-black text-white overflow-hidden">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-8">
                2020 - 2024
              </p>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.2]">
                Pandemiyle Başlayan<br />Bir Kahve Hikayesi
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Online satışla başladık. Gazipaşa'da ilk şubemizi açtık. 
                Vagoon ile festivallere taşındık. Temsa'da konteyner mağaza kurduk. 
                Bugün Gürselpaşa ile yeni bir ritüel başlatıyoruz.
              </p>
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-federico-black transition-all duration-300 group"
              >
                Hikayemizi Keşfet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Quote */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-12">
              <div className="w-16 h-px bg-federico-orange mx-auto mb-12" />
              <blockquote className="text-3xl md:text-5xl font-serif text-federico-black leading-[1.4] mb-8">
                "Her fincan kahve bir coğrafyanın,<br />
                bir emeğin, bir yolculuğun temsilcisidir."
              </blockquote>
              <div className="w-16 h-px bg-federico-orange mx-auto mt-12" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-federico-gray">
              Federico Marka Felsefesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="bg-federico-lightgray py-20">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-federico-black mb-4">
              Federico Life
            </h2>
            <p className="text-sm text-federico-gray mb-6">
              Günlük anlarımızı takip edin
            </p>
            <a
              href="https://instagram.com/federicocoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-federico-orange hover:text-federico-black transition-colors duration-300"
            >
              @federicocoffee
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Federico Instagram ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-federico-black/0 group-hover:bg-federico-black/30 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Join Federico */}
      <section className="py-32 bg-federico-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-federico-orange via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Federico Ailesine<br />Katılın
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Franchise fırsatları ve kariyer imkanları hakkında bilgi alın
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/franchise" 
                className="px-10 py-4 bg-federico-orange text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Franchise Ol
              </Link>
              <Link 
                href="/kariyer" 
                className="px-10 py-4 border border-white text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-federico-black transition-all duration-300"
              >
                Kariyer Fırsatları
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
