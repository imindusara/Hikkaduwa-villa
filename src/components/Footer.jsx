import React from 'react';
import { Link } from 'react-router-dom';
import { propertyData } from '../data/propertyData';
import { Icon } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content-grid">
        {/* Col 1: Brand info */}
        <div className="footer-col brand-col">
          <Link to="/" className="brand-logo footer-logo">
            <div className="logo-icon-wrapper">
              <span className="logo-symbol">✦</span>
            </div>
            <div className="logo-text-group">
              <span className="brand-title">{propertyData.property.name}</span>
              <span className="brand-subtitle">BOUTIQUE VILLA & HOMESTAY</span>
            </div>
          </Link>
          <p className="footer-desc">
            {propertyData.property.tagline}. A serene tropical garden retreat located just 750 meters from Hikkaduwa Beach with personalized Sri Lankan hospitality.
          </p>
          <div className="footer-rating-badge">
            <div className="stars-row">
              <Icon name="star" size={16} className="star-gold" />
              <Icon name="star" size={16} className="star-gold" />
              <Icon name="star" size={16} className="star-gold" />
              <Icon name="star" size={16} className="star-gold" />
              <Icon name="star" size={16} className="star-gold" />
            </div>
            <span className="rating-score">5.0 / 5.0 Google Rating</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Explore Simlaya</h4>
          <ul className="footer-links">
            <li><Link to="/">Home Sanctuary</Link></li>
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/amenities">Villa Amenities</Link></li>
            <li><Link to="/location">Location & Map</Link></li>
            <li><Link to="/things-to-do">Things To Do & Tours</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
          </ul>
        </div>

        {/* Col 3: Guest Info & Policies */}
        <div className="footer-col">
          <h4 className="footer-heading">Guest Resources</h4>
          <ul className="footer-links">
            <li><Link to="/policies">Villa House Rules & Policies</Link></li>
            <li><Link to="/reviews">Verified Guest Reviews</Link></li>
            <li><Link to="/contact">Check Availability & Inquire</Link></li>
            <li>
              <a
                href={`https://wa.me/94777778853?text=${encodeURIComponent("Hello Simlaya Inn! I would like to inquire about room availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp-link"
              >
                <Icon name="whatsapp" size={16} /> Direct WhatsApp Inquiry
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Address */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact & Location</h4>
          <ul className="footer-contact-list">
            <li>
              <Icon name="map-pin" size={18} />
              <span>{propertyData.property.address.street}, {propertyData.property.address.city}, {propertyData.property.address.postalCode}, Sri Lanka</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${propertyData.property.intlPhone}`}>{propertyData.property.phone}</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>Check-in: 3:00 PM – 6:00 PM | Check-out: 8:00 AM – 11:00 AM</span>
            </li>
          </ul>
          <div className="footer-cta-box">
            <span>Direct Booking Perk:</span>
            <small>Best rate guaranteed & complimentary Ceylon welcome tea</small>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© {currentYear} {propertyData.property.name}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/policies">Privacy & Policies</Link>
            <span>•</span>
            <Link to="/location">Directions</Link>
            <span>•</span>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
