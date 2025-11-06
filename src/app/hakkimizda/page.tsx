'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const AboutPage = () => {
  const milestones = [
    {
      year: '2020–2021',
      title: 'Online Satışla Başlayan Bir Hikaye',
      description: 'Pandemiyle birlikte kahveye ulaşmanın en zor olduğu dönemde başladık. İyi kahveye ulaşmanın bir lüks değil, ihtiyaç olduğunu düşündük. Kendi kavurduğumuz taze çekirdekleri Türkiye\'nin her yerine göndermeye başladık.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    },
    {
      year: '2021',
      title: 'İlk Şube: Gazipaşa Toros Caddesi',
      description: 'Online satışın gördüğü büyük ilgi, fiziksel bir deneyimin doğmasını sağladı. Minimalist, sakin, lokal ve samimi bir atmosfer. İtalyan kahve kültürünün zarif sadeliğini, Adana\'nın sıcaklığıyla buluşturduk. Fazla değil, öz.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    },
    {
      year: '2022',
      title: 'Vagoon ve Etkinliklerde Dolaşan Federico',
      description: 'Kahveyi sokağa taşıdık. Vagoon Festival\'de yer alarak "Her yerde iyi kahve" mottosunu hayata geçirdik. İnsanlar Federico logosunu gördüğünde artık yalnızca bir kahve değil, iyi his, kaliteli zaman ve özgün bir deneyim hatırladı.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    },
    {
      year: '2024',
      title: 'Temsa Fabrikası Konteyner Mağaza',
      description: 'Yeni bir dönemin başlangıcı. Endüstriyel alanda bile sıcak, sade ve huzurlu bir atmosfer. Federico\'nun yenilikçi ve modüler mağaza anlayışının ilk örneği olarak büyüme vizyonunu şekillendirdi.',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-federico-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
            alt="Federico Hikaye"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-widest text-federico-orange mb-8">
              Hakkımızda
            </p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-white leading-none">
              Kahvenin Ötesinde,<br />Artık Yaşamın İçinde
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Federico, 2020'den bugüne uzanan bir kahve hikayesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-serif text-federico-black leading-relaxed">
              Federico'nun hikayesi, kahveye ulaşmanın en zor olduğu bir dönemde başladı. 
              Pandemiyle birlikte insanların evlerinden çıkamadığı, birçok işletmenin kapılarını 
              kapattığı günlerde, biz bu duruma farklı bir gözle baktık.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      {milestones.map((milestone, index) => (
        <section
          key={milestone.year}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-federico-lightgray'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                  {milestone.year}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-federico-black leading-tight">
                  {milestone.title}
                </h2>
                <p className="text-base text-federico-gray leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative h-[500px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Online Store */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                federicostore.com
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Tüm Türkiye'ye
              </h2>
              <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                <p>
                  Online satış serüvenimiz sadece başlangıçtı. Bugün federicostore.com, 
                  Federico'nun en geniş mağazası olarak Türkiye'nin her yerine ulaşıyor.
                </p>
                <p>
                  Kendi kavurduğumuz özel çekirdek kahveler, yöresel kahve çeşitleri, 
                  demleme ekipmanları ve aksesuarlar, her gün taptaze olarak gönderiliyor.
                </p>
                <p className="text-white font-serif text-lg">
                  Sadece bir e-ticaret platformu değil — kahve kültürünü dijital dünyaya taşıyan, 
                  Federico ruhunu evlere ulaştıran bir alan.
                </p>
              </div>
              <Link href="/online-satis" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-white hover:text-federico-orange transition-colors duration-300">
                Online Mağaza
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
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                alt="Federico Online"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roasting */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
                Kendi Kavurduğumuz
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-federico-black leading-tight">
                Özel Çekirdekler
              </h2>
              <p className="text-lg text-federico-gray leading-relaxed mb-8">
                Federico'nun merkezinde kahve çekirdeği var. Kahvelerimiz, dünyanın farklı bölgelerinden 
                özenle seçilen yeşil çekirdeklerden oluşur. Bu çekirdekler Adana'daki kavurma tesisimizde, 
                küçük partiler halinde, her kavrulma gününde taze olarak hazırlanır.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {['Özel Harmanlar', 'Single-Origin', 'Espresso & Filtre', 'Mikro-Lot Seriler'].map((item) => (
                  <div key={item}>
                    <p className="text-sm font-medium text-federico-black">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gürselpaşa - Big Highlight */}
      <section className="section-padding bg-federico-orange text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-xs uppercase tracking-widest text-white opacity-80 mb-6 text-center">
              Yeni Bir Ritüel Başlıyor
            </p>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 text-center leading-tight">
              Federico Gürselpaşa
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed opacity-90 mb-12">
              <p>
                Federico'nun yeni dönemini simgeleyen Gürselpaşa Şubesi, markamızın "yaşam markası"na 
                dönüşümünün başlangıcı. Bu yeni mekân, sadece kahve değil; günün her anına eşlik eden 
                bir deneyim sunuyor.
              </p>
              <p>
                Her sabah taze pişen pastalar ve bakery ürünleri, dengeyle hazırlanmış salata ve bowl çeşitleri, 
                taze içerikli kahvaltı ve atıştırmalık tabakları, doğal malzemelerle yapılan içecekler ve tatlılar 
                ile Federico artık bir kafe değil, yeni bir ritüelin adresi haline geliyor.
              </p>
              <p>
                Gürselpaşa'daki mağazamızda ayrıca bir <strong>şeffaf üretim mutfağı</strong> bulunuyor. 
                Burada her ürün, Federico kahvesi gibi günlük, sade ve özenle hazırlanıyor.
              </p>
              <p className="text-2xl font-serif">
                "Mutfaktan gelen taze hamur kokusu, kahvenin aromasıyla birleştiğinde mekânın atmosferi 
                tamamen Federico'ya özgü bir ruh kazanıyor."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 border-t border-b border-white border-opacity-30">
              {['Bakery', 'Bowl & Salata', 'Kahvaltı', 'Şeffaf Mutfak'].map((item) => (
                <div key={item}>
                  <p className="text-sm uppercase tracking-wider font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/subelerimiz" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:opacity-80 transition-opacity duration-300 border-b border-white pb-1">
                Gürselpaşa Şubesini Keşfet
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Federico Life */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
              Yakında
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-federico-black leading-tight">
              Federico Life
            </h2>
            <p className="text-lg text-federico-gray leading-relaxed">
              Yakında bu mekânda yalnızca yiyecek ve içecek değil, markanın ruhunu taşıyan özel 
              tekstil ürünleri, aksesuarlar ve koleksiyon parçaları da yer alacak. Hepsi sınırlı sayıda, 
              özenle tasarlanmış ve Federico'nun sade estetiğini yansıtan ürünler olacak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xs uppercase tracking-widest text-federico-orange mb-6">
              Marka Felsefemiz
            </p>
            <blockquote className="text-3xl md:text-4xl font-serif text-federico-black leading-tight mb-12">
              Federico; hızlı akan bir dünyada yavaşlamayı, kalabalıklar içinde sadeleşmeyi, 
              ve her yudumda gerçek olana dönmeyi savunur.
            </blockquote>
            <div className="space-y-4 text-lg text-federico-gray leading-relaxed">
              <p>Bizim için kahve bir içecek değil; bir duruş, bir nefes, bir denge anıdır.</p>
              <p>Federico'da kahve aceleyle içilmez.</p>
              <p>Zaman biraz yavaşlar, müzik hafifler, sohbet başlar.</p>
              <p>O anın içinde sadece kahve değil, bir bütünlük vardır.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Federico —<br />
              Kahvenin ötesinde,<br />
              sakinliğin içinde.
            </h2>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
