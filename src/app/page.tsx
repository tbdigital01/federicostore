'use client'

import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag, Briefcase, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const quickLinks = [
    {
      icon: Store,
      title: 'Şubelerimiz',
      href: '/subelerimiz',
    },
    {
      icon: ShoppingBag,
      title: 'Online Satış',
      href: '/online-satis',
    },
    {
      icon: Briefcase,
      title: 'Franchise',
      href: '/franchise',
    },
    {
      icon: Users,
      title: 'Kariyer',
      href: '/kariyer',
    },
  ]

  return (
    <>
      {/* Hero Section - Minimal */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-balance">
              Kahvenin Ötesinde
            </h1>
            <p className="text-lg md:text-xl text-federico-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Federico, her fincan kahveyle hayatınıza dokunan minimal bir deneyim sunar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/subelerimiz" className="btn-primary inline-flex items-center gap-2">
                Şubelerimizi Keşfedin
                <ArrowRight size={16} />
              </Link>
              <Link href="/online-satis" className="btn-secondary">
                Online Mağaza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links - Minimal Grid */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                    className="block group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-federico-black transition-all duration-200">
                        <Icon className="text-federico-gray group-hover:text-federico-black transition-colors duration-200" size={24} />
                      </div>
                      <h3 className="text-sm font-medium text-federico-gray group-hover:text-federico-black transition-colors duration-200">
                        {link.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview - Minimal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
                Kahve, Bir Deneyimdir
              </h2>
              <p className="text-base text-federico-gray leading-relaxed mb-8">
                Federico, özenle seçilmiş kahve çekirdekleri ve uzman dokunuşuyla, 
                sıradanın dışında bir deneyim sunar. Her gün, her fincan, yeni bir başlangıç.
              </p>
              <Link href="/hakkimizda" className="btn-secondary inline-flex items-center gap-2">
                Hikayemiz
                <ArrowRight size={16} />
              </Link>
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

      {/* Values - Minimal */}
      <section className="section-padding bg-federico-lightgray">
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
                desc: 'En iyi çekirdeklerle hazırlanan mükemmel kahve.',
              },
              {
                title: 'Tutku',
                desc: 'Her detayda kahve sevgimizi hissettiriyoruz.',
              },
              {
                title: 'Deneyim',
                desc: 'Sadece içecek değil, bir an yaratıyoruz.',
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

      {/* CTA - Minimal */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Federico Ailesine Katılın
            </h2>
            <p className="text-base text-federico-gray mb-8 leading-relaxed">
              Franchise fırsatlarımızı keşfedin veya kariyer yolculuğunuza bizimle başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/franchise" className="btn-primary">
                Franchise Başvurusu
              </Link>
              <Link href="/kariyer" className="btn-secondary">
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
