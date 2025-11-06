# Federico Coffee Web Sitesi - Kurulum Kılavuzu

## 📋 Gereksinimler

- Node.js 18.0 veya üzeri
- npm veya yarn paket yöneticisi

## 🚀 Kurulum Adımları

### 1. Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
```

### 2. Çevre Değişkenlerini Ayarlayın

`.env.local.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.local.example .env.local
```

Ardından `.env.local` dosyasını düzenleyerek gerekli değişkenleri girin:

- Google Maps API anahtarınızı ekleyin
- WhatsApp numarasını güncelleyin
- Sosyal medya URL'lerini kontrol edin

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### 4. Production Build

```bash
npm run build
npm start
# veya
yarn build
yarn start
```

## 📁 Proje Yapısı

```
federico/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Ana sayfa
│   │   ├── hakkimizda/          # Hakkımızda sayfası
│   │   ├── subelerimiz/         # Şubeler sayfası
│   │   ├── online-satis/        # Online satış sayfası
│   │   ├── franchise/           # Franchise başvuru sayfası
│   │   ├── kariyer/             # Kariyer başvuru sayfası
│   │   ├── iletisim/            # İletişim sayfası
│   │   ├── layout.tsx           # Ana layout
│   │   └── globals.css          # Global stiller
│   └── components/
│       ├── Navbar.tsx           # Navigasyon
│       ├── Footer.tsx           # Alt bilgi
│       └── WhatsAppButton.tsx   # WhatsApp butonu
├── public/                      # Statik dosyalar (logo, resimler vb.)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Özelleştirme

### Renkler

`tailwind.config.js` dosyasında marka renklerini değiştirebilirsiniz:

```javascript
colors: {
  federico: {
    orange: '#FF6B35',
    black: '#1a1a1a',
    gray: '#333333',
    cream: '#F5F5F0',
  },
}
```

### Fontlar

`src/app/globals.css` dosyasında Google Fonts kullanılmaktadır:
- Montserrat (Sans-serif)
- Playfair Display (Serif)

### Görseller

Placeholder görseller Unsplash'ten kullanılmıştır. Gerçek proje için:
1. `public/images/` klasörüne kendi görsellerinizi ekleyin
2. Sayfalardaki image URL'lerini güncelleyin

## 📱 Responsive Tasarım

Site tamamen responsive olarak tasarlanmıştır:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Entegrasyonlar

### Google Maps

Şubeler ve İletişim sayfalarında Google Maps iframe'i eklemek için:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### Form Gönderimi

Form gönderimlerini backend'e bağlamak için:

1. API endpoint'i oluşturun (örn: `/api/contact`)
2. `handleSubmit` fonksiyonlarını güncelleyin
3. Fetch veya Axios ile POST isteği gönderin

Örnek:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setIsSubmitted(true)
    }
  } catch (error) {
    console.error('Form gönderimi hatası:', error)
  }
}
```

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub'a projeyi push edin
2. [Vercel](https://vercel.com)'e giriş yapın
3. Projeyi import edin
4. Environment variables'ı ayarlayın
5. Deploy edin

### Diğer Platformlar

- **Netlify**: Otomatik Next.js desteği
- **AWS Amplify**: AWS entegrasyonu
- **DigitalOcean**: App Platform

## 📞 Destek

Sorularınız için:
- E-posta: info@federicocoffee.com
- WhatsApp: +90 (5XX) XXX XX XX

## 📄 Lisans

© 2025 Federico Coffee. Tüm hakları saklıdır.

