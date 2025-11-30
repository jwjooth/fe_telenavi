# fe_telenavi

Deskripsi singkat:
Aplikasi frontend fe_telenavi — aplikasi antarmuka (frontend) berbasis JavaScript, HTML, dan CSS. README ini dibuat sebagai dokumentasi lengkap untuk pengembang dan kontributor agar dapat menjalankan, membangun, dan mengembangkan proyek ini dengan cepat.

## Daftar Isi
- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)
- [Instalasi & Menjalankan Secara Lokal](#instalasi--menjalankan-secara-lokal)
- [Variabel Lingkungan (.env)](#variabel-lingkungan-env)
- [Skrip (npm/yarn)](#skrip-npmyarn)
- [Struktur Direktori (Direkomendasikan)](#struktur-direktori-direkomendasikan)
- [Style Guide & Best Practices](#style-guide--best-practices)
- [Testing & Debugging](#testing--debugging)
- [Build & Deploy](#build--deploy)
- [Aksesibilitas & Performa](#aksesibilitas--performa)
- [Contributing](#contributing)
- [Issue & Pull Request Template (Saran)](#issue--pull-request-template-saran)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)
- [License & Penulis](#license--penulis)
- [Kontak](#kontak)

---

## Tentang Proyek
fe_telenavi merupakan frontend aplikasi web yang bertujuan sebagai tampilan luar dan terdepan untuk aplikasi/web dari telenavi. Proyek ini dibuat dengan fokus pada pengalaman pengguna (UX), modularitas komponen, dan kemudahan integrasi dengan API backend.

## Fitur
- [ ] Halaman utama / Dashboard
- [ ] Komponen peta / visualisasi
- [ ] Autentikasi (login/logout) — sesuaikan kalau ada
- [ ] Konsumsi API untuk data dinamis
- [ ] Responsif (mobile + desktop)
- [ ] Unit test / integration test (jika tersedia)
- Tambahkan daftar fitur lain sesuai kebutuhan proyek

## Teknologi yang Digunakan
- Bahasa: JavaScript, HTML, CSS
- Library/Framework (opsional — ubah sesuai implementasi):
  - React
  - Bundler: Vite
- Tooling:
  - Node.js (LTS)
  - npm
  - ESLint, Prettier

## Prasyarat
Pastikan kamu memiliki:
- Node.js versi rekomendasi: 16.x / 18.x (sesuaikan)  
- npm >= 8 atau yarn >= 1.22  
- Git

Cek versi:
```bash
node -v
npm -v
# atau
yarn -v
```

## Instalasi & Menjalankan Secara Lokal
1. Clone repo:
```bash
git clone https://github.com/jwjooth/fe_telenavi.git
cd fe_telenavi
```

2. Pasang dependensi:
```bash
# menggunakan npm
npm install

# atau menggunakan yarn
yarn install
```

3. Menjalankan server pengembangan:
```bash
# npm
npm run dev

# atau yarn
yarn dev
```
Buka http://localhost:3000 atau port lain yang ditunjukkan di terminal.

## Variabel Lingkungan (.env)
Buat file `.env` di root proyek (jangan commit ke repo jika berisi secret). Contoh variabel:
```env
VITE_API_BASE_URL=https://api.example.com
REACT_APP_API_BASE_URL=https://api.example.com
NODE_ENV=development
# TOKEN_KEY=your_token_here (jika diperlukan)
```
Sesuaikan nama variabel sesuai bundler/framework yang digunakan (mis. VITE_, REACT_APP_).

## Skrip (npm/yarn)
Contoh skrip umum (sesuaikan package.json di repo):
```json
{
  "scripts": {
    "dev": "vite",         // atau react-scripts start / vue-cli-service serve
    "build": "vite build",
    "preview": "vite preview",
    "start": "serve -s dist",
    "lint": "eslint src --fix",
    "format": "prettier --write .",
    "test": "jest"
  }
}
```
Jalankan:
```bash
npm run build
npm run preview
npm run lint
npm test
```

## Style Guide & Best Practices
- Gunakan linting (ESLint) dan formatting (Prettier).
- Ikuti konvensi penamaan komponen dan file.
- Komponen harus kecil & terpisah tanggung jawabnya.
- Hindari penyimpanan token di localStorage tanpa enkripsi (pertimbangkan HttpOnly cookies).
- Buat dokumentasi inline (JSDoc / komentar) untuk fungsi penting.

## Testing & Debugging
- Unit test: Jest atau framework pilihan (mocha/ava).
- Integration test / E2E: Cypress / Playwright.
Contoh menjalankan test:
```bash
npm run test
# atau
yarn test
```
Gunakan source maps untuk debugging local dan tambahkan logging yang bisa di-nonaktifkan di produksi.

## Build & Deploy
1. Build produksi:
```bash
npm run build
```
2. Hasil build berada di folder `dist` atau `build` tergantung tooling.
3. Deploy ke:
   - GitHub Pages (untuk build static)
   - Netlify / Vercel / Firebase Hosting
   - Server static (nginx, S3 + CloudFront)
Contoh deploy GitHub Pages (jika React dan package `gh-pages`):
```bash
npm run build
npm run deploy
```
(Implementasikan skrip deploy di package.json sesuai kebutuhan.)

## Aksesibilitas & Performa
- Gunakan semantic HTML.
- Pastikan kontras warna memadai.
- Tambahkan alt pada gambar.
- Optimalkan bundle: code-splitting, lazy-loading, tree-shaking.
- Gunakan Lighthouse untuk audit performa dan aksesibilitas.

## Contributing
1. Fork repo
2. Buat branch fitur:
```bash
git checkout -b feat/nama-fitur
```
3. Commit perubahan:
```bash
git commit -m "feat: menambah fitur X"
git push origin feat/nama-fitur
```
4. Buka Pull Request dengan penjelasan perubahan dan checklist testing.

Aturan kontribusi (saran):
- Gunakan Conventional Commits (feat, fix, chore, docs, refactor).
- Sertakan test untuk perubahan yang relevan.
- Update README / dokumentasi bila menambah fitur.

## Issue & Pull Request Template (Saran)
Sertakan template untuk issue/PR di `.github/ISSUE_TEMPLATE` dan `.github/PULL_REQUEST_TEMPLATE.md` agar informasi konsisten:
- Judul yang jelas
- Langkah mereproduksi
- Ekspektasi vs realita
- Screenshot / logs

## Troubleshooting
- Jika dependensi error: hapus `node_modules` dan `package-lock.json`/`yarn.lock`, lalu reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```
- Jika port terpakai: ubah port atau matikan proses yang menggunakan port tersebut.
- Error environment variables: cek apakah file `.env` telah dibuat dan direferensikan dengan benar.

## Changelog
Gunakan format CHANGELOG.md atau gunakan tag git + release notes. Contoh entry:
- 0.1.0 - Inisialisasi proyek dan fitur dasar

## Penulis  
Penulis: Jordan Theovandy (https://github.com/jwjooth)

## Kontak
- GitHub: https://github.com/jwjooth  
- Email: jordantheovandyferdinand@gmail.com

---
