'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Circle } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <>
      {/* Hero - Immersive Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1501492673258-eecdb8fe3c00?w=1920&q=80"
            alt="Federico Gürselpaşa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-federico-black/60 via-federico-black/70 to-federico-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="inline-flex items-center gap-3 px-8 py-3 border border-federico-orange/30 backdrop-blur-sm mb-12"
            >
              <Circle size={6} className="fill-federico-orange text-federico-orange animate-pulse" />
              <p className="text-xs uppercase tracking-[0.4em] text-federico-orange font-light">
                Yakında
              </p>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif mb-10 leading-[0.9] tracking-tighter font-light">
              Yeni Bir Ritüel<br />Başlıyor
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-4xl mb-2 font-light tracking-wide">
                Federico Gürselpaşa
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                <span>Şeffaf Mutfak</span>
                <span>·</span>
                <span>Taze Üretim</span>
                <span>·</span>
                <span>Özel Kahve</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                href="/subelerimiz" 
                className="group px-14 py-5 bg-white text-federico-black text-xs uppercase tracking-[0.3em] hover:bg-federico-orange hover:text-white transition-all duration-700 flex items-center gap-3 font-medium"
              >
                Keşfet
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link 
                href="/online-satis" 
                className="group px-14 py-5 border border-white/30 backdrop-blur-sm text-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-federico-black hover:border-white transition-all duration-700 font-medium"
              >
                Online Store
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">Scroll</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Image Break - Full Bleed with Text Overlay */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
          alt="Federico Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-federico-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center text-white text-center px-6"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] mb-6 font-light">Gürselpaşa</p>
            <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">
              Kahvenin Ötesinde<br />Bir Deneyim
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Split - Gürselpaşa Detail */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 group overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80"
              alt="Şeffaf Mutfak"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-federico-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
          
          <div className="flex items-center justify-center py-32 px-8 lg:px-20 bg-white order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-federico-black text-white text-[10px] uppercase tracking-[0.4em] mb-16">
                <Circle size={4} className="fill-white text-white" />
                <span>Yeni Açılıyor</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-serif mb-12 leading-[0.95] font-light tracking-tight">
                Şeffaf<br />Mutfak
              </h2>
              
              <div className="w-20 h-[2px] bg-federico-orange mb-12" />
              
              <p className="text-xl text-federico-gray leading-relaxed mb-10 font-light">
                Her sabah taze pişen pastalar, özenle hazırlanan yemekler. 
                Üretim sürecimizin her anını görebilirsiniz.
              </p>
              
              <div className="space-y-6 mb-12">
                {['Günlük Taze Pasta Üretimi', 'Bowl & Salata Bar', 'Özel Kahve Menüsü'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-1.5 h-1.5 bg-federico-orange rounded-full" />
                    <p className="text-base text-federico-gray font-light">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <Link 
                href="/subelerimiz" 
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-federico-black hover:text-federico-orange transition-colors duration-300 group font-light"
              >
                Detayları Gör
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote - Full Section */}
      <section className="relative py-48 bg-federico-lightgray overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="container-custom px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="w-20 h-[1px] bg-federico-orange mx-auto mb-16" />
            <blockquote className="text-4xl md:text-6xl lg:text-8xl font-serif text-federico-black leading-[1.15] mb-20 font-light">
              "Her fincan kahve<br />
              bir coğrafyanın,<br />
              bir yolculuğun<br />
              temsilcisidir."
            </blockquote>
            <div className="w-20 h-[1px] bg-federico-orange mx-auto mb-10" />
            <p className="text-xs uppercase tracking-[0.5em] text-federico-gray font-light">
              Federico Felsefesi
            </p>
          </div>
        </motion.div>
      </section>

      {/* Triple Image Grid with Hover Details */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {[
          {
            image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
            title: 'Özel Çekirdekler',
            location: 'Guatemala, Etiyopya, Kolombiya',
            desc: 'Özenle seçilmiş, tek köken kahveler'
          },
          {
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
            title: 'Günlük Kavurma',
            location: 'Adana Tesisimiz',
            desc: 'Her gün taze kavrulmuş kahve çekirdekleri'
          },
          {
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
            title: 'Barista Sanatı',
            location: 'Özenle Hazırlanan',
            desc: 'Her fincan bir sanat eseri'
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative h-[700px] group overflow-hidden cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-federico-black via-federico-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-federico-orange mb-4 font-light">
                  {item.location}
                </p>
                <h3 className="text-4xl md:text-5xl font-serif mb-4 font-light">
                  {item.title}
                </h3>
                <div className="w-12 h-[1px] bg-white/40 mb-6 group-hover:w-20 group-hover:bg-federico-orange transition-all duration-500" />
                <p className="text-base text-white/70 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Story Timeline - Enhanced Dark */}
      <section className="relative py-48 bg-federico-black text-white overflow-hidden">
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-32">
              <p className="text-xs uppercase tracking-[0.5em] text-federico-orange mb-8 font-light">
                Hikayemiz
              </p>
              <h2 className="text-6xl md:text-8xl font-serif leading-[1.05] font-light">
                2020 — 2024
              </h2>
            </div>

            <div className="space-y-24">
              {[
                { year: '2020', text: 'Pandemi döneminde online satışla başladık', detail: 'İlk adım' },
                { year: '2021', text: 'Gazipaşa\'da ilk şubemizi açtık', detail: 'İlk mekân' },
                { year: '2022', text: 'Vagoon ile festivallere taşındık', detail: 'Mobil kahve' },
                { year: '2023', text: 'Temsa konteyner mağaza', detail: 'Yeni konsept' },
                { year: '2024', text: 'Gürselpaşa ile yeni ritüel', detail: 'Bugün' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group"
                >
                  <div className="md:col-span-3 text-center md:text-right">
                    <p className="text-6xl md:text-7xl font-serif text-federico-orange font-light group-hover:scale-110 transition-transform duration-500">
                      {item.year}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-2 font-light">
                      {item.detail}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-[2px] h-20 bg-white/20 group-hover:bg-federico-orange transition-colors duration-500" />
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-32">
              <Link 
                href="/hakkimizda" 
                className="inline-flex items-center gap-3 px-12 py-5 border border-white/30 text-xs uppercase tracking-[0.3em] text-white hover:bg-white hover:text-federico-black hover:border-white transition-all duration-700 font-light"
              >
                Tam Hikaye
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram - Refined */}
      <section className="py-40 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-federico-gray mb-6 font-light">
              Günlük Anlar
            </p>
            <a
              href="https://instagram.com/federicocoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl font-serif text-federico-black hover:text-federico-orange transition-colors duration-500 font-light inline-block"
            >
              @federicocoffee
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Federico ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-[1500ms]"
                />
                <div className="absolute inset-0 bg-federico-orange/0 group-hover:bg-federico-orange/20 transition-colors duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="relative py-48 bg-federico-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-federico-orange/5 via-transparent to-transparent" />
        
        <div className="relative z-10 container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-[1px] bg-federico-orange mx-auto mb-16" />
            
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[1.05] font-light">
              Federico Ailesine<br />Katılın
            </h2>
            
            <p className="text-xl text-white/60 mb-20 font-light max-w-2xl mx-auto">
              Franchise fırsatları ve kariyer imkanları hakkında bilgi alın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                href="/franchise" 
                className="group px-16 py-6 border border-white/30 text-white text-xs uppercase tracking-[0.4em] hover:bg-federico-orange hover:border-federico-orange transition-all duration-700 font-light flex items-center justify-center gap-3"
              >
                Franchise
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link 
                href="/kariyer" 
                className="group px-16 py-6 border border-white/30 text-white text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-federico-black hover:border-white transition-all duration-700 font-light flex items-center justify-center gap-3"
              >
                Kariyer
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
