/**
 * Simlaya Inn - Gallery & Lightbox Controller
 */

(function () {
  let currentImageIndex = 0;
  let activeFilter = 'all';
  let filteredItems = [];

  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = document.querySelectorAll('.gallery-tab-btn');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function initGallery() {
    if (!window.SIMLAYA_DATA || !window.SIMLAYA_DATA.gallery) return;

    renderGallery('all');
    bindEvents();
  }

  function renderGallery(category) {
    if (!galleryGrid) return;
    activeFilter = category;
    
    filteredItems = category === 'all'
      ? SIMLAYA_DATA.gallery
      : SIMLAYA_DATA.gallery.filter(item => item.category === category);

    galleryGrid.innerHTML = filteredItems.map((item, index) => `
      <div class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-overlay-tag">${item.tag}</span>
          <h4 class="gallery-overlay-title">${item.title}</h4>
        </div>
        <div class="gallery-zoom-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
    `).join('');

    // Attach click listeners to gallery items
    const renderedItems = galleryGrid.querySelectorAll('.gallery-item');
    renderedItems.forEach((el, idx) => {
      el.addEventListener('click', () => openLightbox(idx));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });
  }

  function openLightbox(index) {
    if (!filteredItems.length) return;
    currentImageIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = filteredItems[currentImageIndex];
    if (!item) return;

    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxCaption.textContent = item.title;
    lightboxCounter.textContent = `${currentImageIndex + 1} of ${filteredItems.length}`;
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  function bindEvents() {
    // Filter button clicks
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';
        renderGallery(filter);
      });
    });

    // Lightbox triggers
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
      });
    }

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
