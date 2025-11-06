'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        budget: '',
        message: '',
      })
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
              Franchise
            </h1>
            <p className="text-lg text-federico-gray max-w-2xl mx-auto leading-relaxed">
              Federico Coffee ile güçlü bir markanın parçası olun
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
                En kısa sürede sizinle iletişime geçeceğiz.
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
                  <label htmlFor="city" className="label-field">Şehir</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="label-field">Bütçe</label>
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
                    <option value="1m+">1.000.000 TL+</option>
                  </select>
                </div>
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

              <button type="submit" className="btn-primary w-full">
                Başvur
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default FranchisePage
