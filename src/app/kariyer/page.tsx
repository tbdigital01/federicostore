'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Heart, TrendingUp, Award, CheckCircle, Upload } from 'lucide-react'

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    branch: '',
    experience: '',
    message: '',
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form Data:', formData)
    console.log('CV File:', selectedFile)
    setIsSubmitted(true)
    
    // 3 saniye sonra formu sıfırla
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        branch: '',
        experience: '',
        message: '',
      })
      setSelectedFile(null)
    }, 3000)
  }

  const benefits = [
    {
      icon: Heart,
      title: 'Sıcak Aile Ortamı',
      description: 'Samimi ve destekleyici bir çalışma atmosferi',
    },
    {
      icon: TrendingUp,
      title: 'Kariyer Gelişimi',
      description: 'Sürekli eğitim ve ilerleme fırsatları',
    },
    {
      icon: Award,
      title: 'Rekabetçi Maaş',
      description: 'Sektör standartlarının üzerinde ücret ve primler',
    },
    {
      icon: Users,
      title: 'Takım Ruhu',
      description: 'Birlikte başarmanın keyfini çıkarın',
    },
  ]

  const positions = [
    {
      title: 'Barista',
      description: 'Kahve hazırlama sanatında uzmanlaşmak isteyenler için',
      requirements: [
        'Temiz ve düzenli çalışma alışkanlığı',
        'İletişim becerisi',
        'Vardiyalı çalışmaya uyum',
        'Deneyim gerekmez, eğitim verilir',
      ],
    },
    {
      title: 'Servis Elemanı',
      description: 'Müşteri memnuniyetini ön planda tutan pozisyon',
      requirements: [
        'Güler yüzlü ve enerjik olmak',
        'Müşteri odaklı çalışma',
        'Hızlı ve dikkatli olma yeteneği',
        'Takım çalışmasına uygun',
      ],
    },
    {
      title: 'Şube Müdürü',
      description: 'Şube operasyonlarını yönetmek isteyenler için',
      requirements: [
        'En az 2 yıl yöneticilik deneyimi',
        'Liderlik ve yönetim becerileri',
        'Cafe/restoran sektörü bilgisi',
        'Sorumluluk sahibi ve çözüm odaklı',
      ],
    },
    {
      title: 'Temizlik Personeli',
      description: 'Hijyen ve temizlik standartlarının korunması',
      requirements: [
        'Temizlik konusunda titiz olmak',
        'Hijyen kurallarına uyum',
        'Düzenli ve organize çalışma',
        'Fiziksel olarak aktif olabilme',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
            alt="Federico Coffee Kariyer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-federico-orange/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <Users size={80} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Kariyer Fırsatları
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Federico ailesinin bir parçası olun ve kahve tutkusunu kariyerinize dönüştürün
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              Neden Federico'da Çalışmalı?
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Ekibimize katılmanın avantajları
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-federico-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-federico-orange bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-federico-orange" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-federico-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-federico-gray">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
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
              Açık Pozisyonlar
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Size uygun pozisyonu bulun ve başvurun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-serif font-bold text-federico-black mb-3">
                  {position.title}
                </h3>
                <p className="text-federico-gray mb-6">{position.description}</p>
                <div className="space-y-3 mb-6">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-federico-orange flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-sm text-federico-gray">{req}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-4">
              İş Başvuru Formu
            </h2>
            <p className="text-lg text-federico-gray">
              Federico ailesine katılmak için başvurunuzu yapın
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-federico-cream rounded-2xl p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-bold text-federico-black mb-4">
                  Başvurunuz Alındı!
                </h3>
                <p className="text-lg text-federico-gray">
                  Değerlendirme sürecinden sonra sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="label-field">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="label-field">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="label-field">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-field">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="position" className="label-field">
                      Başvurulan Pozisyon *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Seçiniz</option>
                      <option value="barista">Barista</option>
                      <option value="servis">Servis Elemanı</option>
                      <option value="yonetici">Şube Müdürü</option>
                      <option value="temizlik">Temizlik Personeli</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="branch" className="label-field">
                      Tercih Edilen Şube
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Seçiniz</option>
                      <option value="gazipasa">Gazipaşa</option>
                      <option value="temsa">Temsa Konteyner</option>
                      <option value="gurselpasa">Gürselpaşa</option>
                      <option value="farketmez">Farketmez</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="label-field">
                    Deneyim ve Yetenekler
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Örn: 2 yıl barista deneyimi, kahve yapım teknikleri"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-field">
                    Başvuru Mektubunuz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="textarea-field"
                    placeholder="Neden Federico'da çalışmak istediğinizi kısaca anlatın..."
                  />
                </div>

                <div>
                  <label className="label-field">
                    CV / Özgeçmiş Yükle
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cv-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex items-center justify-center gap-3 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-federico-orange hover:bg-gray-50 transition-all"
                    >
                      <Upload className="text-federico-orange" size={24} />
                      <span className="text-federico-gray">
                        {selectedFile ? selectedFile.name : 'PDF, DOC veya DOCX dosyası seçin'}
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Maksimum dosya boyutu: 5 MB
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Bilgilendirme:</strong> Başvurunuz incelendikten sonra uygun görülürse 
                    mülakat için sizinle iletişime geçilecektir.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  Başvuruyu Gönder
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Federico Kültürü
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                <p>
                  Federico Coffee'de çalışmak sadece bir iş değil, bir yaşam tarzıdır. 
                  Ekibimiz, kahve tutkusunu ve müşteri memnuniyetini en üst seviyede tutan bireylerden oluşur.
                </p>
                <p>
                  Her gün yeni şeyler öğrenebilir, kendinizi geliştirebilir ve profesyonel kariyerinizde 
                  ilerleyebilirsiniz. Takım ruhunu ve aile ortamını bir arada yaşatan bir ekip olarak, 
                  her başarıyı birlikte kutlarız.
                </p>
                <p>
                  Çalışanlarımızın mutluluğu bizim için önceliktir. Bu nedenle sürekli gelişim, 
                  adil ücret ve sıcak bir çalışma ortamı sunuyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
                alt="Federico Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerPage

