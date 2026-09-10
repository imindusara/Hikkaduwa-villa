/**
 * Simlaya Inn - Core Application Controller
 * Manages UI rendering, scroll events, hero sliders, modals, and navigation
 */

(function () {
  let heroSlideInterval = null;
  let currentSlide = 0;

  function initApp() {
    renderTrustStrip();
    renderRooms();
    renderAmenities();
    renderDistances();
    renderThingsToDo();
    renderPolicies();
    renderReviews();
    initHeroSlider();
    initNavigation();
    initDistanceFilters();
    initModals();
  }

  /* --------------------------------------------------------------------------
     1. Trust Strip Rendering
     -------------------------------------------------------------------------- */
  function renderTrustStrip() {
    const container = document.getElementById('trust-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    const iconMap = {
      'star': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      'wifi': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
      'car': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
      'shield': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      'sparkles': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
      'user-check': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`
    };

    container.innerHTML = SIMLAYA_DATA.trustBadges.map(item => `
      <div class="trust-item">
        <div class="trust-icon">${iconMap[item.icon] || ''}</div>
        <div class="trust-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     2. Rooms Rendering
     -------------------------------------------------------------------------- */
  function renderRooms() {
    const container = document.getElementById('rooms-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    container.innerHTML = SIMLAYA_DATA.rooms.map(room => `
      <div class="room-card" id="room-card-${room.id}">
        <div class="room-image-wrapper">
          <img src="${room.image}" alt="${room.name}" loading="lazy" />
          <div class="room-badge-top">
            <span class="badge badge-gold">${room.badge}</span>
          </div>
          <div class="room-price-tag">
            <strong>Rs. ${room.pricePerNight.toLocaleString()}</strong> / night
          </div>
        </div>
        <div class="room-body">
          <h3 class="room-title">${room.name}</h3>
          <p class="room-tagline">${room.tagline}</p>
          
          <div class="room-specs">
            <div class="room-spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              <span>Up to ${room.capacity} Guests</span>
            </div>
            <div class="room-spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
              <span>${room.bed}</span>
            </div>
            <div class="room-spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
              <span>${room.size}</span>
            </div>
          </div>

          <div class="room-highlights">
            ${room.highlights.slice(0, 4).map(h => `
              <div class="room-highlight-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>

          <div class="room-amenity-pills">
            <span class="amenity-pill">❄️ Air Conditioning</span>
            <span class="amenity-pill">📶 Free WiFi</span>
            <span class="amenity-pill">🚿 Private Bathroom</span>
            <span class="amenity-pill">☕ Electric Kettle</span>
            <span class="amenity-pill">🧼 Towels & Toiletries</span>
            <span class="amenity-pill">🌿 Terrace / Balcony</span>
            ${room.highlights.some(h => h.toLowerCase().includes('kitchen')) ? '<span class="amenity-pill">🍳 Kitchen Access</span>' : ''}
          </div>

          <div class="room-actions">
            <button class="btn btn-primary" onclick="window.selectRoomAndScroll('${room.id}')">
              Book This Room
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.openRoomModal('${room.id}')">
              Details
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     3. Amenities Rendering
     -------------------------------------------------------------------------- */
  function renderAmenities() {
    const container = document.getElementById('amenities-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    const iconMap = {
      'star': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      'droplet': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
      'sun': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
      'coffee': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
      'home': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      'shield-check': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`
    };

    container.innerHTML = SIMLAYA_DATA.amenitiesGrouped.map(group => `
      <div class="amenity-category-card">
        <div class="amenity-cat-header">
          <div class="amenity-cat-icon">${iconMap[group.icon] || ''}</div>
          <h3>${group.category}</h3>
        </div>
        <div class="amenity-items-list">
          ${group.items.map(item => `
            <div class="amenity-item">
              <span class="amenity-dot"></span>
              <div class="amenity-text">
                <h5>${item.name}</h5>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     4. Distances Rendering & Filtering
     -------------------------------------------------------------------------- */
  function renderDistances(filter = 'all') {
    const container = document.getElementById('distances-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    const filtered = filter === 'all'
      ? SIMLAYA_DATA.distances
      : SIMLAYA_DATA.distances.filter(d => d.category === filter);

    container.innerHTML = filtered.map(item => `
      <div class="distance-card">
        <div class="distance-top">
          <div class="distance-place">
            <h4>${item.title}</h4>
            <span>${item.type}</span>
          </div>
          <span class="distance-tag">${item.distance}</span>
        </div>
        <div class="distance-details">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>${item.time}</span>
        </div>
        <p>${item.desc}</p>
      </div>
    `).join('');
  }

  function initDistanceFilters() {
    const buttons = document.querySelectorAll('.distance-tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-distance-filter') || 'all';
        renderDistances(filter);
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Things To Do Rendering
     -------------------------------------------------------------------------- */
  function renderThingsToDo() {
    const container = document.getElementById('things-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    container.innerHTML = SIMLAYA_DATA.thingsToDo.map(act => `
      <div class="activity-card">
        <div class="activity-image-wrapper">
          <img src="${act.image}" alt="${act.title}" loading="lazy" />
          <span class="activity-badge">${act.badge}</span>
        </div>
        <div class="activity-body">
          <h4>${act.title}</h4>
          <div class="activity-meta">
            <span>📍 ${act.location}</span>
            <span>⏱️ ${act.duration}</span>
          </div>
          <p>${act.desc}</p>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     6. Policies Rendering
     -------------------------------------------------------------------------- */
  function renderPolicies() {
    const container = document.getElementById('policies-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    const iconMap = {
      'clock': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      'file-text': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      'users': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      'credit-card': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
      'volume-x': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
      'heart': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
    };

    container.innerHTML = SIMLAYA_DATA.policies.map(pol => `
      <div class="policy-card">
        <div class="policy-card-top">
          <div class="policy-icon-wrapper">${iconMap[pol.icon] || ''}</div>
          <h4>${pol.title}</h4>
        </div>
        <div class="policy-summary">${pol.summary}</div>
        <div class="policy-bullets">
          ${pol.details.map(d => `<div class="policy-bullet">${d}</div>`).join('')}
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     7. Reviews Rendering
     -------------------------------------------------------------------------- */
  function renderReviews() {
    const container = document.getElementById('reviews-grid');
    if (!container || !window.SIMLAYA_DATA) return;

    container.innerHTML = SIMLAYA_DATA.reviews.map(rev => `
      <div class="review-card">
        <div class="review-card-top">
          <div class="review-author">
            <div class="review-avatar">${rev.avatar}</div>
            <div class="review-author-info">
              <h4>${rev.author}</h4>
              <span>${rev.country} • ${rev.date}</span>
            </div>
          </div>
          <div class="stars">★★★★★</div>
        </div>
        <h4 class="review-quote-title">"${rev.title}"</h4>
        <p class="review-text">${rev.text}</p>
        <div class="review-source-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Verified ${rev.source}</span>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     8. Hero Slider Carousel
     -------------------------------------------------------------------------- */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    if (heroSlideInterval) clearInterval(heroSlideInterval);

    heroSlideInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5500);
  }

  /* --------------------------------------------------------------------------
     9. Navigation, Sticky Header & Scroll Spy
     -------------------------------------------------------------------------- */
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-links .nav-link');

    // Sticky scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile drawer toggle
    function openDrawer() {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* --------------------------------------------------------------------------
     10. Modals (Room Details & Review)
     -------------------------------------------------------------------------- */
  function initModals() {
    // Room Modal
    window.openRoomModal = function (roomId) {
      const room = SIMLAYA_DATA.rooms.find(r => r.id === roomId);
      if (!room) return;

      const modal = document.getElementById('room-detail-modal');
      const modalBody = document.getElementById('room-modal-body');
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <img src="${room.image}" alt="${room.name}" style="width: 100%; height: 280px; object-fit: cover; border-radius: var(--radius-md);" />
        </div>
        <span class="badge badge-gold" style="margin-bottom: 0.5rem;">${room.badge}</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--teal-900);">${room.name}</h2>
        <p style="font-weight: 600; color: var(--terracotta-600); margin-bottom: 1rem;">${room.tagline}</p>
        <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem; color: var(--neutral-700);">${room.description}</p>
        
        <div style="background: var(--sand-100); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <h4 style="margin-bottom: 0.75rem; color: var(--teal-900);">Room Specifications:</h4>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem;">
            <li><strong>Capacity:</strong> ${room.capacity} Guests</li>
            <li><strong>Bed Type:</strong> ${room.bed}</li>
            <li><strong>Room Size:</strong> ${room.size}</li>
            <li><strong>View:</strong> ${room.view}</li>
          </ul>
        </div>

        <h4 style="margin-bottom: 0.75rem; color: var(--teal-900);">Included Features:</h4>
        <ul style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem;">
          ${room.highlights.map(h => `
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.92rem; color: var(--neutral-800);">
              <span style="color: var(--teal-600);">✓</span> ${h}
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--sand-200); padding-top: 1.25rem;">
          <div>
            <span style="font-size: 0.8rem; color: var(--neutral-500); display: block;">RATE PER NIGHT</span>
            <strong style="font-size: 1.4rem; color: var(--terracotta-600);">Rs. ${room.pricePerNight.toLocaleString()} LKR</strong>
          </div>
          <button class="btn btn-primary" onclick="window.closeModal('room-detail-modal'); window.selectRoomAndScroll('${room.id}');">
            Reserve This Room
          </button>
        </div>
      `;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    // Review Modal
    window.openReviewModal = function () {
      const modal = document.getElementById('review-modal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    };

    window.closeModal = function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    // Close on click backdrop
    document.querySelectorAll('.custom-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    // Review Form Submit
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.closeModal('review-modal');
        if (window.showToast) {
          window.showToast('Thank you! Your review has been submitted for verification.');
        }
        reviewForm.reset();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
