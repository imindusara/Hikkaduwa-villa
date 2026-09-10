# Simlaya Inn — Boutique Villa & Homestay Website

A modern, responsive website built for **Simlaya Inn**, a boutique villa and homestay in Hikkaduwa, Sri Lanka.

## 🌴 About Simlaya Inn
- **Tagline:** *"Your peaceful coastal escape in Hikkaduwa"*
- **Location:** 23/12 Wallawwaththa, Hikkaduwa, 80240, Sri Lanka
- **Contact:** 077 777 8853 (+94 77 777 8853)
- **Website:** [simlayainn.com](https://simlayainn.com)
- **Rating:** 5.0★ Google Reviews

---

## ✨ Features
- **Modern Coastal Aesthetics:** Curated coastal color palette (Sandy Beige, Ocean Teal, Warm Terracotta) with typography pairing (*Playfair Display* & *Plus Jakarta Sans*).
- **Hero Image Slider & Quick Availability Search:** Integrated check-in/out date pickers and guest selectors.
- **Boutique Rooms & Rates:** Detailed showcase with pricing in **LKR (Sri Lankan Rupee)**, capacity, room dimensions, and amenity icons.
- **Amenities Categorized:** Comprehensive listing including high-speed fiber WiFi, private parking, inverter AC, private bathrooms, and garden terrace.
- **Location & Distances Guide:** Google Maps embed pinned at coordinates `6.143, 80.1017` with category filters (Transit, Beaches, Dining, Sightseeing).
- **Things To Do Nearby:** Informational guide to local attractions (turtle snorkeling, Galle Fort, whale watching, cooking classes).
- **Photo Gallery & Lightbox:** 32 curated property photo placeholders with category filter tabs and fullscreen lightbox modal with keyboard controls.
- **Policies / FAQ:** Transparent house rules and check-in/out guidelines.
- **Guest Reviews:** 5.0★ Google testimonials with an interactive "Write a Review" modal for Booking.com guests.
- **Direct Reservation Engine:** Live LKR stay estimator + instant **WhatsApp booking dispatch** and email inquiry.
- **Floating WhatsApp Button:** Fast direct contact for inquiries and local assistance.

---

## 🚀 Getting Started

### Prerequisites
No complex framework dependencies required — built with standard HTML5, CSS3, and Vanilla JavaScript.

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
├── index.html              # Main HTML5 page with Schema.org JSON-LD
├── README.md               # Project documentation
├── .gitignore              # Git ignore file
├── css/
│   ├── main.css            # Design tokens & base styles
│   ├── components.css      # Component styles (cards, hero, modals)
│   └── responsive.css      # Mobile drawer & responsive breakpoints
├── js/
│   ├── data.js             # Data layer (rooms, amenities, distances, gallery, reviews)
│   ├── app.js              # Application controller & UI rendering
│   ├── booking.js          # Booking calculation & WhatsApp message builder
│   └── gallery.js          # Lightbox and gallery category filter
└── assets/
    └── images/             # Property photography & assets
```

---

## 📄 License
© 2026 Simlaya Inn. All rights reserved.
