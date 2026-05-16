# HB Graphics — Premium Website (React + Vite + Tailwind + Firebase)

World-class, modern, cinematic website for **HB Graphics (Lusaka, Zambia)** with:

- Premium UI (glassmorphism, gradients, marquee, parallax, scroll reveal, cursor glow)
- Online ordering system (Firestore + Storage)
- Order tracking statuses (Pending → Designing → Printing → Completed → Delivered)
- Client Dashboard (view your orders + status)
- Admin Dashboard (view all orders, update status, download files, revenue stats)
- SEO setup (Helmet + robots.txt + sitemap.xml)

---

## 1) Setup

### Install

```bash
npm install
```

### Configure Firebase env

1. Create a Firebase project
2. Enable:
   - **Authentication → Email/Password**
   - **Firestore Database**
   - **Storage**
3. Copy `.env.example` → `.env.local` and fill in your Firebase web app config:

```bash
cp .env.example .env.local
```

---

## 2) Firestore + Storage Rules (production)

This repo includes secure rule templates:

- `firestore.rules`
- `storage.rules`

Deploy them:

```bash
firebase deploy --only firestore:rules,storage
```

### Admin security (recommended)

The **Admin Dashboard should be protected by Firebase custom claims**.

Set a custom claim on an admin user (example using Admin SDK in a trusted environment):

```js
// setCustomUserClaims(uid, { admin: true })
```

> Note: `VITE_ADMIN_EMAILS` is only a UI convenience (not true security). The actual security gate is `request.auth.token.admin == true` in rules.

---

## 3) Run locally

```bash
npm run dev
```

---

## 4) Deploy (Firebase Hosting)

1. Install Firebase CLI and login:

```bash
npm i -g firebase-tools
firebase login
```

2. Initialize hosting in this folder (use existing `firebase.json`):

```bash
firebase init hosting
```

3. Build + deploy:

```bash
npm run build
firebase deploy
```

---

## Project structure

```
src/
  components/   # UI, layout, effects, sections
  contexts/     # Auth provider
  lib/          # Firebase + Firestore/Storage helpers
  pages/        # Home/Services/Portfolio/About/Contact/Order/Auth/Dashboards
  routes/       # ProtectedRoute + AdminRoute
```
