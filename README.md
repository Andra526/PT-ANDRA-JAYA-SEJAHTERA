# PT Andra Jaya Sejahtera – Company Profile Website

Website company profile profesional untuk PT Andra Jaya Sejahtera.

---

## 🚀 Instalasi & Development

```bash
npm install
npm run dev
```

Buka http://localhost:5173

---

## 🌐 Deploy ke GitHub Pages (Otomatis)

### Sekali Setup:

1. Push semua file ke GitHub repository bernama `PT-ANDRA-JAYA-SEJAHTERA`
2. Buka **Settings → Pages** di repository GitHub
3. Pilih Source: **GitHub Actions**
4. Klik **Save**

### Setiap Update:

```bash
git add .
git commit -m "update"
git push origin main
```

GitHub Actions akan otomatis build & deploy. Tunggu 2-3 menit, buka:
`https://andra526.github.io/PT-ANDRA-JAYA-SEJAHTERA/`

---

## 📁 Struktur Folder

```
pt-andra-jaya/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Auto deploy ke GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/           ← Semua komponen React
│   ├── data/index.ts         ← Edit data perusahaan di sini
│   ├── hooks/                ← Custom hooks
│   ├── types/                ← TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts            ← base URL GitHub Pages sudah dikonfigurasi
└── package.json
```

---

## ✏️ Ganti Data Perusahaan

Edit file **`src/data/index.ts`** untuk mengganti:
- Nama, alamat, kontak perusahaan
- Data layanan, proyek, tim
- Testimoni klien

Ganti semua `wa.me/6281234567890` dengan nomor WhatsApp asli.

---

## 🛠️ Build Manual

```bash
npm run build
```

Hasil build ada di folder `dist/` — bisa di-upload ke Rumahweb/hosting lain.

---

## 🎨 Fitur

- ✅ Dark Mode
- ✅ Responsive Mobile
- ✅ Smooth Scroll + Animasi
- ✅ Floating WhatsApp Button
- ✅ Back to Top Button
- ✅ Filter Proyek by Kategori
- ✅ Count-Up Statistics
- ✅ Form Kontak
- ✅ Google Maps Embed
- ✅ SEO Meta Tags
