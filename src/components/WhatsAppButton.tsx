'use client'

import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '905XXXXXXXXX' // Gerçek numara ile değiştirilecek
  const message = 'Merhaba, Federico Coffee hakkında bilgi almak istiyorum.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-bounce"
      aria-label="WhatsApp ile İletişim"
    >
      <MessageCircle size={28} />
    </a>
  )
}

export default WhatsAppButton

