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
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 flex items-center justify-center hover:scale-105"
      aria-label="WhatsApp ile İletişim"
    >
      <MessageCircle size={24} />
    </a>
  )
}

export default WhatsAppButton
