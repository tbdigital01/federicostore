'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Store, ShoppingBag, Briefcase, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const quickLinks = [
    {
      icon: Store,
      title: 'Şubelerimiz',
      description: 'En yakın Federico şubesini keşfedin',
      href: '/subelerimiz',
      color: 'bg-orange-100',
      iconColor: 'text-federico-orange',
    },
    {
      icon: ShoppingBag,
      title: 'Online Satış',
      description: 'Özel kahveler ve aksesuarlar',
      href: '/online-satis',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Franchise',
      description: 'İş ortağımız olun',
      href: '/franchise',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: Users,
      title: 'Kariyer',
      description: 'Ailemize katılın',
      href: '/kariyer',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
  ]

  const instagramPosts = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400',
    'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=400',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
            alt="Federico Coffee"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Kahvenin Ötesinde,
            <br />
            Sıradanın Dışında
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Federico, kahve tutkusunu yeni bir ritüele dönüştüren bir marka.
            Her yudum, özenle hazırlanmış bir deneyim sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subelerimiz" className="btn-primary">
              Şubelerimizi Keşfedin
            </Link>
            <Link href="/online-satis" className="btn-outline bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-federico-black">
              Online Alışveriş
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-federico-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              Hızlı Erişim
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              İhtiyacınız olan her şeye tek tıkla ulaşın
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`${link.iconColor}`} size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-federico-black mb-2">
                      {link.title}
                    </h3>
                    <p className="text-federico-gray">{link.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800"
                alt="Federico Coffee Experience"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                Kahve Bir İçecek Değil,
                <br />
                Bir Deneyimdir
              </h2>
              <p className="text-lg text-federico-gray leading-relaxed mb-6">
                Federico, her fincan kahveyle hayatınıza dokunmayı hedefleyen bir markadır. 
                Özenle seçilmiş kahve çekirdekleri, uzman barista dokunuşu ve sıcak atmosferimizle, 
                her gün yeni bir deneyim sunuyoruz.
              </p>
              <p className="text-lg text-federico-gray leading-relaxed mb-8">
                Sadece kahve sunmuyoruz; anlar yaratıyor, hikayeler anlatıyor ve 
                topluluğumuzla özel bağlar kuruyoruz.
              </p>
              <Link href="/hakkimizda" className="btn-primary">
                Hikayemizi Keşfedin
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Günlük Ritüellerimiz
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Instagram'da bizi takip edin ve kahve serüvenimizin bir parçası olun
            </p>
            <a
              href="https://instagram.com/federicocoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-federico-orange hover:text-orange-400 transition-colors font-semibold"
            >
              @federicocoffee
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={post}
                  alt={`Federico Coffee Instagram ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-federico-orange opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Instagram'da Gör</span>
                </div>
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
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Federico Ailesine Katılın
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Franchise fırsatlarımızı keşfedin veya kariyer yolculuğunuza bizimle başlayın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/franchise"
                className="bg-white text-federico-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Franchise Başvurusu
              </Link>
              <Link
                href="/kariyer"
                className="bg-federico-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
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

