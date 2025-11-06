'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      {/* Hero - Immersive Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=1920&q=80"
            alt="Federico Gürselpaşa"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-federico-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-block px-8 py-3 border border-federico-orange/40 mb-12"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-federico-orange font-light">
                Yakında
              </p>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-10 leading-[0.95] tracking-tighter font-light">
              Yeni Bir Ritüel<br />Başlıyor
            </h1>

            <p className="text-2xl md:text-3xl mb-6 font-light tracking-wide">
              Federico Gürselpaşa
            </p>

            <p className="text-base md:text-lg mb-16 text-white/60 max-w-2xl mx-auto font-light">
              Şeffaf mutfak, taze üretim, özel kahve deneyimi
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/subelerimiz" 
                className="group px-12 py-5 bg-white text-federico-black text-xs uppercase tracking-[0.3em] hover:bg-federico-orange hover:text-white transition-all duration-500 flex items-center gap-3 font-medium"
              >
                Keşfet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-white/30" />
        </motion.div>
      </section>

      {/* Image Break - Full Bleed */}
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
          alt="Federico"
          fill
          className="object-cover"
        />
      </section>

      {/* Split - Gürselpaşa Detail */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80"
              alt="Şeffaf Mutfak"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex items-center justify-center py-24 px-8 lg:px-16 bg-white order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="inline-block px-6 py-2 bg-federico-black text-white text-xs uppercase tracking-[0.3em] mb-12">
                Gürselpaşa
              </div>
              
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-[1.1] font-light">
                Şeffaf<br />Mutfak
              </h2>
              
              <div className="w-16 h-[1px] bg-federico-orange mb-8" />
              
              <p className="text-lg text-federico-gray leading-relaxed mb-8 font-light">
                Her sabah taze pişen pastalar, özenle hazırlanan yemekler. 
                Üretim sürecimizin her anını görebilirsiniz.
              </p>
              
              <p className="text-base text-federico-gray/70 leading-relaxed font-light">
                Kahvenin ötesinde bir deneyim. Taze, şeffaf, gerçek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote - Full Section */}
      <section className="relative py-40 bg-federico-lightgray">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-serif text-federico-black leading-[1.2] mb-16 font-light">
              "Her fincan kahve<br />
              bir yolculuğun<br />
              temsilcisidir."
            </blockquote>
            <p className="text-xs uppercase tracking-[0.4em] text-federico-gray font-light">
              Federico
            </p>
          </motion.div>
        </div>
      </section>

      {/* Triple Image Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {[
          {
            image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
            title: 'Özel Çekirdekler',
            location: 'Guatemala, Etiyopya, Kolombiya'
          },
          {
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
            title: 'Günlük Kavurma',
            location: 'Adana Tesisimiz'
          },
          {
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
            title: 'Barista Sanatı',
            location: 'Özenle Hazırlanan'
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative h-[600px] group overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-federico-black/90 via-federico-black/40 to-transparent" />
            <div className="absolute bottom-12 left-8 right-8 text-white">
              <h3 className="text-3xl font-serif mb-2 font-light">{item.title}</h3>
              <p className="text-sm tracking-wider text-white/70 font-light">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Story Timeline - Dark */}
      <section className="relative py-40 bg-federico-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-federico-orange mb-12 text-center font-light">
              Hikayemiz
            </p>
            
            <h2 className="text-5xl md:text-7xl font-serif mb-20 leading-[1.1] text-center font-light">
              2020 — 2024
            </h2>

            <div className="space-y-16">
              {[
                { year: '2020', text: 'Pandemi döneminde online satışla başladık' },
                { year: '2021', text: 'Gazipaşa\'da ilk şubemizi açtık' },
                { year: '2022', text: 'Vagoon ile festivallere taşındık' },
                { year: '2023', text: 'Temsa konteyner mağaza' },
                { year: '2024', text: 'Gürselpaşa ile yeni ritüel' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-12 border-l border-white/20 pl-8"
                >
                  <p className="text-5xl font-serif text-federico-orange font-light min-w-[120px]">
                    {item.year}
                  </p>
                  <p className="text-xl text-gray-300 font-light">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white hover:text-federico-orange transition-colors duration-300 font-light"
              >
                Tam Hikaye
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram - Minimal */}
      <section className="py-32 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <a
              href="https://instagram.com/federicocoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-serif text-federico-black hover:text-federico-orange transition-colors duration-300 font-light"
            >
              @federicocoffee
            </a>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
              'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
              'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
              'https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=400&q=80',
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://instagram.com/federicocoffee"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Federico ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal Elegance */}
      <section className="relative py-40 bg-federico-black text-white">
        <div className="container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-7xl font-serif mb-20 leading-tight font-light">
              Federico Ailesine<br />Katılın
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                href="/franchise" 
                className="px-16 py-6 border border-white text-white text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-federico-black transition-all duration-500 font-light"
              >
                Franchise
              </Link>
              <Link 
                href="/kariyer" 
                className="px-16 py-6 border border-white text-white text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-federico-black transition-all duration-500 font-light"
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
