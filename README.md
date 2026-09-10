# Simlaya Inn — Boutique Villa & Homestay Website

A modern, responsive website built for **Simlaya Inn**, a boutique villa and homestay in Hikkaduwa, Sri Lanka. Built with a dedicated multi-page routed architecture.

## 🌴 About Simlaya Inn
- **Tagline:** *"Your peaceful coastal escape in Hikkaduwa"*
- **Location:** 23/12 Wallawwaththa, Hikkaduwa, 80240, Sri Lanka
- **Contact:** 077 777 8853 (+94 77 777 8853)
- **Website:** [simlayainn.com](https://simlayainn.com)
- **Rating:** 5.0★ Google Reviews

---

## 🗺️ Dedicated Pages & Routes

| Route | Page File | Description |
|---|---|---|
| `/` | `index.html` | **Home**: Hero background slider, quick availability search, trust strip, homestay story, and feature previews |
| `/rooms` | `rooms.html` | **Rooms & Rates**: 4 boutique accommodations, pricing in LKR, bed types, size, amenities, room detail modal & booking actions |
| `/amenities` | `amenities.html` | **Amenities & Facilities**: 6 categorized groups with custom SVG icons (WiFi, parking, AC, private bathrooms, terrace) |
| `/location` | `location.html` | **Location & Distances**: Interactive Google Maps embed (`6.143, 80.1017`) and walking/driving distance filter tabs |
| `/things-to-do` | `things-to-do.html` | **Things To Do Nearby**: Local activities (sea turtle snorkeling, Galle Fort, river safari, whale watching, cooking classes) |
| `/gallery` | `gallery.html` | **Photo Gallery**: 32 curated property photo placeholders with category filter tabs and fullscreen lightbox modal |
| `/policies` | `policies.html` | **Policies & FAQ**: House rules, check-in/out hours (3PM–6PM / 8AM–11AM), cash payment notice, children & quiet hours |
| `/reviews` | `reviews.html` | **Guest Reviews**: 5.0★ Google reviews, rating summary, and interactive "Write a Review" modal |
| `/contact` | `contact.html` | **Contact & Reservations**: Complete reservation form, live LKR stay estimator, direct WhatsApp booking generator, host details & map |

---

## ✨ Design & Tech Highlights
- **Coastal Aesthetic:** Sandy Beige (`#FBF8F3`, `#F5EFE6`), Deep Ocean Teal (`#082832`, `#114B5F`), and Warm Terracotta (`#C96045`, `#E07A5F`).
- **Typography:** *Playfair Display* serif headings paired with *Plus Jakarta Sans* body text.
- **Dynamic Navigation:** Active route detection, sticky header, compact responsive layout without overflow, and mobile drawer.
- **Reservation Engine:** Live LKR price calculation and instant WhatsApp message dispatch (`+94 77 777 8853`).
- **Zero Build Step:** 100% standard HTML5, CSS3, and Vanilla JavaScript. Runs directly on GitHub Pages, Vercel, Netlify, or Apache/Nginx.

---

## 🚀 Getting Started

### Run Locally
You can run this project using any static file server:

#### Using Python:
```bash
python -m http.server 3000
```

#### Using Node.js:
```bash
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📁 Directory Structure

```
simlaya-inn/
├── index.html              # Home page
├── rooms.html              # Rooms & rates page
├── amenities.html          # Property amenities page
├── location.html           # Location, directions & map page
├── things-to-do.html       # Local attractions & tours page
├── gallery.html            # Photo gallery & lightbox page
├── policies.html           # Policies & guidelines FAQ page
├── reviews.html            # Guest reviews & testimonials page
├── contact.html            # Reservation form & contact page
├── README.md               # Project documentation
├── .gitignore              # Git ignore file
├── css/
│   ├── main.css            # Design tokens & base styles
│   ├── components.css      # Component styles (hero, cards, modals, page-hero)
│   └── responsive.css      # Mobile drawer & responsive breakpoints
├── js/
│   ├── data.js             # Data layer (rooms, amenities, distances, gallery, reviews)
│   ├── app.js              # Application controller & active route highlighter
│   ├── booking.js          # Booking calculation & WhatsApp message builder
│   └── gallery.js          # Lightbox and gallery category filter
└── assets/
    └── images/             # Property photography & assets
```

---

## 📄 License
© 2026 Simlaya Inn. All rights reserved.
