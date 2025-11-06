# 🚀 Federico Coffee - Hızlı Başlangıç

## 5 Dakikada Projeyi Çalıştırın!

### 1️⃣ Kurulum
```bash
cd /Users/tolgabarhun/Desktop/federico
npm install
```

### 2️⃣ Geliştirme Sunucusunu Başlat
```bash
npm run dev
```

### 3️⃣ Tarayıcıda Aç
[http://localhost:3000](http://localhost:3000)

---

## 📁 Proje Dosya Yapısı (Hızlı Bakış)

```
federico/
│
├── src/
│   ├── app/                      # Sayfalar (Next.js App Router)
│   │   ├── page.tsx             # 🏠 Ana Sayfa
│   │   ├── hakkimizda/          # 📖 Hakkımızda
│   │   ├── subelerimiz/         # 📍 Şubeler
│   │   ├── online-satis/        # 🛒 Online Satış
│   │   ├── franchise/           # 💼 Franchise
│   │   ├── kariyer/             # 👥 Kariyer
│   │   ├── iletisim/            # 📞 İletişim
│   │   ├── layout.tsx           # Ana Layout
│   │   └── globals.css          # Global CSS
│   │
│   └── components/              # Yeniden Kullanılabilir Komponentler
│       ├── Navbar.tsx           # Navigasyon
│       ├── Footer.tsx           # Alt Bilgi
│       └── WhatsAppButton.tsx   # WhatsApp Butonu
│
├── public/                      # Statik Dosyalar
│   └── robots.txt
│
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind Config
├── tsconfig.json                # TypeScript Config
├── next.config.js               # Next.js Config
│
└── Dokümantasyon/
    ├── README.md                # Genel Bilgi
    ├── KURULUM.md              # Detaylı Kurulum
    ├── FEATURES.md             # Özellikler
    └── YAPILACAKLAR.md         # To-Do List
```

---

## 🎨 Hızlı Özelleştirme

### Renkleri Değiştir
**Dosya:** `tailwind.config.js`
```javascript
colors: {
  federico: {
    orange: '#FF6B35',  // Ana marka rengi
    black: '#1a1a1a',   // Koyu renk
    gray: '#333333',    // Gri
    cream: '#F5F5F0',   // Açık arka plan
  },
}
```

### İletişim Bilgilerini Güncelle
**Dosya:** `src/components/Footer.tsx` ve ilgili sayfa bileşenleri
- Telefon numarası
- E-posta
- Adres
- Sosyal medya linkleri

### WhatsApp Numarasını Değiştir
**Dosya:** `src/components/WhatsAppButton.tsx`
```typescript
const phoneNumber = '905XXXXXXXXX' // Buraya gerçek numarayı girin
```

---

## 📝 Hızlı Görevler

### ✅ Hemen Yapılması Gerekenler

1. **Gerçek Görseller Ekle**
   - `public/images/` klasörüne logo ve şube fotoğrafları
   - Sayfalardaki Unsplash URL'lerini değiştir

2. **İletişim Bilgilerini Güncelle**
   - Tüm sayfalarda telefon, e-posta, adres bilgileri
   - WhatsApp numarası

3. **Sosyal Medya Linklerini Güncelle**
   - Footer'da Instagram, YouTube, TikTok linkleri
   - Her sayfadaki sosyal medya butonları

4. **Google Maps Ekle**
   - API key al
   - Şubeler sayfasına harita ekle
   - İletişim sayfasına konum ekle

5. **Form Backend'i Bağla**
   - İletişim formu
   - Franchise başvuru formu
   - Kariyer başvuru formu

---

## 🛠️ Sık Kullanılan Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production çalıştır
npm start

# Lint kontrolü
npm run lint

# Dependencies güncelle
npm update

# Yeni dependency ekle
npm install [package-name]
```

---

## 🎯 Sayfa URL'leri

- 🏠 Ana Sayfa: `/`
- 📖 Hakkımızda: `/hakkimizda`
- 📍 Şubeler: `/subelerimiz`
- 🛒 Online Satış: `/online-satis`
- 💼 Franchise: `/franchise`
- 👥 Kariyer: `/kariyer`
- 📞 İletişim: `/iletisim`

---

## 🐛 Sorun Giderme

### Port 3000 kullanılıyor hatası?
```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### Node modules hata veriyor?
```bash
# Node modules'ı sil ve yeniden yükle
rm -rf node_modules
npm install
```

### Build hatası?
```bash
# Cache'i temizle
rm -rf .next
npm run build
```

### TypeScript hataları?
```bash
# TypeScript'i kontrol et
npx tsc --noEmit
```

---

## 📚 Daha Fazla Bilgi

- **Detaylı Kurulum**: `KURULUM.md`
- **Tüm Özellikler**: `FEATURES.md`
- **Yapılacaklar**: `YAPILACAKLAR.md`
- **Ana README**: `README.md`

---

## 🚀 Deploy

### Vercel (Önerilen)
1. GitHub'a push et
2. [vercel.com](https://vercel.com) ile bağla
3. Otomatik deploy!

### Netlify
1. GitHub'a push et
2. [netlify.com](https://netlify.com) ile bağla
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## 💡 İpuçları

- **Hot Reload**: Kod değişikliklerini yaptığınızda sayfa otomatik yenilenir
- **Console**: Hataları görmek için tarayıcı console'unu açık tutun (F12)
- **Mobile Test**: Responsive kontrolü için Chrome DevTools (F12) kullanın
- **Performance**: Lighthouse (Chrome DevTools) ile performansı ölçün

---

## 📞 Yardım

Sorularınız için:
- 📧 E-posta: info@federicocoffee.com
- 📱 WhatsApp: +90 (5XX) XXX XX XX

---

**🎉 Başarılar! Federico Coffee web siteniz hazır!**

