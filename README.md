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