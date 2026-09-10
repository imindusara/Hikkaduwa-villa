export const propertyData = {
  property: {
    name: "Simlaya Inn",
    type: "Boutique Villa & Homestay",
    tagline: "Your peaceful coastal escape in Hikkaduwa",
    subTagline: "A tranquil tropical garden oasis just 750m from Hikkaduwa Beach with personalized Sri Lankan hospitality.",
    rating: 5.0,
    reviewCount: 48,
    currency: "LKR",
    currencySymbol: "Rs.",
    phone: "077 777 8853",
    intlPhone: "+94777778853",
    email: "stay@simlayainn.com",
    address: {
      street: "23/12 Wallawwaththa",
      city: "Hikkaduwa",
      postalCode: "80240",
      district: "Galle District",
      province: "Southern Province",
      country: "Sri Lanka",
      coordinates: { lat: 6.143, lng: 80.1017 }
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15870.283929424164!2d80.0950346!3d6.143000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177e750e39b97%3A0x868c92a6659f848f!2sHikkaduwa%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
  },

  trustBadges: [
    { icon: "star", title: "5.0★ Top Rated", desc: "Superb Google Guest Reviews" },
    { icon: "wifi", title: "Free Fast WiFi", desc: "High-speed in all rooms & gardens" },
    { icon: "car", title: "Free Private Parking", desc: "Secure on-site, no reservation needed" },
    { icon: "shield", title: "Non-Smoking Rooms", desc: "Pristine, fresh & hygienic air" },
    { icon: "sparkles", title: "Private Bathrooms", desc: "En-suite hot showers in every room" },
    { icon: "user-check", title: "English-Speaking Host", desc: "Warm, attentive local concierge" }
  ],

  rooms: [
    {
      id: "deluxe-garden",
      name: "Deluxe Garden View Room",
      tagline: "Serene veranda access with lush tropical garden views",
      pricePerNight: 14500,
      capacity: 2,
      bed: "1 Large King Bed",
      size: "28 sq.m (301 sq.ft)",
      view: "Lush Tropical Garden",
      badge: "Most Popular",
      image: "/assets/images/room-deluxe.jpg",
      description: "Wake up to gentle birdsong and swaying palm fronds. This airy room features a handcrafted teak king bed, polished cool cement floors, whisper-quiet air conditioning, and direct access to the sunlit garden veranda.",
      highlights: [
        "Direct Garden Terrace Access",
        "En-suite Modern Bathroom with Rain Shower",
        "Quiet Inverter Air Conditioning & Ceiling Fan",
        "Teak Work Desk & Free High-Speed WiFi",
        "Electric Kettle with Ceylon Tea & Coffee Selection",
        "Fresh Fluffy Towels & Complimentary Toiletries"
      ]
    },
    {
      id: "superior-balcony-suite",
      name: "Superior Suite with Balcony & Dining",
      tagline: "Private elevated balcony overlooking coconut palms & dining nook",
      pricePerNight: 18500,
      capacity: 3,
      bed: "1 King Bed + 1 Daybed / Sofa",
      size: "42 sq.m (452 sq.ft)",
      view: "Palm Canopy & Sunset View",
      badge: "Spacious Suite",
      image: "/assets/images/suite-balcony.jpg",
      description: "Our premier retreat offering expansive living space, a dedicated dining area, and a private wooden balcony. Ideal for couples or small families seeking extra comfort and romantic evening sunsets over the palms.",
      highlights: [
        "Private Furnished Balcony with Dining Setup",
        "Spacious Seating Area & Daybed Sofa",
        "Kitchenette Access & Refrigerator",
        "Luxury Rain Shower with Glass Partition",
        "In-room Electric Kettle & Coffee Station",
        "Wardrobe, Safety Box & Workstation"
      ]
    },
    {
      id: "deluxe-double-room",
      name: "Deluxe Double Room",
      tagline: "Cozy, minimalist sanctuary with boutique coastal charm",
      pricePerNight: 12500,
      capacity: 2,
      bed: "1 Queen Size Bed",
      size: "24 sq.m (258 sq.ft)",
      view: "Garden & Inner Courtyard",
      badge: "Best Value",
      image: "/assets/images/garden-terrace.jpg",
      description: "A peaceful and exceptionally clean haven designed for modern travelers. Equipped with an ultra-comfortable mattress, pristine private bathroom, and quiet surroundings for deep restful sleep after a day on the beach.",
      highlights: [
        "Private Bathroom with Continuous Hot Water",
        "Whisper-Quiet Air Conditioning",
        "High-Speed Fiber WiFi",
        "Daily Housekeeping & Fresh Linen",
        "Direct Garden Pathway Access",
        "Electric Kettle & Tea Setup"
      ]
    },
    {
      id: "entire-villa-exclusive",
      name: "Entire Villa Private Sanctuary",
      tagline: "Exclusive private rental of all rooms, lush grounds & kitchen",
      pricePerNight: 48000,
      capacity: 7,
      bed: "3 King / Queen Beds + 2 Sofas",
      size: "180 sq.m (1,937 sq.ft)",
      view: "360° Private Tropical Grounds",
      badge: "Group / Family Sanctuary",
      image: "/assets/images/hero.jpg",
      description: "Reserve the entire Simlaya Inn property exclusively for your family or travel group. Enjoy complete privacy, all private bedrooms and bathrooms, private use of the gardens, sun terrace, and fully equipped kitchen.",
      highlights: [
        "Exclusive Access to All 3 Luxury Bedrooms & Bathrooms",
        "Full Private Kitchen with Gas Stovetop & Fridge",
        "Private Garden, Sun Loungers & Open Dining Veranda",
        "Dedicated Host Support & Customized Breakfast Option",
        "Secure Private Gated Parking for Multiple Vehicles",
        "Ideal for Families, Surf Crews, or Remote Work Retreats"
      ]
    }
  ],

  amenitiesGrouped: [
    {
      category: "Most Popular Highlights",
      icon: "star",
      items: [
        { name: "Free High-Speed WiFi", desc: "Reliable fiber connectivity throughout rooms and gardens" },
        { name: "Free Private On-Site Parking", desc: "Gated, secure parking right on premises (no booking needed)" },
        { name: "Non-Smoking Clean Rooms", desc: "Fresh, healthy, smoke-free indoor living spaces" },
        { name: "Private En-Suite Bathrooms", desc: "Equipped with hot water rain showers and toiletries" }
      ]
    },
    {
      category: "Bathroom & Toiletries",
      icon: "droplet",
      items: [
        { name: "Private En-Suite Bathroom", desc: "Attached to each bedroom with modern fixtures" },
        { name: "Continuous Hot Water", desc: "Efficient water heaters for soothing showers" },
        { name: "Fresh Towels & Linens", desc: "Plush bath towels and crisp bed sheets provided" },
        { name: "Toilet Paper & Toiletries", desc: "Complimentary natural soap and essentials" }
      ]
    },
    {
      category: "Outdoor & Garden",
      icon: "sun",
      items: [
        { name: "Sun Terrace & Veranda", desc: "Covered outdoor seating for tea, reading, and relaxing" },
        { name: "Lush Tropical Garden", desc: "Filled with exotic palms, frangipani blossoms, and birds" },
        { name: "Outdoor Dining Area", desc: "Al-fresco dining table surrounded by natural greenery" },
        { name: "Private Garden Pathways", desc: "Stone walking paths and warm ambient evening lanterns" }
      ]
    },
    {
      category: "Kitchen & Dining",
      icon: "coffee",
      items: [
        { name: "Kitchenette Access", desc: "Convenient shared kitchen for tea, snacks, and light prep" },
        { name: "Electric Kettle", desc: "In-room kettle for instant boiling and morning beverages" },
        { name: "Ceylon Tea & Coffee Setup", desc: "Complimentary world-renowned Sri Lankan tea" },
        { name: "Dining Table & Chairs", desc: "Comfortable dining space inside and on the veranda" }
      ]
    },
    {
      category: "General Comfort & Services",
      icon: "home",
      items: [
        { name: "Inverter Air Conditioning", desc: "Whisper-quiet climate control in all guest rooms" },
        { name: "Ceiling Fans", desc: "For natural tropical air circulation" },
        { name: "English-Speaking Host & Staff", desc: "Welcoming local family providing personalized tour assistance" },
        { name: "Daily Housekeeping", desc: "Meticulous room cleaning and fresh turn-down on request" },
        { name: "Airport Transfer Arrangement", desc: "Reliable private taxi service to and from CMB / Koggala" }
      ]
    },
    {
      category: "Connectivity & Parking",
      icon: "shield-check",
      items: [
        { name: "Property-Wide Free WiFi", desc: "Smooth video calls, work streaming, and social sharing" },
        { name: "Dedicated Work Desks", desc: "Ergonomic seating for digital nomads and remote workers" },
        { name: "Secure Private Parking", desc: "Free enclosed car and motorbike parking on property" }
      ]
    }
  ],

  distances: [
    {
      category: "transport",
      title: "Hikkaduwa Railway Station",
      distance: "150 – 400 m",
      time: "2–4 min walk",
      type: "Transit",
      icon: "train",
      desc: "Effortless arrival via the scenic coastal train line from Colombo Fort or Galle."
    },
    {
      category: "transport",
      title: "Hikkaduwa Main Bus Stand",
      distance: "550 m",
      time: "6–7 min walk",
      type: "Transit",
      icon: "bus",
      desc: "Direct express buses to Galle, Matara, Bentota, and Colombo Southern Expressway."
    },
    {
      category: "beaches",
      title: "Hikkaduwa Main Beach",
      distance: "750 m",
      time: "8–9 min walk (< 1 km)",
      type: "Beach",
      icon: "umbrella",
      desc: "Golden sandy stretch renowned for swimming, beach cafes, vibrant vibes, and sunsets."
    },
    {
      category: "beaches",
      title: "Hikkaduwa Coral Reef & Sanctuary",
      distance: "850 m",
      time: "10 min walk / 2 min tuk-tuk",
      type: "Reef & Marine Life",
      icon: "fish",
      desc: "Famous national park with shallow coral gardens and giant resident sea turtles."
    },
    {
      category: "beaches",
      title: "Seenigama Beach & Island Temple",
      distance: "1.5 km",
      time: "3 min tuk-tuk",
      type: "Beach & Heritage",
      icon: "map-pin",
      desc: "Serene picturesque beach with the mystical Devale temple set on an offshore island."
    },
    {
      category: "beaches",
      title: "Narigama Beach",
      distance: "2.4 km",
      time: "5 min tuk-tuk",
      type: "Surf Beach",
      icon: "sun",
      desc: "Wide expansive beach famous for sunset cocktails, surf schools, and chill beach clubs."
    },
    {
      category: "beaches",
      title: "Dodanduwa Beach",
      distance: "6.0 km",
      time: "8 min drive",
      type: "Secluded Beach",
      icon: "compass",
      desc: "Quiet fishing bay with tranquil shores and traditional outrigger boats."
    },
    {
      category: "beaches",
      title: "Rathgama Beach & Lagoon",
      distance: "7.0 km",
      time: "10 min drive",
      type: "Lagoon & Coastal",
      icon: "wind",
      desc: "Pristine coastal lagoon ideal for bird watching, boat rides, and secluded relaxation."
    },
    {
      category: "dining",
      title: "Your Choice Restaurant Hikkaduwa",
      distance: "550 m",
      time: "6 min walk",
      type: "Dining",
      icon: "utensils",
      desc: "Beloved local spot serving authentic Sri Lankan rice & curry, seafood, and juices."
    },
    {
      category: "dining",
      title: "Parrots Paradise Restaurant & Juice Bar",
      distance: "700 m",
      time: "8 min walk",
      type: "Cafe & Dining",
      icon: "coffee",
      desc: "Healthy smoothies, fresh fruit bowls, woodfired pizzas, and Sri Lankan specialties."
    },
    {
      category: "dining",
      title: "UPS Wine Stores & Cafe Bar",
      distance: "750 m",
      time: "9 min walk",
      type: "Lounge & Bar",
      icon: "wine",
      desc: "Great local beverage outlet and casual chill-out lounge close to the main strip."
    },
    {
      category: "sightseeing",
      title: "Hikkaduwa Forest Reserve",
      distance: "10 km",
      time: "15 min drive",
      type: "Nature Reserve",
      icon: "tree",
      desc: "Lush tropical canopy rich in endemic birds, monkeys, herbal plants, and jungle trails."
    },
    {
      category: "sightseeing",
      title: "Galle International Cricket Stadium",
      distance: "19 km",
      time: "25 min drive",
      type: "Sports Landmark",
      icon: "award",
      desc: "World-renowned picturesque cricket ground flanked by the Indian Ocean and Galle Fort."
    },
    {
      category: "sightseeing",
      title: "UNESCO Galle Fort & Clock Tower",
      distance: "19 – 20 km",
      time: "25–30 min drive",
      type: "UNESCO Heritage",
      icon: "landmark",
      desc: "17th-century Dutch colonial fortification with cobblestone streets, boutiques, and lighthouse."
    },
    {
      category: "sightseeing",
      title: "National Maritime Museum Galle",
      distance: "20 km",
      time: "28 min drive",
      type: "Museum & History",
      icon: "anchor",
      desc: "Historic Dutch warehouse showcasing marine archaeology and historic Ceylon shipwrecks."
    },
    {
      category: "transport",
      title: "Koggala Domestic Airport (KCT)",
      distance: "32 – 33 km",
      time: "40–45 min drive",
      type: "Airport",
      icon: "plane",
      desc: "Cinnamon Air domestic flights connecting quickly to Colombo International (CMB)."
    }
  ],

  thingsToDo: [
    {
      title: "Snorkeling with Giant Turtles",
      location: "Hikkaduwa Marine Sanctuary",
      distance: "850 m from Inn",
      duration: "1–2 Hours",
      image: "/assets/images/beach.jpg",
      badge: "Must Try Local Experience",
      desc: "Wade into the calm shallow reef waters right at Hikkaduwa Beach where friendly wild green sea turtles feed peacefully near the shore every morning."
    },
    {
      title: "UNESCO Galle Fort Walking Tour",
      location: "Galle Heritage City",
      distance: "19 km (30 min)",
      duration: "Half Day",
      image: "/assets/images/hero.jpg",
      badge: "Historical Wonder",
      desc: "Stroll along 400-year-old ramparts, browse eclectic artisan jewelers, visit the historic Dutch Reformed Church, and catch a breathtaking sunset by the iconic lighthouse."
    },
    {
      title: "Bentota River Mangrove Safari",
      location: "Madu Ganga & Bentota",
      distance: "25 km (35 min)",
      duration: "2–3 Hours",
      image: "/assets/images/garden-terrace.jpg",
      badge: "Nature & Wildlife",
      desc: "Cruise through dense mangrove tunnels, discover cinnamon peeling islands, encounter river monitors, and experience relaxing natural fish therapy."
    },
    {
      title: "Whale Watching in Mirissa",
      location: "Mirissa Harbor",
      distance: "55 km (1 hr drive via expressway)",
      duration: "Early Morning Tour",
      image: "/assets/images/suite-balcony.jpg",
      badge: "Marine Adventure",
      desc: "Embark on an unforgettable ocean boat expedition to witness majestic Blue Whales, Sperm Whales, and pods of playful spinner dolphins in their natural habitat."
    },
    {
      title: "Authentic Sri Lankan Cooking Class",
      location: "Hikkaduwa Village",
      distance: "5 min from Inn",
      duration: "3 Hours",
      image: "/assets/images/dining.jpg",
      badge: "Culinary Delight",
      desc: "Visit the vibrant local market for fresh spices and vegetables, then learn how to prepare clay-pot curries, coconut sambol, and crispy hoppers from a local master chef."
    },
    {
      title: "Hikkaduwa Surf & Reef Diving",
      location: "Main Beach & Narigama",
      distance: "1 km from Inn",
      duration: "Flexible",
      image: "/assets/images/room-deluxe.jpg",
      badge: "Watersports",
      desc: "Whether you are catching your first wave with certified surf instructors or scuba diving historic shipwrecks, Hikkaduwa is Sri Lanka's premier ocean playground."
    }
  ],

  policies: [
    {
      icon: "clock",
      title: "Check-in & Check-out",
      summary: "Flexible daytime arrival with personalized greeting",
      details: [
        "Check-in Window: 3:00 PM – 6:00 PM (Early/Late check-in accommodated upon prior notice).",
        "Check-out Window: 8:00 AM – 11:00 AM.",
        "No age restriction for check-in. Valid passport or national ID required upon arrival."
      ]
    },
    {
      icon: "file-text",
      title: "Cancellation & Prepayment",
      summary: "Flexible, transparent policies tailored to your booking",
      details: [
        "Cancellation policies vary depending on selected dates and room rate.",
        "Direct bookings benefit from flexible 48-hour free cancellation on standard stays.",
        "Special high-season terms apply for December–February holidays."
      ]
    },
    {
      icon: "users",
      title: "Children & Extra Beds",
      summary: "Families are warmly welcome",
      details: [
        "Children of all ages are welcome at Simlaya Inn.",
        "Please indicate the number of children and their ages when inquiring to ensure the most comfortable room configuration.",
        "Cots and extra rollaway beds are not currently available."
      ]
    },
    {
      icon: "credit-card",
      title: "Payment: Cash Only",
      summary: "Cash only on arrival (LKR preferred / USD / EUR accepted)",
      details: [
        "Payment: Cash only upon arrival (Sri Lankan Rupee - LKR preferred).",
        "Major international currencies (USD, EUR, GBP) are also accepted at the prevailing daily bank exchange rate.",
        "Multiple bank ATMs and currency exchanges are located within 350m of the villa."
      ]
    },
    {
      icon: "volume-x",
      title: "House Rules & Parties",
      summary: "A peaceful sanctuary for all guests",
      details: [
        "Parties and loud events are strictly not allowed on premises, including bachelor/bachelorette gatherings.",
        "Quiet hours are observed from 10:00 PM to 7:00 AM to preserve our serene neighborhood atmosphere.",
        "Smoking is permitted in designated outdoor garden areas only; all indoor rooms are strictly non-smoking."
      ]
    },
    {
      icon: "heart",
      title: "Pets & Special Requests",
      summary: "Customized care for your stay",
      details: [
        "Pets are not allowed on property to maintain hypoallergenic standards.",
        "Special requests (airport transfers, flower bouquets, scooter rentals, dietary breakfast requests) are gladly accommodated — simply mention them in your booking inquiry."
      ]
    }
  ],

  gallery: [
    { id: 1, title: "Simlaya Inn Front Veranda & Tropical Garden", category: "exterior", src: "/assets/images/hero.jpg", tag: "Exterior" },
    { id: 2, title: "Deluxe Garden View Bedroom with Handcrafted King Bed", category: "rooms", src: "/assets/images/room-deluxe.jpg", tag: "Deluxe Room" },
    { id: 3, title: "Superior Balcony Suite Overlooking Coconut Palms", category: "rooms", src: "/assets/images/suite-balcony.jpg", tag: "Balcony Suite" },
    { id: 4, title: "Sunlit Garden Sunbed Terrace & Breakfast Veranda", category: "terrace", src: "/assets/images/garden-terrace.jpg", tag: "Garden & Terrace" },
    { id: 5, title: "Pristine Hikkaduwa Golden Beach (750m Walk)", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Beach & Coast" },
    { id: 6, title: "Modern Private En-Suite Bathroom with Hot Rain Shower", category: "bathroom", src: "/assets/images/bathroom.jpg", tag: "Private Bathroom" },
    { id: 7, title: "Fresh Tropical Sri Lankan Breakfast on the Veranda", category: "terrace", src: "/assets/images/dining.jpg", tag: "Dining & Veranda" },
    { id: 8, title: "Lush Frangipani Garden Pathway to Villa Entrance", category: "exterior", src: "/assets/images/hero.jpg", tag: "Tropical Grounds" },
    { id: 9, title: "Cozy Bedroom Reading Corner & Polished Hardwood", category: "rooms", src: "/assets/images/room-deluxe.jpg", tag: "Room Interior" },
    { id: 10, title: "Romantic Evening Sunset Balcony View", category: "terrace", src: "/assets/images/suite-balcony.jpg", tag: "Sunset Balcony" },
    { id: 11, title: "Serene Garden Veranda with Rattan Lounge Seating", category: "terrace", src: "/assets/images/garden-terrace.jpg", tag: "Garden Lounge" },
    { id: 12, title: "Hikkaduwa Turquoise Waters & Coral Reef Shore", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Reef & Coast" },
    { id: 13, title: "Quiet Inverter Air-Conditioned Suite Bedroom", category: "rooms", src: "/assets/images/room-deluxe.jpg", tag: "Air Conditioned" },
    { id: 14, title: "En-Suite Vanity with Continuous Hot Water", category: "bathroom", src: "/assets/images/bathroom.jpg", tag: "Hot Water" },
    { id: 15, title: "Private Sun Deck Loungers Under Palm Trees", category: "terrace", src: "/assets/images/garden-terrace.jpg", tag: "Sun Loungers" },
    { id: 16, title: "Villa Exterior Gated Private Parking Area", category: "exterior", src: "/assets/images/hero.jpg", tag: "Private Parking" },
    { id: 17, title: "Teak Workstation & High-Speed Fiber WiFi Desk", category: "rooms", src: "/assets/images/suite-balcony.jpg", tag: "Nomad Workstation" },
    { id: 18, title: "Fresh Bath Linens, Plush Towels & Toiletries", category: "bathroom", src: "/assets/images/bathroom.jpg", tag: "Fresh Amenities" },
    { id: 19, title: "Al-Fresco Dining Table Surrounded by Greenery", category: "terrace", src: "/assets/images/dining.jpg", tag: "Al-Fresco Dining" },
    { id: 20, title: "Wild Giant Sea Turtle Feeding at Shallow Reef", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Turtle Snorkeling" },
    { id: 21, title: "Tropical Bird Sanctuary in Villa Garden Trees", category: "exterior", src: "/assets/images/hero.jpg", tag: "Garden Fauna" },
    { id: 22, title: "Comfortable Queen Bed in Double Deluxe Room", category: "rooms", src: "/assets/images/room-deluxe.jpg", tag: "Queen Bedroom" },
    { id: 23, title: "Ceylon Black Tea & Electric Kettle Setup", category: "terrace", src: "/assets/images/dining.jpg", tag: "Tea Experience" },
    { id: 24, title: "Glass Partitioned Modern Rain Shower Area", category: "bathroom", src: "/assets/images/bathroom.jpg", tag: "Rain Shower" },
    { id: 25, title: "Narigama Beach Golden Sunset Surf Waves", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Sunset Waves" },
    { id: 26, title: "Lush Plant Beds & Manicured Villa Lawn", category: "exterior", src: "/assets/images/hero.jpg", tag: "Villa Landscape" },
    { id: 27, title: "Airy Balcony Nook for Afternoon Reading", category: "terrace", src: "/assets/images/suite-balcony.jpg", tag: "Balcony Nook" },
    { id: 28, title: "Pristine Tile Finish & Spotless Hygiene", category: "bathroom", src: "/assets/images/bathroom.jpg", tag: "Spotless Hygiene" },
    { id: 29, title: "Seenigama Island Temple Offshore View (1.5 km)", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Historic Temple" },
    { id: 30, title: "Warm Evening Ambient Lanterns along Veranda", category: "exterior", src: "/assets/images/garden-terrace.jpg", tag: "Evening Ambiance" },
    { id: 31, title: "Entire 3-Bedroom Villa Sanctuary for Families", category: "rooms", src: "/assets/images/hero.jpg", tag: "Full Villa Stay" },
    { id: 32, title: "Morning Sunshine on Hikkaduwa Coconut Palms", category: "surroundings", src: "/assets/images/beach.jpg", tag: "Coastal Palms" }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Elena & Marcus S.",
      country: "Germany",
      rating: 5.0,
      source: "Google Reviews",
      date: "February 2026",
      avatar: "EM",
      title: "An absolute hidden paradise in Hikkaduwa!",
      text: "Simlaya Inn was the highlight of our 2-week trip through Sri Lanka. The room is brand new, spotlessly clean, and the garden terrace is so peaceful. It is only an easy 8-minute stroll to the beach, but away from all the noisy main road traffic. The hosts were incredibly kind and helped arrange our turtle snorkeling tour!"
    },
    {
      id: "rev-2",
      author: "David K.",
      country: "United Kingdom",
      rating: 5.0,
      source: "Google Reviews",
      date: "January 2026",
      avatar: "DK",
      title: "Super fast WiFi, amazing AC, and authentic hospitality",
      text: "As a remote worker, having high-speed WiFi and cold AC is essential. Simlaya Inn delivered 100%. The private bathroom feels like a boutique resort, and having coffee on the balcony overlooking the coconut palms every morning was bliss. Highly recommend booking direct via WhatsApp!"
    },
    {
      id: "rev-3",
      author: "Sophie & Liam",
      country: "Australia",
      rating: 5.0,
      source: "Google Reviews",
      date: "December 2025",
      avatar: "SL",
      title: "Warmest hosts and pristine boutique rooms",
      text: "From the moment we arrived, we felt right at home. The king bed is super comfortable, parking was safe and easy for our rented scooter, and the location is unbeatable — close to the train station, fruit shops, and the beach. 10/10!"
    }
  ]
};
