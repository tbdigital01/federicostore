'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Youtube, Music2, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
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
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@federicocoffee.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Gazipaşa Mahallesi, Atatürk Caddesi No:45, Adana',
    },
  ]

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/federicocoffee' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@federicocoffee' },
    { icon: Music2, name: 'TikTok', url: 'https://tiktok.com/@federicocoffee' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center bg-white pt-20">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8">
              İletişim
            </h1>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto leading-relaxed">
              Sorularınız için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-federico-gray" size={20} />
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-federico-gray mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-federico-black">{info.content}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-federico-lightgray">
        <div className="container-custom max-w-2xl">
          {isSubmitted ? (
            <div className="text-center py-16">
              <CheckCircle size={48} className="text-federico-black mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Mesajınız Gönderildi</h3>
              <p className="text-sm text-federico-gray">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-field">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="label-field">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field bg-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="label-field">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field bg-white"
                >
                  <option value="">Seçiniz</option>
                  <option value="genel">Genel Bilgi</option>
                  <option value="sikayet">Şikayet</option>
                  <option value="oneri">Öneri</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label-field">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="textarea-field bg-white"
                />
              </div>

              <button type="submit" className="bg-federico-orange text-white px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 w-full">
                Gönder
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Takip Edin
            </h2>
          </div>

          <div className="flex justify-center gap-8">
            {socialMedia.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-federico-black transition-all duration-200"
                >
                  <Icon className="text-federico-gray hover:text-federico-black transition-colors" size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
