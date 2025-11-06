'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Instagram, Youtube, Music2, Send, MessageCircle, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (322) 123 45 67',
      href: 'tel:+903221234567',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@federicocoffee.com',
      href: 'mailto:info@federicocoffee.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Gazipaşa Mahallesi, Atatürk Caddesi No:45, Adana',
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Hafta İçi: 08:00 - 23:00 | Hafta Sonu: 09:00 - 24:00',
      href: null,
    },
  ]

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@federicocoffee',
      url: 'https://instagram.com/federicocoffee',
      color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@federicocoffee',
      url: 'https://youtube.com/@federicocoffee',
      color: 'bg-red-600',
    },
    {
      icon: Music2,
      name: 'TikTok',
      handle: '@federicocoffee',
      url: 'https://tiktok.com/@federicocoffee',
      color: 'bg-black',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920"
            alt="Federico Coffee İletişim"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <MessageCircle size={80} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            İletişim
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-federico-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-federico-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-federico-orange" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-federico-black mb-2">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-federico-gray hover:text-federico-orange transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-federico-gray text-sm">{info.content}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-federico-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                Bize Yazın
              </h2>
              <p className="text-lg text-federico-gray mb-8">
                Formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-serif font-bold text-federico-black mb-4">
                      Mesajınız Gönderildi!
                    </h3>
                    <p className="text-lg text-federico-gray">
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="label-field">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Adınız ve Soyadınız"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="0555 123 45 67"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="label-field">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Seçiniz</option>
                        <option value="genel">Genel Bilgi</option>
                        <option value="sikayet">Şikayet</option>
                        <option value="oneri">Öneri</option>
                        <option value="franchise">Franchise</option>
                        <option value="kariyer">Kariyer</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-field">
                        Mesajınız *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="textarea-field"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-lg flex items-center justify-center gap-2">
                      <Send size={20} />
                      Gönder
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-federico-black mb-6">
                  Konumumuz
                </h2>
                <div className="relative w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  {/* Google Maps iframe buraya eklenecek */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-federico-orange to-federico-black text-white">
                    <div className="text-center p-8">
                      <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-xl font-semibold">
                        Google Maps Entegrasyonu
                      </p>
                      <p className="text-sm mt-2 opacity-75">
                        Gerçek Google Maps embed kodu buraya eklenecek
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-[#25D366] text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle size={48} />
                  <div>
                    <h3 className="text-2xl font-bold">WhatsApp ile İletişim</h3>
                    <p className="text-green-100">Hızlı cevap için bizi arayın</p>
                  </div>
                </div>
                <p className="mb-6 text-green-50">
                  Anında yanıt almak ve sorularınızı hızlıca çözmek için WhatsApp üzerinden 
                  bizimle iletişime geçebilirsiniz.
                </p>
                <a
                  href="https://wa.me/905XXXXXXXXX?text=Merhaba, Federico Coffee hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#25D366] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={24} />
                  WhatsApp ile Mesaj Gönder
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
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
              Sosyal Medyada Biz
            </h2>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto">
              Güncel içerikler, kampanyalar ve kahve dünyasından haberler için bizi takip edin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`${social.color} text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                    <Icon size={64} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                    <p className="text-white text-opacity-90">{social.handle}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-federico-black text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-400">
              Merak edilenler
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Franchise başvurusu nasıl yapabilirim?',
                a: 'Franchise sayfamızdaki başvuru formunu doldurarak bizimle iletişime geçebilirsiniz. Başvurunuz değerlendirildikten sonra detaylı bilgi için sizinle iletişime geçilecektir.',
              },
              {
                q: 'Online sipariş için kargo ücreti ne kadar?',
                a: '150 TL ve üzeri alışverişlerde kargo ücretsizdir. 150 TL altı siparişlerde kargo ücreti 29,90 TL\'dir.',
              },
              {
                q: 'Şubelerinizde WiFi var mı?',
                a: 'Evet, tüm şubelerimizde müşterilerimize ücretsiz WiFi hizmeti sunulmaktadır.',
              },
              {
                q: 'İş başvurusu yaptım, ne zaman dönüş alacağım?',
                a: 'İş başvurularınız 5-7 iş günü içinde değerlendirilir ve uygun görülen adaylara telefon veya e-posta yoluyla dönüş yapılır.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-federico-gray rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-federico-orange">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

