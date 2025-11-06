'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag, Briefcase, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const quickLinks = [
    {
      icon: Store,
      title: 'Şubelerimiz',
      description: 'Gazipaşa, Gürselpaşa, Temsa',
      href: '/subelerimiz',
    },
    {
      icon: ShoppingBag,
      title: 'Online Mağaza',
      description: 'federicostore.com',
      href: '/online-satis',
    },
    {
      icon: Briefcase,
      title: 'Franchise',
      description: 'İş ortağımız olun',
      href: '/franchise',
    },
    {
      icon: Users,
      title: 'Kariyer',
      description: 'Ekibimize katılın',
      href: '/kariyer',
    },
  ]

  const instagramImages = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
    'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=400&q=80',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
            alt="Federico Coffee"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="container-custom relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-serif mb-8 text-white leading-none">
              Kahvenin<br />Ötesinde
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Artık yaşamın içinde. Yeni bir ritüelin adresi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/subelerimiz" className="bg-federico-orange text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3">
                Gürselpaşa Yeni Şube
                <ArrowRight size={18} />
              </Link>
              <Link href="/hakkimizda" className="border-2 border-white text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-federico-black transition-all duration-300">
                Hikayemiz
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-3xl md:text-5xl font-serif text-federico-black leading-tight mb-8">
              "Federico'da kahve aceleyle içilmez.<br />
              Zaman biraz yavaşlar,<br />
              o anın içinde bir bütünlük vardır."
            </blockquote>
            <p className="text-sm uppercase tracking-widest text-federico-gray">
              Marka Felsefemiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-federico-lightgray">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block bg-white p-10 hover:shadow-2xl transition-all duration-500 group h-full"
                  >
                    <div className="w-14 h-14 bg-federico-orange bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-federico-orange transition-all duration-300">
                      <Icon className="text-federico-orange group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="text-xl font-serif mb-2 text-federico-black">
                      {link.title}
                    </h3>
                    <p className="text-sm text-federico-gray uppercase tracking-wider">{link.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* New Gürselpaşa Highlight */}
      <section className="section-padding bg-federico-orange text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-white opacity-80 mb-6">
                Yeni Bir Ritüel Başlıyor
              </p>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                Federico<br />Gürselpaşa
              </h2>
              <div className="space-y-6 text-base leading-relaxed opacity-90">
                <p>
                  Sadece kahve değil; günün her anına eşlik eden bir deneyim. Her sabah taze pişen 
                  pastalar, dengeyle hazırlanmış salata ve bowl çeşitleri, şeffaf mutfakta özenle hazırlanan lezzetler.
                </p>
                <p>
                  Federico artık bir kafe değil, yeni bir ritüelin adresi.
                </p>
              </div>
              <Link href="/subelerimiz" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-white hover:opacity-80 transition-opacity duration-300 border-b border-white pb-1">
                Keşfet
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=800&q=80"
                alt="Federico Gürselpaşa"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                2020'den Bugüne
              </p>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-federico-black leading-tight">
                Online Satışla<br />Başlayan Bir<br />Hikaye
              </h2>
              <div className="space-y-6 text-base text-federico-gray leading-relaxed">
                <p>
                  Federico'nun hikayesi, kahveye ulaşmanın en zor olduğu bir dönemde başladı. 
                  Pandemiyle birlikte insanların evlerinden çıkamadığı günlerde, biz bu duruma farklı bir gözle baktık.
                </p>
                <p>
                  İyi kahveye ulaşmanın bir lüks değil, bir ihtiyaç olduğunu düşündük. İşte bu fikirle, 
                  online satışla başladık.
                </p>
                <p>
                  Bugün 4 şubemiz ve federicostore.com ile Türkiye'nin her yerine ulaşıyoruz.
                </p>
              </div>
              <Link href="/hakkimizda" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-federico-black hover:text-federico-orange transition-colors duration-300">
                Hikayenin Devamı
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
                alt="Federico Coffee"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                alt="Federico Çekirdek Kahve"
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
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                Kendi Kavurduğumuz
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Özel Çekirdekler
              </h2>
              <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                <p>
                  Dünyanın farklı bölgelerinden özenle seçilen yeşil çekirdekler, Adana'daki 
                  kavurma tesisimizde küçük partiler halinde, her gün taze olarak hazırlanır.
                </p>
                <p>
                  Özel harmanlar, single-origin yöresel kahveler, espresso ve filtre profilleri, 
                  sezonluk mikro-lot seriler.
                </p>
                <p className="text-white font-serif text-lg">
                  Her biri, bulunduğu coğrafyanın hikayesini taşır.
                </p>
              </div>
              <Link href="/online-satis" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-white hover:text-federico-orange transition-colors duration-300">
                Online Mağaza
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {instagramImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Federico ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-federico-orange opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="text-center py-12">
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

      {/* CTA */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-federico-black">
              Federico Ailesine<br />Katılın
            </h2>
            <p className="text-lg mb-10 leading-relaxed text-federico-gray">
              Franchise fırsatlarımızı keşfedin veya kariyer yolculuğunuza bizimle başlayın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/franchise" className="bg-federico-black text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300">
                Franchise
              </Link>
              <Link href="/kariyer" className="border-2 border-federico-black text-federico-black px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-federico-black hover:text-white transition-all duration-300">
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
