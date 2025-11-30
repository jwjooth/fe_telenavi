<<<<<<< HEAD
# Telenavi Login Page - Frontend Documentation

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Setup & Installation](#setup--installation)
4. [Project Structure](#project-structure)
5. [Features](#features)
6. [Component Architecture](#component-architecture)
7. [Validation Rules](#validation-rules)
8. [Styling & Responsiveness](#styling--responsiveness)
9. [Development](#development)
10. [Troubleshooting](#troubleshooting)

---

## Overview

**Telenavi Login Page** adalah aplikasi frontend modern untuk login dengan fitur responsif penuh (desktop & mobile), validasi form yang ketat, dan integrasi localStorage.

### Key Features
- ✅ Fully Responsive Design (Desktop ≥1024px & Mobile ≤768px)
- ✅ Real-time Email & Password Validation
- ✅ Error Message Display
- ✅ Success Alert & Feedback
- ✅ LocalStorage Integration
- ✅ Professional UI/UX
- ✅ Accessible Form Controls

---

## Tech Stack

| Component | Version |
|-----------|---------|
| React | 18.x |
| Vite | 5.x |
| JavaScript | ES6+ |
| CSS | CSS3 / Tailwind CSS |
| Node.js | 16.x+ |
| npm | 8.x+ |

---

## Setup & Installation

### Prerequisites
```bash
- Node.js 16.x atau lebih tinggi
- npm 8.x atau lebih tinggi
- Browser modern (Chrome, Firefox, Safari, Edge)
```

### Step-by-Step Installation

#### 1. Clone Repository
```bash
git clone <repository-url>
cd todo-login
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start Development Server
```bash
npm run dev
```

Server akan berjalan di: **http://localhost:5173**

#### 4. Build untuk Production
```bash
npm run build
```

Build output akan tersimpan di folder `dist/`

---

## Project Structure

```
fe_telenavi/
├── src/
│   ├── components/
│   │   └── (component files jika ada)
│   ├── LoginPage.jsx               # Main Login Component
│   ├── LoginPage.css               # Login Styling
│   ├── App.jsx                     # Root Component
│   ├── main.jsx                    # Application Entry Point
│   └── index.css                   # Global Styles
├── public/
│   └── vite.svg
├── index.html                      # HTML Template
├── vite.config.js                  # Vite Configuration
├── package.json                    # Dependencies & Scripts
├── .gitignore
└── README.md
```

---

## Features

### 1. Responsive Layout

#### Desktop (≥1024px)
- **Layout:** 2 Column (Banner Left, Form Right)
- **Banner:** Full-height background image
- **Form:** Centered on right side
- **Width:** Maximum content width

#### Mobile (≤768px)
- **Layout:** Single Column
- **Banner:** Background image untuk container
- **Form:** Full-width centered
- **Padding:** Adjusted untuk mobile screen

### 2. Form Validation

**Email Validation:**
- ✅ Format must contain "@" dan "."
- ✅ Real-time validation as user types
- ✅ Error message displayed below input

**Password Validation:**
- ✅ Minimum 6 characters
- ✅ Real-time validation as user types
- ✅ Error message displayed below input
- ✅ Show/Hide password toggle (optional)

### 3. User Feedback

**Success State:**
```
✓ Login berhasil!
- Alert popup displayed
- Data saved to localStorage
- Form cleared
```

**Error State:**
```
- Error message shown below each input field
- Input field color changes (optional)
- User can retry
```

### 4. LocalStorage Integration

**Stored Data:**
```json
{
  "email": "user@example.com",
  "loginAt": "1764499711122"
}
```

---

## Component Architecture

### LoginPage Component

**Props:** None (Standalone Component)

**State Management:**
```javascript
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [showPassword, setShowPassword] = useState(false);
```

**Component Structure:**
```
LoginPage
├── Banner Section
│   └── Background Image/Logo
├── Form Section
│   ├── Heading
│   ├── Email Input
│   │   └── Error Message
│   ├── Password Input
│   │   ├── Input Field
│   │   └── Show/Hide Toggle
│   │   └── Error Message
│   ├── Forgot Password Link
│   ├── Sign In Button
│   └── Sign Up Link
```

---

## Validation Rules

### Email

| Rule | Requirement | Error Message |
|------|-------------|---------------|
| Required | Must not be empty | "Email tidak boleh kosong" |
| Format | Must contain "@" and "." | "Format email tidak valid" |

### Password

| Rule | Requirement | Error Message |
|------|-------------|---------------|
| Required | Must not be empty | "Password tidak boleh kosong" |
| Min Length | Minimum 6 characters | "Password minimal 6 karakter" |

---
```

### Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Button Background | Orange/Red | #e74c3c |
| Button Hover | Darker Orange | #c0392b |
| Error Text | Red | #e74c3c |
| Success Text | Green | #27ae60 |
| Input Border | Light Gray | #ddd |
| Input Focus | Blue | #3498db |

---

## Development

### Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint check (jika ada)
npm run lint
```

---

## Troubleshooting

### Issue: Hot Reload Not Working
**Solution:** Restart dev server dengan `npm run dev`

### Issue: Styles Not Applied
**Solution:** Clear browser cache (Ctrl+Shift+Delete) atau hard refresh (Ctrl+F5)

### Issue: Mobile View Not Responsive
**Solution:** Check browser viewport settings dan test dengan actual device

### Issue: Form Data Not Saving
**Solution:** Check browser localStorage is enabled (DevTools > Application > LocalStorage)

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Supported |
| Firefox | Latest | ✅ Supported |
| Safari | Latest | ✅ Supported |
| Edge | Latest | ✅ Supported |
| IE 11 | Any | ❌ Not Supported |

---

## Performance Tips

1. **Minimize Re-renders:** Use `useCallback` untuk event handlers
2. **Code Splitting:** Import components only when needed
3. **Image Optimization:** Compress banner image untuk faster load
4. **CSS Optimization:** Use production CSS build untuk smaller file size

---

## Author
**Jordan Theovandy**
**Telenavi - Fullstack Internship Test**
**November 2025**
=======
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
>>>>>>> 83597b506d083d9f1b4307eaddf6e4db012758f1
