'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag, Briefcase, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
      title: 'Kahvenin Ötesinde',
      subtitle: 'Artık yaşamın içinde',
      cta: { text: 'Gürselpaşa Yeni Şube', link: '/subelerimiz' },
    },
    {
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80',
      title: 'Yeni Bir Ritüel',
      subtitle: 'Federico Gürselpaşa',
      cta: { text: 'Keşfet', link: '/subelerimiz' },
    },
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
      title: 'Özel Çekirdekler',
      subtitle: 'Kendi kavurduğumuz, günlük taze',
      cta: { text: 'Online Mağaza', link: '/online-satis' },
    },
  ]

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

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <>
      {/* Hero Slider */}
      <section className="relative min-h-screen flex items-center bg-federico-black pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover opacity-30"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="container-custom relative z-10 px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h1 className="text-7xl md:text-9xl font-serif mb-8 text-white leading-none">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <Link 
                href={heroSlides[currentSlide].cta.link} 
                className="bg-federico-orange text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-3"
              >
                {heroSlides[currentSlide].cta.text}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-white border-opacity-50 text-white hover:bg-white hover:text-federico-black transition-all duration-300 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-federico-orange' 
                    : 'w-6 bg-white bg-opacity-50 hover:bg-opacity-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-white border-opacity-50 text-white hover:bg-white hover:text-federico-black transition-all duration-300 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
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
