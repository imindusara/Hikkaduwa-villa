import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export const RoomDetailModal = ({ room, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!room) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container room-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon name="x" size={22} />
        </button>

        <div className="modal-image-header">
          <img src={room.image} alt={room.name} />
          {room.badge && <span className="modal-badge">{room.badge}</span>}
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <h2 className="modal-title">{room.name}</h2>
              <p className="modal-tagline">{room.tagline}</p>
            </div>
            <div className="modal-price-box">
              <span className="price-currency">LKR</span>
              <span className="price-number">{room.pricePerNight.toLocaleString()}</span>
              <span className="price-period">/ night</span>
            </div>
          </div>

          <div className="modal-specs-bar">
            <div className="spec-item">
              <span className="spec-label">Capacity</span>
              <span className="spec-value">Up to {room.capacity} Guests</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Bed Setup</span>
              <span className="spec-value">{room.bed}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Room Size</span>
              <span className="spec-value">{room.size}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">View</span>
              <span className="spec-value">{room.view}</span>
            </div>
          </div>

          <div className="modal-desc-section">
            <h3>About This Sanctuary</h3>
            <p>{room.description}</p>
          </div>

          <div className="modal-features-section">
            <h3>Room Highlights & Included Amenities</h3>
            <ul className="modal-highlights-grid">
              {room.highlights.map((feat, idx) => (
                <li key={idx} className="highlight-item">
                  <Icon name="check" size={16} className="text-teal" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions-bar">
            <Link
              to={`/contact?room=${room.id}`}
              className="btn btn-primary"
              onClick={onClose}
            >
              Book This Room Now
              <Icon name="arrow-right" size={16} />
            </Link>
            <a
              href={`https://wa.me/94777778853?text=${encodeURIComponent(`Hi Simlaya Inn! I want to check availability for the ${room.name} (LKR ${room.pricePerNight.toLocaleString()}/night).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <Icon name="whatsapp" size={18} />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
