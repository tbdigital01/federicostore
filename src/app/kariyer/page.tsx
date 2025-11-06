'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Upload } from 'lucide-react'

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    branch: '',
    message: '',
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        branch: '',
        message: '',
      })
      setSelectedFile(null)
    }, 3000)
  }

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
              Kariyer
            </h1>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto leading-relaxed">
              Federico ailesine katılın
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom max-w-2xl">
          {isSubmitted ? (
            <div className="text-center py-16">
              <CheckCircle size={48} className="text-federico-black mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Başvurunuz Alındı</h3>
              <p className="text-sm text-federico-gray">
                Değerlendirme sürecinden sonra sizinle iletişime geçeceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="label-field">Ad</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="label-field">Soyad</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="label-field">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label-field">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="position" className="label-field">Pozisyon</label>
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
                    <option value="servis">Servis</option>
                    <option value="yonetici">Yönetici</option>
                    <option value="temizlik">Temizlik</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="branch" className="label-field">Şube</label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Seçiniz</option>
                    <option value="gazipasa">Gazipaşa</option>
                    <option value="temsa">Temsa</option>
                    <option value="gurselpasa">Gürselpaşa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label-field">CV Yükle</label>
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="cv-upload"
                  className="flex items-center justify-center gap-3 w-full px-4 py-6 border border-gray-200 cursor-pointer hover:border-federico-black transition-all duration-200"
                >
                  <Upload className="text-federico-gray" size={20} />
                  <span className="text-sm text-federico-gray">
                    {selectedFile ? selectedFile.name : 'PDF, DOC veya DOCX'}
                  </span>
                </label>
              </div>

              <div>
                <label htmlFor="message" className="label-field">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="textarea-field"
                />
              </div>

              <button type="submit" className="bg-federico-orange text-white px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 w-full">
                Başvur
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default CareerPage
