'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Users, Award, CheckCircle, FileText } from 'lucide-react'

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
    experience: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form Data:', formData)
    setIsSubmitted(true)
    
    // 3 saniye sonra formu sıfırla
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        budget: '',
        experience: '',
        message: '',
      })
    }, 3000)
  }

  const benefits = [
    {
      icon: Award,
      title: 'Güçlü Marka',
      description: 'Tanınmış ve sevilen bir markanın gücünden yararlanın',
    },
    {
      icon: TrendingUp,
      title: 'Yüksek Karlılık',
      description: 'Kanıtlanmış iş modeli ile sürdürülebilir gelir',
    },
    {
      icon: Users,
      title: 'Tam Destek',
      description: 'Açılıştan işletmeye her aşamada profesyonel destek',
    },
    {
      icon: Briefcase,
      title: 'Eğitim',
      description: 'Kapsamlı eğitim programları ve sürekli gelişim',
    },
  ]

  const requirements = [
    '150-300 m² arası uygun işyeri',
    'Minimum 500.000 TL yatırım bütçesi',
    'Müşteri memnuniyeti odaklı çalışma anlayışı',
    'Restoran/cafe sektöründe deneyim (tercih sebebi)',
    'İşletme yönetimi becerisi',
    'Federico markasına olan inanç ve bağlılık',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920"
            alt="Federico Coffee Franchise"
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
          <Briefcase size={80} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Franchise Fırsatı
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Federico Coffee franchise modeliyle güçlü bir markanın parçası olun
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
              Neden Federico Franchise?
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              İş ortağımız olmanın avantajları
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

      {/* Requirements Section */}
      <section className="section-padding bg-federico-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                Franchise Gereksinimleri
              </h2>
              <p className="text-lg text-federico-gray mb-8 leading-relaxed">
                Federico Coffee franchise başvurusu için aşağıdaki kriterleri karşılamanızı bekliyoruz:
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-federico-orange flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-federico-gray">{requirement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
                alt="Federico Coffee Interior"
                fill
                className="object-cover"
              />
            </motion.div>
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
              Başvuru Formu
            </h2>
            <p className="text-lg text-federico-gray">
              Franchise başvurunuz için lütfen formu eksiksiz doldurun
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
                  En kısa sürede sizinle iletişime geçeceğiz.
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
                    <label htmlFor="city" className="label-field">
                      Şehir *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Adana"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="label-field">
                      Yatırım Bütçesi *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Seçiniz</option>
                      <option value="500k-750k">500.000 - 750.000 TL</option>
                      <option value="750k-1m">750.000 - 1.000.000 TL</option>
                      <option value="1m+">1.000.000 TL ve üzeri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="label-field">
                    Sektör Deneyimi
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Örn: 5 yıl restoran işletmeciliği"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-field">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="textarea-field"
                    placeholder="Franchise başvurunuz hakkında eklemek istediğiniz detaylar..."
                  />
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Not:</strong> Başvurunuz değerlendirildikten sonra 5-7 iş günü içinde tarafınıza dönüş yapılacaktır.
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

      {/* Download Brochure Section */}
      <section className="section-padding bg-gradient-to-br from-federico-orange to-orange-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FileText size={80} className="mx-auto mb-8 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Detaylı Bilgi Kataloğu
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Federico Coffee franchise modeli hakkında detaylı bilgileri içeren kataloğumuzu inceleyebilirsiniz.
            </p>
            <button
              className="inline-flex items-center gap-3 bg-white text-federico-orange px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <FileText size={28} />
              Kataloğu İndir (PDF)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-400">
              Federico franchise ailesinden görüşler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-federico-gray rounded-2xl p-8"
            >
              <p className="text-lg italic mb-6 leading-relaxed">
                "Federico ile iş ortaklığı kurmak harika bir karardı. Profesyonel destek ve güçlü marka 
                bilinirliği sayesinde ilk yıldan itibaren karlı bir işletme kurduk."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-federico-orange rounded-full flex items-center justify-center font-bold text-xl">
                  AY
                </div>
                <div>
                  <p className="font-semibold">Ahmet Yılmaz</p>
                  <p className="text-sm text-gray-400">Gazipaşa Franchise Sahibi</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-federico-gray rounded-2xl p-8"
            >
              <p className="text-lg italic mb-6 leading-relaxed">
                "Eğitim programları ve sürekli destek sayesinde hiç deneyimim olmadan başarılı bir 
                işletme yöneticisi oldum. Federico ailesinin bir parçası olmaktan gurur duyuyorum."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-federico-orange rounded-full flex items-center justify-center font-bold text-xl">
                  ZK
                </div>
                <div>
                  <p className="font-semibold">Zeynep Kara</p>
                  <p className="text-sm text-gray-400">Gürselpaşa Franchise Sahibi</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FranchisePage

