import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { PageHero } from '../components/PageHero';
import { Icon } from '../components/Icons';

export const Contact = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    room: 'deluxe-garden',
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const roomParam = searchParams.get('room');
    const checkinParam = searchParams.get('checkin');
    const checkoutParam = searchParams.get('checkout');
    const guestsParam = searchParams.get('guests');

    setFormData((prev) => ({
      ...prev,
      room: roomParam || prev.room,
      checkIn: checkinParam || prev.checkIn,
      checkOut: checkoutParam || prev.checkOut,
      guests: guestsParam || prev.guests
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate nights and estimated total
  const selectedRoomObj = propertyData.rooms.find((r) => r.id === formData.room) || propertyData.rooms[0];
  let calculatedNights = 1;
  if (formData.checkIn && formData.checkOut) {
    const d1 = new Date(formData.checkIn);
    const d2 = new Date(formData.checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) calculatedNights = diffDays;
  }
  const estimatedTotal = selectedRoomObj.pricePerNight * calculatedNights;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const text = `*Simlaya Inn Booking Inquiry*
----------------------------
*Room:* ${selectedRoomObj.name}
*Check-in:* ${formData.checkIn || 'Not specified'}
*Check-out:* ${formData.checkOut || 'Not specified'} (${calculatedNights} night${calculatedNights > 1 ? 's' : ''})
*Guests:* ${formData.guests}
*Name:* ${formData.name || 'Traveler'}
*Contact:* ${formData.phone || formData.email || 'WhatsApp'}
*Est. Total:* LKR ${estimatedTotal.toLocaleString()}
*Notes:* ${formData.message || 'None'}`;

    const url = `https://wa.me/94777778853?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      <PageHero
        badge="Direct Booking & Inquiries"
        title="Contact & Reservation Inquiry"
        subtitle="Book directly with our host for guaranteed best rates, flexible check-in assistance, and authentic local recommendations."
        backgroundImage="/assets/images/hero.jpg"
        breadcrumbs={[{ label: 'Contact & Reservations' }]}
      />

      <section className="section contact-main-section">
        <div className="container contact-grid-layout">
          {/* Left Column: Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Icon name="check" size={40} />
                </div>
                <h2>Reservation Inquiry Received!</h2>
                <p>
                  Thank you, <strong>{formData.name}</strong>! We have received your inquiry for <strong>{selectedRoomObj.name}</strong>. Our host will reach out via WhatsApp or email shortly with confirmation and payment details.
                </p>
                <div className="inquiry-summary-recap">
                  <p><strong>Check-in:</strong> {formData.checkIn || 'To be confirmed'}</p>
                  <p><strong>Check-out:</strong> {formData.checkOut || 'To be confirmed'} ({calculatedNights} Night{calculatedNights > 1 ? 's' : ''})</p>
                  <p><strong>Estimated Total:</strong> LKR {estimatedTotal.toLocaleString()}</p>
                </div>
                <div className="success-actions">
                  <button
                    type="button"
                    className="btn btn-whatsapp"
                    onClick={handleWhatsAppBooking}
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>Also Send via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-teal"
                    onClick={() => setSubmitted(false)}
                  >
                    Modify Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="reservation-form">
                <div className="form-header">
                  <span className="section-badge-teal">Direct Booking Request</span>
                  <h2 className="form-title">Reserve Your Stay</h2>
                  <p className="form-subtitle">Fill in the form below or message directly on WhatsApp for immediate response.</p>
                </div>

                {/* Room Selection */}
                <div className="form-group">
                  <label className="form-label" htmlFor="room">Select Room / Suite *</label>
                  <select
                    id="room"
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    {propertyData.rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} — LKR {room.pricePerNight.toLocaleString()} / night
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates & Guests */}
                <div className="form-grid-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="checkIn">Check-in Date *</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="checkOut">Check-out Date *</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="guests">Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults / Family</option>
                      <option value="7">Entire Villa (Up to 7)</option>
                    </select>
                  </div>
                </div>

                {/* Live Price Estimation Box */}
                <div className="live-pricing-estimate-card">
                  <div className="estimate-row">
                    <span>Selected: <strong>{selectedRoomObj.name}</strong></span>
                    <span>LKR {selectedRoomObj.pricePerNight.toLocaleString()} × {calculatedNights} night{calculatedNights > 1 ? 's' : ''}</span>
                  </div>
                  <div className="estimate-total-row">
                    <span className="total-label">Estimated Total (Payable Cash on Arrival):</span>
                    <span className="total-value">LKR {estimatedTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +94 77 123 4567"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Special Requests or Arrival Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Estimated check-in time, airport pickup request, dietary preferences..."
                    className="form-textarea"
                  />
                </div>

                {/* Submit Actions */}
                <div className="form-submit-buttons-row">
                  <button type="submit" className="btn btn-primary flex-1">
                    <span>Submit Booking Inquiry</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-whatsapp"
                    onClick={handleWhatsAppBooking}
                    title="Send pre-filled WhatsApp message"
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Host Info & Location Summary */}
          <div className="contact-sidebar">
            <div className="contact-info-card">
              <span className="section-badge-teal">Host Contact</span>
              <h3 className="sidebar-card-title">Simlaya Inn Concierge</h3>
              
              <ul className="sidebar-contact-list">
                <li className="sidebar-contact-item">
                  <div className="contact-item-icon">
                    <Icon name="map-pin" size={20} />
                  </div>
                  <div>
                    <strong>Villa Address</strong>
                    <p>{propertyData.property.address.street}, {propertyData.property.address.city}, {propertyData.property.address.postalCode}, Sri Lanka</p>
                  </div>
                </li>

                <li className="sidebar-contact-item">
                  <div className="contact-item-icon">
                    <Icon name="phone" size={20} />
                  </div>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <p>
                      <a href={`tel:${propertyData.property.intlPhone}`} className="text-teal font-semibold">
                        {propertyData.property.phone}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="sidebar-contact-item">
                  <div className="contact-item-icon">
                    <Icon name="clock" size={20} />
                  </div>
                  <div>
                    <strong>Check-in & Check-out</strong>
                    <p>Check-in: 3:00 PM – 6:00 PM</p>
                    <p>Check-out: 8:00 AM – 11:00 AM</p>
                  </div>
                </li>

                <li className="sidebar-contact-item">
                  <div className="contact-item-icon">
                    <Icon name="credit-card" size={20} />
                  </div>
                  <div>
                    <strong>Payment Terms</strong>
                    <p>Cash on arrival (LKR preferred / USD / EUR accepted)</p>
                  </div>
                </li>
              </ul>

              <div className="direct-booking-benefits-box">
                <h4>Why Book Directly With Us?</h4>
                <ul>
                  <li><Icon name="check" size={14} className="text-teal" /> Guaranteed Best Price (No OTA markups)</li>
                  <li><Icon name="check" size={14} className="text-teal" /> Flexible 48h Free Cancellation</li>
                  <li><Icon name="check" size={14} className="text-teal" /> Complimentary Ceylon Welcome Tea</li>
                  <li><Icon name="check" size={14} className="text-teal" /> Direct line to property host</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
