'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag, Briefcase, Users, Coffee, Heart, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const quickLinks = [
    {
      icon: Store,
      title: 'Şubelerimiz',
      description: 'En yakın Federico',
      href: '/subelerimiz',
    },
    {
      icon: ShoppingBag,
      title: 'Online Satış',
      description: 'Mağazamızı keşfedin',
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

  const features = [
    {
      icon: Coffee,
      title: 'Özel Kahveler',
      description: 'Dünyadan seçilmiş, özenle kavrulan çekirdekler',
    },
    {
      icon: Heart,
      title: 'Tutku ile Hazırlanır',
      description: 'Uzman barista ekibimizin el emeği',
    },
    {
      icon: Award,
      title: 'Kalite Garantisi',
      description: 'Her fincanda mükemmellik standardı',
    },
  ]

  return (
    <>
      {/* Hero Section - Görsel ve Metin */}
      <section className="relative min-h-screen flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
            alt="Federico Coffee"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="container-custom relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-6 text-white">
              Kahvenin<br />Ötesinde
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Federico, her fincan kahveyle hayatınıza dokunan, sıradanın dışında bir deneyim sunar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/subelerimiz" className="bg-federico-orange text-white px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2">
                Şubelerimizi Keşfedin
                <ArrowRight size={18} />
              </Link>
              <Link href="/online-satis" className="border-2 border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-federico-black transition-all duration-200">
                Online Mağaza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Grid - Kartlar */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block border border-gray-200 p-8 hover:border-federico-orange hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-federico-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-federico-orange transition-all duration-300">
                      <Icon className="text-federico-orange group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-federico-black">
                      {link.title}
                    </h3>
                    <p className="text-sm text-federico-gray">{link.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section - Görsel + Metin */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Federico Coffee Interior"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-federico-black">
                Kahve, Bir<br />Deneyimdir
              </h2>
              <p className="text-base text-federico-gray leading-relaxed mb-6">
                Federico, özenle seçilmiş kahve çekirdekleri ve uzman barista dokunuşuyla, 
                sıradanın dışında bir deneyim sunar. Her fincan, bir hikaye anlatır.
              </p>
              <p className="text-base text-federico-gray leading-relaxed mb-8">
                Sadece kahve sunmuyoruz; anlar yaratıyor, topluluğumuzla özel bağlar kuruyoruz.
              </p>
              <Link href="/hakkimizda" className="bg-federico-black text-white px-8 py-3.5 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 inline-flex items-center gap-2">
                Hikayemizi Keşfedin
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - 3 Kolon */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-federico-black">
              Neden Federico?
            </h2>
            <p className="text-federico-gray max-w-2xl mx-auto">
              Kahve tutkusunu yaşam tarzına dönüştüren üç temel değerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-federico-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-federico-black">{feature.title}</h3>
                  <p className="text-sm text-federico-gray leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section - Instagram tarzı */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-federico-black">
              Günlük Ritüellerimiz
            </h2>
            <p className="text-federico-gray">
              Instagram'da <a href="https://instagram.com/federicocoffee" target="_blank" className="text-federico-orange hover:underline">@federicocoffee</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Federico Coffee ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-federico-orange text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Federico Ailesine Katılın
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 leading-relaxed">
              Franchise fırsatlarımızı keşfedin veya kariyer yolculuğunuza bizimle başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/franchise" className="bg-white text-federico-orange px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-200">
                Franchise Başvurusu
              </Link>
              <Link href="/kariyer" className="border-2 border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-federico-orange transition-all duration-200">
                İş Başvurusu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
