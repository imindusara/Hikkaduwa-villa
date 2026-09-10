/**
 * Simlaya Inn - Booking Inquiry & Live Price Estimator Engine
 */

(function () {
  const roomSelect = document.getElementById('booking-room');
  const checkInInput = document.getElementById('booking-checkin');
  const checkOutInput = document.getElementById('booking-checkout');
  const guestsInput = document.getElementById('booking-guests');
  const nameInput = document.getElementById('booking-name');
  const emailInput = document.getElementById('booking-email');
  const phoneInput = document.getElementById('booking-phone');
  const messageInput = document.getElementById('booking-message');
  const bookingForm = document.getElementById('booking-form');

  // Hero Search Form elements
  const heroCheckin = document.getElementById('hero-checkin');
  const heroCheckout = document.getElementById('hero-checkout');
  const heroGuests = document.getElementById('hero-guests');
  const heroRoom = document.getElementById('hero-room');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  // Live Price Calculation UI elements
  const calcRate = document.getElementById('calc-rate');
  const calcNights = document.getElementById('calc-nights');
  const calcTotal = document.getElementById('calc-total');

  // WhatsApp Button
  const btnWhatsAppBooking = document.getElementById('btn-whatsapp-booking');

  function initBookingEngine() {
    setupDefaultDates();
    populateRoomOptions();
    calculateEstimatedPrice();
    bindEvents();
  }

  function setupDefaultDates() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(today.getDate() + 3);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const minDateStr = formatDate(today);
    const checkinStr = formatDate(tomorrow);
    const checkoutStr = formatDate(dayAfter);

    if (checkInInput) {
      checkInInput.min = minDateStr;
      checkInInput.value = checkinStr;
    }
    if (checkOutInput) {
      checkOutInput.min = checkinStr;
      checkOutInput.value = checkoutStr;
    }

    if (heroCheckin) {
      heroCheckin.min = minDateStr;
      heroCheckin.value = checkinStr;
    }
    if (heroCheckout) {
      heroCheckout.min = checkinStr;
      heroCheckout.value = checkoutStr;
    }
  }

  function populateRoomOptions() {
    if (!window.SIMLAYA_DATA || !window.SIMLAYA_DATA.rooms) return;

    const optionsHtml = SIMLAYA_DATA.rooms.map(room => `
      <option value="${room.id}" data-price="${room.pricePerNight}">
        ${room.name} — Rs. ${room.pricePerNight.toLocaleString()} / night
      </option>
    `).join('');

    if (roomSelect) {
      roomSelect.innerHTML = optionsHtml;
      // Preselect room from URL query if available
      const urlParams = new URLSearchParams(window.location.search);
      const preselectedRoom = urlParams.get('room');
      if (preselectedRoom && SIMLAYA_DATA.rooms.some(r => r.id === preselectedRoom)) {
        roomSelect.value = preselectedRoom;
      }
    }
    if (heroRoom) {
      heroRoom.innerHTML = `<option value="all">Any Room Type</option>` + optionsHtml;
    }
  }

  function calculateEstimatedPrice() {
    if (!checkInInput || !checkOutInput || !roomSelect) return;

    const checkInDate = new Date(checkInInput.value);
    const checkOutDate = new Date(checkOutInput.value);

    // Calculate nights
    let nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (isNaN(nights) || nights < 1) nights = 1;

    const selectedOption = roomSelect.options[roomSelect.selectedIndex];
    const pricePerNight = selectedOption ? parseInt(selectedOption.getAttribute('data-price') || '14500', 10) : 14500;
    const totalPrice = nights * pricePerNight;

    if (calcRate) calcRate.textContent = `Rs. ${pricePerNight.toLocaleString()} / night`;
    if (calcNights) calcNights.textContent = `${nights} ${nights === 1 ? 'night' : 'nights'}`;
    if (calcTotal) calcTotal.textContent = `Rs. ${totalPrice.toLocaleString()} LKR`;

    return { nights, pricePerNight, totalPrice };
  }

  function handleHeroSearch(e) {
    if (e) e.preventDefault();

    if (checkInInput && heroCheckin) checkInInput.value = heroCheckin.value;
    if (checkOutInput && heroCheckout) checkOutInput.value = heroCheckout.value;
    if (guestsInput && heroGuests) guestsInput.value = heroGuests.value;

    if (heroRoom && heroRoom.value !== 'all' && roomSelect) {
      roomSelect.value = heroRoom.value;
    }

    calculateEstimatedPrice();

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `contact.html?checkin=${heroCheckin ? heroCheckin.value : ''}&checkout=${heroCheckout ? heroCheckout.value : ''}&room=${heroRoom ? heroRoom.value : 'all'}`;
    }
  }

  function selectRoomAndScroll(roomId) {
    if (roomSelect) {
      roomSelect.value = roomId;
      calculateEstimatedPrice();
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Selected room updated in booking form.`);
    } else {
      window.location.href = `contact.html?room=${roomId}#booking-form`;
    }
  }

  function sendWhatsAppBooking() {
    const calculation = calculateEstimatedPrice();
    const guestName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Guest';
    const guestPhone = phoneInput ? phoneInput.value.trim() : 'Not specified';
    const guestEmail = emailInput ? emailInput.value.trim() : 'Not specified';
    const checkIn = checkInInput ? checkInInput.value : '';
    const checkOut = checkOutInput ? checkOutInput.value : '';
    const guestsCount = guestsInput ? guestsInput.value : '2';
    const selectedRoomText = roomSelect && roomSelect.options[roomSelect.selectedIndex] ? roomSelect.options[roomSelect.selectedIndex].text.split('—')[0].trim() : 'Deluxe Room';
    const message = messageInput ? messageInput.value.trim() : 'None';

    const text = `🌴 *New Booking Inquiry - Simlaya Inn* 🌴\n\n` +
      `👤 *Guest Name:* ${guestName}\n` +
      `📞 *Phone/WhatsApp:* ${guestPhone}\n` +
      `✉️ *Email:* ${guestEmail}\n\n` +
      `🛏️ *Room:* ${selectedRoomText}\n` +
      `📅 *Check-in:* ${checkIn}\n` +
      `📅 *Check-out:* ${checkOut} (${calculation.nights} nights)\n` +
      `👥 *Guests:* ${guestsCount} Guests\n` +
      `💰 *Estimated Total:* Rs. ${calculation.totalPrice.toLocaleString()} LKR\n\n` +
      `📝 *Special Requests:* ${message}\n\n` +
      `Hello, I would like to check availability and confirm this reservation at Simlaya Inn.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/94777778853?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    showToast('Opening WhatsApp with your booking details...');
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!nameInput.value.trim() || !phoneInput.value.trim()) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    sendWhatsAppBooking();
  }

  function bindEvents() {
    if (checkInInput) {
      checkInInput.addEventListener('change', () => {
        if (checkOutInput && checkOutInput.value <= checkInInput.value) {
          const nextDay = new Date(checkInInput.value);
          nextDay.setDate(nextDay.getDate() + 1);
          checkOutInput.value = nextDay.toISOString().split('T')[0];
        }
        calculateEstimatedPrice();
      });
    }

    if (checkOutInput) {
      checkOutInput.addEventListener('change', calculateEstimatedPrice);
    }

    if (roomSelect) {
      roomSelect.addEventListener('change', calculateEstimatedPrice);
    }

    if (heroSearchBtn) {
      heroSearchBtn.addEventListener('click', handleHeroSearch);
    }

    if (btnWhatsAppBooking) {
      btnWhatsAppBooking.addEventListener('click', sendWhatsAppBooking);
    }

    if (bookingForm) {
      bookingForm.addEventListener('submit', handleFormSubmit);
    }

    // Expose selectRoomAndScroll globally for room card buttons
    window.selectRoomAndScroll = selectRoomAndScroll;
  }

  // Toast helper
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  window.showToast = showToast;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingEngine);
  } else {
    initBookingEngine();
  }
})();
